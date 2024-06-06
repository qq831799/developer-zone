"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[1250],{504:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(4848),r=i(8453);const s={},o="Rate Limits",a={id:"Ratelimits",title:"Rate Limits",description:"Every Allxon API endpoint has a rate limit on the number of requests you can make within a specific time window. If you exceed this limit, you will see error responses with status code 429.",source:"@site/allxonApi/Ratelimits.md",sourceDirName:".",slug:"/Ratelimits",permalink:"/developer-zone/allxon-api/Ratelimits",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"allxonApiSidebar",previous:{title:"Authorization",permalink:"/developer-zone/allxon-api/APIAuthorization"}},l={},c=[{value:"Checking the Rate Limits",id:"checking-the-rate-limits",level:2},{value:"Exceeding the Rate Limit",id:"exceeding-the-rate-limit",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"rate-limits",children:"Rate Limits"}),"\n",(0,n.jsxs)(t.p,{children:["Every Allxon API endpoint has a rate limit on the number of requests you can make within a specific time window. If you exceed this limit, you will see error responses with status code ",(0,n.jsx)(t.code,{children:"429"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The rate limiter restricts the number of API requests to ",(0,n.jsx)(t.code,{children:"1000 calls/hour"}),".\nIf you would like to increase the rate limit, please ",(0,n.jsx)(t.a,{href:"https://www.allxon.com/contact",children:"contact us"})," to upgrade your usage."]}),"\n",(0,n.jsx)(t.h2,{id:"checking-the-rate-limits",children:"Checking the Rate Limits"}),"\n",(0,n.jsx)(t.p,{children:"You can use the API response's headers to determine your rate limit."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Header name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"X-Ratelimit-Limit"}),(0,n.jsx)(t.td,{children:"The maximum number of requests that you can make per hour"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"X-Ratelimit-Remaining"}),(0,n.jsx)(t.td,{children:"The number of requests remaining in the current rate-limit window"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"X-Ratelimit-Reset"}),(0,n.jsx)(t.td,{children:"The time, in seconds, at which the current rate-limit window resets"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"exceeding-the-rate-limit",children:"Exceeding the Rate Limit"}),"\n",(0,n.jsxs)(t.p,{children:["If you exceed the rate limit, you will receive a response of ",(0,n.jsx)(t.code,{children:"429"}),", and the ",(0,n.jsx)(t.code,{children:"X-Ratelimit-Remaining"})," header will be 0. You should not retry your request until after the time specified in the ",(0,n.jsx)(t.code,{children:"X-Ratelimit-Reset"})," header."]}),"\n",(0,n.jsx)(t.p,{children:"To ensure continued access to the API, please avoid making excessive requests. Exceeding your rate limit may result in temporary blocking of your integration."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(6540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);