(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(7),i=(r(0),r(242)),c={id:"index-azure-portal",title:"Create Redis database on Azure Cache",sidebar_label:"Redis on Azure Cache",slug:"/create/azure/portal"},o={unversionedId:"create/azure/portal/index-azure-portal",id:"create/azure/portal/index-azure-portal",isDocsHomePage:!1,title:"Create Redis database on Azure Cache",description:"Azure Cache for Redis is a native fully-managed service on Microsoft Azure. Azure Cache for Redis offers both the Redis open-source (OSS Redis) and a commercial product from Redis Labs (Redis Enterprise) as a managed service. It provides secure and dedicated Redis server instances and full Redis API compatibility. The service is operated by Microsoft, hosted on Azure, and accessible to any application within or outside of Azure.",source:"@site/docs/create/azure/portal/index-azure-portal.mdx",slug:"/create/azure/portal",permalink:"/create/azure/portal",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/azure/portal/index-azure-portal.mdx",version:"current",sidebar_label:"Redis on Azure Cache",sidebar:"docs",previous:{title:"Azure Cache for Redis",permalink:"/create/azure"},next:{title:"Azure Cache for Redis Enterprise using Terraform",permalink:"/create/azure/terraform-simple"}},s=[{value:"Step 1. Getting Started",id:"step-1-getting-started",children:[]},{value:"Step 2: Setup &amp; Subscribe",id:"step-2-setup--subscribe",children:[]},{value:"Step 3: Configuring New Redis Cache",id:"step-3-configuring-new-redis-cache",children:[]},{value:"Step 4: Connecting to Redis database",id:"step-4-connecting-to-redis-database",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Next Step",id:"next-step",children:[]}],u={toc:s};function d(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Azure Cache for Redis is a native fully-managed service on Microsoft Azure. Azure Cache for Redis offers both the Redis open-source (OSS Redis) and a commercial product from Redis Labs (Redis Enterprise) as a managed service. It provides secure and dedicated Redis server instances and full Redis API compatibility. The service is operated by Microsoft, hosted on Azure, and accessible to any application within or outside of Azure."),Object(i.b)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),Object(i.b)("p",null,"Launch  ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://portal.azure.com"}),"Azure Cache for Redis Enterprise")),Object(i.b)("p",null,Object(i.b)("img",{alt:"RedisLabs Azure Page",src:r(438).default})," "),Object(i.b)("h3",{id:"step-2-setup--subscribe"},"Step 2: Setup & Subscribe"),Object(i.b)("p",null,Object(i.b)("img",{alt:"RedisLabs Azure Page",src:r(439).default})),Object(i.b)("h3",{id:"step-3-configuring-new-redis-cache"},"Step 3: Configuring New Redis Cache"),Object(i.b)("p",null,Object(i.b)("img",{alt:"RedisLabs Azure Page",src:r(440).default})),Object(i.b)("h3",{id:"step-4-connecting-to-redis-database"},"Step 4: Connecting to Redis database"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo redis-cli -h demos.redis.cache.windows.net -p 6379\ndemos.redis.cache.windows.net:6379>\n")),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/t6XQHsKFMKQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("h3",{id:"next-step"},"Next Step"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/develop/dotnet/"}),"Getting Started with .Net and Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-in/azure/azure-cache-for-redis/cache-best-practices"}),"Best Practices for Azure Cache for Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-how-to-use-azure-redis-cache"}),"Quickstart: Use Azure Cache for Redis in .NET Framework"))))}d.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),d=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),b=a,f=p["".concat(c,".").concat(b)]||p[b]||l[b]||i;return r?n.a.createElement(f,o(o({ref:t},u),{},{components:r})):n.a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},438:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/azure7-eeafe873b8466c74fc21f0527e99b7cb.png"},439:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/azure6-073644091c09c764532b06bc28d6c60b.png"},440:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/azure5-8984c1bb0210d6b6de210ad8c7fb3dbf.png"}}]);