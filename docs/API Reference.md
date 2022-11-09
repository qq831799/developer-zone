
![allxon_infrasturcture](_img/allxon_infrastructure.svg)

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

## `v2/notifyPluginUpdate`

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginUpdate",
    "params": {
        "appGUID": "...",
        "epoch": "...",
        "appName": "...",
        "displayName": "...",
        "type": "...",
        "sdk": "...",
        "version": "...",
        "startCommand": "...",
        "stopCommand": "...",
        "modules": [
            {
                "moduleName": "...",
                "displayName": "...",
                "description": "...",
                "properties": [ ... ],
                "states": [ ... ],
                "metrics": [ ... ],
                "events": [ ... ],
                "commands": [ ... ],
                "alarms": [ ... ],
                "configs": [ ... ]
            }
        ]
    }
}
```

#### `$.params`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `appGUID` | `String` | ✅ | The GUID of the plugin. |
| `appName` | `String` | ✅ | The "programming" name of the plugin. The name must match this regular expression[^1]. The name must be unique for all plugins. |
| `epoch` | `String` | ✅ | The current epoch time in seconds. |
| `displayName` | `String` |   | A display name for human read. |
| `sdk` | `String` | ✅ | The version of the plugIN SDK, follow [semantic version](https://semver.org/) rule. |
| `version` | `String` | ✅ | The version of the plugin.  The version uses a sequence of three digits (Major.Minor.Patch), i.e. must match this regular expression[^2]. |
| `startCommand` | `String` |   | Command to execute when plugin start. |
| `stopCommand` | `String` |   | Command to execute when plugin stop. |
| [`modules`](#paramsmodules) | `Array` | ✅ | A set of hardware or software modules controlled by this plugin. |


#### `$.params.modules[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `moduleName` | `String` | ✅ | The "programming" name of the module.  The name must match this regular expression[^1]. The name must be unique within the plugin.  The max length is 64. |
| `displayName` | `String` |   | The "friendly human readable" name of the module. |
| `description` | `String` |   | The description of the module. |
| [`properties`](#paramsmodulesproperties) | `Array` |   | Provides module **static** information, such as firmware version, hardware configuration, ..., etc |
| [`states`](#paramsmodulesstates) | `Array` |   | Provides module **dynamic** states, such as power state, ..., etc. |
| [`metrics`](#paramsmodulesmetrics) | `Array` |   | Provides module metrics, such as temperature, voltage, ..., etc. |
| [`events`](#paramsmodulesevents) | `Array` |   | Provides module events, such as intrusion detection, ..., etc. |
| [`commands`](#paramsmodulescommands) | `Array` |   | Provides module function calls, such as power cycling, set hardware configuration, ..., etc. |
| [`alarms`](#paramsmodulesalarms) | `Array` |   | Provides module alarms, such as CPU, thermo, ..., etc. |
| [`config`](#paramsmodulesconfig) | `Array` |   | Provides module configurations, such as scheduling, ..., etc. |

### `$.params.modules[*].properties[*]`

```json
{
    "name": "...",
    "displayName": "...",
    "displayCategory": "...",
    "description": "...",
    "displayType": "...",
    "value": "..."
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | The "programming" name of the property.  The name must match this regular expression[^1]. The name must be unique within the module.  The max length is 32. |
| `displayName` | `String` |   | The "friendly human readable" name of the property. |
| `displayCategory` | `String` |   | The "programming" name of the category. The name must be unique within the module. |
| `description` | `String` |   | The description of the property. |
| `displayType` | `String` | ✅ | `"string"` \| `"table"` \| `"link"` \| `"displayOn"` \| `"valueFromProperty"`<br/><br/> [More detail...](#value-corresponding-to-displaytype) |
| `value` | `Object` \| `Array` \| `String` | ✅ | `value` Type depend on which `displayType`. |

### `$.params.modules[*].states[*]`

```json
{
    "name": "...",
    "displayName": "...",
    "displayCategory": "...",
    "description": "...",
    "displayType": "...",
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | The "programming" name of the state.  The name must match this regular expression[^1]. The name must be unique within the module.  The max length is 32. |
| `displayName` | `String` |   | The "friendly human readable" name of the state. |
| `displayCategory` | `String` |   | The "programming" name of the category. The name must be unique within the module. |
| `description` | `String` |   | The description of the state. |
| `displayType` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

### `$.params.modules[*].metrics[*]`

```json
{
    "name": "...",
    "displayName": "...",
    "displayCategory": "...",
    "description": "...",
    "displayUnit": "...",
    "displayType": "...",
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | The "programming" name of the metric.  The name must match this regular expression[^1]. The name must be unique within the module.  The max length is 32. |
| `displayName` | `String` |   | The "friendly human readable" name of the metric. |
| `displayCategory` | `String` |   | The "programming" name of the category. The name must be unique within the module. |
| `description` | `String` |   | The description of the metric. |
| `displayUnit` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

### `$.params.modules[*].events[*]`

```json
{
    "name": "...",
    "displayName": "...",
    "displayCategory": "...",
    "description": "...",
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | The "programming" name of the event.  The name must match this regular expression[^1]. The name must be unique within the module.  The max length is 32. |
| `displayName` | `String` |   | The "friendly human readable" name of the event. |
| `displayCategory` | `String` |   | The "programming" name of the category. The name must be unique within the module. |
| `description` | `String` |   | The description of the event. |

### `$.params.modules[*].commands[*]`

```json
{
    "name": "...",
    "displayCategory": "...",
    "displayName": "...",
    "description": "...",
    "type": "...",
    "params": [
        {
            "name": "...",
            "displayName": "...",
            "description": "...",
            "displayType": "...",
            "required": "...",
            "requiredOn": "...",
            "defaultValue": "...",
            "displayMask": "...",
            "valueEncoding": "..."
        }, ...
    ]
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | The "programming" name of the command.  The name must match this regular expression[^1]. The name must be unique within the module.  The max length is 32. |
| `displayCategory` | `String` |   | The "programming" name of the category. The name must be unique within the module. |
| `displayName` | `String` |   | The "friendly human readable" name of the command. |
| `description` | `String` |   | The description of the command. |
| `type` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`params`](#paramsmodulescommandsparams) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.modules[*].commands[*].params[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `required` | `Bool` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `requiredOn` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayValue` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayFormat` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `valueFromProperty` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayMask` | `Bool` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `valueEncoding` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayOnProperty` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

### `$.params.modules[*].alarms[*]`

```json
{
    "name": "...",
    "displayCategory": "...",
    "displayName": "...",
    "description": "...",
    "params": [
        {
            "name": "...",
            "displayName": "...",
            "description": "...",
            "displayType": "...",
            "required": "...",
            "displayValues": "...",
            "defaultValue": "...",
            "displayFormat": "...",
            "valueFromProperty": "...",
            "displayMask": "...",
            "valueEncoding": "..."
        }, ...
    ]
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`params`](#paramsmodulesalarmsparams) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.modules[*].alarms[*].params[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `required` | `Bool` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayValue` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `defaultValue` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayFormat` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `valueFromProperty` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayMask` | `Bool` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `valueEncoding` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

### `$.params.modules[*].config[*]`

```json
{
    "name": "...",
    "displayCategory": "...",
    "displayName": "...",
    "description": "...",
    "params": [
        {
            "name": "...",
            "displayName": "...",
            "description": "...",
            "displayType": "...",
            "required": "...",
            "displayValues": "...",
            "defaultValue": "...",
            "displayFormat": "...",
            "valueFromProperty": "...",
            "displayMask": "...",
            "valueEncoding": "..."
        }, ...
    ]
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`params`](#paramsmodulesconfigparams) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.modules[*].config[*].params[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `required` | `Bool` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayValue` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `defaultValue` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayFormat` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `valueFromProperty` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayMask` | `Bool` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `valueEncoding` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

## `v2/notifyPluginCommand`

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginCommand",
    "params": {
        "serialNumber": "...",
        "appGUID": "...",
        "epoch": "...",
        "commandId": "...",
        "commandSource": "...",
        "moduleName": "...",
        "commands": [ ... ]
    }
}
```

#### `$.params`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `serialNumber` | `String` |   |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `appGUID` | `String` | ✅ |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `epoch` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx  |
| `commandId` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `commandSource` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `moduleName` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`commands`](#paramscommands) | `Array` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.commands[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| [`params`](#paramscommandsparams) | `Array` |   |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|

#### `$.params.commands[*].params[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `value` | `Object` &#124; `String` |   |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|

## `v2/notifyPluginCommandAck`

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginCommandAck",
    "params": {
        "serialNumber": "...",
        "appGUID": "...",
        "epoch": "...",
        "commandId": "...",
        "commandSource": "...",
        "moduleName": "...",
        "commandState": "...",
        "commandAcks": [
            {
                "name": "...",
                "result": { ... }
            }, ...
        ]
    }
}
```

#### `$.params`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `serialNumber` | `String` |   |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `appGUID` | `String` | ✅ |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `epoch` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx  |
| `commandId` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `commandSource` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `moduleName` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `commandState` | `String` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`commandAcks`](#paramscommandacks) | `Array` | ✅ | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.commandAcks[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ✅ |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `result` | `Object` |   |  xxx[^4] xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|

## `v2/notifyPluginState`

```json
{
}
```

## `value` corresponding to `displayType`

### `"string"`
`value` Type must be `String`. Example:

```json
{
    ...
    "displayType": "string",
    "value": "my string"
    ...
}
```

### `"link"`
`value` Type must be `Object` and follow the format below.

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `String` | ✅ | Link url. |
| `alias` | `String` |  | Alias name for this url. |

Example:

```json
{
    ...
    "displayType": "link",
    "value": {
        "url": "https://www.google.com",
        "alias": "Google Site"
    },
    ...
}
```

### `"table"`
`value` Type must be `Array`. Example:

```json
{
    ...
    "displayType": "table",
    "value": [
        {
            "header1": "row1 column1",
            "header2": "row1 column2"
        },
        {
            "header1": "row2 column2",
            "header2": "row2 column2"
        }
    ],
    ...
}
```

### `"displayOn"`
:::caution
Not recommand to use. Hard to maintain when using group level operation.
:::
This function used by `displayOnProperty` of command. command only display when command's `displayOnProperty` value match current property name and value. Example:

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginUpdate",
    "params": {
        ...
        "modules": [
            {
                ...
                "properties": [ 
                    {
                        "name": "property_1",
                        "displayType": "displayOn",
                        "value": "mode1"
                    }
                 ],
                "commands": [ 
                    {
                        ...
                        "name": "command_1",
                        "displayOnProperty": {
                            "property_1": [
                                "mode1"
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
```

### `"valueFromProperty"`
:::caution
Not recommand to use. Hard to maintain when using group level operation.
:::

Provide dynamic data that a parameter of a command needs. It supports `"switch"`, `"checkbox"` and `"list"` displayTypes of command parameter. 

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginUpdate",
    "params": {
        ...
        "modules": [
            {
                "moduleName": "previewModuleName",
                "properties": [
                    {
                        "name": "camera-list",
                        "displayType": "valueFromProperty",
                        "value": {
                            "displayValues": [
                                "camera-1",
                                "camera-2"
                            ],
                            "defaultValue": "camera-1"
                        }
                    }
                ],
                "commands": [
                    {
                        "name": "login-camera",
                        "type": "asynchronous",
                        "displayName": "Login Camera",
                        "params": [
                            {
                                "name": "camera-list-param",
                                "displayName": "Choose Camera",
                                "description": "Choose a camera to login",
                                "displayType": "list",
                                "required": "true",
                                "displayValues": [],
                                "defaultValue": "",
                                "valueFromProperty": "camera-list"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```

[^1]: regular expression: `^[a-zA-Z][a-zA-Z0-9_-]*$`.
[^2]: regular expression: `^[0-9]+[.][0-9]+[.][0-9]+$`. 



<!-- <details>
  <summary>Example</summary>

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginUpdate",
    "params": {}
}
```

</details>
 -->
