
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
| `appGUID` | `String` | ![check](_img/test/checkbox-on@3x.png) |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `appName` | `String` | ![check](_img/checkbox-on@3x.png) |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `epoch` | `String` | ![check](_img/checkbox-on@3x.png) |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `displayName` | `String` |   |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `sdk` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `version` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `startCommand` | `String` |   | xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `stopCommand` | `String` |   |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| [`modules`](#paramsmodules) | `Array` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx  |

#### `$.params.modules[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `moduleName` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`properties`](#paramsmodulesproperties) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`states`](#paramsmodulesstates) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`metrics`](#paramsmodulesmetrics) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`events`](#paramsmodulesevents) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`commands`](#paramsmodulescommands) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`alarms`](#paramsmodulesalarms) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`config`](#paramsmodulesconfig) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

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
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `value` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

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
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

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
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
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
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

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
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `type` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`params`](#paramsmodulescommandsparams) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.modules[*].commands[*].params[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `required` | `Bool` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
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
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`params`](#paramsmodulesalarmsparams) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.modules[*].alarms[*].params[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `required` | `Bool` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
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
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayCategory` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`params`](#paramsmodulesconfigparams) | `Array` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.modules[*].config[*].params[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayName` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `description` | `String` |   | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `displayType` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `required` | `Bool` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
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
| `appGUID` | `String` | ![check](_img/checkbox-on@3x.png) |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `epoch` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx  |
| `commandId` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `commandSource` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `moduleName` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`commands`](#paramscommands) | `Array` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.commands[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ![check](_img/checkbox-on@3x.png) |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| [`params`](#paramscommandsparams) | `Array` |   |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|

#### `$.params.commands[*].params[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ![check](_img/checkbox-on@3x.png) |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
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
| `appGUID` | `String` | ![check](_img/checkbox-on@3x.png) |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `epoch` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx  |
| `commandId` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `commandSource` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `moduleName` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| `commandState` | `String` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |
| [`commandAcks`](#paramscommandacks) | `Array` | ![check](_img/checkbox-on@3x.png) | xxxx xxxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx |

#### `$.params.commandAcks[*]`

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | ![check](_img/checkbox-on@3x.png) |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|
| `result` | `Object` |   |  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx|

## `v2/notifyPluginState`

```json
```


<details>
  <summary>Example</summary>

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginUpdate",
    "params": {}
}
```

</details>