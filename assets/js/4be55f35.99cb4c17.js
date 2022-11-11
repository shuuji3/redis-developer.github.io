"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),d=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=n,m=c["".concat(o,".").concat(h)]||c[h]||u[h]||s;return a?i.createElement(m,r(r({ref:t},p),{},{components:a})):i.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var d=2;d<s;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(67294),n=a(52263);const s="authorByline_VoxI",r="authorLabel_a70t",l="authorProfileImage_URwT";const o=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,n.Z)(),o=a.customFields.authors;return i.createElement(i.Fragment,null,t.authors&&i.createElement("div",{className:"docAuthors"},i.createElement("hr",null),t.authors.map((e=>i.createElement("div",{key:e,className:s},i.createElement("img",{className:l,src:`/img/${o[e].image?o[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${o[e].name}`}),i.createElement("div",null,i.createElement("div",{className:r},"Author:"),i.createElement("div",null,i.createElement("a",{href:o[e].link,target:"_blank"},o[e].name),", ",o[e].title))))),i.createElement("hr",null)))}},71318:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(87462),n=(a(67294),a(3905)),s=a(50358);const r={id:"index-windows",title:"How to run RedisInsight on Windows",sidebar_label:"How to run RedisInsight on Windows",slug:"/explore/redisinsightv2/windows",authors:["ajeet"]},l=void 0,o={unversionedId:"explore/redisinsightv2/windows/index-windows",id:"explore/redisinsightv2/windows/index-windows",title:"How to run RedisInsight on Windows",description:"RedisInsight is a visual tool that provides capabilities to design, develop and optimize your Redis application. It is a 100% free Redis GUI that allows developers like you to interact with your databases and manage your data.",source:"@site/docs/explore/redisinsightv2/windows/index-windows.mdx",sourceDirName:"explore/redisinsightv2/windows",slug:"/explore/redisinsightv2/windows",permalink:"/explore/redisinsightv2/windows",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsightv2/windows/index-windows.mdx",tags:[],version:"current",lastUpdatedAt:1667851300,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"index-windows",title:"How to run RedisInsight on Windows",sidebar_label:"How to run RedisInsight on Windows",slug:"/explore/redisinsightv2/windows",authors:["ajeet"]},sidebar:"docs",previous:{title:"Getting Started with RedisInsight",permalink:"/explore/redisinsightv2/getting-started"},next:{title:"Visualize Redis Database keys using the RedisInsight Browser Tool",permalink:"/explore/redisinsightv2/browser"}},d={},p=[{value:"RedisInsight Windows Installer",id:"redisinsight-windows-installer",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",level:3},{value:"Step 2. Create a database",id:"step-2-create-a-database",level:3},{value:"Step 3. Verify the database details",id:"step-3-verify-the-database-details",level:3},{value:"Step 4. Install RedisInsight",id:"step-4-install-redisinsight",level:3},{value:"Step 5. Connect to the Redis Database",id:"step-5-connect-to-the-redis-database",level:3},{value:"Step 6. Use &quot;Browser Tool&quot;",id:"step-6-use-browser-tool",level:3},{value:"Step 5. Overview of User database keys",id:"step-5-overview-of-user-database-keys",level:3},{value:"Step 6. Clone the repository",id:"step-6-clone-the-repository",level:3},{value:"Step 7. Import the user database keys",id:"step-7-import-the-user-database-keys",level:3},{value:"Step 8. Modify a key",id:"step-8-modify-a-key",level:3},{value:"Step 9. Cleaning up",id:"step-9-cleaning-up",level:3},{value:"Further References",id:"further-references",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{frontMatter:r,mdxType:"Authors"}),(0,n.kt)("p",null,"RedisInsight is a visual tool that provides capabilities to design, develop and optimize your Redis application. It is a 100% free Redis GUI that allows developers like you to interact with your databases and manage your data."),(0,n.kt)("p",null,"RedisInsight v2.0 incorporates a completely new tech stack based on the popular Electron and Elastic UI frameworks. You can run the application locally along with your favorite IDE, and it remains cross-platform, supported on Linux, Windows, and MacOS. RedisInsight Browser lets you explore keys in your Redis server. You can add, edit and delete a key. You can even update the key expiry and copy the key name to be used in different parts of the application."),(0,n.kt)("h2",{id:"redisinsight-windows-installer"},"RedisInsight Windows Installer"),(0,n.kt)("p",null,"The RedisInsight desktop client installer for Windows is just 70 MB in size. It allows you to download and use the RedisInsight GUI locally. The desktop client is supported on Windows operating systems and works with all variants of Redis. RedisInsight should install and run on a fresh Windows system."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is no need to install the .NET framework in order to install RedisInsight on Windows.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Create a free Cloud account"),(0,n.kt)("li",{parentName:"ul"},"Step 2. Create a database"),(0,n.kt)("li",{parentName:"ul"},"Step 3. Verify the database details"),(0,n.kt)("li",{parentName:"ul"},"Step 4. Install RedisInsight"),(0,n.kt)("li",{parentName:"ul"},"Step 5. Connect to the Redis database"),(0,n.kt)("li",{parentName:"ul"},"Step 6. Use Browser Tool"),(0,n.kt)("li",{parentName:"ul"},"Step 7. Clone the repository"),(0,n.kt)("li",{parentName:"ul"},"Step 8. Import user database keys"),(0,n.kt)("li",{parentName:"ul"},"Step 9. Modify a Redis key"),(0,n.kt)("li",{parentName:"ul"},"Step 10. Cleaning up")),(0,n.kt)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),(0,n.kt)("p",null,"Create your free ",(0,n.kt)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,n.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,n.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,n.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,n.kt)("h3",{id:"step-2-create-a-database"},"Step 2. Create a database"),(0,n.kt)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'If you want to create a custom database with your preferred name and type of Redis,\nclick "Create a custom database" option shown in the image.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create database ",src:a(83187).Z,width:"1676",height:"1010"})),(0,n.kt)("h3",{id:"step-3-verify-the-database-details"},"Step 3. Verify the database details"),(0,n.kt)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of modules that comes by default.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"verify database",src:a(56816).Z,width:"1346",height:"881"})),(0,n.kt)("h3",{id:"step-4-install-redisinsight"},"Step 4. Install RedisInsight"),(0,n.kt)("p",null,"Click on the RedisInsight executable (.exe file) and install it in your system."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"setup redisinsight",src:a(83084).Z,width:"1306",height:"818"})),(0,n.kt)("p",null,"Once the RedisInsight software is installed, click on its icon to open the RedisInsight application. It will display the End-User License Agreement and Privacy Settings. Enable Analytics and Encrypt sensitive information as per your preference."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"accept redisinsight licence",src:a(73839).Z,width:"1250",height:"666"})),(0,n.kt)("h3",{id:"step-5-connect-to-the-redis-database"},"Step 5. Connect to the Redis Database"),(0,n.kt)("p",null,'Enter the requested details, including Host (endpoint), Port, and Alias in the form, as shown below. You can use "default" as the username for now. Then click \u201cADD REDIS DATABASE\u201d.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"adding redis database",src:a(91067).Z,width:"2332",height:"1734"})),(0,n.kt)("p",null,"Once added, you will see the database name listed as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"listing the redis database",src:a(2781).Z,width:"2226",height:"844"})),(0,n.kt)("h3",{id:"step-6-use-browser-tool"},'Step 6. Use "Browser Tool"'),(0,n.kt)("p",null,'Click on the "Key" icon on the left sidebar to open up the browser tool.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"redis database with no keys",src:a(78520).Z,width:"1254",height:"708"})),(0,n.kt)("h3",{id:"step-5-overview-of-user-database-keys"},"Step 5. Overview of User database keys"),(0,n.kt)("p",null,"Let us import a user database (6k keys). This dataset contains users stored as Redis Hashes."),(0,n.kt)("h3",{id:""}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Users")),(0,n.kt)("p",null,"The user hashes contain the following fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"user:id")," : The key of the hash."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"first_name")," : First Name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"last_name")," : Last name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"email")," : email address."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"gender")," : Gender (male/female)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ip_address")," : IP address."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"country")," : Country Name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"country_code")," : Country Code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"city")," : City of the user."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"longitude")," : Longitude of the user."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"latitude")," : Latitude of the user."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"last_login")," : Epoch time of the last login.")),(0,n.kt)("h3",{id:"step-6-clone-the-repository"},"Step 6. Clone the repository"),(0,n.kt)("p",null,"Open up the CLI terminal and run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/redis-datasets\n cd redis-datasets/user-database\n")),(0,n.kt)("h3",{id:"step-7-import-the-user-database-keys"},"Step 7. Import the user database keys"),(0,n.kt)("p",null,"Open up the CLI terminal and run the following command."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You will need a hostname, port and password to run this for a cloud database.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli -h redis-18386.c110-qa.us-east-1-1.ec2.cloud.redislabs.com -p 18386 -a <enter your password> < ./import_users.redis\n")),(0,n.kt)("p",null,"Refresh the keys view by clicking as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"listing the keys",src:a(15730).Z,width:"1256",height:"702"})),(0,n.kt)("p",null,"You can get a real-time view of the data in your Redis database as shown below:"),(0,n.kt)("p",null,"Select any key in the keys view and the key's value gets displayed in the right hand side that includes fields and values."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hash keys listed",src:a(21874).Z,width:"2606",height:"1720"})),(0,n.kt)("h3",{id:"step-8-modify-a-key"},"Step 8. Modify a key"),(0,n.kt)("p",null,"The RedisInsight browser tool allows you to modify the data instantly.\nSelect any key and change the values as shown in the following screenshot"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"modify the redis keys",src:a(21172).Z,width:"3328",height:"2010"})),(0,n.kt)("h3",{id:"step-9-cleaning-up"},"Step 9. Cleaning up"),(0,n.kt)("p",null,"Run the following command to clean up all the Redis keys:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"flushing the database",src:a(98250).Z,width:"2376",height:"908"})),(0,n.kt)("h2",{id:"further-references"},"Further References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create/windows"},"How to Install Redis on Windows")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Slowlog Configuration using RedisInsight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Explore Redis keys using RedisInsight browser tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight"))),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,n.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},91067:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/database_creds-f7ab4af8f0121712ed02fff3901ebfec.png"},2781:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/database_details-d49880aa22636d96917ad114493a4711.png"},56816:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},73839:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight-eula-190c7f97696dddeeb1751d1097a2e770.png"},15730:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight-keys-added-4c5923014355f0671246a07e78b791ef.png"},78520:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight-no-keys-5e94db93b94823d78d5e328e31048aa6.png"},83084:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight-setup-89df9d0df5d26d019541ce98cbf667b1.png"},98250:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight_flushdb-cd2b4e4acff3a8a2664e9f7bd584609f.png"},21874:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight_hashes-7145ef0db340d5b429cf7eb3407ba745.png"},21172:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight_modify_keys-21b25056d955ad0516ced9ccc831ed1c.png"},83187:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"}}]);