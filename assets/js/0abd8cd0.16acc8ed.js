"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,c=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(52263);const o="authorByline_VoxI",r="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,i.Z)(),l=n.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:o},a.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:r},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},18465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),o=n(50358);const r={id:"index-redis-om",title:"Getting Started With Redis OM for Python",sidebar_label:"Redis OM for Python",slug:"/develop/python/redis-om",authors:["andrew"]},s=void 0,l={unversionedId:"develop/python/redis-om/index-redis-om",id:"develop/python/redis-om/index-redis-om",title:"Getting Started With Redis OM for Python",description:"Redis OM for Python makes it easy to model and query data in Redis using",source:"@site/docs/develop/python/redis-om/index-redis-om.mdx",sourceDirName:"develop/python/redis-om",slug:"/develop/python/redis-om",permalink:"/develop/python/redis-om",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/python/redis-om/index-redis-om.mdx",tags:[],version:"current",lastUpdatedAt:1667847069,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"index-redis-om",title:"Getting Started With Redis OM for Python",sidebar_label:"Redis OM for Python",slug:"/develop/python/redis-om",authors:["andrew"]}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Python",id:"python",level:2},{value:"Redis",id:"redis",level:2},{value:"Downloading Redis",id:"downloading-redis",level:3},{value:"Installing Redis On Windows",id:"installing-redis-on-windows",level:3},{value:"Using Redis With Docker",id:"using-redis-with-docker",level:3},{value:"Recommended: RediSearch and RedisJSON",id:"recommended-redisearch-and-redisjson",level:2},{value:"Starting Redis",id:"starting-redis",level:2},{value:"Ubuntu Linux (Including WSL)",id:"ubuntu-linux-including-wsl",level:3},{value:"macOS with Homebrew",id:"macos-with-homebrew",level:3},{value:"Docker",id:"docker",level:3},{value:"Docker with the <code>redis-stack</code> image (recommended)",id:"docker-with-the-redis-stack-image-recommended",level:4},{value:"Docker with the <code>redis</code> image",id:"docker-with-the-redis-image",level:4},{value:"Installing Redis OM",id:"installing-redis-om",level:2},{value:"Setting the Redis URL Environment Variable",id:"setting-the-redis-url-environment-variable",level:2},{value:"Defining a Model",id:"defining-a-model",level:2},{value:"The HashModel Class",id:"the-hashmodel-class",level:3},{value:"Type Annotations",id:"type-annotations",level:3},{value:"Creating Models",id:"creating-models",level:2},{value:"Optional Fields",id:"optional-fields",level:3},{value:"Default Values",id:"default-values",level:3},{value:"Automatic Primary Keys",id:"automatic-primary-keys",level:3},{value:"Validating Data",id:"validating-data",level:2},{value:"Models Coerce Values By Default",id:"models-coerce-values-by-default",level:3},{value:"Strict Validation",id:"strict-validation",level:3},{value:"Saving Models",id:"saving-models",level:2},{value:"Examining Your Data In Redis",id:"examining-your-data-in-redis",level:2},{value:"Getting a Model",id:"getting-a-model",level:2},{value:"Querying for Models With Expressions",id:"querying-for-models-with-expressions",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{frontMatter:r,mdxType:"Authors"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-python"},"Redis OM for Python")," makes it easy to model and query data in Redis using\ndeclarative models that will feel right at home to users of Peewee, SQLAlchemy,\nand the Django ORM."),(0,i.kt)("p",null,"This tutorial will walk you through installing Redis OM for Python, creating\nyour first model, and using it to save and validate data."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Redis OM requires Python version 3.9 or above and a Redis instance to connect\nto."),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,"Make sure you are running ",(0,i.kt)("strong",{parentName:"p"},"Python version 3.9 or higher"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python --version\nPython 3.9.0\n")),(0,i.kt)("p",null,"If you don't have Python installed, you can download it from\n",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python.org"),", use\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"Pyenv"),", or install Python with your operating\nsystem's package manager."),(0,i.kt)("h2",{id:"redis"},"Redis"),(0,i.kt)("p",null,"Redis OM saves data in Redis, so you will need Redis installed and running to\ncomplete this tutorial."),(0,i.kt)("h3",{id:"downloading-redis"},"Downloading Redis"),(0,i.kt)("p",null,"The latest version of Redis is available from ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis.io"),". You\ncan also install Redis with your operating system's package manager."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial will guide you through starting Redis locally, but the\ninstructions will also work if Redis is running on a remote server.")),(0,i.kt)("h3",{id:"installing-redis-on-windows"},"Installing Redis On Windows"),(0,i.kt)("p",null,"Redis doesn't run directly on Windows, but you can use Windows Subsystem for\nLinux (WSL) to run Redis. See ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/_nFwPTHOMIY"},"our video on\nYouTube")," for a walk-through."),(0,i.kt)("p",null,"Windows users can also use Docker. See the next section on running Redis with\nDocker for more information."),(0,i.kt)("h3",{id:"using-redis-with-docker"},"Using Redis With Docker"),(0,i.kt)("p",null,"Instead of installing Redis manually or with a package manager, you can run\nRedis with Docker."),(0,i.kt)("p",null,"We recommend the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/redis/redis-stack"},"redis-stack")," image\nbecause it includes Redis modules that Redis OM can use to give you extra\nfeatures. Later sections of this guide will provide more detail about these\nfeatures."),(0,i.kt)("p",null,"You can also use the official Redis Docker image, which is hosted on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/redis"},"Docker\nHub"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": We'll talk about how to actually start Redis with Docker when we\ndiscuss ",(0,i.kt)("em",{parentName:"p"},"running")," Redis later in this guide."),(0,i.kt)("h2",{id:"recommended-redisearch-and-redisjson"},"Recommended: RediSearch and RedisJSON"),(0,i.kt)("p",null,"Redis OM relies on the ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/docs/stack/search/"},"RediSearch")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/docs/stack/json/"},"RedisJSON")," Redis modules to support rich queries and embedded\nmodels."),(0,i.kt)("p",null,"You don't need these Redis modules to use Redis OM's data modeling, validation,\nand persistence features, but we recommend them to get the most out of Redis OM."),(0,i.kt)("p",null,"The easiest way to run these Redis modules during local development is to use\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/redis/redis-stack"},"redis-stack")," Docker image."),(0,i.kt)("p",null,'For other installation methods, follow the "Quick Start" guides on both modules\'\nhome pages.'),(0,i.kt)("h2",{id:"starting-redis"},"Starting Redis"),(0,i.kt)("p",null,"Before you get started with Redis OM, make sure you start Redis."),(0,i.kt)("p",null,"The command to start Redis will depend on how you installed it."),(0,i.kt)("h3",{id:"ubuntu-linux-including-wsl"},"Ubuntu Linux (Including WSL)"),(0,i.kt)("p",null,"If you installed Redis using ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),", start it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo systemctl restart redis.service\n")),(0,i.kt)("p",null,"Otherwise, you can start the server manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ redis-server start\n")),(0,i.kt)("h3",{id:"macos-with-homebrew"},"macOS with Homebrew"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ brew services start redis\n")),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"The command to start Redis with Docker depends on the image you've chosen to\nuse."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TIP:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," option in these examples runs Redis in the background, while\n",(0,i.kt)("inlineCode",{parentName:"p"},"-p 6379:6379")," makes Redis reachable at port 6379 on your localhost."),(0,i.kt)("h4",{id:"docker-with-the-redis-stack-image-recommended"},"Docker with the ",(0,i.kt)("inlineCode",{parentName:"h4"},"redis-stack")," image (recommended)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ docker run -d -p 6379:6379 redis/redis-stack\n")),(0,i.kt)("h4",{id:"docker-with-the-redis-image"},"Docker with the ",(0,i.kt)("inlineCode",{parentName:"h4"},"redis")," image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ docker run -d -p 6379:6379 redis\n")),(0,i.kt)("h2",{id:"installing-redis-om"},"Installing Redis OM"),(0,i.kt)("p",null,"The recommended way to install Redis OM is with\n",(0,i.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"Poetry"),". You can install Redis OM using Poetry\nwith the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ poetry install redis-om\n")),(0,i.kt)("p",null,"If you're using Pipenv, the command is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pipenv install redis-om\n")),(0,i.kt)("p",null,"Finally, you can install Redis OM with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pip install redis-om\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TIP:")," If you aren't using Poetry or Pipenv and are instead installing\ndirectly with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),", we recommend that you install Redis OM in a virtual\nenvironment (AKA, a virtualenv). If you aren't familiar with this concept, see\n",(0,i.kt)("a",{parentName:"p",href:"https://realpython.com/lessons/creating-virtual-environment/"},"Dan Bader's video and transcript"),"."),(0,i.kt)("h2",{id:"setting-the-redis-url-environment-variable"},"Setting the Redis URL Environment Variable"),(0,i.kt)("p",null,"We're almost ready to create a Redis OM model! But first, we need to make sure\nthat Redis OM knows how to connect to Redis."),(0,i.kt)("p",null,"By default, Redis OM tries to connect to Redis on your localhost at port 6379.\nMost local install methods will result in Redis running at this location, in\nwhich case you don't need to do anything special."),(0,i.kt)("p",null,"However, if you configured Redis to run on a different port, or if you're using\na remote Redis server, you'll need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_OM_URL")," environment\nvariable."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_OM_URL")," environment variable follows the redis-py URL format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"redis://[[username]:[password]]@localhost:6379/[database number]\n")),(0,i.kt)("p",null,"The default connection is equivalent to the following ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_OM_URL")," environment\nvariable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"redis://@localhost:6379\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TIP:")," Redis databases are numbered, and the default is 0. You can leave off\nthe database number to use the default database."),(0,i.kt)("p",null,'Other supported prefixes include "rediss" for SSL connections and "unix" for\nUnix domain sockets:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rediss://[[username]:[password]]@localhost:6379/0\nunix://[[username]:[password]]@/path/to/socket.sock?db=0\n")),(0,i.kt)("h2",{id:"defining-a-model"},"Defining a Model"),(0,i.kt)("p",null,"In this tutorial, we'll create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer")," model that validates and saves data.\nLet's start with a basic definition of the model. We'll add features as we go\nalong."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: str\n")),(0,i.kt)("p",null,"There are a few details to note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Our ",(0,i.kt)("inlineCode",{parentName:"li"},"Customer")," model extends the ",(0,i.kt)("inlineCode",{parentName:"li"},"HashModel")," class. This means that it will\nbe saved to Redis as a hash. The other model class that Redis OM provides is\n",(0,i.kt)("inlineCode",{parentName:"li"},"JsonModel"),", which we'll discuss later."),(0,i.kt)("li",{parentName:"ol"},"We've specified the model's fields using Python type annotations.")),(0,i.kt)("p",null,"Let's dig into the ",(0,i.kt)("inlineCode",{parentName:"p"},"HashModel")," class and type annotations a bit more."),(0,i.kt)("h3",{id:"the-hashmodel-class"},"The HashModel Class"),(0,i.kt)("p",null,"When you subclass ",(0,i.kt)("inlineCode",{parentName:"p"},"HashModel"),", your subclass is both a Redis OM model, with\nmethods for saving data to Redis, ",(0,i.kt)("em",{parentName:"p"},"and")," a Pydantic model."),(0,i.kt)("p",null,"This means that you can use Pydantic field validations with your Redis OM\nmodels, which we'll cover later, when we talk about validation. But this also\nmeans you can use Redis OM models anywhere you would use a Pydantic model, like\nin your FastAPI applications. \ud83e\udd2f"),(0,i.kt)("h3",{id:"type-annotations"},"Type Annotations"),(0,i.kt)("p",null,"The type annotations you add to your model fields are used for a few purposes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Validating data with Pydantic validators"),(0,i.kt)("li",{parentName:"ul"},"Serializing data Redis"),(0,i.kt)("li",{parentName:"ul"},"Deserializing data from Redis")),(0,i.kt)("p",null,"We'll see examples of these throughout the course of this tutorial."),(0,i.kt)("p",null,"An important detail about the ",(0,i.kt)("inlineCode",{parentName:"p"},"HashModel")," class is that it does not support\n",(0,i.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),", or mapping (like ",(0,i.kt)("inlineCode",{parentName:"p"},"dict"),") types. This is because Redis hashes\ncannot contain lists, sets, or other hashes."),(0,i.kt)("p",null,"If you want to model fields with a list, set, or mapping type, or another model,\nyou'll need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonModel")," class, which can support these types, as well\nas embedded models."),(0,i.kt)("h2",{id:"creating-models"},"Creating Models"),(0,i.kt)("p",null,"Let's see what creating a model object looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: str\n\n\nandrew = Customer(\n    first_name="Andrew",\n    last_name="Brookins",\n    email="andrew.brookins@example.com",\n    join_date=datetime.date.today(),\n    age=38,\n    bio="Python developer, works at Redis, Inc."\n)\n')),(0,i.kt)("h3",{id:"optional-fields"},"Optional Fields"),(0,i.kt)("p",null,"What would happen if we left out one of these fields, like ",(0,i.kt)("inlineCode",{parentName:"p"},"bio"),"?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\n\nfrom redis_om import HashModel\nfrom pydantic import ValidationError\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: str\n\n\n# All fields are required because none of the fields\n# are marked `Optional`, so we get a validation error:\ntry:\n    Customer(\n        first_name="Andrew",\n        last_name="Brookins",\n        email="andrew.brookins@example.com",\n        join_date=datetime.date.today(),\n        age=38  # <- We didn\'t pass in a bio!\n    )\nexcept ValidationError as e:\n    print(e)\n    """\n    ValidationError: 1 validation error for Customer\n    bio\n      field required (type=value_error.missing)\n    """\n')),(0,i.kt)("p",null,"If we want the ",(0,i.kt)("inlineCode",{parentName:"p"},"bio")," field to be optional, we need to change the type annotation\nto use ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\nfrom typing import Optional\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: Optional[str]  # <- Now, bio is an Optional[str]\n")),(0,i.kt)("p",null,"Now we can create ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer")," objects with or without the ",(0,i.kt)("inlineCode",{parentName:"p"},"bio")," field."),(0,i.kt)("h3",{id:"default-values"},"Default Values"),(0,i.kt)("p",null,"Fields can have default values. You set them by assigning a value to a field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: Optional[str] = "Super dope"  # <- We added a default here\n')),(0,i.kt)("p",null,"Now, if we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer")," object without a ",(0,i.kt)("inlineCode",{parentName:"p"},"bio")," field, it will use the\ndefault value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: Optional[str] = "Super dope"\n\n\nandrew = Customer(\n    first_name="Andrew",\n    last_name="Brookins",\n    email="andrew.brookins@example.com",\n    join_date=datetime.date.today(),\n    age=38)  # <- Notice, we didn\'t give a bio!\n\nprint(andrew.bio)  # <- So we got the default value.\n# > \'Super Dope\'\n')),(0,i.kt)("p",null,"The model will then save this default value to Redis the next time you call\n",(0,i.kt)("inlineCode",{parentName:"p"},"save()"),"."),(0,i.kt)("h3",{id:"automatic-primary-keys"},"Automatic Primary Keys"),(0,i.kt)("p",null,"Models generate a globally unique primary key automatically without needing to talk to Redis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: Optional[str] = "Super dope"\n\n\nandrew = Customer(\n    first_name="Andrew",\n    last_name="Brookins",\n    email="andrew.brookins@example.com",\n    join_date=datetime.date.today(),\n    age=38)\n\nprint(andrew.pk)\n# > \'01FJM6PH661HCNNRC884H6K30C\'\n')),(0,i.kt)("p",null,"The ID is available ",(0,i.kt)("em",{parentName:"p"},"before")," you save the model."),(0,i.kt)("p",null,"The default ID generation function creates\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ulid/spec"},"ULIDs"),", though you can change the function that\ngenerates the primary key for models if you'd like to use a different kind of\nprimary key."),(0,i.kt)("h2",{id:"validating-data"},"Validating Data"),(0,i.kt)("p",null,"Redis OM uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/samuelcolvin/pydantic"},"Pydantic")," to validate data based on the type\nannotations you assign to fields in a model class."),(0,i.kt)("p",null,"This validation ensures that fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"first_name"),", which the ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer"),"\nmodel marked as a ",(0,i.kt)("inlineCode",{parentName:"p"},"str"),", are always strings. ",(0,i.kt)("strong",{parentName:"p"},"But every Redis OM model is also\na Pydantic model"),", so you can use Pydantic validators like ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailStr"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"Pattern"),", and many more for complex validations!"),(0,i.kt)("p",null,"For example, we defined the ",(0,i.kt)("inlineCode",{parentName:"p"},"join_date")," for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer")," model earlier as a\n",(0,i.kt)("inlineCode",{parentName:"p"},"datetime.date"),". So, if we try to create a model with a ",(0,i.kt)("inlineCode",{parentName:"p"},"join_date")," that isn't a\ndate, we'll get a validation error."),(0,i.kt)("p",null,"Let's try it now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom redis_om import HashModel\nfrom pydantic import ValidationError\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: Optional[str] = "Super dope"\n\n\ntry:\n    Customer(\n        first_name="Andrew",\n        last_name="Brookins",\n        email="a@example.com",\n        join_date="not a date!",  # <- The problem line!\n        age=38\n    )\nexcept ValidationError as e:\n    print(e)\n    """\n    pydantic.error_wrappers.ValidationError: 1 validation error for Customer\n    join_date\n      invalid date format (type=value_error.date)\n    """\n')),(0,i.kt)("h3",{id:"models-coerce-values-by-default"},"Models Coerce Values By Default"),(0,i.kt)("p",null,'You might wonder what qualifies as a "date" in our last validation example. By\ndefault, Redis OM will try to coerce input values to the correct type. That\nmeans we can pass a date string for ',(0,i.kt)("inlineCode",{parentName:"p"},"join_date")," instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n\n\nandrew = Customer(\n    first_name="Andrew",\n    last_name="Brookins",\n    email="a@example.com",\n    join_date="2020-01-02",  # <- We\'re passing a YYYY-MM-DD date string now\n    age=38\n)\n\nprint(andrew.join_date)\n# > 2021-11-02\ntype(andrew.join_date)\n# > datetime.date  # The model parsed the string automatically!\n')),(0,i.kt)("p",null,"This ability to combine parsing (in this case, a YYYY-MM-DD date string) with\nvalidation can save you a lot of work."),(0,i.kt)("p",null,"However, you can turn off coercion -- check the next section on using strict\nvalidation."),(0,i.kt)("h3",{id:"strict-validation"},"Strict Validation"),(0,i.kt)("p",null,"You can turn on strict validation to reject values for a field unless they match\nthe exact type of the model's type annotations."),(0,i.kt)("p",null,"You do this by changing a field's type annotation to use one of the ",(0,i.kt)("a",{parentName:"p",href:"https://pydantic-docs.helpmanual.io/usage/types/#strict-types"},'"strict"\ntypes provided by\nPydantic'),"."),(0,i.kt)("p",null,"Redis OM supports all of Pydantic's strict types: ",(0,i.kt)("inlineCode",{parentName:"p"},"StrictStr"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"StrictBytes"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"StrictInt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"StrictFloat"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"StrictBool"),"."),(0,i.kt)("p",null,"If we wanted to make sure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," field only accepts integers and doesn't\ntry to parse a string containing an integer, like \"1\", we'd use the ",(0,i.kt)("inlineCode",{parentName:"p"},"StrictInt"),"\nclass."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom pydantic import StrictInt, ValidationError\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: StrictInt  # <- Instead of int, we use StrictInt\n    bio: Optional[str]\n\n\n# Now if we use a string instead of an integer for `age`,\n# we get a validation error:\ntry:\n    Customer(\n        first_name="Andrew",\n        last_name="Brookins",\n        email="a@example.com",\n        join_date="2020-01-02",  # <- A date as a string shouldn\'t work now!\n        age="38"\n    )\nexcept ValidationError as e:\n    print(e)\n    """\n    pydantic.error_wrappers.ValidationError: 1 validation error for Customer\n    join_date\n      Value must be a datetime.date object (type=value_error)\n    """\n')),(0,i.kt)("p",null,"Pydantic doesn't include a ",(0,i.kt)("inlineCode",{parentName:"p"},"StrictDate")," class, but we can create our own. In\nthis example, we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"StrictDate")," type that we'll use to validate that\n",(0,i.kt)("inlineCode",{parentName:"p"},"join_date")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime.date")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom pydantic import ValidationError\nfrom redis_om import HashModel\n\n\nclass StrictDate(datetime.date):\n    @classmethod\n    def __get_validators__(cls) -> \'CallableGenerator\':\n        yield cls.validate\n\n    @classmethod\n    def validate(cls, value: datetime.date, **kwargs) -> datetime.date:\n        if not isinstance(value, datetime.date):\n            raise ValueError("Value must be a datetime.date object")\n        return value\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: StrictDate\n    age: int\n    bio: Optional[str]\n\n\n# Now if we use a string instead of a date object for `join_date`,\n# we get a validation error:\ntry:\n    Customer(\n        first_name="Andrew",\n        last_name="Brookins",\n        email="a@example.com",\n        join_date="2020-01-02",  # <- A string shouldn\'t work now!\n        age="38"\n    )\nexcept ValidationError as e:\n    print(e)\n    """\n    pydantic.error_wrappers.ValidationError: 1 validation error for Customer\n    join_date\n      Value must be a datetime.date object (type=value_error)\n    """\n')),(0,i.kt)("h2",{id:"saving-models"},"Saving Models"),(0,i.kt)("p",null,"We can save the model to Redis by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"save()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n\n\nandrew = Customer(\n    first_name="Andrew",\n    last_name="Brookins",\n    email="andrew.brookins@example.com",\n    join_date=datetime.date.today(),\n    age=38)\n\nandrew.save()\n')),(0,i.kt)("h2",{id:"examining-your-data-in-redis"},"Examining Your Data In Redis"),(0,i.kt)("p",null,"You can view the data stored in Redis for any Redis OM model."),(0,i.kt)("p",null,"First, get the key of a model instance you want to inspect. The ",(0,i.kt)("inlineCode",{parentName:"p"},"key()")," method\nwill give you the exact Redis key used to store the model."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The naming of this method may be confusing. This is not the primary\nkey, but is instead the Redis key for this model. For this reason, the method\nname may change.")),(0,i.kt)("p",null,"In this example, we're looking at the key created for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer")," model we've\nbeen building:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: Optional[str] = "Super dope"\n\n\nandrew = Customer(\n    first_name="Andrew",\n    last_name="Brookins",\n    email="andrew.brookins@example.com",\n    join_date=datetime.date.today(),\n    age=38)\n\nandrew.save()\nandrew.key()\n# > \'mymodel.Customer:01FKGX1DFEV9Z2XKF59WQ6DC9T\'\n')),(0,i.kt)("p",null,"With the model's Redis key, you can start ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli")," and inspect the data\nstored under that key. Here, we run ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.GET")," command with ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli"),' using\nthe running "redis" container that this project\'s Docker Compose file defines:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ docker-compose exec -T redis redis-cli HGETALL mymodel.Customer:01FKGX1DFEV9Z2XKF59WQ6DC9r\n\n 1) "pk"\n 2) "01FKGX1DFEV9Z2XKF59WQ6DC9T"\n 3) "first_name"\n 4) "Andrew"\n 5) "last_name"\n 6) "Brookins"\n 7) "email"\n 8) "andrew.brookins@example.com"\n 9) "join_date"\n10) "2021-11-02"\n11) "age"\n12) "38"\n13) "bio"\n14) "Super dope"\n')),(0,i.kt)("h2",{id:"getting-a-model"},"Getting a Model"),(0,i.kt)("p",null,"If you have the primary key of a model, you can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," method on the\nmodel class to get the model's data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom redis_om import HashModel\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str\n    email: str\n    join_date: datetime.date\n    age: int\n    bio: Optional[str] = "Super dope"\n\n\nandrew = Customer(\n    first_name="Andrew",\n    last_name="Brookins",\n    email="andrew.brookins@example.com",\n    join_date=datetime.date.today(),\n    age=38)\n\nandrew.save()\n\nassert Customer.get(andrew.pk) == andrew\n')),(0,i.kt)("h2",{id:"querying-for-models-with-expressions"},"Querying for Models With Expressions"),(0,i.kt)("p",null,"Redis OM comes with a rich query language that allows you to query Redis with\nPython expressions."),(0,i.kt)("p",null,"To show how this works, we'll make a small change to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer")," model we\ndefined earlier. We'll add ",(0,i.kt)("inlineCode",{parentName:"p"},"Field(index=True)")," to tell Redis OM that we want to\nindex the ",(0,i.kt)("inlineCode",{parentName:"p"},"last_name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nfrom typing import Optional\n\nfrom pydantic import EmailStr\n\nfrom redis_om import (\n    Field,\n    get_redis_connection,\n    HashModel,\n    Migrator\n)\n\n\nclass Customer(HashModel):\n    first_name: str\n    last_name: str = Field(index=True)\n    email: EmailStr\n    join_date: datetime.date\n    age: int = Field(index=True)\n    bio: Optional[str]\n\n\n# Now, if we use this model with a Redis deployment that has the\n# RediSearch module installed, we can run queries like the following.\n\n# Before running queries, we need to run migrations to set up the\n# indexes that Redis OM will use. You can also use the `migrate`\n# CLI tool for this!\nredis = get_redis_connection()\nMigrator(redis).run()\n\n\n# Find all customers with the last name "Brookins"\nCustomer.find(Customer.last_name == "Brookins").all()\n\n# Find all customers that do NOT have the last name "Brookins"\nCustomer.find(Customer.last_name != "Brookins").all()\n\n# Find all customers whose last name is "Brookins" OR whose age is\n# 100 AND whose last name is "Smith"\nCustomer.find((Customer.last_name == "Brookins") | (\n        Customer.age == 100\n) & (Customer.last_name == "Smith")).all()\n')),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Now that you know the basics of working with Redis OM, start playing around with\nit in your project!"),(0,i.kt)("p",null,"If you're a FastAPI user, check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-python/blob/main/docs/fastapi_integration.md"},"how to integrate Redis OM with FastAPI"),"."))}u.isMDXComponent=!0}}]);