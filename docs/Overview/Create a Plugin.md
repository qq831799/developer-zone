For simple, we don't make a Plugin from scratch. Let's modify and build a Plugin from [Hello Plugin](https://github.com/allxon/plugIN-hello).

```
git clone https://github.com/allxon/plugIN-hello.git
```

## Apply a Plugin Key

First, [Contact us](https://www.allxon.com/) to apply a `plugin_key.json` file. With the key, Allxon portal can recognize your Plugin, and make sure your data is signed and safed. 

Here is a example of `plugin_key.json`:

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

## Modify hello Plugin

Let's make a little modify on Plugin hello, we can try to change Plugin display name to `"Plugin Goodbye"`. Edit the file `resource_dir_linux/plugin_update_template.json`.

```json {9,15} title="resource_dir_linux/plugin_update_template.json" showLineNumbers
{
  "jsonrpc": "2.0",
  "method": "v2/notifyPluginUpdate",
  "params": {
    "sdk": "${OCTO_SDK_VERSION}",
    "appGUID": "${PLUGIN_APP_GUID}",
    "appName": "${PLUGIN_NAME}",
    "epoch": "",
    "displayName": "Plugin Goodbye",
    "type": "ib",
    "version": "${PLUGIN_VERSION}",
    "modules": [
      {
        "moduleName": "${PLUGIN_NAME}",
        "displayName": "Plugin Goodbye",
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

Next, We update the Plugin version to `0.0.0`, just execute the script `release.sh`, or you can edit `CMakeList.txt` manually.

```bash
./release.sh 0.0.0
```


## Build the Plugin

Put your Plugin Key under your Plugin working directory, and make user filename is `plugin_key.json`.Choose `Dockerfile.x86_64` or `Dockerfile.jetson` depend on your target plarform, and output Plugin Package will output under `OUTPUT_DIRECTORY`.

```bash
docker build -f <Dockerfile.x86_64|Dockerfile.jetson> --output [OUTPUT_DIRECTROY] .
```

For example:

```bash
docker build -f Dockerfile.x86_64 --output build .
```

Then you should get Plugin Package `plugIN-hello-0.0.0-linux-x86_64.tar.gz`  under `build` directory.

:::info
If you are windows platform or you want to build from source, follow this [instruction](https://github.com/allxon/plugIN-hello#install-cmake).
:::

## Install the Plugin
After packing Plugin Package, you can use Plugin online installer script to install and test your Plugin Package on local before upload to Allxon Plugin Center.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="bash" label="Linux">

```bash
sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid a5nf65b-1cf7-46e6-af56-d41eac4nbcC1 --from-path build/plugin-hello-0.0.0-linux-x86_64.tar.gz
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
powershell -command "Invoke-WebRequest -OutFile %temp%\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\plugin-installer.bat --app-guid a5nf65b-1cf7-46e6-af56-d41eac4nbcC1 --from-path build\plugin-hello-0.0.0-win-x86_64.zip 
```
</TabItem>
</Tabs>

After installation, Plugin hello should start automatically by service, and you should found your binaries under `/opt/allxon/plugIN/a5nf65b-1cf7-46e6-af56-d41eac4nbcC1/`.

If you want to uninstall Plugin hello, you can execute `uninstall_plugIN.sh` which under Plugin installation directory, or use Plugin online installer to uninstall.

<Tabs>
<TabItem value="bash" label="Linux">

```bash
sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid a5nf65b-1cf7-46e6-af56-d41eac4nbcC1 --uninstall
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
powershell -command "Invoke-WebRequest -OutFile %temp%\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\plugin-installer.bat --app-guid a5nf65b-1cf7-46e6-af56-d41eac4nbcC1 --uninstall
```
</TabItem>
</Tabs>
