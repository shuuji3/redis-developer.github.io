"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,m=u["".concat(d,".").concat(g)]||u[g]||p[g]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const r={id:"getting-started",title:"Getting Started with Redis OM .NET",sidebar_label:"Getting Started",slug:"/develop/dotnet/redis-om-dotnet/getting-started",authors:["steve"]},a=void 0,s={unversionedId:"develop/dotnet/redis-om-dotnet/getting-started/getting-started",id:"develop/dotnet/redis-om-dotnet/getting-started/getting-started",title:"Getting Started with Redis OM .NET",description:"Redis OM is designed to make using Redis easier for .NET developers, so naturally the first question one might ask is where to start?",source:"@site/docs/develop/dotnet/redis-om-dotnet/getting-started/getting-started.md",sourceDirName:"develop/dotnet/redis-om-dotnet/getting-started",slug:"/develop/dotnet/redis-om-dotnet/getting-started",permalink:"/develop/dotnet/redis-om-dotnet/getting-started",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/redis-om-dotnet/getting-started/getting-started.md",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"getting-started",title:"Getting Started with Redis OM .NET",sidebar_label:"Getting Started",slug:"/develop/dotnet/redis-om-dotnet/getting-started",authors:["steve"]},sidebar:"docs",previous:{title:"Basic API Caching using ASP.NET Core",permalink:"/develop/dotnet/aspnetcore/caching/basic-api-caching"},next:{title:"Add and Retrieve Objects",permalink:"/develop/dotnet/redis-om-dotnet/add-and-retrieve-objects"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Connecting to Redis.",id:"connecting-to-redis",level:2},{value:"Initializing RedisConnectionProvider",id:"initializing-redisconnectionprovider",level:2},{value:"Connecting to a Standalone Instance of Redis No Auth",id:"connecting-to-a-standalone-instance-of-redis-no-auth",level:4},{value:"Connecting to Standalone Instance of Redis Just Password",id:"connecting-to-standalone-instance-of-redis-just-password",level:4},{value:"Connecting to Standalone Instance of Redis or Redis Enterprise Username and Password",id:"connecting-to-standalone-instance-of-redis-or-redis-enterprise-username-and-password",level:4},{value:"Connecting to Standalone Instance of Redis Particular Database",id:"connecting-to-standalone-instance-of-redis-particular-database",level:4},{value:"Connecting to Redis Sentinel",id:"connecting-to-redis-sentinel",level:4},{value:"Connecting to Redis Cluster",id:"connecting-to-redis-cluster",level:4},{value:"Getting the RedisConnection, RedisCollection, and RedisAggregationSet",id:"getting-the-redisconnection-rediscollection-and-redisaggregationset",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Redis OM is designed to make using Redis easier for .NET developers, so naturally the first question one might ask is where to start?"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A .NET Standard 2.0 compatible version of .NET. This means that all .NET Framework versions 4.6.1+, .NET Core 2.0+ and .NET 5+ will work with Redis OM .NET."),(0,o.kt)("li",{parentName:"ul"},"An IDE for writing .NET, Visual Studio, Rider, VS Code will all work.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install Redis OM .NET all you need to do is add the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Redis.OM/"},(0,o.kt)("inlineCode",{parentName:"a"},"Redis.OM"))," NuGet package to your project. This can be done by running ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet add package Redis.OM")),(0,o.kt)("h2",{id:"connecting-to-redis"},"Connecting to Redis."),(0,o.kt)("p",null,"The next major step for getting started with Redis OM .NET is to connect to Redis."),(0,o.kt)("p",null,"The Redis OM library is an abstraction above a lower level (closer to Redis) library\u2014",(0,o.kt)("a",{parentName:"p",href:"https://github.com/StackExchange/StackExchange.Redis"},"StackExchange.Redis"),"\u2014which it uses to manage connections to Redis. That is however, an implementation detail which should not be a concern to the user. ",(0,o.kt)("inlineCode",{parentName:"p"},"RedisConnectionProvider")," class contains the connection logic, and provides for connections to Redis. The RedisConnectionProvider should only be initialized once in your app's lifetime."),(0,o.kt)("h2",{id:"initializing-redisconnectionprovider"},"Initializing RedisConnectionProvider"),(0,o.kt)("p",null,"RedisConnectionProvider takes a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/Redis-Developer-URI-Spec/blob/main/spec.md"},"Redis URI")," and uses that to initialize a connection to Redis."),(0,o.kt)("p",null,"Consequentially, all that needs to be done to initialize the client is calling the constructor of ",(0,o.kt)("inlineCode",{parentName:"p"},"RedisConnectionProvider")," with a Redis uri. Alternatively, you can connect with a ConnectionConfiguration object, or if you have a ConnectionMultiplexer in your DI container already, you can construct it with your ConnectionMultiplexer."),(0,o.kt)("h4",{id:"connecting-to-a-standalone-instance-of-redis-no-auth"},"Connecting to a Standalone Instance of Redis No Auth"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var provider = new RedisConnectionProvider("redis://hostname:port");\n')),(0,o.kt)("h4",{id:"connecting-to-standalone-instance-of-redis-just-password"},"Connecting to Standalone Instance of Redis Just Password"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var provider = new RedisConnectionProvider("redis://:password@hostname:port");\n')),(0,o.kt)("h4",{id:"connecting-to-standalone-instance-of-redis-or-redis-enterprise-username-and-password"},"Connecting to Standalone Instance of Redis or Redis Enterprise Username and Password"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var provider = new RedisConnectionProvider("redis://username:password@hostname:port");\n')),(0,o.kt)("h4",{id:"connecting-to-standalone-instance-of-redis-particular-database"},"Connecting to Standalone Instance of Redis Particular Database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var provider = new RedisConnectionProvider("redis://username:password@hostname:port/4");\n')),(0,o.kt)("h4",{id:"connecting-to-redis-sentinel"},"Connecting to Redis Sentinel"),(0,o.kt)("p",null,"When connecting to Redis Sentinel, you will need to provide the sentinel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var provider = new RedisConnectionProvider("redis://username:password@sentinel-hostname:port?endpoint=another-sentinel-host:port&endpoint=yet-another-sentinel-hot:port&sentinel_primary_name=redisprimary");\n')),(0,o.kt)("h4",{id:"connecting-to-redis-cluster"},"Connecting to Redis Cluster"),(0,o.kt)("p",null,"Connecting to a Redis Cluster is similar to connecting to a standalone server, it is advisable however to include at least one other alternative endpoint in the URI as a query parameter in case of a failover event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var provider = new RedisConnectionProvider("redis://username:password@hostname:port?endpoint=another-primary-host:port");\n')),(0,o.kt)("h2",{id:"getting-the-redisconnection-rediscollection-and-redisaggregationset"},"Getting the RedisConnection, RedisCollection, and RedisAggregationSet"),(0,o.kt)("p",null,"There are three primary drivers of Redis in this Library, which can all be accessed from the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," object after it's been initialize."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The RedisConnection - this provides a command level interface to Redis, a limited set of commands are directly implemented, but any command can be executed via the ",(0,o.kt)("inlineCode",{parentName:"li"},"Execute")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ExecuteAsync")," commands. To get a handle to the RedisConnection just use ",(0,o.kt)("inlineCode",{parentName:"li"},"provider.Connection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RedisCollection<T>")," - This is a generic collection used to access Redis. It provides a fluent interface for retrieving data stored in Redis. To create a ",(0,o.kt)("inlineCode",{parentName:"li"},"RedisCollection<T>")," use ",(0,o.kt)("inlineCode",{parentName:"li"},"provider.RedisCollection<T>()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RedisAggregationSet<T>")," - This is another generic collection used to aggregate data in Redis. It provides a fluent interface for performing mapping & reduction operations on Redis. To create a ",(0,o.kt)("inlineCode",{parentName:"li"},"RedisAggregationSet<T>"),"use ",(0,o.kt)("inlineCode",{parentName:"li"},"provider.AggregationSet<T>()"))))}p.isMDXComponent=!0}}]);