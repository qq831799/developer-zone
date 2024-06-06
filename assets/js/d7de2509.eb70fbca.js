"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[3243],{1587:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=l(4848),a=l(8453),i=l(1470),s=l(9365);const r={},o=void 0,c={id:"Build a Plugin Package",title:"Build a Plugin Package",description:"A plugin package is a uniform format in which your plugin is archived. You can distribute your plugin on Allxon Plugin Station by plugin package.",source:"@site/docs/Build a Plugin Package.md",sourceDirName:".",slug:"/Build a Plugin Package",permalink:"/developer-zone/Build a Plugin Package",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Build a Plugin Package.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Plugin",permalink:"/developer-zone/Create a Plugin"},next:{title:"Properties",permalink:"/developer-zone/Implement Features/Properties"}},u={},d=[{value:"Deploy the Plugin Package",id:"deploy-the-plugin-package",level:2},{value:"Deploy from Local",id:"deploy-from-local",level:3},{value:"Deploy from Docker",id:"deploy-from-docker",level:3},{value:"Work with the Plugin Package\u200b",id:"work-with-the-plugin-package",level:2},{value:"Version the Plugin Package\u200b",id:"version-the-plugin-package",level:2},{value:"Test your Plugin Package",id:"test-your-plugin-package",level:2},{value:"Install Plugin Package",id:"install-plugin-package",level:3},{value:"Uninstall Plugin Package",id:"uninstall-plugin-package",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"plugin package"})," is a uniform format in which your plugin is archived. You can distribute your plugin on ",(0,t.jsx)(n.strong,{children:"Allxon Plugin Station"})," by plugin package."]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-the-plugin-package",children:"Deploy the Plugin Package"}),"\n",(0,t.jsx)(n.p,{children:"Follow the instructions below to pack your plugin package from the source."}),"\n",(0,t.jsx)(n.h3,{id:"deploy-from-local",children:"Deploy from Local"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(s.A,{value:"bash",label:"Linux",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cmake --build build --target package\n"})}),(0,t.jsxs)(n.p,{children:["Then you get a plugin package ",(0,t.jsx)(n.code,{children:"plugIN-hello-0.0.0-linux-x86_64.tar.gz"})," under ",(0,t.jsx)(n.code,{children:"build"})," directory."]})]}),(0,t.jsxs)(s.A,{value:"cmd",label:"Windows",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:"cmake --build build --config <release|debug> --target package\n"})}),(0,t.jsxs)(n.p,{children:["Then you get a plugin package ",(0,t.jsx)(n.code,{children:"plugIN-hello-0.0.0-windows-x86_64.zip"})," under ",(0,t.jsx)(n.code,{children:"build"})," directory."]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-from-docker",children:"Deploy from Docker"}),"\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.code,{children:"Dockerfile.x86_64"})," or ",(0,t.jsx)(n.code,{children:"Dockerfile.jetson"})," depending on your target plarform. Then the output plugin package appears under ",(0,t.jsx)(n.code,{children:"OUTPUT_DIRECTORY"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker build -f <Dockerfile.x86_64|Dockerfile.jetson> --output [OUTPUT_DIRECTROY] .\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker build -f Dockerfile.x86_64 --output build .\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You subsequently get the plugin package ",(0,t.jsx)(n.code,{children:"plugIN-hello-0.0.0-linux-x86_64.tar.gz"})," under ",(0,t.jsx)(n.code,{children:"OUTPUT_DIRECTORY"})," directory."]}),"\n",(0,t.jsx)(n.h2,{id:"work-with-the-plugin-package",children:"Work with the Plugin Package\u200b"}),"\n",(0,t.jsx)(n.p,{children:"Here is how a plugin package is composed:"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(s.A,{value:"bash",label:"Linux",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:'title="plugin-hello-0.0.0-linux-x86_64.tar.gz"',children:".\n\u251c\u2500\u2500 8102220f-083f-4f11-a433-6ccb2e786fed\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin-hello\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_alert.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_command_ack.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_state.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_update_template.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 uninstall_plugIN.sh\n\u2514\u2500\u2500 install_plugIN.sh\n\n1 directory, 7 files\n"})}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Plugin Installer Script"})," installs a plugin. All you need to do is extract the plugin package and run the ",(0,t.jsx)(n.code,{children:"install_plugIN.sh"}),". To uninstall, simply run ",(0,t.jsx)(n.code,{children:"uninstall_plugIN.sh"}),"."]}),(0,t.jsxs)(n.p,{children:["Next, you need to implement ",(0,t.jsx)(n.code,{children:"install_plugIN.sh"})," and ",(0,t.jsx)(n.code,{children:"uninstall_plugIN.sh"}),". Check out the ",(0,t.jsx)(n.strong,{children:"Hello Plugin"})," working directory."]})]}),(0,t.jsxs)(s.A,{value:"cmd",label:"Windows",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:'title="plugin-hello-0.0.0-windows-x86_64.zip"',children:".\n\u251c\u2500\u2500 8102220f-083f-4f11-a433-6ccb2e786fed\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin-hello\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_alert.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_command_ack.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_state.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_update_template.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 uninstall_plugIN.bat\n\u2514\u2500\u2500 install_plugIN.bat\n\n1 directory, 7 files\n"})}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Plugin Installer Script"})," installs a plugin. All you need to do is extract the plugin package and run the ",(0,t.jsx)(n.code,{children:"install_plugIN.bat"}),". To uninstall, simply run ",(0,t.jsx)(n.code,{children:"uninstall_plugIN.bat"}),"."]}),(0,t.jsxs)(n.p,{children:["Next, you need to implement ",(0,t.jsx)(n.code,{children:"install_plugIN.bat"})," and ",(0,t.jsx)(n.code,{children:"uninstall_plugIN.bat"}),". Check out the ",(0,t.jsx)(n.strong,{children:"Hello Plugin"})," working directory."]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:'title="plugin-hello"',children:"...\n\u251c\u2500\u2500 dep\n\u2502   \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 resource_dir_linux\n\u2502\xa0\xa0 \u251c\u2500\u2500 install_plugIN.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_alert.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_command_ack.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_state.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_update_template.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 uninstall_plugIN.sh\n\u251c\u2500\u2500 resource_dir_windows\n\u2502\xa0\xa0 \u251c\u2500\u2500 install_plugIN.bat\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_alert.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_command_ack.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_state.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin_update_template.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 uninstall_plugIN.bat\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 ...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This project separates the installed files by platform. All files under ",(0,t.jsx)(n.code,{children:"resource_dir_[PLATFORM]"})," are installed under the target device."]}),"\n",(0,t.jsxs)(n.p,{children:["Please note that you have to implement ",(0,t.jsx)(n.code,{children:"install_plugIN.sh"})," and ",(0,t.jsx)(n.code,{children:"uninstall_plugIN.sh"})," by yourself. When the script is called, an installation path to the environment variable ",(0,t.jsx)(n.code,{children:"ALLXON_PLUGIN_DIR"})," is set. You can install all you need under ",(0,t.jsx)(n.code,{children:"ALLXON_PLUGIN_DIR"}),", the same as in Windows."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Optionally, you can choose not to follow the installation path ",(0,t.jsx)(n.code,{children:"ALLXON_PLUGIN_DIR"}),". However, you need to at least place ",(0,t.jsx)(n.code,{children:"uninstall_plugIN.sh"})," under ",(0,t.jsx)(n.code,{children:"ALLXON_PLUGIN_DIR"}),"."]})}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"bash",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="resource_dir_linux/install_plugIN.sh"',children:'#!/bin/bash\nCURRENT_SH_DIRECTORY=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)\n\nPLUGIN_NAME=plugin-hello\nPLUGIN_SERVICE=${PLUGIN_NAME}.service\nPLUGIN_APP_GUID=${ALLXON_PLUGIN_DIR##*/}\n\nif [ -d $ALLXON_PLUGIN_DIR ]; then\n    echo "ERROR: plugin $PLUGIN_APP_GUID already installed"\n    exit 1\nelse\n    mkdir -p $ALLXON_PLUGIN_DIR || exit 1\nfi\n\ncheck_for_install() {\n    echo "check for install..."\n    if ! command -v file &> /dev/null; then\n        echo "Warning: file command not found, we can\'t help to check architecture."\n        return\n    else\n        # If users try to install this plugIN on non-Ubuntu x86 devices, then it will be returned\n        local EXECUTABLE_DESCRIPTION=$(file $CURRENT_SH_DIRECTORY/$PLUGIN_APP_GUID/$PLUGIN_NAME)\n        local ARCH=$(uname -i)\n\n        if [[ "$ARCH" == "x86_64" ]]; then\n            ARCH="x86-64"\n        fi\n\n        if [[ "$EXECUTABLE_DESCRIPTION" != *"$ARCH"* ]]; then\n            >&2 echo "Not Supported Architecture"\n            exit 1\n        fi\n    fi\n}\n\ninstall_plugin_files() {\n    echo "install plugin files..."\n    cp -r ./$PLUGIN_APP_GUID/* $ALLXON_PLUGIN_DIR || exit 1\n    echo "\\\n[Unit]\nDescription=Allxon Hello plugIN\nDocumentation=https://dms.allxon.com/\n\n[Service]\nType=simple\nExecStart=${ALLXON_PLUGIN_DIR}/${PLUGIN_NAME} ${ALLXON_PLUGIN_DIR}\nEnvironment="HOME=/root"\nRestart=always\nRestartSec=60\n\n[Install]\nWantedBy=multi-user.target\n" > ${PLUGIN_SERVICE} || exit 1\n\n    cp ./$PLUGIN_SERVICE /etc/systemd/system/ || exit 1\n    echo "plugIN is installed to $ALLXON_PLUGIN_DIR"\n}\n\ninitial_plugin_service_in_system() {\n    echo "start service..."\n    systemctl daemon-reload || exit 1\n    chmod 644 /etc/systemd/system/$PLUGIN_SERVICE || exit 1\n    systemctl enable --now $PLUGIN_SERVICE || exit 1\n}\n\ninstall_plugIN() {\n    check_for_install\n    install_plugin_files\n    initial_plugin_service_in_system > /dev/null 2>&1\n    sleep 1\n    exit 0\n}\n\ninstall_plugIN\n'})})}),(0,t.jsx)(s.A,{value:"cmd",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",metastring:'title="resource_dir_windows/install_plugIN.bat"',children:'@echo off\n\n@REM @whoami /groups | find "S-1-16-12288" > nul && goto :admin\n@REM @REM Create vbs to invoke UAC\n@REM SET "ELEVATE_CMDLINE=cd /d "%~dp0" & call "%~f0" %*"\n@REM ECHO Set objShell = CreateObject("Shell.Application") 1>temp.vbs\n@REM ECHO Set objWshShell = WScript.CreateObject("WScript.Shell") 1>>temp.vbs\n@REM ECHO Set objWshProcessEnv = objWshShell.Environment("PROCESS") 1>>temp.vbs\n@REM ECHO strCommandLine = Trim(objWshProcessEnv("ELEVATE_CMDLINE")) 1>>temp.vbs\n@REM ECHO objShell.ShellExecute "cmd", "/c " ^& strCommandLine, "", "runas" 1>>temp.vbs\n@REM cscript //nologo temp.vbs & del temp.vbs & exit /b\n@REM :admin\n\nSET APP_NAME=plugin-hello\nSET APP_GUID=%ALLXON_PLUGIN_DIR:C:\\ProgramData\\allxon\\plugIN\\=%\nSET CURRENT_DIR=%~dp0\n\n@REM Main\n:main\nIF EXIST "%ALLXON_PLUGIN_DIR%" echo plugIN %ALLXON_PLUGIN_DIR% already installed & exit /b 0\n\nxcopy "%CURRENT_DIR%\\%APP_GUID%" "%ALLXON_PLUGIN_DIR%" /E /F /Y /I\n\necho ^<?xml version="1.0" encoding="UTF-16"?^>^\n ^<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task"^>^\n ^<RegistrationInfo^>^\n ^<URI^>\\%APP_NAME%-service^</URI^>^\n ^</RegistrationInfo^>^\n ^<Triggers^>^\n ^<LogonTrigger^>^\n ^<Enabled^>true^</Enabled^>^\n ^</LogonTrigger^>^\n ^</Triggers^>^\n ^<Principals^>^\n ^<Principal^>^\n ^<UserId^>S-1-5-18^</UserId^>^\n ^<RunLevel^>LeastPrivilege^</RunLevel^>^\n ^</Principal^>^\n ^</Principals^>^\n ^<Settings^>^\n ^<MultipleInstancesPolicy^>IgnoreNew^</MultipleInstancesPolicy^>^\n ^<DisallowStartIfOnBatteries^>false^</DisallowStartIfOnBatteries^>^\n ^<StopIfGoingOnBatteries^>false^</StopIfGoingOnBatteries^>^\n ^<AllowHardTerminate^>true^</AllowHardTerminate^>^\n ^<StartWhenAvailable^>false^</StartWhenAvailable^>^\n ^<RunOnlyIfNetworkAvailable^>false^</RunOnlyIfNetworkAvailable^>^\n ^<IdleSettings^>^\n ^<StopOnIdleEnd^>true^</StopOnIdleEnd^>^\n ^<RestartOnIdle^>false^</RestartOnIdle^>^\n ^</IdleSettings^>^\n ^<AllowStartOnDemand^>true^</AllowStartOnDemand^>^\n ^<Enabled^>true^</Enabled^>^\n ^<Hidden^>false^</Hidden^>^\n ^<RunOnlyIfIdle^>false^</RunOnlyIfIdle^>^\n ^<WakeToRun^>false^</WakeToRun^>^\n ^<ExecutionTimeLimit^>PT0S^</ExecutionTimeLimit^>^\n ^<Priority^>7^</Priority^>^\n ^</Settings^>^\n ^<Actions^>^\n ^<Exec^>^\n ^<Command^>"%ALLXON_PLUGIN_DIR%\\%APP_NAME%"^</Command^>^\n ^<Arguments^>"%ALLXON_PLUGIN_DIR%"^</Arguments^>^\n ^</Exec^>^\n ^</Actions^>^\n ^</Task^> > "%ALLXON_PLUGIN_DIR%\\service.xml"\nschtasks /Create /XML "%ALLXON_PLUGIN_DIR%\\service.xml" /TN "%APP_NAME%-service"\nschtasks /run /tn %APP_NAME%-service%\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"version-the-plugin-package",children:"Version the Plugin Package\u200b"}),"\n",(0,t.jsxs)(n.p,{children:["You can update ",(0,t.jsx)(n.em,{children:"Version number"})," under ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"}),". Make sure you follow the ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"})," format, and remember to rebuild the plugin packageit after the version update."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["If the plugin format defined in ",(0,t.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," is updated, you must update the plugin version number correspondingly. Otherwise, the Portal displays an error message, such as ",(0,t.jsx)(n.em,{children:'"This plugin version contains multiple alert spec. Please update plugin version or delete the wrong spec"'}),". Although you can ignore this message during the development phase, you need to avoid having different formats in one plugin version when releasing the plugin officially."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmake",metastring:'{2} title="CMakeLists.txt" showLineNumbers',children:'cmake_minimum_required(VERSION 3.23)\nproject(plugin-hello VERSION 1.3.1)\nset(OCTO_SDK_VERSION 3.2.0 CACHE STRING "octo sdk version")\n# ...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Or your can use ",(0,t.jsx)(n.code,{children:"release.sh"})," to update version."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./release.sh 1.3.1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"test-your-plugin-package",children:"Test your Plugin Package"}),"\n",(0,t.jsxs)(n.p,{children:["Before you upload your plugin package to ",(0,t.jsx)(n.strong,{children:"Allxon Plugin Station"}),", you can test the package on your device. To do so, follow the instructions below to install your plugin package on your device through ",(0,t.jsx)(n.strong,{children:"Plugin Online installer"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"install-plugin-package",children:"Install Plugin Package"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"bash",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo bash -c "$(wget -qO - https://get.allxon.net/plugIN/linux)" -s --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]\n'})})}),(0,t.jsx)(s.A,{value:"cmd",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:'powershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE]\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Once done, go to Allxon Portal and check whether your installation is successful."}),"\n",(0,t.jsx)(n.h3,{id:"uninstall-plugin-package",children:"Uninstall Plugin Package"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"bash",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo bash -c "$(wget -qO - https://get.allxon.net/plugIN/linux)" -s --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE] --uninstall\n'})})}),(0,t.jsx)(s.A,{value:"cmd",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-batch",children:'powershell -command "Invoke-WebRequest -OutFile %temp%\\plugin-installer.bat https://get.allxon.net/plugIN/windows" && %temp%\\plugin-installer.bat --app-guid [APP_GUID] --from-path [PLUGIN_PACKAGE] --uninstall\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,l)=>{l.d(n,{A:()=>s});l(6540);var t=l(4164);const a={tabItem:"tabItem_Ymn6"};var i=l(4848);function s(e){let{children:n,hidden:l,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:l,children:n})}},1470:(e,n,l)=>{l.d(n,{A:()=>P});var t=l(6540),a=l(4164),i=l(3104),s=l(6347),r=l(205),o=l(7485),c=l(1682),u=l(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:l}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:l,attributes:t,default:a}}=e;return{value:n,label:l,attributes:t,default:a}}))}(l);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function h(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:l}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:l=!1,groupId:a}=e,i=p(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:l,groupId:a}),[m,x]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(l);return[a,(0,t.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:a}),_=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{_&&o(_)}),[_]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,i]),tabValues:i}}var x=l(2303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var I=l(4848);function f(e){let{className:n,block:l,selectedValue:t,selectValue:s,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,l=o.indexOf(n),a=r[l].value;a!==t&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,I.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":l},n),children:r.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,I.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",_.tabItem,i?.className,{"tabs__item--active":t===n}),children:l??n},n)}))})}function b(e){let{lazy:n,children:l,selectedValue:a}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,I.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=m(e);return(0,I.jsxs)("div",{className:(0,a.A)("tabs-container",_.tabList),children:[(0,I.jsx)(f,{...n,...e}),(0,I.jsx)(b,{...n,...e})]})}function P(e){const n=(0,x.A)();return(0,I.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>r});var t=l(6540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);