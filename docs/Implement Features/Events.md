![event-sequence](../_img/event-sequence.png)

The **Events** card sequence flow is the same as that of the **States** card. After initializing the card with `v2/notifyPluginUpdate`, you can send `v2/notifyPluginEvent` to upload events.

Here is an example of creating the **Events** card:

First, send the following `v2/notifyPluginUpdate` JSON.


```json {17-24}
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
        "properties": [],
        "events": [
          {
            "description": "Event trigger when box opened",
            "displayCategory": "category1",
            "displayName": "Box Open Event",
            "name": "box-open-event"
          }
        ]
      }
    ]
  }
}
```
Once done, Allxon Portal shows the **Events** card below.

![event-init](../_img/event-init.png)

Now you can send `v2/notifyPluginEvent` to upload an event record:


```json
{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginEvent",
   "params": {
      "appGUID": "${PLUGIN_APP_GUID}",
      "moduleName": "${PLUGIN_NAME}",
      "epoch": "",
      "events": [
         {
            "name": "box-open-event",
            "value": "open"
         }
      ]
   }
}
```

The **Events** card then displays like this:

![event-init](../_img/event-first-shot.png)
=======
![event-sequence](../_img/event-sequence.png)

The **Events** card sequence flow is the same as that of the **States** card. After initializing the card with v2/notifyPluginUpdate`, you can send `v2/notifyPluginEvent` to upload events.

Here is an example of creating the **Events** card:

First, send the following `v2/notifyPluginUpdate` JSON.


```json {17-24}
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
        "properties": [],
        "events": [
          {
            "description": "Event trigger when box opened",
            "displayCategory": "category1",
            "displayName": "Box Open Event",
            "name": "box-open-event"
          }
        ]
      }
    ]
  }
}
```
Once done, Allxon Portal shows the **Events** card below.

![event-init](../_img/event-init.png)

Now you can send `v2/notifyPluginEvent` to upload an event record:


```json
{
   "jsonrpc": "2.0",
   "method": "v2/notifyPluginEvent",
   "params": {
      "appGUID": "${PLUGIN_APP_GUID}",
      "moduleName": "${PLUGIN_NAME}",
      "epoch": "",
      "events": [
         {
            "name": "box-open-event",
            "value": "open"
         }
      ]
   }
}
```

The **Events** card then displays like this:

![event-init](../_img/event-first-shot.png)
