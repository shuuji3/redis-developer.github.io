(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{364:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,h=p["".concat(r,".").concat(u)]||p[u]||b[u]||s;return n?i.a.createElement(h,o(o({ref:t},c),{},{components:n})):i.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},484:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"},485:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},486:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/add_database-9830232a6e209dc61f0bfd5a8bf87ea4.png"},487:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/database_creds-f7ab4af8f0121712ed02fff3901ebfec.png"},488:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/database_details-d49880aa22636d96917ad114493a4711.png"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),s=(n(0),n(364)),r={id:"index-usingpython",title:"How to store JSON documents in Redis with Python",sidebar_label:"RedisJSON and Python",slug:"/howtos/redisjson/using-python"},o={unversionedId:"howtos/redisjson/using-python/index-usingpython",id:"howtos/redisjson/using-python/index-usingpython",isDocsHomePage:!1,title:"How to store JSON documents in Redis with Python",description:"RedisJSON is a source-available Redis module that lets you store, manipulate, and query JSON documents in Redis. The standard Redis Python client (v4.0 or greater) supports all of the features of RedisJSON, and in this tutorial, we'll see how to get started with them.",source:"@site/docs/howtos/redisjson/using-python/index-usingpython.mdx",slug:"/howtos/redisjson/using-python",permalink:"/howtos/redisjson/using-python",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/using-python/index-usingpython.mdx",version:"current",lastUpdatedAt:1648472625,sidebar_label:"RedisJSON and Python",sidebar:"docs",previous:{title:"Storing and Querying JSON documents using Redis Stack",permalink:"/howtos/redisjson/getting-started"},next:{title:"How to cache JSON data in Redis with Node.js",permalink:"/howtos/redisjson/using-nodejs"}},d=[{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",children:[]},{value:"Step 2. Create Your database",id:"step-2-create-your-database",children:[]},{value:"Step 3.  Verify the database details",id:"step-3--verify-the-database-details",children:[]},{value:"Step 4. Using RedisInsight",id:"step-4-using-redisinsight",children:[]},{value:"Step 5. Add Redis database",id:"step-5-add-redis-database",children:[]},{value:"Step 6. Enter Redis Enterprise Cloud details",id:"step-6-enter-redis-enterprise-cloud-details",children:[]},{value:"Step 7. Verify the database under RedisInsight dashboard",id:"step-7-verify-the-database-under-redisinsight-dashboard",children:[]},{value:"Storing JSON in Redis",id:"storing-json-in-redis",children:[]},{value:"Installing Redis",id:"installing-redis",children:[{value:"Run the code",id:"run-the-code",children:[]}]},{value:"Verify that the JSON document has been added to Redis",id:"verify-that-the-json-document-has-been-added-to-redis",children:[]},{value:"Fetching specific fields from a JSON document",id:"fetching-specific-fields-from-a-json-document",children:[{value:"References",id:"references",children:[]}]}],c={toc:d};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redis.com/redisjson/"}),"RedisJSON")," is a source-available Redis module that lets you store, manipulate, and query JSON documents in Redis. The standard Redis Python client (v4.0 or greater) supports all of the features of RedisJSON, and in this tutorial, we'll see how to get started with them."),Object(s.b)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),Object(s.b)("p",null,"Create your free ",Object(s.b)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"For a limited time, use ",Object(s.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(s.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(s.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"Click here to sign up")))),Object(s.b)("h3",{id:"step-2-create-your-database"},"Step 2. Create Your database"),Object(s.b)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},'If you want to create a custom database with your preferred name and type of redis,\nclick "Create a custom database" option shown in the image.'))),Object(s.b)("p",null,Object(s.b)("img",{alt:"create database ",src:n(484).default})),Object(s.b)("h3",{id:"step-3--verify-the-database-details"},"Step 3.  Verify the database details"),Object(s.b)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of modules that comes by default.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"verify database",src:n(485).default})),Object(s.b)("h3",{id:"step-4-using-redisinsight"},"Step 4. Using RedisInsight"),Object(s.b)("p",null,"RedisInsight is a visual tool that lets you do both GUI- and CLI-based interactions with your Redis database, and so much more when developing your Redis based application. It is a fully-featured pure Desktop GUI client that provides capabilities to design, develop and optimize your Redis application. It works with any cloud provider as long as you run it on a host with network access to your cloud-based Redis server. It makes it easy to discover cloud databases and configure connection details with a single click. It allows you to automatically add Redis Enterprise Software and Redis Enterprise Cloud databases."),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/explore/redisinsightv2/getting-started"}),"Follow this link"),' to install RedisInsight v2 on your local system.\nAssuming that you already have RedisInsight v2 installed on your MacOS, you can browse through the Applications and click "RedisInsight-v2" to bring up the Redis Desktop GUI tool.'),Object(s.b)("h3",{id:"step-5-add-redis-database"},"Step 5. Add Redis database"),Object(s.b)("p",null,Object(s.b)("img",{alt:"access redisinsight",src:n(486).default})),Object(s.b)("h3",{id:"step-6-enter-redis-enterprise-cloud-details"},"Step 6. Enter Redis Enterprise Cloud details"),Object(s.b)("p",null,"Add the Redis Enterprise cloud database endpoint, port and password."),Object(s.b)("p",null,Object(s.b)("img",{alt:"access redisinsight",src:n(487).default})),Object(s.b)("h3",{id:"step-7-verify-the-database-under-redisinsight-dashboard"},"Step 7. Verify the database under RedisInsight dashboard"),Object(s.b)("p",null,Object(s.b)("img",{alt:"database details",src:n(488).default})),Object(s.b)("h2",{id:"storing-json-in-redis"},"Storing JSON in Redis"),Object(s.b)("p",null,"Let's consider a simple JSON document structure representing a user:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),' {\n  "name": "Jane",\n  "age": 33,\n  "location: "Chawton"\n }\n')),Object(s.b)("h2",{id:"installing-redis"},"Installing Redis"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{})," $ pip3 install redis\nCollecting redis\n  Downloading redis-4.2.0-py3-none-any.whl (225 kB)\nCollecting async-timeout>=4.0.2\n  Downloading async_timeout-4.0.2-py3-none-any.whl (5.8 kB)\nCollecting typing-extensions\n  Downloading typing_extensions-4.1.1-py3-none-any.whl (26 kB)\n..\n Requirement already satisfied: packaging>=20.4 in /usr/lib/python3.8/site-packages (from redis) (20.4)\nCollecting wrapt<2,>=1.10\nInstalling collected packages: async-timeout, typing-extensions, wrapt, deprecated, redis\n    Running setup.py install for wrapt ... done\n    Successfully installed async-timeout-4.0.2 deprecated-1.2.13 redis-4.2.0 typing-extensions-4.1.1 wrapt-1.14.0\n")),Object(s.b)("p",null,"Here's the Python code to store this document in Redis using RedisJSON:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import redis\nfrom redis.commands.json.path import Path\n\nclient = redis.Redis(host='localhost', port=6379, db=0)\n\njane = {\n     'name': \"Jane\", \n     'Age': 33, \n     'Location': \"Chawton\"\n   }\n\nclient.json().set('person:1', Path.root_path(), jane)\n\nresult = client.json().get('person:1')\nprint(result)\n")),Object(s.b)("p",null,"In the code above, we first connect to Redis and store a reference to the connection in the ",Object(s.b)("inlineCode",{parentName:"p"},"client")," variable."),Object(s.b)("p",null,"Next, we create a Python dictionary to represent a person object."),Object(s.b)("p",null,"And finally, we store the object in Redis using the ",Object(s.b)("inlineCode",{parentName:"p"},"json().set()")," method. The first argument, ",Object(s.b)("inlineCode",{parentName:"p"},"person:1")," is the name of the key that will reference the JSON. The second argument is a JSON path. We use ",Object(s.b)("inlineCode",{parentName:"p"},"Path.root_path()"),", as this is a new object. Finally, we pass in the Python dictionary, which will be serialized to JSON."),Object(s.b)("p",null,"To retrieve the JSON object, we run ",Object(s.b)("inlineCode",{parentName:"p"},"json().get()"),", passing in the key. The result is a Python dictionary representing the JSON object stored in Redis."),Object(s.b)("h3",{id:"run-the-code"},"Run the code"),Object(s.b)("p",null,"If you copy the code above into a file called ",Object(s.b)("inlineCode",{parentName:"p"},"main.py"),", you can run the code like so:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ pipenv python run main.py\n")),Object(s.b)("h2",{id:"verify-that-the-json-document-has-been-added-to-redis"},"Verify that the JSON document has been added to Redis"),Object(s.b)("p",null,"Start ",Object(s.b)("inlineCode",{parentName:"p"},"redis-cli")," to connect to your Redis instance. Then run the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'localhost:6379> json.get person:1\n"{\\"name\\":\\"Jane\\",\\"Age\\":33,\\"Location\\":\\"Chawton\\"}"\n')),Object(s.b)("h2",{id:"fetching-specific-fields-from-a-json-document"},"Fetching specific fields from a JSON document"),Object(s.b)("p",null,"You can use RedisJSON to fetch specific fields from a document by specifying a path. For example, here's how to return only the ",Object(s.b)("inlineCode",{parentName:"p"},"name")," field:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"name = client.json().get('person:1', Path('.name'))\nprint(name)\n")),Object(s.b)("p",null,'This code will print the string "Jane".'),Object(s.b)("p",null,"You can execute the same query from the command line:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'localhost:6379> json.get person:1 \'.name\'\n"\\"Jane\\""\n')),Object(s.b)("h3",{id:"references"},"References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://university.redis.com/courses/ru204/"}),"RU204: Storing, Querying and Indexing JSON at Speed")," - a course at Redis University"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/redisjson/using-nodejs"}),"Importing JSON data into Redis using NodeJS")),Object(s.b)("li",{parentName:"ul"},"Learn more about ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://redisjson.io"}),"RedisJSON")," in the Quickstart tutorial")))}l.isMDXComponent=!0}}]);