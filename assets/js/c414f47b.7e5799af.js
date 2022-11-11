"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=d(r),y=s,m=c["".concat(l,".").concat(y)]||c[y]||p[y]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50358:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),s=r(52263);const o="authorByline_VoxI",i="authorLabel_a70t",a="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:r}=(0,s.Z)(),l=r.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:o},n.createElement("img",{className:a,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),n.createElement("div",null,n.createElement("div",{className:i},"Author:"),n.createElement("div",null,n.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),n.createElement("hr",null)))}},52875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),s=(r(67294),r(3905)),o=r(50358);const i={id:"index-windows",title:"How to Install Redis on Windows",sidebar_label:"Redis on Windows",slug:"/create/windows",authors:["ajeet"]},a=void 0,l={unversionedId:"create/windows/index-windows",id:"create/windows/index-windows",title:"How to Install Redis on Windows",description:"You can run Redis on Windows 10 using Windows Subsystem for Linux(a.k.a WSL2). WSL2 is a compatibility layer for running Linux binary executables natively on Windows 10 and Windows Server 2019. WSL2 lets developers run a GNU/Linux environment (that includes command-line tools, utilities, and applications) directly on Windows.",source:"@site/docs/create/windows/index-windows.mdx",sourceDirName:"create/windows",slug:"/create/windows",permalink:"/create/windows",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/windows/index-windows.mdx",tags:[],version:"current",lastUpdatedAt:1667851300,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"index-windows",title:"How to Install Redis on Windows",sidebar_label:"Redis on Windows",slug:"/create/windows",authors:["ajeet"]},sidebar:"docs",previous:{title:"Redis on Mac OS",permalink:"/create/homebrew/"},next:{title:"Redis from Source",permalink:"/create/from-source/"}},d={},u=[{value:"Step 1: Turn on Windows Subsystem for Linux",id:"step-1-turn-on-windows-subsystem-for-linux",level:3},{value:"Step 2: Launch Microsoft Windows Store",id:"step-2-launch-microsoft-windows-store",level:3},{value:"Step 3: Install Redis server",id:"step-3-install-redis-server",level:3},{value:"Step 4: Restart the Redis server",id:"step-4-restart-the-redis-server",level:3},{value:"Step 5: Verify if your Redis server is running",id:"step-5-verify-if-your-redis-server-is-running",level:3},{value:"Step 6: Stop the Redis Server",id:"step-6-stop-the-redis-server",level:3},{value:"Next Steps",id:"next-steps",level:3},{value:"How to run Redis GUI tool on Windows",id:"how-to-run-redis-gui-tool-on-windows",level:4},{value:"Model Redis data in your .NET Applications",id:"model-redis-data-in-your-net-applications",level:4},{value:"References",id:"references",level:3},{value:"Redis University",id:"redis-university",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{frontMatter:i,mdxType:"Authors"}),(0,s.kt)("p",null,"You can run Redis on Windows 10 using Windows Subsystem for Linux(a.k.a WSL2). WSL2 is a compatibility layer for running Linux binary executables natively on Windows 10 and Windows Server 2019. WSL2 lets developers run a GNU/Linux environment (that includes command-line tools, utilities, and applications) directly on Windows."),(0,s.kt)("p",null,"Follow these instructions to run a Redis database on Microsoft Windows 10."),(0,s.kt)("h3",{id:"step-1-turn-on-windows-subsystem-for-linux"},"Step 1: Turn on Windows Subsystem for Linux"),(0,s.kt)("p",null,"In Windows 10, Microsoft replaced Command Prompt with PowerShell as the default shell. Open PowerShell as Administrator and run this command to enable Windows Subsystem for Linux (WSL):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"}," Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux\n")),(0,s.kt)("p",null,"Reboot Windows after making the change \u2014 note that you only need to do this once."),(0,s.kt)("h3",{id:"step-2-launch-microsoft-windows-store"},"Step 2: Launch Microsoft Windows Store"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"}," start ms-windows-store:\n")),(0,s.kt)("p",null,"Then search for Ubuntu, or your preferred distribution of Linux, and download the latest version."),(0,s.kt)("h3",{id:"step-3-install-redis-server"},"Step 3: Install Redis server"),(0,s.kt)("p",null,"Installing Redis is simple and straightforward. The following example works with Ubuntu (you'll need to wait for initialization and create a login upon first use):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," sudo apt-add-repository ppa:redislabs/redis\n sudo apt-get update\n sudo apt-get upgrade\n sudo apt-get install redis-server\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo")," command may or may not be required based on the user configuration of your system.")),(0,s.kt)("h3",{id:"step-4-restart-the-redis-server"},"Step 4: Restart the Redis server"),(0,s.kt)("p",null,"Restart the Redis server as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," sudo service redis-server restart\n")),(0,s.kt)("h3",{id:"step-5-verify-if-your-redis-server-is-running"},"Step 5: Verify if your Redis server is running"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"redis-cli")," command to test connectivity to the Redis database."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},' $ redis-cli\n 127.0.0.1:6379> set user:1 "Jane"\n 127.0.0.1:6379> get user:1\n"Jane"\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"By default, Redis has 0-15 indexes for databases, you can change that number databases NUMBER in redis.conf.")),(0,s.kt)("h3",{id:"step-6-stop-the-redis-server"},"Step 6: Stop the Redis Server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," sudo service redis-server stop\n")),(0,s.kt)("h3",{id:"next-steps"},"Next Steps"),(0,s.kt)("div",{class:"row text--center"},(0,s.kt)("div",{class:"col "},(0,s.kt)("div",{className:"ri-container"},(0,s.kt)("h4",{id:"how-to-run-redis-gui-tool-on-windows"},"How to run Redis GUI tool on Windows"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows logo",src:r(66501).Z,width:"299",height:"300"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/explore/redisinsightv2/windows"},"Follow this tutorial")," in order to run RedisInsight on Windows"))),(0,s.kt)("div",{class:"col"},(0,s.kt)("div",{className:"ri-container"},(0,s.kt)("h4",{id:"model-redis-data-in-your-net-applications"},"Model Redis data in your .NET Applications"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"redis OM logo",src:r(66796).Z,width:"1096",height:"274"})),(0,s.kt)("p",null,"Learn how to ",(0,s.kt)("a",{parentName:"p",href:"/develop/dotnet/redis-om-dotnet/getting-started"},"connect to a Redis database with Redis OM Dotnet"))))),(0,s.kt)("h3",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.com/lp/redis-windows/"},"Redis Enterprise For Windows")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.io/clients#c"},"List of .Net Clients")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/StackExchange/StackExchange.Redis"},"Redis client for .NET languages"))),(0,s.kt)("h3",{id:"redis-university"},"Redis University"),(0,s.kt)("p",null,"Check out this video if you want to see Redis on Windows 10 Home Edition in action."),(0,s.kt)("div",{class:"text--center"},(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qTN0GqF_Gq8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}c.isMDXComponent=!0},66796:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redisom-08f465866ad872cbbbf3b8efda971b8a.gif"},66501:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);