"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,f=u["".concat(o,".").concat(g)]||u[g]||d[g]||n;return a?i.createElement(f,s(s({ref:t},c),{},{components:a})):i.createElement(f,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<n;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(87462),r=(a(67294),a(3905));const n={id:"index-gcp",title:"Create Redis database using Google Cloud",sidebar_label:"Redis on Google Cloud",slug:"/create/gcp",authors:["ajeet"]},s=void 0,l={unversionedId:"create/gcp/index-gcp",id:"create/gcp/index-gcp",title:"Create Redis database using Google Cloud",description:"Redis Enterprise Cloud delivers fully managed Redis Enterprise as a Service. It offers all the capabilities of Redis Enterprise while taking care of all the operational aspects associated with operating Redis in the most efficient manner on Google Cloud Platform. Redis Enterprise Cloud is built on a complete serverless concept, so users don\u2019t need to deal with nodes and clusters",source:"@site/docs/create/gcp/index-gcp.mdx",sourceDirName:"create/gcp",slug:"/create/gcp",permalink:"/create/gcp",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/gcp/index-gcp.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-gcp",title:"Create Redis database using Google Cloud",sidebar_label:"Redis on Google Cloud",slug:"/create/gcp",authors:["ajeet"]},sidebar:"docs",previous:{title:"Azure Cache for Redis Enterprise using Terraform with Private Link",permalink:"/create/azure/terraform-private-endpoint"},next:{title:"Overview",permalink:"/create/aws"}},o={},p=[{value:"Step 1. Getting Started",id:"step-1-getting-started",level:3},{value:"Step 2. Click &quot;Manage via Redis Labs&quot;",id:"step-2-click-manage-via-redis-labs",level:3},{value:"Step 3. Create Subscription",id:"step-3-create-subscription",level:3},{value:"Step 4. Specify the database name",id:"step-4-specify-the-database-name",level:3},{value:"Step 5. Enter sizing details",id:"step-5-enter-sizing-details",level:3},{value:"Step 6: Review &amp; Create",id:"step-6-review--create",level:3},{value:"Step 7. Verify the details",id:"step-7-verify-the-details",level:3},{value:"Step 8. Finalising the setup",id:"step-8-finalising-the-setup",level:3},{value:"Next Steps",id:"next-steps",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Redis Enterprise Cloud delivers fully managed Redis Enterprise as a Service. It offers all the capabilities of Redis Enterprise while taking care of all the operational aspects associated with operating Redis in the most efficient manner on Google Cloud Platform. Redis Enterprise Cloud is built on a complete serverless concept, so users don\u2019t need to deal with nodes and clusters"),(0,r.kt)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),(0,r.kt)("p",null,"Launch ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/library/gcp.redisenterprise.com?pli=1"},"Redis Enterprise Cloud page")," on Google Cloud Platform"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(20313).Z,width:"1248",height:"1004"})),(0,r.kt)("h3",{id:"step-2-click-manage-via-redis-labs"},'Step 2. Click "Manage via Redis Labs"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(66960).Z,width:"1244",height:"646"})),(0,r.kt)("h3",{id:"step-3-create-subscription"},"Step 3. Create Subscription"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(94965).Z,width:"1240",height:"798"})),(0,r.kt)("h3",{id:"step-4-specify-the-database-name"},"Step 4. Specify the database name"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(88198).Z,width:"1242",height:"670"})),(0,r.kt)("h3",{id:"step-5-enter-sizing-details"},"Step 5. Enter sizing details"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(13449).Z,width:"1240",height:"548"})),(0,r.kt)("h3",{id:"step-6-review--create"},"Step 6: Review & Create"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(3753).Z,width:"1244",height:"1118"})),(0,r.kt)("h3",{id:"step-7-verify-the-details"},"Step 7. Verify the details"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(53783).Z,width:"1242",height:"500"})),(0,r.kt)("h3",{id:"step-8-finalising-the-setup"},"Step 8. Finalising the setup"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(67918).Z,width:"1236",height:"1156"})),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/explore/redisinsight/"},"Connecting to the database using RedisInsight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/shoppingcart/"},"How to list & search Movies database using Redisearch"))),(0,r.kt)("h2",{id:""}),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}d.isMDXComponent=!0},67918:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp10-7708650913ffbcd891ccb49ab16273ce.png"},20313:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp2-406d9551019fb2cde74f91fd1bee9212.png"},66960:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp3-5603750853bcb609058bad29e73347bd.png"},94965:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp4-6134bc1c7b62c115a4cd6341293431e3.png"},88198:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp5-80dacc480a4d6922426fefb90b0c1fbf.png"},13449:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp6-157afc8541f4ccb4c1b34e5279a2aa12.png"},3753:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp7-62912fb7ada1011b62760be8cbff61e1.png"},53783:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp8-7a4a74c952e99f64dfdf03072e4067c4.png"}}]);