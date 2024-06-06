"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[2658],{1899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(4848),o=n(8453);const s={},a="Rate Limits",r={id:"Rate Limits",title:"Rate Limits",description:"Our mission is to provide a cutting-edge platform that enables users and developers to easily build and deploy plugins that optimize their business operations.",source:"@site/docs/Rate Limits.md",sourceDirName:".",slug:"/Rate Limits",permalink:"/developer-zone/Rate Limits",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Rate Limits.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configs",permalink:"/developer-zone/Implement Features/Configs"},next:{title:"Plugin Station Listing Guideline",permalink:"/developer-zone/Plugin Station Listing Guideline"}},l={},d=[];function c(e){const t={admonition:"admonition",h1:"h1",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"rate-limits",children:"Rate Limits"}),"\n",(0,i.jsxs)(t.p,{children:["Our mission is to provide a cutting-edge platform that enables users and developers to easily build and deploy plugins that optimize their business operations.\nWe have implemented rate limits to prevent abuse or misuse of the ",(0,i.jsx)(t.strong,{children:"Allxon Octo"})," and maintain a smooth and consistent experience for all users. Please take note of the applicable rate limits outlined below."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The maximum payload size for each API transmission is ",(0,i.jsx)(t.strong,{children:"2 KB"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The Agent uploads data (states, metrics, events) ",(0,i.jsx)(t.strong,{children:"once per minute"})," to Allxon Portal."]}),"\n",(0,i.jsxs)(t.li,{children:["A plugin is subject to a maximum hourly limit of ",(0,i.jsx)(t.strong,{children:"500 API calls"})," to the Agent calculated on a rolling basis."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Suppose a plugin updates its states to the Agent every 10 seconds, which translates to 6 API calls per minute. However, the Agent only uploads states to the Portal once per minute. In this scenario, the plugin consumes 5 API calls unnecessarily. Therefore, it is advisable to optimize data uploads by delaying the update interval time to be longer than one minute."}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{children:(0,i.jsx)(t.strong,{children:"Tips for staying within rate limits"})}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Consider updating your data at longer intervals, rather than every minute."}),"\n",(0,i.jsx)(t.li,{children:"Consolidate data into an object and avoid transmitting them individually."}),"\n",(0,i.jsx)(t.li,{children:"Update only those values that have changed, avoiding unnecessary updates for values that remain static."}),"\n"]})]}),"\n",(0,i.jsx)(t.p,{children:"In addition to the rate limits, it is important to consider that IoT and edge AI devices are often subject to limited compute resources, constrained network bandwidth, and harsh installation environments. As such, it is imperative that your plugin does not compromise the performance of the device or any other applications, and that users feel confident in using your plugin."}),"\n",(0,i.jsx)(t.p,{children:"We appreciate your cooperation in creating a better experience for our users, and we look forward to seeing the innovative plugins you develop on our platform."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);