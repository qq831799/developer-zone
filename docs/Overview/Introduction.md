# Introduction

![allxon_infrasturcture](../_img/allxon_infrastructure.svg)

This picture show the Allxon infrastructure a overview. Each Plugin communicate with Allxon Agent through [JSON-RPC](https://www.jsonrpc.org/specification) Websocket, and Allxon Agent like a bridge to bring JSON between Allxon cloud and Plugin.

## Secure Data

Octo SDK use Plugin Credential help you to verify JSON from Allxon Agent, and help you to sign JSON to Allxon Agent. 

![security](_img/Security.drawio.svg)

```cpp
#include <string>
#include "json_validator.h"

int main(int argc, char **argv)
{
    // notifyPluginUpdate json template
    std::string json_content = "{\"jsonrpc\": \"2.0\", \"method\": \"v2/notifyPluginUpdate\"...}"; 
    std::string PLUGIN_NAME = "my_plugin_name";
    std::string PLUGIN_APP_GUID = "my_plugin_app_guid";
    std::string PLUGIN_ACCESS_KEY = "my_plugin_access_key";
    std::string PLUGIN_VERSION = "my_plugin_version";
    
    auto json_validator = JsonValidator(PLUGIN_NAME, PLUGIN_APP_GUID,
                                        PLUGIN_ACCESS_KEY, PLUGIN_VERSION,
                                        json_content); 
    
    std::string other_plugin_api_json_content;
    if (json_validator.Sign(other_plugin_api_json_content))
    {
        // if sign success, you can send it through websocket
        // e.g. 
        // enpoint.send(other_plugin_api_json_content);
    }

    if (json_validator.Verify(other_plugin_api_json_content))
    {
        // if verify success, means json content is safe, you can read it
    }
    return 0;
}
```

## How to get Plugin online

Let's take a look at [Plugin hello](https://github.com/allxon/plugIN-hello) source code, first connect to Allxon Agent Websocket server `"wss://127.0.0.1:55688"`.

```cpp {19} title="src/main.cpp"
// ...
int main(int argc, char **argv)
{
    if (argc == 1)
    {
        std::cout << "Please provide a plugin install directory." << std::endl;
        return 1;
    }
    else if (argc > 2)
    {
        std::cout << "Wrong arguments. Usage: device_plugin [plugin install directory]" << std::endl;
        return 1;
    }
    Util::plugin_install_dir = std::string(argv[1]);
    auto np_update_json = Util::getJsonFromFile(Util::plugin_install_dir + "/plugin_update_template.json");
    auto json_validator = std::make_shared<JsonValidator>(PLUGIN_NAME, PLUGIN_APP_GUID,
                                                          PLUGIN_ACCESS_KEY, PLUGIN_VERSION,
                                                          np_update_json);
    WebSocketClient web_client(json_validator, "wss://127.0.0.1:55688");
    web_client.RunSendingLoop();
    return 0;
}
```

:::info
Octo SDK only provide JSON encrypt and decrypt functionality. You can use whatever websocket library you like.
:::

Next, Send a `v2/notifyPluginUpdate` Octo JSON-RPC API to initailize every Cards on Allxon Portal.

Check line 5, we load a `v2/notifyPluginUpdate` API payload from `plugin_update_template.json`, which locate at `resource_dir_linux/plugin_update_template.json`. Next sign the JSON (line 18) and send to Allxon Agent (line 23).


```cpp {5,18,23} title="src/websocket_client.cpp" showLineNumbers
// ...
void WebSocketClient::SendNotifyPluginUpdate()
{
    std::cout << "SendNotifyPluginUpdate" << std::endl;
    std::string notify_plugin_update = Util::getJsonFromFile(Util::plugin_install_dir + "/plugin_update_template.json");
    auto np_update_cjson = cJSON_Parse(notify_plugin_update.c_str());
    auto params_cjson = cJSON_GetObjectItemCaseSensitive(np_update_cjson, "params");
    auto modules_cjson = cJSON_GetObjectItemCaseSensitive(params_cjson, "modules");
    auto module_cjson = cJSON_GetArrayItem(modules_cjson, 0);
    auto properties_cjson = cJSON_GetObjectItemCaseSensitive(module_cjson, "properties");
    auto property_cjson = cJSON_GetArrayItem(properties_cjson, 0);
    auto property_value_cjson = cJSON_GetObjectItemCaseSensitive(property_cjson, "value");
    cJSON_SetValuestring(property_value_cjson, Util::plugin_install_dir.c_str());
    auto output_char = cJSON_Print(np_update_cjson);
    std::string output_string(output_char);
    delete output_char;
    cJSON_Delete(np_update_cjson);
    if (!m_json_validator->Sign(output_string))
    {
        std::cout << m_json_validator->error_message().c_str() << std::endl;
        return;
    }
    m_endpoint.send(m_hdl, output_string.c_str(), websocketpp::frame::opcode::TEXT);
    std::cout << "Send:" << output_string << std::endl;
}

// ...
```

Then, you should find your Plugin page on Allxon portal. You can see there are Commands, States, Properties, Alerts Cards.

![hello_screenshot](../_img/screenshot_hello_plugin_finished.png)

## Take a Look in `v2/notifyPluginUpdate` API

`"method"` repesent API's type, `"params"` -> `"sdk"` repesent Octo SDK version.
Each JSON object under `"params"` -> `"modules"` repesent different kinds of Card on Allxon Portal.

```json {16-24} title="resource_dir_linux/plugin_update_template.json" showLineNumbers
{
  "jsonrpc": "2.0",
  "method": "v2/notifyPluginUpdate",
  "params": {
    "sdk": "${OCTO_SDK_VERSION}",
    "appGUID": "${PLUGIN_APP_GUID}",
    "appName": "${PLUGIN_NAME}",
    "epoch": "",
    "displayName": "plugIN Hello",
    "type": "ib",
    "version": "${PLUGIN_VERSION}",
    "modules": [
      {
        "moduleName": "${PLUGIN_NAME}",
        "displayName": "plugIN Hello",
        "properties": [
          {
            "name": "current_dir",
            "displayName": "Current Working Directory",
            "description": "Print the current working directory",
            "displayType": "string",
            "value": ""
          }
        ],
        "states": [
          {
            "name": "receive_hello",
            "displayName": "Last Received Message",
            "description": "Last received message from a stranger",
            "displayType": "string"
          }
        ],
        "commands": [
          {
            "name": "say_hello",
            "type": "asynchronous",
            "displayCategory": "Action",
            "displayName": "Say Hello",
            "description": "Say hello to a person",
            "params": [
              {
                "name": "person",
                "displayName": "Person Name",
                "description": "Person who you wanna to say hello",
                "displayType": "string",
                "required": true,
                "defaultValue": "Buzz"
              }
            ]
          }
        ],
        "metrics": [],
        "events": [],
        "alarms": [
          {
            "name": "hello_alarm",
            "displayCategory": "Message",
            "displayName": "Hello alarm",
            "description": "Trigger when someone say hello",
            "params": []
          }
        ],
        "configs": []
      }
    ]
  }
}
```

For example, the highlight part of above JSON repesent Property Card on Allxon Portal:

![property](_img/screenshot_property.png)

:::tip
You can use builtin macro syntax `${}` to get project level informations, current avaliable syntax: `PLUGIN_NAME`, `PLUGIN_APP_GUID`, `PLUGIN_VERSION`, `OCTO_SDK_VERSION`.
:::

## Octo JSON RPC API

After get online to Allxon Portal, means your edge device is ready on cloud. Let's briefly introduce every API functionality to power your device on. 

### `v2/notifyPluginUpdate`

| Direction | Description |
| --- | --- |
| Plugin → Allxon Agent | Plugin initialize every Card on Allxon Portal, must call `v2/notifyPluginUpdate` API after the WebSocket connection is established. |

### `v2/notifyPluginCommand`

| Direction | Description |
| --- | --- |
| Allxon Agent → Plugin | Plugin will be notified once user trigger Command Card on Allxon Portal. |

### `v2/notifyPluginCommandAck`

| Direction | Description |
| --- | --- |
| Plugin → Allxon Agent | After receive `v2/notifyPluginCommand`, Plugin acknowledge the Command back to Allxon portal. | 
	
### `v2/notifyPluginState`

| Direction | Description |
| --- | --- |
| Plugin → Allxon Agent | Plugin updates data to the Allxon Portal State Card. Tyically is designed for realtime data and repesent current device states information, these data won't be reserve on Allxon Portal, only keeps latest data. Ex: network condition, power status.. | 
	
### `v2/notifyPluginEvent`

| Direction | Description |
| --- | --- |
| Plugin → Allxon Agent | Plugin updates data to the Allxon Portal Event Card. Tyically is designed for non realtime data and repesent device events information, would be reserve on Allxon Portal. Ex: IO trigger event, user login event.. | 
	
### `v2/notifyPluginMetric`

| Direction | Description |
| --- | --- |
| Plugin → Allxon Agent | Plugin updates data to the Allxon Portal Metric Card. Tyically is designed for non realtime data and prefered repesent to chart style, would be reserve on Allxon Portal. Ex: device temperature.. | 
	
### `v2/notifyPluginAlert`

| Direction | Description |
| --- | --- |
| Plugin → Allxon Agent | Plugin trigger Alert to the Allxon Portal. Typically is designed for emergency data ,Allxon Portal will notify user through email, webhook... depend on your setting on Allxon Portal. | 

### `v2/notifyPluginAlarmUpdate`

| Direction | Description |
| --- | --- |
| Allxon Agent → Plugin | Plugin will be notified once the Plugin is online if there are alert settings on Allxon Portal. When you setup your alert setting on Allxon Portal, Plugin will get `v2/notifyPluginAlarmUpdate` to synchronize alert related setting. | 

### `v2/notifyPluginConfigUpdate`

| Direction | Description |
| --- | --- |
| Allxon Agent → Plugin | Plugin will be notified once the Plugin is online if there are config settings on Allxon Portal. Typically is designed for configuring your device from Allxon Portal. |

:::tip
For more details [API documentation](https://wayneliu0512.github.io/octo-developer-zone_docusaurus/API%20Reference)
:::


## Typical API Sequence Flow

The image below shows what typical API sequence flow. 
1. Connect to Allxon Agent by Websocket.
2. Send `v2/notifyPluginUpdate` to initialize Allxon Portal Cards.
3. You probably will get `v2/notifyPluginAlarmUpdate` if you've Alert setting on Allxon Portal.
4. Just like previous step, You probably will get `v2/notifyPluginConfigUpdate` if you've Config setting on Allxon Portal.

![sequence-diagram](_img/sequence-diagram.png)