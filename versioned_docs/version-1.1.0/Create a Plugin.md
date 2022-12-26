import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

For simple, we don't make a Plugin from scratch. Let's modify and build a Plugin from [Hello Plugin](https://github.com/allxon/plugIN-hello).

```
git clone --recurse-submodules https://github.com/allxon/plugIN-hello.git
```

## Apply a Plugin Credential

First, [Contact us](https://www.allxon.com/) to apply a `plugin_credential.json` file. With the key, Allxon portal can recognize your Plugin, and make sure your data is signed and safed. 

Here is a example of `plugin_credential.json`:

```json
{
    "app_guid":"a5nf65b-1cf7-46e6-af56-d41eac4nbcC1",
    "access_key":"91IXqwIQkWItqmRJfNyZUTOwAc43smQP",
    "platform":"linux",
    "architecture":"x86_64"
}
```

`app_guid` repesent your Plugin's ID, `access_key` is your key to sign your data.

:::caution
Please keep your `access_key` safety, don't reveal on public.
:::

## How to get Plugin online

Let's take a look at source code, first connect to Allxon Agent Websocket server `"wss://127.0.0.1:55688"`.

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

## Build the Plugin

Put your Plugin Credential under your Plugin working directory, and make user filename is `plugin_credential.json`.

<Tabs>
<TabItem value="bash" label="Linux">

```bash
# Configuration Stage
cmake -S . -B build -DCMAKE_BUILD_TYPE=<Debug|Release> -DPLUGIN_KEY=plugin_credential.json

# Build Stage
cmake --build build

# Run after build
# You can run plugin-hello directly under the build/ folder, and pass resource_dir_linux through argument
build/plugin-hello resource_dir_linux
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
@REM Configuration Stage
cmake -G "Visual Studio 16 2019" -A Win32 -S . -B "build" -DPLUGIN_KEY=plugin_credential.json

@REM Build Stage
cmake --build build --config <Debug|Release>

@REM Run after build
@REM You can run plugin-hello directly under the build\ folder, and pass resource_dir_windows through argument
build\<Debug|Release>\plugin-hello.exe resource_dir_windows
```
</TabItem>
</Tabs>

## Run the Plugin

<Tabs>
<TabItem value="bash" label="Linux">

You can run plugin-hello directly under the `build/folder`, and pass resource_dir_linux through argument

```bash
build/plugin-hello resource_dir_linux
```

</TabItem>
<TabItem value="cmd" label="Windows">

You can run plugin-hello directly under the `build\folder`, and pass resource_dir_windows through argument

```batch
build\<Debug|Release>\plugin-hello.exe resource_dir_windows
```
</TabItem>
</Tabs>

Then, you should find your Plugin page on Allxon portal. You can see there are Commands, States, Properties, Alerts Cards.

![hello_screenshot](_img/screenshot_hello_plugin_finished.png)
