Allxon Octo SDK is implemented in **C++** and is available for 3<sup>rd</sup> party developers to build plugins to connect devices to Allxon Portal. By using Allxon Octo SDK, you can build your own application to enhance the management and usability of your devices on Allxon Portal. We call the application "**plugin**".

Let’s explore [Hello Plugin](https://github.com/allxon/plugIN-hello/releases) built by Allxon Octo SDK and learn what a plugin looks like.

## Requirements

Your device must come online on [Allxon Portal](https://dms.allxon.com/next/signin).

:::info

Following the steps below to get your device online on Allxon Portal:
1. Install [**Allxon Agent**](https://www.allxon.com/knowledge/install-allxon-agent-via-command-prompt) on your device.
2. Get a pairing code on your device. Then add your device on [**Allxon Portal**](https://dms.allxon.com/next/signin).

:::

## Run Hello Plugin

### Download Plugin Package

Download [Hello Plugin](https://github.com/allxon/plugIN-hello/releases) archive file and extract it. We call this archive a "**plugin package**".

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="bash" label="Linux">

```bash
mkdir extracted_folder
tar -xf plugin-hello-X.X.X-linux-x86_64.tar.gz -C extracted_folder
```

</TabItem>
<TabItem value="cmd" label="Windows">

1. Right click `plugin-hello-X.X.X-win-x86_64.zip` file 
2. Click "Extract All..." to `extracted_folder`

</TabItem>
</Tabs>

:::caution Notice

Check your platform and CPU architecture. For Linux, we only tested on Ubuntu (> 18.04) and NVIDIA Jetson (> L4T R32.6.1 )

:::

And you will see an extracted folder hierarchy like this:

<Tabs>
<TabItem value="bash" label="Linux">

```
.
├── [APP_GUID]
│   ├── plugin-hello
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.sh
└── install_plugIN.sh

1 directory, 7 files
```
The **App GUID** represents this plugin's ID, `uninstall_plugIN.sh` and `install_plugIN.sh` are used to install and uninstall your plugin.


</TabItem>
<TabItem value="cmd" label="Windows">

```
.
├── [APP_GUID]
│   ├── libcrypto-1_1-x64.dll
│   ├── libssl-1_1-x64.dll
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin-hello.exe
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.bat
└── install_plugIN.bat

1 directory, 9 files
```
The **App GUID** represents this plugin's ID, `uninstall_plugIN.bat` and `install_plugIN.bat` are used to install and uninstall your plugin.

</TabItem>
</Tabs>

:::tip

An **App GUID** corresponds to a plugin on a particular platform. If you need to deploy plugins on three platforms, you need to obtain different App GUIDs, each for the three respective platforms.

:::

### Execute Plugin 
Next, you can manually execute the plugin.

<Tabs>
<TabItem value="bash" label="Linux">

```bash
cd extracted_folder/[APP_GUID]
./plugin-hello $(pwd)
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
cd extracted_folder\[APP_GUID]
plugin-hello.exe %cd%
```
</TabItem>
</Tabs>

### Install Plugin 
Alternatively, you can install the plugin on your device through **Plugin Installer Script**. Once installed, the plugin starts automatically.

<Tabs>
<TabItem value="bash" label="Linux">

```bash
sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]

# For Example
sudo wget -qO - https://get.allxon.net/plugIN/linux | sudo bash -s -- --app-guid a8e873a1-e5df-43a2-928a-745ff9c94dfb --from-path plugin-hello-X.X.X-linux-x86_64.tar.gz
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
powershell -command "Invoke-WebRequest -OutFile %temp%\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\plugin-installer.bat --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE] 

# For Example
powershell -command "Invoke-WebRequest -OutFile %temp%\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\plugin-installer.bat --app-guid 15dee3c8-adb9-4f7f-83d9-8000eff23f1f --from-path plugin-hello-X.X.X-win-x86_64.zip 
```
</TabItem>
</Tabs>

Yay~ 🥳 Now, you should see Hello Plugin online on your device page.

![screenshot_hello_plugin_finished](../_img/screenshot_hello_plugin_finished.png)
<!-- 2. Apply a `plugin_credential.json` of plugin from Allxon. -->
=======
Allxon Octo SDK is implemented in **C++** and is available for 3<sup>rd</sup> party developers to build plugins to connect devices to Allxon Portal. By using Allxon Octo SDK, you can build your own application to enhance the management and usability of your devices on Allxon Portal. We call the application "**plugin**".

Let’s explore [Hello Plugin](https://github.com/allxon/plugIN-hello/releases) built by Allxon Octo SDK and learn what a plugin looks like.

## Requirements

Your device must come online on [Allxon Portal](https://dms.allxon.com/next/signin).

:::info

Following the steps below to get your device online on Allxon Portal:
1. Install [**Allxon Agent**](https://www.allxon.com/knowledge/install-allxon-agent-via-command-prompt) on your device.
2. Get a pairing code on your device. Then add your device on [**Allxon Portal**](https://dms.allxon.com/next/signin).

:::

## Run Hello Plugin

### Download Plugin Package

Download [Hello Plugin](https://github.com/allxon/plugIN-hello/releases) archive file and extract it. We call this archive a "**plugin package**".

<Tabs>
<TabItem value="bash" label="Linux">

```bash
mkdir extracted_folder
tar -xf plugin-hello-X.X.X-linux-x86_64.tar.gz -C extracted_folder
```

</TabItem>
<TabItem value="cmd" label="Windows">

1. Right click `plugin-hello-X.X.X-win-x86_64.zip` file 
2. Click "Extract All..." to `extracted_folder`

</TabItem>
</Tabs>

:::caution Notice

Check your platform and CPU architecture. For Linux, we only tested on Ubuntu (> 18.04) and NVIDIA Jetson (> L4T R32.6.1 )

:::

And you will see an extracted folder hierarchy like this:

<Tabs>
<TabItem value="bash" label="Linux">

```
.
├── [APP_GUID]
│   ├── plugin-hello
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.sh
└── install_plugIN.sh

1 directory, 7 files
```
The **App GUID** repesents this plugin's ID, `uninstall_plugIN.sh` and `install_plugIN.sh` are used to install and uninstall your plugin.


</TabItem>
<TabItem value="cmd" label="Windows">

```
.
├── [APP_GUID]
│   ├── libcrypto-1_1-x64.dll
│   ├── libssl-1_1-x64.dll
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin-hello.exe
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.bat
└── install_plugIN.bat

1 directory, 9 files
```
The **App GUID** repesents this plugin's ID, `uninstall_plugIN.bat` and `install_plugIN.bat` are used to install and uninstall your plugin.

</TabItem>
</Tabs>

:::tip

An **App GUID** corresponds to a plugin on a particular platform. If you need to deploy plugins on three platforms, you need to obtain different App GUIDs, each for the three respective platforms.

:::

### Execute Plugin 
Next, you can manually execute the plugin.

<Tabs>
<TabItem value="bash" label="Linux">

```bash
cd extracted_folder/[APP_GUID]
./plugin-hello $(pwd)
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
cd extracted_folder\[APP_GUID]
plugin-hello.exe %cd%
```
</TabItem>
</Tabs>

### Install Plugin 
Alternatively, you can install the plugin on your device through **Plugin Installer Script**. Once installed,the plugin starts automatically.

<Tabs>
<TabItem value="bash" label="Linux">

```bash
sudo bash -c "$(wget -qO - https://get.allxon.net/plugIN/linux)" -s --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]

# For Example
sudo bash -c "$(wget -qO - https://get.allxon.net/plugIN/linux)" -s --app-guid a8e873a1-e5df-43a2-928a-745ff9c94dfb --from-path plugin-hello-X.X.X-linux-x86_64.tar.gz
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
powershell -command "Invoke-WebRequest -OutFile %temp%\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\plugin-installer.bat --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE] 

# For Example
powershell -command "Invoke-WebRequest -OutFile %temp%\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\plugin-installer.bat --app-guid 15dee3c8-adb9-4f7f-83d9-8000eff23f1f --from-path plugin-hello-X.X.X-win-x86_64.zip 
```
</TabItem>
</Tabs>

Yay~ 🥳 Now, you should see Hello Plugin online on your device page.

![screenshot_hello_plugin_finished](../_img/screenshot_hello_plugin_finished.png)
<!-- 2. Apply a `plugin_credential.json` of plugin from Allxon. -->
