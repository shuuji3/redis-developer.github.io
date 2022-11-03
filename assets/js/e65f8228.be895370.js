"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"index-deno",title:"Deno and Redis",sidebar_label:"Deno",slug:"/develop/deno/",authors:["ajeet"]},i=void 0,l={unversionedId:"develop/deno/index-deno",id:"develop/deno/index-deno",title:"Deno and Redis",description:"With over 80,000 stars and 670+ contributors, Deno is a popular modern runtime for JavaScript and TypeScript. It is built on V8, an open-source JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers.",source:"@site/docs/develop/deno/index-deno.mdx",sourceDirName:"develop/deno",slug:"/develop/deno/",permalink:"/develop/deno/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/deno/index-deno.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-deno",title:"Deno and Redis",sidebar_label:"Deno",slug:"/develop/deno/",authors:["ajeet"]},sidebar:"docs",previous:{title:"PHP",permalink:"/develop/php/"},next:{title:"Overview",permalink:"/explore"}},d={},s=[{value:"Features of Deno",id:"features-of-deno",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Example:",id:"example",level:4},{value:"Step 1. Set up a free Redis Enterprise Cloud account",id:"step-1-set-up-a-free-redis-enterprise-cloud-account",level:3},{value:"Step 2. Get Deno",id:"step-2-get-deno",level:3},{value:"Step 3. Verify if Deno is properly installed",id:"step-3-verify-if-deno-is-properly-installed",level:3},{value:"Step 4. Create an empty file with the following content",id:"step-4-create-an-empty-file-with-the-following-content",level:3},{value:"Step 5. Executing the script",id:"step-5-executing-the-script",level:3},{value:"Additional references:",id:"additional-references",level:3}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno"},"With over 80,000 stars and 670+ contributors"),", Deno is a popular modern runtime for JavaScript and TypeScript. It is built on ",(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/"},"V8"),", an open-source JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"deno",src:n(99854).Z,width:"1334",height:"830"})),(0,a.kt)("h3",{id:"features-of-deno"},"Features of Deno"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deno is secure by default. It executes code in a sandbox environment, disallowing runtime access to the underlying filesystem, environment variables and scripts."),(0,a.kt)("li",{parentName:"ul"},"Deno supports both JavaScript and TypeScript out of the box."),(0,a.kt)("li",{parentName:"ul"},"Deno ships as a single executable with no dependencies."),(0,a.kt)("li",{parentName:"ul"},"Comes with built-in utilities such as a dependency inspector (deno info) and a code formatter (deno fmt).")),(0,a.kt)("h3",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x"},"deno.land/x")," is a hosting service for Deno scripts. It caches releases of open source modules stored on GitHub and serves them at one easy-to-remember domain. These modules contain small scripts that demonstrate use of Deno and its standard module."),(0,a.kt)("p",null,"The basic format of code URLs is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://deno.land/x/IDENTIFIER@VERSION/FILE_PATH\n")),(0,a.kt)("h4",{id:"example"},"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://deno.land/std@0.126.0/examples\n")),(0,a.kt)("p",null,"In order to use Redis with Deno you will need a Deno Redis client. In the following sections, we will demonstrate the use of ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/redis@v0.25.3"},"an experimental implementation of a Redis client for Deno"),"."),(0,a.kt)("h3",{id:"step-1-set-up-a-free-redis-enterprise-cloud-account"},"Step 1. Set up a free Redis Enterprise Cloud account"),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"/create/rediscloud/"},"developer.redis.com/create/rediscloud/")," and create ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free/"},"a free Redis Enterprise Cloud account"),". Once you complete this tutorial, you will be provided with the database endpoint URL and password. Save it for future reference."),(0,a.kt)("admonition",{title:"TIP",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,a.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,a.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,a.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Database details",src:n(35384).Z,width:"1346",height:"881"})),(0,a.kt)("h3",{id:"step-2-get-deno"},"Step 2. Get Deno"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install deno\n")),(0,a.kt)("h3",{id:"step-3-verify-if-deno-is-properly-installed"},"Step 3. Verify if Deno is properly installed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deno -V\ndeno 1.19.0\n")),(0,a.kt)("h3",{id:"step-4-create-an-empty-file-with-the-following-content"},"Step 4. Create an empty file with the following content"),(0,a.kt)("p",null,"The following code creates a connection to Redis using Deno:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { connect } from 'https://deno.land/x/redis/mod.ts';\nconst redis = await connect({\n  hostname: 'redis-18386.c110-qa.us-east-1-1.ec2.qa-cloud.redislabs.com',\n  port: 18386,\n  password: 'XXXX',\n});\nconst ok = await redis.set('foo', 'bar');\nconst foo = await redis.get('foo');\n")),(0,a.kt)("p",null,"Replace the values of hostname and port to match those of your Redis database, and add an extra password field if needed."),(0,a.kt)("h3",{id:"step-5-executing-the-script"},"Step 5. Executing the script"),(0,a.kt)("p",null,"Deno can grab scripts from multiple sources. For example, you can provide a filename, a URL, or'-' to read the file from stdin.\nYou can run a JavaScript or TypeScript program by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deno run --allow-net redis.ts\n\n")),(0,a.kt)("p",null,"When you run the script, the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," should be output. You can verify this by running the monitor command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'redis-15692.c264.ap-south-1-1.ec2.cloud.redislabs.com:15692> monitor\nOK\n1646536310.435577 [0 122.171.165.94:50193] "AUTH" "(redacted)"\n1646536310.475578 [0 122.171.165.94:50193] "SET" "foo" "bar"\n1646536310.511578 [0 122.171.165.94:50193] "GET" "foo"\n')),(0,a.kt)("h3",{id:"additional-references"},"Additional references:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://deno.land/manual@v1.19.0/getting_started/command_line_interface"},"Getting Started with Deno Command Line Interface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/denoland/deno/releases"},"Deno Releases Page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/denoland/deno"},"Deno GitHub Repository")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://deno.land/manual@v1.19.0/runtime"},"Deno Runtimes"))),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}c.isMDXComponent=!0},99854:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/deno-8acb12f87c2e4d41c317033c599f3cc1.png"},35384:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"}}]);