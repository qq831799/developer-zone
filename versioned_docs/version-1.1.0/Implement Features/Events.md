![event-sequence](../_img/event-sequence.png)

Event Card sequence flow as same as State Card. Sending `v2/notifyPluginEvent` to upload event after initialize with `v2/notifyPluginUpdate`.

Take a look at the example:

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

After Sending `v2/notifyPluginUpdate` JSON above, Allxon Portal will show Events Card below.

![event-init](../_img/event-init.png)

Let's try send `v2/notifyPluginEvent` to upload data:

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

Event Card will display like this:

![event-init](../_img/event-first-shot.png)