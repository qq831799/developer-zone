"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[7561],{6316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var o=t(4848),i=t(8453);const s={},l="Architecture",r={id:"Main Concept/Architecture",title:"Architecture",description:"Allxon Octo SDK establishes an extensible architecture on edge devices with Allxon Agent and device plugins. The SDK includes a set of unified and integrated interfaces, which accelerates plugin development, enhances security, and facilitates and simplifies the communication between device applications and the cloud.",source:"@site/docs/Main Concept/Architecture.md",sourceDirName:"Main Concept",slug:"/Main Concept/Architecture",permalink:"/developer-zone/Main Concept/Architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Main Concept/Architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Try out Hello Plugin",permalink:"/developer-zone/Getting Started/Try out Hello Plugin"},next:{title:"Features",permalink:"/developer-zone/Main Concept/Features"}},c={},a=[{value:"Securing Your Data\u200b",id:"securing-your-data",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Allxon Octo SDK"})," establishes an extensible architecture on edge devices with Allxon Agent and device plugins. The SDK includes a set of unified and integrated interfaces, which accelerates plugin development, enhances security, and facilitates and simplifies the communication between device applications and the cloud."]}),"\n",(0,o.jsxs)(n.p,{children:["This picture below is an overview of the Allxon Octo architecture. The plugin communicates with Allxon Agent through ",(0,o.jsx)(n.a,{href:"https://www.jsonrpc.org/specification",children:"JSON-RPC"})," WebSocket, and the Allxon Agent connects to MQTT server hosted by Allxon Cloud. With such a design, Allxon Octo API seamlessly transmits JSON between the Cloud and the plugin."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"allxon_infrasturcture",src:t(6931).A+"",width:"2358",height:"1516"})}),"\n",(0,o.jsx)(n.p,{children:"Not quite clear? Refer to the descriptions below to learn more about each element."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Element"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Allxon Cloud"}),(0,o.jsx)(n.td,{children:"The backend servers of Allxon service; both Allxon Portal and Allxon Agent are connected to Allxon Cloud."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Allxon Portal"}),(0,o.jsx)(n.td,{children:"The frontend servers of Allxon service."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Allxon Agent"}),(0,o.jsx)(n.td,{children:"An agent application that communicates between edge devices and Allxon Cloud."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Plugin"}),(0,o.jsx)(n.td,{children:"A software application that extends the functionalities of Allxon service. A plugin sends collected data from modules to Allxon Cloud via Allxon Agent. It also sends commands from Allxon Portal to modules via Allxon Agent."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Module"}),(0,o.jsx)(n.td,{children:"A hardware component (e.g. GPU, SSD, fan) or a software application (e.g. remote console utilities). A plugin collects data from a module or sends commands to a module."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"MQTT Broker"}),(0,o.jsx)(n.td,{children:"Allxon Agent connects to a MQTT broker hosted by Allxon Cloud. All the data exchange between Allxon Agents and Allxon Cloud go through this channel."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"WebSocket Server"}),(0,o.jsx)(n.td,{children:"A plugin connects to a WebSocket server hosted within an Allxon Agent. The plugin sends and receives data to/from Allxon Cloud with Allxon Octo APIs through this channel."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Allxon Octo API"}),(0,o.jsx)(n.td,{children:"The Application Programming Interface used to communicate between Allxon Agent and plugins."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Allxon Octo SDK"}),(0,o.jsx)(n.td,{children:"The Software Development Kit provided by Allxon, which helps developers to build plugins and verify Allxon Octo APIs."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"securing-your-data",children:"Securing Your Data\u200b"}),"\n",(0,o.jsxs)(n.p,{children:["Allxon Octo SDK uses ",(0,o.jsx)(n.strong,{children:"Plugin Credential"})," to verify the JSON sent from Allxon Agent and to sign the JSON to be sent to Allxon Agent."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"security",src:t(7123).A+"",width:"2585",height:"782"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'#include <string>\n#include "json_validator.h"\n\nint main(int argc, char **argv)\n{\n    // notifyPluginUpdate json template\n    std::string json_content = "{\\"jsonrpc\\": \\"2.0\\", \\"method\\": \\"v2/notifyPluginUpdate\\"...}"; \n    std::string PLUGIN_NAME = "my_plugin_name";\n    std::string PLUGIN_APP_GUID = "my_plugin_app_guid";\n    std::string PLUGIN_ACCESS_KEY = "my_plugin_access_key";\n    std::string PLUGIN_VERSION = "my_plugin_version";\n    \n    auto json_validator = JsonValidator(PLUGIN_NAME, PLUGIN_APP_GUID,\n                                        PLUGIN_ACCESS_KEY, PLUGIN_VERSION,\n                                        json_content); \n    \n    std::string other_plugin_api_json_content;\n    if (json_validator.Sign(other_plugin_api_json_content))\n    {\n        // if sign-in is successful, you can send it through WebSocket\n        // e.g. \n        // enpoint.send(other_plugin_api_json_content);\n    }\n\n    if (json_validator.Verify(other_plugin_api_json_content))\n    {\n        // if verification is successful, it means json content is safe, you can read it\n    }\n    return 0;\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7123:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Security.drawio-d4496bb546b8740be44612bbaecef3aa.svg"},6931:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/allxon_infrastructure-8f6b821e91e434a11610f270bc33e940.svg"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var o=t(6540);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);