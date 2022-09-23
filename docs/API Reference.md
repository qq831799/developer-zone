
![allxon_infrasturcture](_img/allxon_infrastructure.svg)

## hewe: 
\{Math.PI * 2\}

## Terminologies
- **Allxon Cloud**: The backend server(s) of Allxon service, both Allxon Portal and Allxon Agents are connected to Allxon Cloud.
- **Allxon Portal**: The frontend server(s) of Allxon service.
- **Allxon Agent**: The agent application of Allxon service.
- **Plugin**: A software application developed by developers to extend the functionalities of Allxon service.  Plugin sends collected data from modules to Allxon Cloud via Allxon Agents.  Also plugin sends commands to modules from Allxon Portal via Allxon Agents.
- **Module**: A hardware component or a software application developed by its vendors.  Plugin collects data or send commands to a module via the methods provided by its vendor.
- **MQTT Broker**: Each Allxon Agent will connect to a MQTT broker hosted by Allxon Cloud.  All the data exchange between Allxon Agents and Allxon Cloud will go through this channel.
- **WebSocket Server**: Each plugin will connect to a WebSocket server hosted within the Allxon Agent.  Plugin sends and receives data to/from Allxon Cloud with Plugin APIs through this channel.
- **Octo API**: The Application Programming Interface used to communicate between Allxon Agent and Plugin.
- **Allxon Octo SDK**: The Software Development Kit provided by Allxon to help developers to build up and verify Plugin APIs.
- **App GUID**: A unique identifier assigned by Allxon to each plugin in UUIDv4 format.
- **Access Key**: A secret key assigned by Allxon to each plugin for message signing.

## Octo API
Octo API adopts [JSON-RPC 2.0](https://www.jsonrpc.org/specification) Specification over WebSocket. Connect Allxon Agent WebSocket server with URL `"wss://localhost:55688"`. 

:::caution
Each API maximum payload size is 128 KB.
:::

:::danger
Not support _JSON-RPC batch_.
:::


### How to Read
- It's a _JSON-RPC Notification Request_ if API name start with `notify...`. 
- The bracket along with _JSON Key_ repesent following _JSON Type_:
    - `Object`, `Array`,  `String`, `Number`, `Bool`, `Null`
- If there is no bracket along with JSON Key, Means JSON Type is `String`.

### `v2/notifyPluginUpdate`
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `path` | `string` | `'docs'` | Path to the docs content directory on the file system, relative to site directory. |
| `editUrl` | <code>string \| <a href="#EditUrlFunction">EditUrlFunction</a></code> | `undefined` | Base URL to edit your site. The final URL is computed by `editUrl + relativeDocPath`. Using a function allows more nuanced control for each file. Omitting this variable entirely will disable edit links. |
| `editLocalizedFiles` | `boolean` | `false` | The edit URL will target the localized file, instead of the original unlocalized file. Ignored when `editUrl` is a function. |
```json
{
}
```

<details>
  <summary><code>v2/notifyPluginCommand</code></summary>

**Send Direction**: Plugin → Allxon Agent
Remote command request JSON format. The maximum total data size is up to 16KB.
**serialNumber**: The serial number of the device behind a gateway.  Only required when sending commands to devices behind a gateway.

**appGUID** <span style={{color: 'red'}}>* required</span>: The GUID of the plugin.

**epoch** <span style={{color: 'red'}}>* required</span>: The current epoch time in seconds.

**commandId** * required: The assistId in MQTT message.
**commandSoure** * required: "remote".
**moduleName** * required: The name of the module, regex: ^[a-z][a-z0-9_-]*$.
**commands** (`Array`) * required: A set of commands
**name** * required: The name of the command.
**params** (`Array`): A set of name and value pairs for the command. The maximum total command size is up to 1024 Bytes. Don't set this item when this command doesn't have any parameters.

#### Sample 

```json

```
</details>

<details>
  <summary><code>v2/notifyPluginCommandAck</code></summary>

```json
{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginCommandAck",
   "params": {
      "serialNumber": "<SN> #optional",
      "appGUID": "<GUID> #required",
      "epoch": "1571361948",
      "commandId": "<assistId> #required",
      "commandSource": "remote",
      "moduleName": "<moduleName> #required",
      "commandState": "ACCEPTED|ACKED",
      "commandAcks": [
         {
            "name": "command1",
            "result": { ... }
         }
      ]
   }
}
```
</details>

<details>
  <summary><code>v2/notifyPluginState</code></summary>

```json

{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginState",
   "params": {
      "appGUID": "<GUID> #required",
      "moduleName": "<moduleName>",
      "epoch": "1571361948",
      "states": [
         {
            "name": "stringState",
            "value": "<string>"
         },
         {
            "name": "tableState",
            "value": [
               {
                  "header1": "<string>",
                  "header2": "<string>"
               },
               {
                  "header1": "<string>",
                  "header2": "<string>"
               }
            ]
         },
         {
             "name": "linkState",
             "value":
             {
                 "url": "<string>",
                 "alias": "<string>"
             }
         }
      ]
   }
}
```
</details>

<details>
  <summary><code>v2/notifyPluginMetric</code></summary>

```json
{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginMetric",
   "params": {
      "appGUID": "<GUID> #required",
      "moduleName": "<moduleName>",
      "epoch": "1571361948",
      "metrics": [
         {
            "name": "metric1",
            "value": "<number>"
         }
      ]
   }
}
```
</details>

<details>
  <summary><code>v2/notifyPluginEvent</code></summary>

```json
{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginEvent",
   "params": {
      "appGUID": "<GUID> #required",
      "moduleName": "<moduleName>",
      "epoch": "1571361948",
      "events": [
         {
            "name": "event1",
            "value": "<string>"
         }
      ]
   }
}
```
</details>

<details>
  <summary><code>v2/notifyPluginConfigUpdate</code></summary>

```json
{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginConfigUpdate",
   "params": {
      "appGUID": "<GUID> #required",
      "epoch": "1571361948",
      "version": "<string> #required",
      "modules": [
         {
            "moduleName": "<string> #required",
            "epoch": "1234567890",
              "configs": [
               {
                  "name": "config1",
                  "params": [
                     {
                        "name": "stringParam",
                        "value": "foo"
                     },
                     {
                        "name": "datetimeParam",
                        "value": "12:23"
                     },
                     {
                        "name": "switchParam",
                        "value": "On"
                     },
                     {
                        "name": "checkboxParam",
                        "value": "On"
                     },
                     {
                        "name": "listParam",
                        "value": "option1"
                     },
                     {
                        "name": "temperatureParam",
                        "value": "123"
                     }
                  ]
               }
            ]
         }
      ]
   }
}
```
</details>

<details>
  <summary><code>v2/notifyPluginAlert</code></summary>

```json
{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginAlert",
   "params": {
      "appGUID": "<GUID> #required",
      "moduleName": "<moduleName> #required",
      "epoch": "1571361948",
      "alarms": [
         {
            "name": "alarm1",
            "action": "trigger|resolve",
            "time": "<epoch>",
            "message": "<string>"
         }
      ]
   }
}
```
</details>

<details>
  <summary><code>v2/notifyPluginAlarmUpdate</code></summary>

```json
{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginAlarmUpdate",
   "params": {
      "appGUID": "<GUID> #required",
      "epoch": "1571361948",
      "version": "<string> #required",
      "modules": [
         {
            "moduleName": "<string> #required",
            "epoch": "1234567890",
            "alarms": [
               {
                  "name": "<string> #required",
                  "enabled": true|false,
                  "params": [
                     {
                        "name": "minValue",
                        "value": "30"
                     },
                     {
                        "name": "maxValue",
                        "value": "70"
                     }
                  ]
               }
            ]
         }
      ]
   }
}
```
</details>