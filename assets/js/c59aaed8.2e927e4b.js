"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[2315],{9314:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=a(4848),i=a(8453);const t={},d=void 0,o={id:"Implement Features/Commands",title:"Commands",description:"command-sequence",source:"@site/docs/Implement Features/Commands.md",sourceDirName:"Implement Features",slug:"/Implement Features/Commands",permalink:"/Implement Features/Commands",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Implement Features/Commands.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"States",permalink:"/Implement Features/States"},next:{title:"Alerts",permalink:"/Implement Features/Alerts"}},l={},c=[{value:"Tutorials",id:"tutorials",level:2},{value:"Implement the Commands Card",id:"implement-the-commands-card",level:3},{value:"Update States After a Command",id:"update-states-after-a-command",level:3},{value:"Display Type",id:"display-type",level:2},{value:"String",id:"string",level:3},{value:"Text",id:"text",level:3},{value:"Datetime",id:"datetime",level:3},{value:"Switch",id:"switch",level:3},{value:"Checkbox",id:"checkbox",level:3},{value:"List",id:"list",level:3},{value:"ToS",id:"tos",level:3}];function r(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-sequence",src:a(16).A+"",width:"3196",height:"1616"})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Commands"})," feature allows developers to define the commands supported by the plugin. The ",(0,s.jsx)(e.strong,{children:"Commands"})," card provides a custom GUI to send commands through Allxon Portal. You need to send ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate"})," to initialize the card. When you execute commands from Allxon Portal, the plugin receives ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommand"}),", sends ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommandAck"})," back to confirm receipt, and finally sends ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommandAck"})," again to bring the execution result back to Allxon Portal."]}),"\n",(0,s.jsx)(e.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,s.jsx)(e.h3,{id:"implement-the-commands-card",children:"Implement the Commands Card"}),"\n",(0,s.jsxs)(e.p,{children:["Here is a example of using the ",(0,s.jsx)(e.strong,{children:"Commands"})," card:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"{17-35}",children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [],\n        "commands": [\n          {\n            "name": "say_hello",\n            "type": "asynchronous",\n            "displayCategory": "Action",\n            "displayName": "Say Hello",\n            "description": "Say hello to a person",\n            "params": [\n              {\n                "name": "person",\n                "displayName": "Person Name",\n                "description": "Person who you wanna to say hello",\n                "displayType": "string",\n                "required": true,\n                "defaultValue": "Buzz"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"command-card",src:a(5253).A+"",width:"3806",height:"2170"}),"\nFill in the parameter and click the Execute button. Then the command is brought to the plugin via ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommand"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"{3}",children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginCommand?authorization=$argon2id$v=19$m=64,t=16,p=8$YnFaWiIoX1ckSmE9Tkp5YQ$XLS6riVCcBj/EUr5lYnJ8Q",\n  "params": {\n    "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n    "moduleName": "plugin-hello",\n    "commandSource": "remote",\n    "commands": [\n      {\n        "name": "say_hello",\n        "params": [\n          {\n            "name": "person",\n            "value": "Buzz"\n          }\n        ]\n      }\n    ],\n    "commandId": "d0a0af987c17da435b2bc44dfbee8ffe90104f4f",\n    "epoch": "1664185099"\n  }\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["You might be curious about the text following the \u201c",(0,s.jsx)(e.em,{children:"?"}),"\u201d mark in the highlighted line. Such text is used for safety verification. When you call ",(0,s.jsx)(e.code,{children:"JsonValidator::Verify()"}),", Allxon Octo SDK verifies whether this JSON is safe through the text."]})}),"\n",(0,s.jsxs)(e.p,{children:["Once the plugin receives ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommand"}),", it sends back ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommandAck"})," with ",(0,s.jsx)(e.code,{children:'"commandState": "ACCEPTED"'})," to Allxon Portal to confirm receipt."]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["The plugin responds with ",(0,s.jsx)(e.code,{children:'"commandState": "ACCEPTED"'})," or ",(0,s.jsx)(e.code,{children:'"commandState": "REJECTED"'})," to inform the Portal whether the plugin accepts this command or not."]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"{10}",children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginCommandAck",\n  "params": {\n    "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n    "epoch": "1664250407",\n    "commandId": "c96a50867715c200fbea63b5898945512afd9409",\n    "commandSource": "remote",\n    "moduleName": "plugin-hello",\n    "commandState": "ACCEPTED",\n    "commandAcks": [\n      {\n        "name": "say_hello",\n        "result": {\n          "response": "Hello Buzz"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["After completing your command task, send back to Allxon Portal v",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommandAck"})," with ",(0,s.jsx)(e.code,{children:'"commandState": "ACKED"'}),", which contains the execution result."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"{10}",children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginCommandAck",\n  "params": {\n    "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n    "epoch": "1664250407",\n    "commandId": "c96a50867715c200fbea63b5898945512afd9409",\n    "commandSource": "remote",\n    "moduleName": "plugin-hello",\n    "commandState": "ACKED",\n    "commandAcks": [\n      {\n        "name": "say_hello",\n        "result": {\n          "response": "Hello Buzz"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["The plugin responds with ",(0,s.jsx)(e.code,{children:'"commandState": "ACKED"'})," or ",(0,s.jsx)(e.code,{children:'"commandState": "ERRORED"'}),"to inform the Portal of the execution result."]})}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.p,{children:["When the Portal sends out ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommand"}),", a commandId is included. The plugin needs to read and include the commandId when sending back the ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommandAck"}),"."]})}),"\n",(0,s.jsxs)(e.p,{children:["If all goes well, the ",(0,s.jsx)(e.strong,{children:"Command Response Details"})," dialog is displayed on Allxon Portal, as shown below:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-result",src:a(987).A+"",width:"561",height:"665"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"Allxon Portal has a command execution timeout of one minute. If the plugin executes the command for more than a minute, the Portal shows a timeout message."})}),"\n",(0,s.jsx)(e.h3,{id:"update-states-after-a-command",children:"Update States After a Command"}),"\n",(0,s.jsxs)(e.p,{children:["Sometimes executing a command will alter the value of states. To provide users with more immediate feedback, you can use ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommandAck"})," along with updated state values to promptly refresh the Portal."]}),"\n",(0,s.jsxs)(e.p,{children:["Here is a code example of ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommandAck.json"}),". After executing a command, the ",(0,s.jsx)(e.strong,{children:"States"})," card will refresh instantly to reflect the updated values."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginCommandAck.json with States" {19-24}',children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginCommandAck",\n  "params": {\n    "appGUID": "a8e873a1-e5df-43a2-928a-745ff9c94dfb",\n    "epoch": "1664250407",\n    "commandId": "c96a50867715c200fbea63b5898945512afd9409",\n    "commandSource": "remote",\n    "moduleName": "plugin-hello",\n    "commandState": "ACKED",\n    "commandAcks": [\n      {\n        "name": "say_hello",\n        "result": {\n          "response": "Hello Buzz"\n        }\n      }\n    ],\n    "states": [\n      {\n        "name": "greet_message",\n        "value": "Hello Buzz"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"display-type",children:"Display Type"}),"\n",(0,s.jsxs)(e.p,{children:["The card supports several parameter input types (i.e. displayType): ",(0,s.jsx)(e.a,{href:"#string",children:"string"}),", ",(0,s.jsx)(e.a,{href:"#text",children:"text"}),", ",(0,s.jsx)(e.a,{href:"#datetime",children:"datetime"}),", ",(0,s.jsx)(e.a,{href:"#switch",children:"switch"}),", ",(0,s.jsx)(e.a,{href:"#checkbox",children:"checkbox"}),", ",(0,s.jsx)(e.a,{href:"#list",children:"list"}),", and ",(0,s.jsx)(e.a,{href:"#tos",children:"ToS"}),". For how to set up these input types, see the following sections."]}),"\n",(0,s.jsx)(e.h3,{id:"string",children:"String"}),"\n",(0,s.jsxs)(e.p,{children:["The following example shows the code in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a text box for parameter input."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n                {\n                    "name": "stringParam",\n                    "displayType": "string",\n                    "required": false,\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Commands"})," card displays as follows:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-display-type-string",src:a(5377).A+"",width:"588",height:"370"})}),"\n",(0,s.jsxs)(e.p,{children:["When a command is executed, ",(0,s.jsx)(e.code,{children:'"v2/notifyPluginCommand"'})," carries a ",(0,s.jsx)(e.code,{children:'"name"'})," and a ",(0,s.jsx)(e.code,{children:'"value"'})," from the input parameter."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginCommand.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n               {\n                  "name": "stringParam",\n                  "value": "foo"\n               }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"text",children:"Text"}),"\n",(0,s.jsxs)(e.p,{children:["The following example shows the code in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a multiline text box for parameter input."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n                {\n                    "name": "textParam",\n                    "displayType": "text",\n                    "required": false,\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Commands"})," card displays as follows:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-display-type-text",src:a(2055).A+"",width:"584",height:"376"})}),"\n",(0,s.jsxs)(e.p,{children:["When a command is executed, ",(0,s.jsx)(e.code,{children:'"v2/notifyPluginCommand"'})," carries a ",(0,s.jsx)(e.code,{children:'"name"'})," and a ",(0,s.jsx)(e.code,{children:'"value"'})," from the input parameter."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginCommand.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n               {\n                  "name": "dateParam",\n                  "value": "hello\\nworld"\n               }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"datetime",children:"Datetime"}),"\n",(0,s.jsxs)(e.p,{children:["The following example shows the code in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a date/time picker for parameter input. You must define ",(0,s.jsx)(e.code,{children:'"displayFormat"'})," by using one of the following formats:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:'"YYYY-MM-DD"'})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:'"HH:MM"'})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:'"YYYY-MM-DD HH:MM"'})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n                {\n                    "name": "dateParam",\n                    "displayType": "datetime",\n                    "required": false,\n                    "displayFormat": "HH:MM",\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Commands"})," card displays as follows:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-display-type-date",src:a(1134).A+"",width:"583",height:"380"})}),"\n",(0,s.jsxs)(e.p,{children:["When a command is executed, ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommand"})," carries a ",(0,s.jsx)(e.code,{children:'"name"'})," and a ",(0,s.jsx)(e.code,{children:'"value"'})," that follows the ",(0,s.jsx)(e.code,{children:'"displayFormat"'})," defined in the ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginCommand.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n               {\n                  "name": "dateParam",\n                  "value": "12:00"\n               }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"The time parameter to be sent is not a timestamp and does not contain any time zone information. The plugin executes the command of datetime parameter according to the device's time zone."})}),"\n",(0,s.jsx)(e.h3,{id:"switch",children:"Switch"}),"\n",(0,s.jsxs)(e.p,{children:["The following example shows the code in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a switch toggle for parameter input. The switch toggle is used to switch between two parameters. You must define ",(0,s.jsx)(e.code,{children:'"displayValues"'})," as a size 2 Array, with index 0 representing false and index 1 representing true."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n                {\n                    "name": "switchParam",\n                    "displayType": "switch",\n                    "displayValues": [\n                        "offValue",\n                        "onValue"\n                    ],\n                    "defaultValue": "offValue",\n                    "required": false,\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Commands"})," card displays as follows:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-display-type-switch",src:a(466).A+"",width:"579",height:"317"})}),"\n",(0,s.jsxs)(e.p,{children:["When a command is executed, ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommand"})," carries a ",(0,s.jsx)(e.code,{children:'"name"'})," and a ",(0,s.jsx)(e.code,{children:'"value"'})," that follows the ",(0,s.jsx)(e.code,{children:'"displayValues"'})," defined in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginCommand.json"',children:'{\n   ...\n   "commands": [\n       {\n           "name": "command1",\n           "params": [\n              {\n                 "name": "switchParam",\n                 "value": "offValue"\n              }\n           ]\n       }\n   ]\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"checkbox",children:"Checkbox"}),"\n",(0,s.jsxs)(e.p,{children:["The following example shows the code in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a checkbox for parameter input. The checkbox is used to enable or disable the parameter. You must define ",(0,s.jsx)(e.code,{children:'"displayValues"'})," as a size 2 Array, with index 0 representing false and index 1 representing true."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n                {\n                    "name": "checkboxParam",\n                    "displayType": "checkbox",\n                    "displayValues": [\n                        "offValue",\n                        "onValue"\n                    ],\n                    "defaultValue": "offValue",\n                    "required": false,\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"The Commands card displays as follows:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-display-type-checkbox",src:a(1378).A+"",width:"588",height:"336"})}),"\n",(0,s.jsxs)(e.p,{children:["When a command is executed, ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommand"})," carries a ",(0,s.jsx)(e.code,{children:'"name"'})," and a ",(0,s.jsx)(e.code,{children:'"value"'})," that follows the ",(0,s.jsx)(e.code,{children:'"displayValues"'})," defined in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginCommand.json"',children:'{\n   ...\n   "commands": [\n       {\n           "name": "command1",\n           "params": [\n              {\n                 "name": "checkboxParam",\n                 "value": "offValue"\n              }\n           ]\n       }\n   ]\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"list",children:"List"}),"\n",(0,s.jsxs)(e.p,{children:["The following example shows the code in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a dropdown list for parameter selection. You must define ",(0,s.jsx)(e.code,{children:'"displayValues"'})," as the ",(0,s.jsx)(e.strong,{children:"Array"})," type."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n                {\n                    "name": "listParam",\n                    "displayType": "list",\n                    "displayValues": [\n                        "list1",\n                        "list2"\n                    ],\n                    "required": false\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Commands"})," card displays as follows:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-display-type-list",src:a(9770).A+"",width:"591",height:"383"})}),"\n",(0,s.jsxs)(e.p,{children:["When a command is executed, ",(0,s.jsx)(e.code,{children:'"v2/notifyPluginCommand"'})," carries a ",(0,s.jsx)(e.code,{children:'"name"'})," and a ",(0,s.jsx)(e.code,{children:'"value"'})," that follows the ",(0,s.jsx)(e.code,{children:'"displayValues"'})," defined in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginCommand.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n               {\n                  "name": "listParam",\n                  "value": "list1"\n               }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"tos",children:"ToS"}),"\n",(0,s.jsxs)(e.p,{children:["ToS stands for ",(0,s.jsx)(e.strong,{children:"Terms of Service"}),". The following example shows the code in ",(0,s.jsx)(e.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a mandatory parameter that requires users to agree with the ToS to proceed with command execution. You must define ",(0,s.jsx)(e.code,{children:'"displayName"'})," as ",(0,s.jsx)(e.strong,{children:"alias"})," and ",(0,s.jsx)(e.code,{children:'"description"'})," as the ",(0,s.jsx)(e.strong,{children:"URL"})," of the ToS."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n                {\n                    "name": "tosParam",\n                    "displayType": "tos",\n                    "displayName": "Terms of Service",\n                    "description": "https://policies.google.com/terms?hl=en-US",\n                    "required": true\n                    ...\n                }\n            ],\n            ...\n        }\n    ],\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Commands"})," card displays as follows:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"command-display-type-tos",src:a(4174).A+"",width:"587",height:"332"})}),"\n",(0,s.jsxs)(e.p,{children:["When a command is executed, ",(0,s.jsx)(e.code,{children:"v2/notifyPluginCommand"})," carries a ",(0,s.jsx)(e.code,{children:'"name"'})," and a ",(0,s.jsx)(e.code,{children:'"value": false'}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:'title="v2/notifyPluginCommand.json"',children:'{\n    ...\n    "commands": [\n        {\n            "name": "command1",\n            "params": [\n               {\n                  "name": "tosParam",\n                  "value": false\n               }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.p,{children:["The data type of ",(0,s.jsx)(e.code,{children:'"value"'})," is ",(0,s.jsx)(e.strong,{children:"Bool"}),"."]})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}},5253:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-card-10fcfb5e015f9e9ca94369f5fac21f68.svg"},1378:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-display-type-checkbox-cf2b56ccbe4ca1da99abc977b9f40196.png"},1134:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-display-type-date-063c3847e27566e0e5cd677514d61718.png"},9770:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-display-type-list-54e3c7a2e77d40ad5177f14dd6faf8f0.png"},5377:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-display-type-string-a995d6161dbc4f5ca23d02d7cf67468d.png"},466:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-display-type-switch-ce8b16e15aa6696ac3205df8f22f6acd.png"},2055:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-display-type-text-b9a9cd3253e8e97974472b27ae913a14.png"},4174:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-display-type-tos-e12e91584aa4e2b34ad24c08cc63a691.png"},987:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-result-e36e4f8e7853592d02329a36825d81a3.png"},16:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/command-sequence-4ffb8b01cee2b01487df23777921bcb8.svg"},8453:(n,e,a)=>{a.d(e,{R:()=>d,x:()=>o});var s=a(6540);const i={},t=s.createContext(i);function d(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);