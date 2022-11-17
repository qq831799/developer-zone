![alert-sequence](../_img/alert-sequence.png)

Alert can bring your alert message up to Allxon Portal, then Allxon Portal can tranfer message to your email, webhook, LINE ..., depend on your setting on Allxon Portal. Just like other Cards, send `v2/notifyPluginUpdate` to initialize Alert Card. If you have Alert setting on Allxon Portal, you will get `v2/notifyPluginAlarmUpdate` after sending `v2/notifPluginUpdate`. After that, you can send `v2/notifyPluginAlert` whenever you wanna trigger Alert.

Let's take a look at the example:

```json {17-25}
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginUpdate",
    "params": {
        "sdk": "2.0.2",
        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",
        "appName": "plugin-hello",
        "epoch": "1664259325",
        "displayName": "plugIN Hello",
        "type": "ib",
        "version": "1.0.1",
        "modules": [
            {
                "moduleName": "plugin-hello",
                "displayName": "plugIN Hello",
                "properties": [],
                "alarms": [
                    {
                        "name": "hello_alarm",
                        "displayCategory": "Message",
                        "displayName": "Hello alarm",
                        "description": "Trigger when someone say hello",
                        "params": []
                    }
                ]
            }
        ]
    }
}
```

After sending `v2/notifyPluginUpdate`, Alert Card will look like the image below.

![alert-card](../_img/alert-card.png)

You may receive `v2/notifyPluginAlarmUpate` depend on your setting on Allxon Portal like the image below. 

```json
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$Y1JmLkNDUjRkeFJ7UDBlOQ$qZPxG/iWuZTKQzbsvr86wg",
    "params": {
        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",
        "epoch": "1664259814"
    }
}
```

Let's setting Alert Card on Allxon Portal to connect a webhook. Click "Edit" -> "webhook icon" -> choose a webhook preset -> "Next" -> "Save".

![alert-edit](../_img/alert-edit.png)

![alert-preset](../_img/alert-preset.png)

![alert-finished](../_img/alert-finished.png)

After setting, Plugin should received new `v2/notifyPluginAlarmUpdate` below to notify Plugin that Alarm setting updated. 

```json {12-17}
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginAlarmUpdate?authorization=$argon2id$v=19$m=64,t=16,p=8$J2chRypQWmxLLGl4O04zXg$KUvzIkRhS8Ao+FYTysdSWA",
    "params": {
        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",
        "epoch": "1664268028",
        "version": "1.0.1",
        "modules": [
            {
                "moduleName": "plugin-hello",
                "epoch": "1664268022",
                "alarms": [
                    {
                        "enabled": true,
                        "name": "hello_alarm"
                    }
                ]
            }
        ]
    }
}
```

This can tell Plugin which alert should be enabled. Finally, try to send a `v2/notifyPluginAlert` below to test Alert function.

```json 
{
    "jsonrpc": "2.0",
    "method": "v2/notifyPluginAlert",
    "params": {
        "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",
        "moduleName": "plugin-hello",
        "epoch": "1664268861",
        "alarms": [
            {
                "name": "hello_alarm",
                "action": "trigger",
                "time": "1664268861",
                "message": "Hello Buzz ~"
            }
        ]
    }
}
```

And you should received message on your connected webhook service. At the same time, Allxon Portal add a new record on Alert page.

![alert-trigger](../_img/alert-trigger.png)

