"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9605],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||s;return a?i.createElement(m,r(r({ref:t},d),{},{components:a})):i.createElement(m,r({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),n=a(52263);const s="authorByline_VoxI",r="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,n.Z)(),l=a.customFields.authors;return i.createElement(i.Fragment,null,t.authors&&i.createElement("div",{className:"docAuthors"},i.createElement("hr",null),t.authors.map((e=>i.createElement("div",{key:e,className:s},i.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),i.createElement("div",null,i.createElement("div",{className:r},"Author:"),i.createElement("div",null,i.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),i.createElement("hr",null)))}},47041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),s=a(50358);const r={id:"index-fastapi",title:"Using Redis with FastAPI",sidebar_label:"Redis with FastAPI",slug:"/develop/python/fastapi",authors:["andrew"]},o=void 0,l={unversionedId:"develop/python/fastapi/index-fastapi",id:"develop/python/fastapi/index-fastapi",title:"Using Redis with FastAPI",description:"This tutorial helps you get started with Redis and FastAPI.",source:"@site/docs/develop/python/fastapi/index-fastapi.mdx",sourceDirName:"develop/python/fastapi",slug:"/develop/python/fastapi",permalink:"/develop/python/fastapi",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/python/fastapi/index-fastapi.mdx",tags:[],version:"current",lastUpdatedAt:1667851300,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"index-fastapi",title:"Using Redis with FastAPI",sidebar_label:"Redis with FastAPI",slug:"/develop/python/fastapi",authors:["andrew"]},sidebar:"docs",previous:{title:"Overview",permalink:"/develop/python/"},next:{title:"Getting Started",permalink:"/develop/dotnet/"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Pre-Tutorial Quiz",id:"pre-tutorial-quiz",level:2},{value:"Set Up the IsBitcoinLit Project",id:"set-up-the-isbitcoinlit-project",level:2},{value:"About RedisTimeSeries",id:"about-redistimeseries",level:2},{value:"An Asyncio Primer",id:"an-asyncio-primer",level:2},{value:"Installing the Redis Client",id:"installing-the-redis-client",level:2},{value:"Integrate aioredis-py with FastAPI",id:"integrate-aioredis-py-with-fastapi",level:2},{value:"Creating the Timeseries",id:"creating-the-timeseries",level:3},{value:"Storing Sentiment and Price Data in RedisTimeSeries",id:"storing-sentiment-and-price-data-in-redistimeseries",level:3},{value:"Calculating Three-Hour Averages with RedisTimeSeries",id:"calculating-three-hour-averages-with-redistimeseries",level:2},{value:"Caching Data with Redis",id:"caching-data-with-redis",level:2},{value:"Writing Cache Data to Redis",id:"writing-cache-data-to-redis",level:3},{value:"Reading Cache Data to Redis",id:"reading-cache-data-to-redis",level:3},{value:"Summary",id:"summary",level:2}],h={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{frontMatter:r,mdxType:"Authors"}),(0,n.kt)("p",null,"This tutorial helps you get started with Redis and FastAPI."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/tiangolo/fastapi"},"FastAPI")," is a Python web framework based on\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://www.starlette.io/"},"Starlette")," microframework. With deep support for\nasyncio, FastAPI is indeed ",(0,n.kt)("em",{parentName:"p"},"very fast"),". FastAPI also distinguishes itself with\nfeatures like automatic ",(0,n.kt)("a",{parentName:"p",href:"https://openapis.org/"},"OpenAPI (OAS)")," documentation for your API,\neasy-to-use data validation tools, and more."),(0,n.kt)("p",null,"Of course, the best way to ",(0,n.kt)("strong",{parentName:"p"},"make your FastAPI service even faster")," is to use\nRedis. Unlike most databases, Redis excels at low-latency access because it's an in-memory database."),(0,n.kt)("p",null,"In this tutorial, we'll walk through the steps necessary to use Redis with\nFastAPI. We're going to build ",(0,n.kt)("em",{parentName:"p"},"IsBitcoinLit"),", an API that stores Bitcoin\nsentiment and price averages in ",(0,n.kt)("a",{parentName:"p",href:"https://oss.redis.com/redistimeseries/"},"RedisTimeSeries"),", then rolls these averages up for\nthe last three hours."),(0,n.kt)("p",null,"Next, let's look at the learning objectives of this tutorial."),(0,n.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,n.kt)("p",null,"The learning objectives of this tutorial are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Learn how to install aioredis-py and connect to Redis"),(0,n.kt)("li",{parentName:"ol"},"Learn how to integrate aioredis-py with FastAPI"),(0,n.kt)("li",{parentName:"ol"},"Learn how to use RedisTimeSeries to store and query timeseries data"),(0,n.kt)("li",{parentName:"ol"},"Learn how to use Redis as a cache with aioredis-py")),(0,n.kt)("p",null,"Let's get started!"),(0,n.kt)("h2",{id:"pre-tutorial-quiz"},"Pre-Tutorial Quiz"),(0,n.kt)("p",null,"Want to check gaps in your knowledge of Redis and FastAPI before you continue? Take our short pre-tutorial quiz!"),(0,n.kt)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfFmBWLtm8oLouaiT3wXpbgZm8Df-FV_xFvnuXEWfbCoh3clw/viewform?embedded=true",width:"640",height:"524",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),(0,n.kt)("p",null,"You can also ",(0,n.kt)("a",{parentName:"p",href:"https://forms.gle/eXiiVcgXqG9UNarG6"},"visit the quiz directly"),"."),(0,n.kt)("h2",{id:"set-up-the-isbitcoinlit-project"},"Set Up the IsBitcoinLit Project"),(0,n.kt)("p",null,"You can achieve the learning objectives of this tutorial by reading through the\ntext and code examples that follow."),(0,n.kt)("p",null,"However, we recommend that you set up the example project yourself, so that you\ncan try out some of the code as you learn. The project has a permissive license\nthat allows you to use it freely."),(0,n.kt)("p",null,"To get started, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/fastapi-redis-tutorial"},"fork the example project on\nGitHub"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/fastapi-redis-tutorial/blob/master/README.md"},"Follow the README"),"\nto the project running."),(0,n.kt)("h2",{id:"about-redistimeseries"},"About RedisTimeSeries"),(0,n.kt)("p",null,"RedisTimeSeries is a source available Redis Module that adds a timeseries data type to Redis. Timeseries is a great way to model any data that you want to query over time, like in this case, the ever-changing price of Bitcoin."),(0,n.kt)("p",null,"You can get started by following the ",(0,n.kt)("a",{parentName:"p",href:"https://oss.redis.com/redistimeseries/#setup"},"setup instructions")," in the RedisTimeSeries documentation."),(0,n.kt)("p",null,"However, note that this tutorial's example project configures RedisTimeSeries automatically for you with the redismod Docker image. You can even use Docker Compose to build up your Redis server."),(0,n.kt)("h2",{id:"an-asyncio-primer"},"An Asyncio Primer"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"IsBitcoinLit")," project is completely async. That means we use an\nasyncio-compatible Redis client called\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aio-libs/aioredis-py"},"aioredis-py")," and FastAPI's async\nfeatures."),(0,n.kt)("p",null,"If you ",(0,n.kt)("strong",{parentName:"p"},"aren't familiar with asyncio"),", take a few minutes to watch this\nprimer on asyncio before continuing:"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Xbl7XjFYsN4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"installing-the-redis-client"},"Installing the Redis Client"),(0,n.kt)("p",null,"We're going to start this tutorial assuming that you have a FastAPI project to\nwork with. We'll use the ",(0,n.kt)("em",{parentName:"p"},"IsBitcoinLit")," project for our examples."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://python-poetry.org/"},"Poetry")," is the best way to manage Python dependencies today, so we'll use it in this tutorial."),(0,n.kt)("p",null,"IsBitcoinLit includes a ",(0,n.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file that Poetry uses to manage the project's directories, but if you had not already created one, you could do so like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    $ poetry init\n")),(0,n.kt)("p",null,"Once you have a ",(0,n.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file, and assuming you already added FastAPI and any other necessary dependencies, you could add aioredis-py to your project like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    $ poetry add aioredis@2.0.0\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This tutorial uses aioredis-py 2.0. The 2.0 version of aioredis-py features an API that matches the most popular synchronous Redis client for Python, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/andymccurdy/redis-py"},"redis-py"),".")),(0,n.kt)("p",null,"The aioredis-py client is now installed. Time to write some code!"),(0,n.kt)("h2",{id:"integrate-aioredis-py-with-fastapi"},"Integrate aioredis-py with FastAPI"),(0,n.kt)("p",null,"We're going to use Redis for a few things in this FastAPI app:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Storing 30-second averages of sentiment and price for the last 24 hours with RedisTimeSeries"),(0,n.kt)("li",{parentName:"ol"},"Rolling up these averages into a three-hour snapshot with RedisTimeSeries"),(0,n.kt)("li",{parentName:"ol"},"Caching the three-hour snapshot")),(0,n.kt)("p",null,"Let's look at each of these integration points in more detail."),(0,n.kt)("h3",{id:"creating-the-timeseries"},"Creating the Timeseries"),(0,n.kt)("p",null,"The data for our app consists of 30-second averages of Bitcoin prices and sentiment ratings for the last 24 hours. We pull these from the ",(0,n.kt)("a",{parentName:"p",href:"https://senticrypt.com/docs.html"},"SentiCrypt API"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We have no affiliation with SentiCrypt or any idea how accurate these numbers are. This example is ",(0,n.kt)("strong",{parentName:"p"},"just for fun"),"!")),(0,n.kt)("p",null,"We're going to store price and sentiment averages in a timeseries with RedisTimeSeries, so we want to make sure that when the app starts up, the timeseries exists."),(0,n.kt)("p",null,"We can use a ",(0,n.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/advanced/events/"},"startup event")," to accomplish this. Doing so looks like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@app.on_event('startup')\nasync def startup_event():\n    keys = Keys()\n    await initialize_redis(keys)\n")),(0,n.kt)("p",null,"We'll use the ",(0,n.kt)("inlineCode",{parentName:"p"},"TS.CREATE")," RedisTimeSeries command to create the timeseries within our ",(0,n.kt)("inlineCode",{parentName:"p"},"initialize_redis()")," function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"async def make_timeseries(key):\n    \"\"\"\n    Create a timeseries with the Redis key `key`.\n\n    We'll use the duplicate policy known as \"first,\" which ignores\n    duplicate pairs of timestamp and values if we add them.\n\n    Because of this, we don't worry about handling this logic\n    ourselves -- but note that there is a performance cost to writes\n    using this policy.\n    \"\"\"\n    try:\n        await redis.execute_command(\n            'TS.CREATE', key,\n            'DUPLICATE_POLICY', 'first',\n        )\n    except ResponseError as e:\n        # Time series probably already exists\n        log.info('Could not create timeseries %s, error: %s', key, e)\n\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When you create a timeseries, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"DUPLICATE_POLICY")," option to specify how to handle duplicate pairs of timestamp and values.")),(0,n.kt)("h3",{id:"storing-sentiment-and-price-data-in-redistimeseries"},"Storing Sentiment and Price Data in RedisTimeSeries"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"/refresh")," endpoint exists in the app to allow a client to trigger a refresh of the 30-second averages. This is the entire function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@app.post('/refresh')\nasync def refresh(background_tasks: BackgroundTasks, keys: Keys = Depends(make_keys)):\n    async with httpx.AsyncClient() as client:\n        data = await client.get(SENTIMENT_API_URL)\n    await persist(keys, data.json())\n    data = await calculate_three_hours_of_data(keys)\n    background_tasks.add_task(set_cache, data, keys)\n\n")),(0,n.kt)("p",null,"As is often the case with Python, a lot happens in a few lines, so let's walk through them."),(0,n.kt)("p",null,"The first thing we do is get the latest sentiment and price data from SentiCrypt. The response data looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "count": 7259,\n    "timestamp": 1625592626.3452034,\n    "rate": 0.0,\n    "last": 0.33,\n    "sum": 1425.82,\n    "mean": 0.2,\n    "median": 0.23,\n    "btc_price": "33885.23"\n  }\n  //... Many more entries\n]\n')),(0,n.kt)("p",null,"Then we save the data into two timeseries in Redis with the ",(0,n.kt)("inlineCode",{parentName:"p"},"persist()")," function. That ends up calling another helper, ",(0,n.kt)("inlineCode",{parentName:"p"},"add_many_to_timeseries()"),", like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"    await add_many_to_timeseries(\n        (\n            (ts_price_key, 'btc_price'),\n            (ts_sentiment_key, 'mean'),\n        ), data,\n    )\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"add_many_to_timeseries()"),' function takes a list of (timeseries key, sample key) pairs and a list of samples from SentiCrypt. For each sample, it reads the value of the sample key in the SentiCrypt sample, like "btc_price," and adds that value to the given timeseries key.'),(0,n.kt)("p",null,"Here's the function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def add_many_to_timeseries(\n    key_pairs: Iterable[Tuple[str, str]],\n    data: BitcoinSentiments\n):\n    """\n    Add many samples to a single timeseries key.\n\n    `key_pairs` is an iteratble of tuples containing in the 0th position the\n    timestamp key into which to insert entries and the 1th position the name\n    of the key within th `data` dict to find the sample.\n    """\n    partial = functools.partial(redis.execute_command, \'TS.MADD\')\n    for datapoint in data:\n        for timeseries_key, sample_key in key_pairs:\n            partial = functools.partial(\n                partial, timeseries_key, int(\n                    float(datapoint[\'timestamp\']) * 1000,\n                ),\n                datapoint[sample_key],\n            )\n    return await partial()\n')),(0,n.kt)("p",null,"This code is dense, so let's break it down."),(0,n.kt)("p",null,"We're using the ",(0,n.kt)("inlineCode",{parentName:"p"},"TS.MADD")," RedisTimeSeries command to add many samples to a timeseries. We use ",(0,n.kt)("inlineCode",{parentName:"p"},"TS.MADD")," because doing so is faster than ",(0,n.kt)("inlineCode",{parentName:"p"},"TS.ADD")," for adding batches of samples to a timeseries."),(0,n.kt)("p",null,"This results in a single large ",(0,n.kt)("inlineCode",{parentName:"p"},"TS.MADD")," call that adds price data to the price timeseries and sentiment data to the sentiment timeseries. Conveniently, ",(0,n.kt)("inlineCode",{parentName:"p"},"TS.MADD")," can add samples to multiple timeseries in a single call."),(0,n.kt)("h2",{id:"calculating-three-hour-averages-with-redistimeseries"},"Calculating Three-Hour Averages with RedisTimeSeries"),(0,n.kt)("p",null,"Clients use IsBitcoinLit to get the average price and sentiment for each of the last three hours. But so far, we've only stored 30-second averages in Redis. How do we calculate the average of these averages for the last three hours?"),(0,n.kt)("p",null,"When we run ",(0,n.kt)("inlineCode",{parentName:"p"},"/refresh"),", we call ",(0,n.kt)("inlineCode",{parentName:"p"},"calculate_three_hours_of_data()")," to do so. The function looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"async def calculate_three_hours_of_data(keys: Keys) -> Dict[str, str]:\n    sentiment_key = keys.timeseries_sentiment_key()\n    price_key = keys.timeseries_price_key()\n    three_hours_ago_ms = int((now() - timedelta(hours=3)).timestamp() * 1000)\n\n    sentiment = await get_hourly_average(sentiment_key, three_hours_ago_ms)\n    price = await get_hourly_average(price_key, three_hours_ago_ms)\n\n    last_three_hours = [{\n        'price': data[0][1], 'sentiment': data[1][1],\n        'time': datetime.fromtimestamp(data[0][0] / 1000, tz=timezone.utc),\n    }\n        for data in zip(price, sentiment)]\n\n    return {\n        'hourly_average_of_averages': last_three_hours,\n        'sentiment_direction': get_direction(last_three_hours, 'sentiment'),\n        'price_direction': get_direction(last_three_hours, 'price'),\n    }\n")),(0,n.kt)("p",null,"There is more going on here than we need to know for this tutorial. As a summary, most of this code exists to support calls to ",(0,n.kt)("inlineCode",{parentName:"p"},"get_hourly_average()"),"."),(0,n.kt)("p",null,"That function is where the core logic exists to calculate averages for the last three hours, so let's see what it contains:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"async def get_hourly_average(ts_key: str, top_of_the_hour: int):\n    response = await redis.execute_command(\n        'TS.RANGE', ts_key, top_of_the_hour, '+',\n        'AGGREGATION', 'avg', HOURLY_BUCKET,\n    )\n    # The response is a list of the structure [timestamp, average].\n    return response\n")),(0,n.kt)("p",null,"Here, we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"TS.RANGE"),' command to get the samples in the timeseries from the "top" of the hour three hours ago, until the latest sample in the series. With the ',(0,n.kt)("inlineCode",{parentName:"p"},"AGGREGATE")," parameter, we get back the averages of the samples in hourly buckets."),(0,n.kt)("p",null,"So where does this leave us? With ",(0,n.kt)("strong",{parentName:"p"},"averages of the averages"),", one for each of the last three hours."),(0,n.kt)("h2",{id:"caching-data-with-redis"},"Caching Data with Redis"),(0,n.kt)("p",null,"Let's review. We have code that achieves the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Gets the latest sentiment and price data from SentiCrypt."),(0,n.kt)("li",{parentName:"ol"},"Saves the data into two timeseries in Redis."),(0,n.kt)("li",{parentName:"ol"},"Calculates the average of the averages for the last three hours.")),(0,n.kt)("p",null,"The snapshot of averages for the last three hours is the data we want to serve clients when they hit the ",(0,n.kt)("inlineCode",{parentName:"p"},"/is-bitcoin-lit")," endpoint. We could run this calculation every time a client requests data, but that would be inefficient. Let's cache it in Redis!"),(0,n.kt)("p",null,"First, we'll look at ",(0,n.kt)("strong",{parentName:"p"},"writing to the cache"),". Then we'll see how FastAPI ",(0,n.kt)("strong",{parentName:"p"},"reads from")," the cache."),(0,n.kt)("h3",{id:"writing-cache-data-to-redis"},"Writing Cache Data to Redis"),(0,n.kt)("p",null,"Take a closer look at the last line of the ",(0,n.kt)("inlineCode",{parentName:"p"},"refresh()")," function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"    background_tasks.add_task(set_cache, data, keys)\n")),(0,n.kt)("p",null,"In FastAPI, you can run code outside of a web request after returning a response. This feature is called ",(0,n.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/tutorial/background-tasks/"},(0,n.kt)("em",{parentName:"a"},"background tasks")),"."),(0,n.kt)("p",null,"This is not as robust as using a background task library like ",(0,n.kt)("a",{parentName:"p",href:"https://docs.celeryproject.org/en/stable/getting-started/introduction.html"},"Celery"),". Instead, Background Tasks are a simple way to run code outside of a web request, which is a great fit for things like updating a cache."),(0,n.kt)("p",null,"When you call ",(0,n.kt)("inlineCode",{parentName:"p"},"add_task()"),", you pass in a function and a list of arguments. Here, we pass in ",(0,n.kt)("inlineCode",{parentName:"p"},"set_cache()"),". This function saves the three-hour averages summary to Redis. Let's look at how it works:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"async def set_cache(data, keys: Keys):\n    def serialize_dates(v):\n        return v.isoformat() if isinstance(v, datetime) else v\n\n    await redis.set(\n        keys.cache_key(),\n        json.dumps(data, default=serialize_dates),\n        ex=TWO_MINUTES,\n    )\n")),(0,n.kt)("p",null,"First, we serialize the three-hour summary data to JSON and save it to Redis. We use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ex")," parameter to set the expiration time for the data to two minutes."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TIP"),": You need to provide a default serializer for the ",(0,n.kt)("inlineCode",{parentName:"p"},"json.dumps()")," function so that ",(0,n.kt)("inlineCode",{parentName:"p"},"dumps()")," knows how to serialize datetime objects."),(0,n.kt)("p",null,"This means that after every refresh, we've primed the cache. The cache isn't primed for long -- only two minutes -- but it's something!"),(0,n.kt)("h3",{id:"reading-cache-data-to-redis"},"Reading Cache Data to Redis"),(0,n.kt)("p",null,"We haven't even seen the API endpoint that clients will use yet! Here it is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@app.get('/is-bitcoin-lit')\nasync def bitcoin(background_tasks: BackgroundTasks, keys: Keys = Depends(make_keys)):\n    data = await get_cache(keys)\n\n    if not data:\n        data = await calculate_three_hours_of_data(keys)\n        background_tasks.add_task(set_cache, data, keys)\n\n    return data\n\n")),(0,n.kt)("p",null,"To use this endpoint, clients make a GET request to ",(0,n.kt)("inlineCode",{parentName:"p"},"/is-bitcoin-lit"),". Then we try to get the cached three-hour summary from Redis. If we can't, we calculate the three-hour summary, return it, and then save it outside of the web request."),(0,n.kt)("p",null,"We've already seen how calculating the summary data works, and we just explored saving the summary data to Redis. So, let's look at the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_cache()")," function, where we read the cached data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def datetime_parser(dct):\n    for k, v in dct.items():\n        if isinstance(v, str) and v.endswith('+00:00'):\n            try:\n                dct[k] = datetime.datetime.fromisoformat(v)\n            except:\n                pass\n    return dct\n\n\nasync def get_cache(keys: Keys):\n    current_hour_cache_key = keys.cache_key()\n    current_hour_stats = await redis.get(current_hour_cache_key)\n\n    if current_hour_stats:\n        return json.loads(current_hour_stats, object_hook=datetime_parser)\n")),(0,n.kt)("p",null,"Remember that when we serialized the summary data to JSON, we needed to provide a default serializer for ",(0,n.kt)("inlineCode",{parentName:"p"},"json.dumps()")," that understood datetime objects. Now that we're ",(0,n.kt)("em",{parentName:"p"},"deserializing")," that data, we need to give ",(0,n.kt)("inlineCode",{parentName:"p"},"json.loads()"),' an "object hook" that understands datetime strings. That\'s what ',(0,n.kt)("inlineCode",{parentName:"p"},"datetime_parser()")," does."),(0,n.kt)("p",null,"Other than parsing dates, this code is relatively straightforward. We get the current hour's cache key, and then we try to get the cached data from Redis. If we can't, we return ",(0,n.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Putting all the pieces together, we now have a FastAPI app that can retrieve Bitcoin price and sentiment averages, store the averages in Redis, cache three-hour summary data in Redis, and serve the data to clients. Not too shabby!"),(0,n.kt)("p",null,"Here are a few ",(0,n.kt)("strong",{parentName:"p"},"notes to consider"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"We manually controlled caching in this tutorial, but you can also use a library like ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aio-libs/aiocache"},"aiocache")," to cache data in Redis."),(0,n.kt)("li",{parentName:"ol"},"We ran RedisTimeSeries commands like ",(0,n.kt)("inlineCode",{parentName:"li"},"TS.MADD")," using the ",(0,n.kt)("inlineCode",{parentName:"li"},"execute_command()")," method in aioredis-py. If you are instead using redis-py in a synchronous project, you can use the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/RedisTimeSeries/redistimeseries-py"},"redistimeseries-py")," library to run RedisTimeSeries commands.")))}c.isMDXComponent=!0}}]);