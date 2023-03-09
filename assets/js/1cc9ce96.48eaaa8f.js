"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7603],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),i=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=i(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),k=i(n),u=r,N=k["".concat(d,".").concat(u)]||k[u]||p[u]||l;return n?a.createElement(N,o(o({ref:e},m),{},{components:n})):a.createElement(N,o({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},50358:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(67294),r=n(52263);const l="authorByline_VoxI",o="authorLabel_a70t",s="authorProfileImage_URwT";const d=function(t){let{frontMatter:e}=t;const{siteConfig:n}=(0,r.Z)(),d=n.customFields.authors;return a.createElement(a.Fragment,null,e.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),e.authors.map((t=>a.createElement("div",{key:t,className:l},a.createElement("img",{className:s,src:`/img/${d[t].image?d[t].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${d[t].name}`}),a.createElement("div",null,a.createElement("div",{className:o},"Author:"),a.createElement("div",null,a.createElement("a",{href:d[t].link,target:"_blank"},d[t].name),", ",d[t].title))))),a.createElement("hr",null)))}},14251:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(50358);const o={id:"index-redisjson-cheatsheet",title:"RedisJSON Cheatsheet",sidebar_label:"RedisJSON CheatSheet",slug:"/howtos/redisjson/redisjson-cheatsheet",authors:["ajeet"]},s=void 0,d={unversionedId:"howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet",id:"howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet",title:"RedisJSON Cheatsheet",description:"| Command                                                                                           | Purpose                                                                                | Syntax                                                                                     |",source:"@site/docs/howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet.mdx",sourceDirName:"howtos/redisjson/redisjson-cheatsheet",slug:"/howtos/redisjson/redisjson-cheatsheet",permalink:"/howtos/redisjson/redisjson-cheatsheet",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-redisjson-cheatsheet",title:"RedisJSON Cheatsheet",sidebar_label:"RedisJSON CheatSheet",slug:"/howtos/redisjson/redisjson-cheatsheet",authors:["ajeet"]},sidebar:"docs",previous:{title:"Indexing JSON document using RediSearch",permalink:"/howtos/redisjson/jsonind-document"},next:{title:"How to build a Shopping cart app using NodeJS and RedisJSON",permalink:"/howtos/redisjson/shoppingcart"}},i={},m=[],p={toc:m};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{frontMatter:o,mdxType:"Authors"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonget"},"JSON.GET")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Return the value at path in JSON serialized form"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.GET ","<","key",">")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonset"},"JSON.SET")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the JSON value at path in key"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.SET ","<","key",">"," ","<","path",">"," ","<","json",">"," ","[NX ","|"," XX]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"hTtps://oss.redis.com/redisjson/commands/#jsonmget"},"JSON.MGET")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the values at path from multiple key"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.MGET ","<","key",">"," ","[key ...]"," ","<","path",">")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsontype"},"JSON.TYPE")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Report the type of JSON value at path ."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.TYPE ","<","key",">"," ","[path]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonnumincrby"},"JSON.NUMINCRBY")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Increments the number value stored at path by number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.NUMINCRBY ","<","key",">"," ","<","path",">"," ","<","number",">")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonnummultby"},"JSON.NUMMULTBY")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Multiplies the number value stored at path by number"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.NUMMULTBY ","<","key",">"," ","<","path",">"," ","<","number",">")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonstrappend"},"JSON.STRAPPEND")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Append the json-string value(s) the string at path"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.STRAPPEND ","<","key",">"," ","[path]"," ","<","json-string",">")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonarrappend"},"JSON.ARRAPPEND")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Append the json value(s) into the array at path after the last element in it"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.ARRAPPEND ","<","key",">"," ","<","path",">"," ","<","json",">"," ","[json ...]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonstrlen"},"JSON.STRLEN")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Report the length of the JSON String at path in key"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.STRLEN ","<","key",">"," ","[path]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonarrlen"},"JSON.ARRLEN")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Report the length of the JSON Array at path in key"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.ARRLEN ","<","key",">"," ","[path]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonarrinsert"},"JSON.ARRINSERT")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Insert the json value(s) into the array at path before the index (shifts to the right)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.ARRINSERT ","<","key",">"," ","<","path",">"," ","<","index",">"," ","<","json",">"," ","[json ...]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonarrindex"},"JSON.ARRINDEX")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Search for the first occurrence of a scalar JSON value in an array"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.ARRINDEX ","<","key",">"," ","<","path",">"," ","<","json-scalar",">"," [start ","[stop]","]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonarrpop"},"JSON.ARRPOP")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove and return element from the index in the array"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.ARRPOP ","<","key",">"," [path ","[index]","]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonarrtrim"},"JSON.ARRTRIM")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Trim an array so that it contains only the specified inclusive range of elements"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.ARRTRIM ","<","key",">"," ","<","path",">"," ","<","start",">"," ","<","stop",">")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonobjkeys"},"JSON.OBJKEYS")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Return the keys in the object that's referenced by path"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.OBJKEYS ","<","key",">"," ","[path]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonobjlen"},"JSON.OBJLEN")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Report the number of keys in the JSON Object at path in key"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.OBJLEN ","<","key",">"," ","[path]"," ")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsondebug"},"JSON.DEBUG")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Report information"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.DEBUG ","<","subcommand & arguments",">")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonresp"},"JSON.RESP")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Return the JSON in key in Redis Serialization Protocol (RESP)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.RESP ","<","key",">"," ","[path]")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("button",null,(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsonforget"},"JSON.FORGET")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"An Alias for ",(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisjson/commands/#jsondel"},"JSON.DEL")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("code",null,"JSON.DEL ","<","key",">"," ","[path]")),(0,r.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);