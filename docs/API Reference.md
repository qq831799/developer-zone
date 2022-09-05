

<details>
  <summary><code>v2/notifyPluginUpdate</code></summary>

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginUpdate",
    "params": {
        "appGUID": "8102220f-083f-4f11-a433-6ccb2e786fex",
        "epoch": "1571361948",
        "appName": "upterm",
        "displayName": "Upterm",
        "type": "ib",
        "sdk": "2.0.0",
        "version": "1.00.2000",
        "startCommand": "/opt/allxon/plugIN/8102220f-083f-4f11-a433-6ccb2e786fex/startPlugin.sh",
        "stopCommand": "/opt/allxon/plugIN/8102220f-083f-4f11-a433-6ccb2e786fex/stopPlugin.sh",
        "modules": [
            {
                "moduleName": "upterm",
                "displayName": "Upterm",
                "description": "It's a free shared session tool",
                "properties": [
                    {
                        "name": "property_1",
                        "displayCategory": "displayCategory",
                        "displayName": "displayName",
                        "description": "description",
                        "displayType": "string",
                        "value": "string value"
                    },
                    {
                        "name": "<string>",
                        "displayCategory": "<string>",
                        "displayName": "<string>",
                        "description": "<string>",
                        "displayType": "table",
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
                        "name": "<string>",
                        "displayCategory": "<string>",
                        "displayName": "<string>",
                        "description": "<string>",
                        "displayType": "link",
                        "value": {
                            "url": "<string>",
                            "alias": "<string>"
                        }
                    },
                    {
                        "name": "<string>",
                        "displayType": "displayOn",
                        "value": "<string>"
                    },
                    {
                        "name": "<string>",
                        "displayType": "valueFromProperty",
                        "value": {
                            "displayValues": [
                                "optionValue1",
                                "optionValue2"
                            ],
                            "defaultValue": "<optionValue1>"
                        }
                    }
                ],
                "states": [
                    {
                        "name": "<string>",
                        "displayCategory": "<string>",
                        "displayName": "<string>",
                        "description": "<string>",
                        "displayType": "string"
                    },
                    {
                        "name": "<string>",
                        "displayCategory": "<string>",
                        "displayName": "<string>",
                        "description": "<string>",
                        "displayType": "table"
                    },
                    {
                        "name": "<string>",
                        "displayCategory": "<string>",
                        "displayName": "<string>",
                        "description": "<string>",
                        "displayType": "link"
                    }
                ],
                "metrics": [
                    {
                        "name": "<string>",
                        "displayCategory": "<string>",
                        "displayName": "<string>",
                        "description": "<string>",
                        "displayUnit": "<string>",
                        "displayType": "temperature"
                    }
                ],
                "events": [
                    {
                        "name": "<string>",
                        "displayCategory": "<string>",
                        "displayName": "<string>",
                        "description": "<string>"
                    }
                ],
                "commands": [
                    {
                        "name": "<string> #required",
                        "displayCategory": "<string> #optional",
                        "displayName": "<string> #optional",
                        "description": "<string> #optional",
                        "type": "asynchronous",
                        "params": [
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "string",
                                "required": "<Boolean> #required true/false",
                                "requiredOn": "<string> #optional",
                                "defaultValue": "<string>#optional",
                                "displayMask": "<Boolean> #optional true/false",
                                "valueEncoding": "base64 #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "datetime",
                                "required": "<Boolean> #required true/false",
                                "requiredOn": "<string> #optional",
                                "displayFormat": "YYYY-MM-DD|HH:MM|YYYY-MM-DD HH:MM #required",
                                "defaultValue": "<HH:MM>#optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "switch",
                                "required": "<Boolean> #required true/false",
                                "requiredOn": "<string> #optional",
                                "displayValues": [
                                    "offValue",
                                    "onValue"
                                ],
                                "defaultValue": "<onValue>#optional",
                                "valueFromProperty": "<property name> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "checkbox",
                                "required": "<Boolean> #required true/false",
                                "requiredOn": "<string> #optional",
                                "displayValues": [
                                    "uncheckedValue",
                                    "checkedValue"
                                ],
                                "defaultValue": "<checkedValue>#optional",
                                "valueFromProperty": "<property name> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "list",
                                "required": "<Boolean> #required true/false",
                                "requiredOn": "<string> #optional",
                                "displayValues": [
                                    "optionValue1",
                                    "optionValue2"
                                ],
                                "defaultValue": "<optionValue1>#optional",
                                "valueFromProperty": "<property name> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "file",
                                "required": "<Boolean> #required true/false",
                                "requiredOn": "<string> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "blobstore",
                                "required": "<Boolean> #required true/false"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional display name of the TOS or EULA",
                                "description": "<string> #optional the link to show a web page contains the TOS or EULA",
                                "displayType": "tos",
                                "required": "<Boolean> #required true/false"
                            }
                        ],
                        "displayOnProperty": {
                            "propertyName1": [
                                "<string> value1",
                                "<string> value2"
                            ],
                            "propertyName2": [
                                "<string> value1"
                            ]
                        }
                    }
                ],
                "alarms": [
                    {
                        "name": "<string> #required",
                        "displayCategory": "<string> #optional",
                        "displayName": "<string> #optional",
                        "description": "<string> #optional",
                        "params": [
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "string",
                                "required": "<Boolean> #required true/false",
                                "defaultValue": "<string> #optional",
                                "displayMask": "<Boolean> #optional true/false",
                                "valueEncoding": "base64 #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "temperature",
                                "required": "<Boolean> #required true/false",
                                "defaultValue": "<string> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "datetime",
                                "required": "<Boolean> #required true/false",
                                "displayFormat": "YYYY-MM-DD|HH:MM|YYYY-MM-DD HH:MM #required",
                                "defaultValue": "<HH:MM> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "switch",
                                "required": "<Boolean> #required true/false",
                                "displayValues": [
                                    "offValue",
                                    "onValue"
                                ],
                                "defaultValue": "<onValue> #optional",
                                "valueFromProperty": "<property name> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "checkbox",
                                "required": "<Boolean> #required true/false",
                                "displayValues": [
                                    "uncheckedValue",
                                    "checkedValue"
                                ],
                                "defaultValue": "<checkedValue> #optional",
                                "valueFromProperty": "<property name> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "list",
                                "required": "<Boolean> #required true/false",
                                "displayValues": [
                                    "listOption1",
                                    "listOption2"
                                ],
                                "defaultValue": "<optionValue1> #optional",
                                "valueFromProperty": "<property name> #optional"
                            }
                        ]
                    }
                ],
                "configs": [
                    {
                        "name": "<string> #required",
                        "displayCategory": "<string> #optional",
                        "displayName": "<string> #optional",
                        "description": "<string> #optional",
                        "params": [
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "string",
                                "required": "<Boolean> #required true/false",
                                "defaultValue": "<string> #optional",
                                "displayMask": "<Boolean> #optional true/false",
                                "valueEncoding": "base64 #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "temperature",
                                "required": "<Boolean> #required true/false",
                                "defaultValue": "<string> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "datetime",
                                "required": "<Boolean> #required true/false",
                                "displayFormat": "YYYY-MM-DD|HH:MM|YYYY-MM-DD HH:MM #required",
                                "defaultValue": "<HH:MM> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "switch",
                                "required": "<Boolean> #required true/false",
                                "displayValues": [
                                    "offValue",
                                    "onValue"
                                ],
                                "defaultValue": "<onValue> #optional",
                                "valueFromProperty": "<property name> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "checkbox",
                                "required": "<Boolean> #required true/false",
                                "displayValues": [
                                    "uncheckedValue",
                                    "checkedValue"
                                ],
                                "defaultValue": "<checkedValue> #optional",
                                "valueFromProperty": "<property name> #optional"
                            },
                            {
                                "name": "<string> #required",
                                "displayName": "<string> #optional",
                                "description": "<string> #optional",
                                "displayType": "list",
                                "required": "<Boolean> #required true/false",
                                "displayValues": [
                                    "listOption1",
                                    "listOption2"
                                ],
                                "defaultValue": "<optionValue1> #optional",
                                "valueFromProperty": "<property name> #optional"
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
  <summary><code>v2/notifyPluginCommand</code></summary>
</details>

<details>
  <summary><code>v2/notifyPluginCommandAck</code></summary>
</details>

<details>
  <summary><code>v2/notifyPluginState</code></summary>
</details>

<details>
  <summary><code>v2/notifyPluginMetric</code></summary>
</details>

<details>
  <summary><code>v2/notifyPluginEvent</code></summary>
</details>

<details>
  <summary><code>v2/notifyPluginConfigUpdate</code></summary>
</details>

<details>
  <summary><code>v2/notifyPluginAlert</code></summary>
</details>

<details>
  <summary><code>v2/notifyPluginAlarmUpdate</code></summary>
</details>