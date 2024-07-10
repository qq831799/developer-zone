import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A **plugin package** is a uniform format in which your plugin is archived. You can distribute your plugin on **Allxon Plugin Station** by plugin package.

## Deploy the Plugin Package

Follow the instructions below to pack your plugin package from the source.

### Deploy from Local

<Tabs>
<TabItem value="bash" label="Linux">

```bash
cmake --build build --target package
```

Then you get a plugin package `plugIN-hello-0.0.0-linux-x86_64.tar.gz` under `build` directory.

</TabItem>

<TabItem value="cmd" label="Windows">

```batch
cmake --build build --config <release|debug> --target package
```

Then you get a plugin package `plugIN-hello-0.0.0-windows-x86_64.zip` under `build` directory.

</TabItem>
</Tabs>

### Deploy from Docker

Choose `Dockerfile.x86_64` or `Dockerfile.jetson` depending on your target plarform. Then the output plugin package appears under `OUTPUT_DIRECTORY`.

```bash
docker build -f <Dockerfile.x86_64|Dockerfile.jetson> --output [OUTPUT_DIRECTROY] .
```

For example:

```bash
docker build -f Dockerfile.x86_64 --output build .
```

You subsequently get the plugin package `plugIN-hello-0.0.0-linux-x86_64.tar.gz` under `OUTPUT_DIRECTORY` directory.

## Work with the Plugin Package​

Here is how a plugin package is composed:

<Tabs>
<TabItem value="bash" label="Linux">

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

The **Plugin Installer Script** installs a plugin. All you need to do is extract the plugin package and run the `install_plugIN.sh`. To uninstall, simply run `uninstall_plugIN.sh`.

Next, you need to implement `install_plugIN.sh` and `uninstall_plugIN.sh`. Check out the **Hello Plugin** working directory.

</TabItem>

<TabItem value="cmd" label="Windows">

```plain title="plugin-hello-0.0.0-windows-x86_64.zip"
.
├── 8102220f-083f-4f11-a433-6ccb2e786fed
│   ├── plugin-hello
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.bat
└── install_plugIN.bat

1 directory, 7 files
```

The **Plugin Installer Script** installs a plugin. All you need to do is extract the plugin package and run the `install_plugIN.bat`. To uninstall, simply run `uninstall_plugIN.bat`.

Next, you need to implement `install_plugIN.bat` and `uninstall_plugIN.bat`. Check out the **Hello Plugin** working directory.

</TabItem>
</Tabs>

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

This project separates the installed files by platform. All files under `resource_dir_[PLATFORM]` are installed under the target device.

Please note that you have to implement `install_plugIN.sh` and `uninstall_plugIN.sh` by yourself. When the script is called, an installation path to the environment variable `ALLXON_PLUGIN_DIR` is set. You can install all you need under `ALLXON_PLUGIN_DIR`, the same as in Windows.

:::caution
Optionally, you can choose not to follow the installation path `ALLXON_PLUGIN_DIR`. However, you need to at least place `uninstall_plugIN.sh` under `ALLXON_PLUGIN_DIR`.

:::

<Tabs>
<TabItem value="bash" label="Linux">

```bash title="resource_dir_linux/install_plugIN.sh"
#!/bin/bash
CURRENT_SH_DIRECTORY=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

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
    if ! command -v file &> /dev/null; then
        echo "Warning: file command not found, we can't help to check architecture."
        return
    else
        # If users try to install this plugIN on non-Ubuntu x86 devices, then it will be returned
        local EXECUTABLE_DESCRIPTION=$(file $CURRENT_SH_DIRECTORY/$PLUGIN_APP_GUID/$PLUGIN_NAME)
        local ARCH=$(uname -i)

        if [[ "$ARCH" == "x86_64" ]]; then
            ARCH="x86-64"
        fi

        if [[ "$EXECUTABLE_DESCRIPTION" != *"$ARCH"* ]]; then
            >&2 echo "Not Supported Architecture"
            exit 1
        fi
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
RestartSec=60

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

## Version the Plugin Package​

You can update _Version number_ under `CMakeLists.txt`. Make sure you follow the [Semantic Versioning](https://semver.org/) format, and remember to rebuild the plugin packageit after the version update.

:::caution
If the plugin format defined in `v2/notifyPluginUpdate` is updated, you must update the plugin version number correspondingly. Otherwise, the Portal displays an error message, such as _"This plugin version contains multiple alert spec. Please update plugin version or delete the wrong spec"_. Although you can ignore this message during the development phase, you need to avoid having different formats in one plugin version when releasing the plugin officially.
:::

```cmake {2} title="CMakeLists.txt" showLineNumbers
cmake_minimum_required(VERSION 3.23)
project(plugin-hello VERSION 1.3.1)
set(OCTO_SDK_VERSION 3.2.0 CACHE STRING "octo sdk version")
# ...
```

Or your can use `release.sh` to update version.

```bash
./release.sh 1.3.1
```

## Test your Plugin Package

Before you upload your plugin package to **Allxon Plugin Station**, you can test the package on your device. To do so, follow the instructions below to install your plugin package on your device through `allxon-cli`.

### Install Plugin Package

<Tabs>
<TabItem value="bash" label="Linux">

```bash
allxon-cli plugin --app-guid [APP_GUID] install --package [PLUGIN_PACKAGE]
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
allxon-cli.exe plugin --app-guid [APP_GUID] install --package [PLUGIN_PACKAGE]
```

</TabItem>
</Tabs>

Once done, go to Allxon Portal and check whether your installation is successful.

### Uninstall Plugin Package

<Tabs>
<TabItem value="bash" label="Linux">

```bash
allxon-cli plugin --app-guid [APP_GUID] uninstall
```

</TabItem>
<TabItem value="cmd" label="Windows">

```batch
allxon-cli.exe plugin --app-guid [APP_GUID] uninstall
```

</TabItem>
</Tabs>
