
![properties-update](../_img/properties-plugin-update.png)

The **Properties** card is designed for showing static information, such as firmware version, hardware configuration, etc. 

Here is an example of `v2/notifyPluginUpdate` JSON. Let’s focus on the highlighted section to learn how to create your **Properties** card.


```json {16-61} 
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginUpdate",
    "params": {
        "sdk": "${OCTO_SDK_VERSION}",
        "appGUID": "${PLUGIN_APP_GUID}",
        "appName": "${PLUGIN_NAME}",
        "epoch": "",
        "displayName": "Device Info",
        "type": "ib",
        "version": "${PLUGIN_VERSION}",
        "modules": [
            {
                "moduleName": "${PLUGIN_NAME}",
                "displayName": "Device Info",
                "properties": [
                    {
                        "name": "cpu-arch",
                        "displayName": "CPU Architecture",
                        "displayCategory": "Hardware",
                        "description": "Print the current CPU Architecture",
                        "displayType": "string",
                        "value": "x86_64"
                    },
                    {
                        "name": "other",
                        "displayName": "Others",
                        "displayCategory": "Hardware",
                        "description": "Print the others hardware infomation",
                        "displayType": "table",
                        "value": [
                            {
                                "Component": "Memory",
                                "Capability": "8GB"
                            },
                            {
                                "Component": "Storage",
                                "Capability": "256GB"
                            }
                        ]
                    },
                    {
                        "name": "os",
                        "displayName": "OS",
                        "displayCategory": "Software",
                        "description": "Print the OS Name",
                        "displayType": "string",
                        "value": "Linux"
                    },
                    {
                        "name": "os-detail",
                        "displayName": "About OS",
                        "displayCategory": "Software",
                        "description": "More detail about OS",
                        "displayType": "link",
                        "value": {
                            "url": "https://www.linux.org/",
                            "alias": "linux.org"
                        } 
                    }
                ]
            }
        ]
    }
}
```

Here is how it looks like on Allxon Portal:

![properties-plugin](../_img/properties-screen.png)

The **plugIN** card displays the basic information about this plugin.

<!-- ![properties-plugin](../_img/properties-plugin.png) -->


There are two tabs under the **Properties** card: **Hardware** and **Software**.  
Since both _CPU Architecture_ and _Others_ have `"displayCategory"` set to `"Hardware"`, you can view them under the **Hardware** tab. 

![properties-hardware](../_img/properties-hardware.png)


There are different kinds of `"displayType"`. In this example, the `"displayType"` is `"table"` and a table icon ![properties-table-icon](../_img/properties-table-icon.png) is displayed. If you click on the icon, a window pops up for you to view more details, as shown below.

![properties-table](../_img/properties-table.png)

You can also click on **Software** tab to switch to the *Software* category. Under this category, all properties that have `"displayCategory"` set to `"Software"` are displayed. See below screenshot:

![properties-software](../_img/properties-software.png)

The *linux.org* is a clickable external link since the `"displayType"` of *About OS* is set to `"link"`.

:::caution
The `"value"` format depends on the `"displayType"`. Make sure you have a correct `"value"` format. 
:::
