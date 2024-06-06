"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[1809],{8895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(4848),o=t(8453);const s={},r="Make Your First Allxon API Request",a={id:"GettingStarted",title:"Make Your First Allxon API Request",description:"This section will help you get started quickly with the Allxon API using curl. It guides you through a simple interaction to retrieve the device connection status.",source:"@site/allxonApi/GettingStarted.md",sourceDirName:".",slug:"/GettingStarted",permalink:"/developer-zone/allxon-api/GettingStarted",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"allxonApiSidebar",previous:{title:"Introduction",permalink:"/developer-zone/allxon-api/Introduction"},next:{title:"Overview",permalink:"/developer-zone/allxon-api/APIOverview"}},l={},c=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Create Your API Key",id:"create-your-api-key",level:2},{value:"Make an API Request",id:"make-an-api-request",level:2},{value:"Linux",id:"linux",level:3},{value:"Using <code>curl</code> on the Command Line",id:"using-curl-on-the-command-line",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"make-your-first-allxon-api-request",children:"Make Your First Allxon API Request"}),"\n",(0,i.jsxs)(n.p,{children:["This section will help you get started quickly with the Allxon API using ",(0,i.jsx)(n.code,{children:"curl"}),". It guides you through a simple interaction to retrieve the device connection status."]}),"\n",(0,i.jsxs)(n.p,{children:["For a more comprehensive understanding of the Allxon API, please visit ",(0,i.jsx)(n.a,{href:"/developer-zone/allxon-api/APIOverview",children:"API Reference"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,i.jsxs)(n.p,{children:["Before you begin using Allxon API, ensure you have an Allxon account and your edge devices are set up on Allxon Portal. For more information, please visit our ",(0,i.jsx)(n.a,{href:"https://www.allxon.com/knowledge",children:"Resource Center"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"create-your-api-key",children:"Create Your API Key"}),"\n",(0,i.jsxs)(n.p,{children:["The first step is to create a new API key on ",(0,i.jsx)(n.a,{href:"https://dms.allxon.com/developer/apikeys",children:"Allxon Portal"}),".\nLogin in and navigate to Allxon API Page."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"apiEntryPoint",src:t(9979).A+"",width:"2926",height:"1502"})}),"\n",(0,i.jsxs)(n.p,{children:["There is a one-to-one relationship between the ",(0,i.jsx)(n.strong,{children:"Key ID"})," and the ",(0,i.jsx)(n.strong,{children:"Secret Key"}),".\nCreate an API key by clicking ",(0,i.jsx)(n.strong,{children:"Generate API Key"}),", and enter a customized name for this API Key. You can edit this name later.\n",(0,i.jsx)(n.img,{alt:"generateApiKeyDialog",src:t(5569).A+"",width:"2926",height:"1502"})]}),"\n",(0,i.jsxs)(n.p,{children:["Be aware that the secret key will only be displayed temporarily as soon as you navigate away from this dialog, you will not be able to retrieve or restore this generated secret key.\n",(0,i.jsx)(n.img,{alt:"apiKeyDialog",src:t(8024).A+"",width:"2926",height:"1502"})]}),"\n",(0,i.jsx)(n.h2,{id:"make-an-api-request",children:"Make an API Request"}),"\n",(0,i.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,i.jsxs)(n.h4,{id:"using-curl-on-the-command-line",children:["Using ",(0,i.jsx)(n.code,{children:"curl"})," on the Command Line"]}),"\n",(0,i.jsxs)(n.p,{children:["Create a shell script (e.g., ",(0,i.jsx)(n.code,{children:"get_device_connection.sh"}),") by using the lines below, and insert your API key details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\n\nkeyid="Your API Key\'s Key ID"\n\nsecret="Your API Key\'s Secret"\n\n# get current epoch in milliseconds\nEPOCH=$(date +%s%3N)\n\nmethod="GET"\n\npath="connection"\n\n# calculate signing_key\nsigning_key=$( echo -n "$(($EPOCH / 3600000))" | openssl dgst -sha256 -hmac "$secret" -r | cut -d\' \' -f1 )\n\n# calculate signature\nsignature=$( echo -n "$method/$path$EPOCH" | openssl dgst -sha256 -hmac "$signing_key" -r | cut -d\' \' -f1 )\n\ncurl "https://us.api-dev.allxon.com/$path" \\\n-X "$method" \\\n-H "Accept: application/json" \\\n-H "Accept-Encoding: gzip" \\\n-H "Content-Type: application/json" \\\n-H "Authorization: ALLXON-SIG1 Credential=\\"$keyid\\",Signature=\\"$signature\\"" \\\n-H "X-Allxon-Epoch: $EPOCH" \\\n--compressed\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After creating the ",(0,i.jsx)(n.code,{children:"get_device_connection.sh"}),", change the access permissions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"chmod u+x ./get_device_connection.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, execute the script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"./get_device_connection.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should receive a response as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[{\n    "sn": "your device\'s sn",\n    "status": "online" // according to your device status at portal\n}]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9979:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/apiEntryPoint-4d9f973fc0dcb5f30ba638da5a5479f4.png"},8024:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/apiKeyDialog-44fda63f6fc22742a23cf304350a5cf9.png"},5569:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/generateApiKeyDialog-5bcd60a2c11c7cd4c90da4f1eed1c10d.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);