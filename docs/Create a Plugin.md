For simple, we don't make a Plugin from scratch. Let's modify and build a Plugin from [Hello Plugin](https://github.com/allxon/plugIN-hello).

```
git clone --recursive https://github.com/allxon/plugIN-hello.git
```

## Apply a Plugin Credential

First, [Contact us](https://www.allxon.com/) to apply a `plugin_credential.json` file. With the key, Allxon portal can recognize your Plugin, and make sure your data is signed and safed. 

Here is a example of `plugin_credential.json`:

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

Put your Plugin Credential under your Plugin working directory, and make user filename is `plugin_credential.json`.Choose `Dockerfile.x86_64` or `Dockerfile.jetson` depend on your target plarform, and output Plugin Package will output under `OUTPUT_DIRECTORY`.

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
After packing Plugin Package, you can use Plugin Installer Script to install and test your Plugin Package on local before upload to Allxon Plugin Center.

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

If you want to uninstall Plugin hello, you can execute `uninstall_plugIN.sh` which under Plugin installation directory, or use Plugin Installer Script to uninstall.

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

## Plugin Package
Let's take a look at Plugin Package inside to understand how it composed.

```plain title="plugin-hello-0.0.0-linux-x86_64.tar.gz"
.
├── 8102220f-083f-4f11-a433-6ccb2e786fed
│   ├── plugin-hello
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.sh
└── install_plugIN.sh

1 directory, 7 files
```

What Plugin Installer Script install a Plugin just extract the Plugin Package and run the `install_plugIN.sh`, On the other side, run `uninstall_plugIN.sh` when uninstall.

Next, Let's find out how to implement `install_plugIN.sh` and `uninstall_plugIN.sh`. Check out the hello Plugin working directory.

```plain title="plugin-hello"
...
├── dep
│   ├── ...
├── resource_dir_linux
│   ├── install_plugIN.sh
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.sh
├── resource_dir_windows
│   ├── install_plugIN.bat
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.bat
└── src
    ├── ...
```

This project separate installed files by platform, all files under `resource_dir_[PLATFORM]` will be installed under target device.

You have to implement `install_plugIN.sh`, `uninstall_plugIN.sh` yourself. We will set installation path to environment variable `ALLXON_PLUGIN_DIR` when the script be called. So that you can install all you need under `ALLXON_PLUGIN_DIR`, same as windows.

:::caution
If you want, you don't necessary to follow installation path `ALLXON_PLUGIN_DIR`. At least, you must place `uninstall_plugIN.sh` under `ALLXON_PLUGIN_DIR`.
:::

<Tabs>
<TabItem value="bash" label="Linux">

```bash title="resource_dir_linux/install_plugIN.sh"
#!/bin/bash
CURRENT_SH_DIRECTORY=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
exec &> "${CURRENT_SH_DIRECTORY}/$(basename "${BASH_SOURCE[0]%.*}").output"

PLUGIN_NAME=plugin-hello
PLUGIN_SERVICE=${PLUGIN_NAME}.service
PLUGIN_APP_GUID=${ALLXON_PLUGIN_DIR##*/}

if [ -d $ALLXON_PLUGIN_DIR ]; then
    echo "ERROR: plugin $PLUGIN_APP_GUID already installed"
    exit 1
else
    mkdir -p $ALLXON_PLUGIN_DIR || exit 1
fi

check_for_install() {
    echo "check for install..."
    # If users try to install this plugIN on non-Ubuntu x86 devices, then it will be returned
    EXECUTABLE_DESCRIPTION=$(file $CURRENT_SH_DIRECTORY/$PLUGIN_APP_GUID/$PLUGIN_NAME)
    ARCH=$(uname -i)

    if [[ "$ARCH" == "x86_64" ]]; then
        ARCH="x86-64"
    fi

    if [[ "$EXECUTABLE_DESCRIPTION" != *"$ARCH"* ]]; then
        >&2 echo "Not Supported Architecture"
        exit 1
    fi
}

install_plugin_files() {
    echo "install plugin files..."
    cp -r ./$PLUGIN_APP_GUID/* $ALLXON_PLUGIN_DIR || exit 1
    echo "\
[Unit]
Description=Allxon Hello plugIN
Documentation=https://dms.allxon.com/

[Service]
Type=simple
ExecStart=${ALLXON_PLUGIN_DIR}/${PLUGIN_NAME} ${ALLXON_PLUGIN_DIR}
Environment="HOME=/root"
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
" > ${PLUGIN_SERVICE} || exit 1

    cp ./$PLUGIN_SERVICE /etc/systemd/system/ || exit 1
    echo "plugIN is installed to $ALLXON_PLUGIN_DIR"
}

initial_plugin_service_in_system() {
    echo "start service..."
    systemctl daemon-reload || exit 1
    chmod 644 /etc/systemd/system/$PLUGIN_SERVICE || exit 1
    systemctl enable --now $PLUGIN_SERVICE || exit 1
}

install_plugIN() {
    check_for_install
    install_plugin_files
    initial_plugin_service_in_system > /dev/null 2>&1
    sleep 1
    exit 0
}

install_plugIN
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch title="resource_dir_windows/install_plugIN.bat"
@echo off

@REM @whoami /groups | find "S-1-16-12288" > nul && goto :admin
@REM @REM Create vbs to invoke UAC
@REM SET "ELEVATE_CMDLINE=cd /d "%~dp0" & call "%~f0" %*"
@REM ECHO Set objShell = CreateObject("Shell.Application") 1>temp.vbs
@REM ECHO Set objWshShell = WScript.CreateObject("WScript.Shell") 1>>temp.vbs
@REM ECHO Set objWshProcessEnv = objWshShell.Environment("PROCESS") 1>>temp.vbs
@REM ECHO strCommandLine = Trim(objWshProcessEnv("ELEVATE_CMDLINE")) 1>>temp.vbs
@REM ECHO objShell.ShellExecute "cmd", "/c " ^& strCommandLine, "", "runas" 1>>temp.vbs
@REM cscript //nologo temp.vbs & del temp.vbs & exit /b
@REM :admin

SET APP_NAME=plugin-hello
SET APP_GUID=%ALLXON_PLUGIN_DIR:C:\ProgramData\allxon\plugIN\=%
SET CURRENT_DIR=%~dp0

@REM Main
:main
IF EXIST "%ALLXON_PLUGIN_DIR%" echo plugIN %ALLXON_PLUGIN_DIR% already installed & exit /b 0

xcopy "%CURRENT_DIR%\%APP_GUID%" "%ALLXON_PLUGIN_DIR%" /E /F /Y /I

echo ^<?xml version="1.0" encoding="UTF-16"?^>^
 ^<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task"^>^
 ^<RegistrationInfo^>^
 ^<URI^>\%APP_NAME%-service^</URI^>^
 ^</RegistrationInfo^>^
 ^<Triggers^>^
 ^<LogonTrigger^>^
 ^<Enabled^>true^</Enabled^>^
 ^</LogonTrigger^>^
 ^</Triggers^>^
 ^<Principals^>^
 ^<Principal^>^
 ^<UserId^>S-1-5-18^</UserId^>^
 ^<RunLevel^>LeastPrivilege^</RunLevel^>^
 ^</Principal^>^
 ^</Principals^>^
 ^<Settings^>^
 ^<MultipleInstancesPolicy^>IgnoreNew^</MultipleInstancesPolicy^>^
 ^<DisallowStartIfOnBatteries^>false^</DisallowStartIfOnBatteries^>^
 ^<StopIfGoingOnBatteries^>false^</StopIfGoingOnBatteries^>^
 ^<AllowHardTerminate^>true^</AllowHardTerminate^>^
 ^<StartWhenAvailable^>false^</StartWhenAvailable^>^
 ^<RunOnlyIfNetworkAvailable^>false^</RunOnlyIfNetworkAvailable^>^
 ^<IdleSettings^>^
 ^<StopOnIdleEnd^>true^</StopOnIdleEnd^>^
 ^<RestartOnIdle^>false^</RestartOnIdle^>^
 ^</IdleSettings^>^
 ^<AllowStartOnDemand^>true^</AllowStartOnDemand^>^
 ^<Enabled^>true^</Enabled^>^
 ^<Hidden^>false^</Hidden^>^
 ^<RunOnlyIfIdle^>false^</RunOnlyIfIdle^>^
 ^<WakeToRun^>false^</WakeToRun^>^
 ^<ExecutionTimeLimit^>PT0S^</ExecutionTimeLimit^>^
 ^<Priority^>7^</Priority^>^
 ^</Settings^>^
 ^<Actions^>^
 ^<Exec^>^
 ^<Command^>"%ALLXON_PLUGIN_DIR%\%APP_NAME%"^</Command^>^
 ^<Arguments^>"%ALLXON_PLUGIN_DIR%"^</Arguments^>^
 ^</Exec^>^
 ^</Actions^>^
 ^</Task^> > "%ALLXON_PLUGIN_DIR%\service.xml"
schtasks /Create /XML "%ALLXON_PLUGIN_DIR%\service.xml" /TN "%APP_NAME%-service"
schtasks /run /tn %APP_NAME%-service%
```
</TabItem>
</Tabs>

## Versioning

You can update Verison number under `CMakeLists.txt`, following [Semantic Versioning](https://semver.org/) format. Remember to rebuild it after update version.

:::caution
If you update `v2/notifyPluginUpdate` content, you must release a new Plugin version. It will affect Allxon Portal Plugin Verification.
:::

```cmake {2} title="CMakeLists.txt" showLineNumbers
cmake_minimum_required(VERSION 3.23)
project(plugin-hello VERSION 1.0.1)
set(OCTO_SDK_VERSION 3.0.0)
# ...
```