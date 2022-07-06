"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4717],{85162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),s=n(86010),i="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,r),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),s=n(67294),i=n(86010),r=n(72389),o=n(67392),l=n(7094),d=n(12466),p="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,n,r=e.lazy,u=e.block,c=e.defaultValue,h=e.values,g=e.groupId,f=e.className,v=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),R=N.tabGroupChoices,w=N.setTabGroupChoices,_=(0,s.useState)(y),I=_[0],x=_[1],T=[],E=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=R[g];null!=C&&C!==I&&b.some((function(e){return e.value===C}))&&x(C)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==I&&(E(t),x(a),null!=g&&w(g,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,s=T.indexOf(e.currentTarget)+1;n=null!=(a=T[s])?a:T[0];break;case"ArrowLeft":var i,r=T.indexOf(e.currentTarget)-1;n=null!=(i=T[r])?i:T[T.length-1]}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:S,onClick:S},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),r?(0,s.cloneElement)(v.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function c(e){var t=(0,r.Z)();return s.createElement(u,(0,a.Z)({key:String(t)},e))}},1203:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(67294),s=n(3905),i=n(48811),r="riContainer_bco2",o="riDescriptionShort_E27B",l="riDetail_wzFs",d="riIcon_yDou",p="riTitle_x6vI",m="riDescription_RDnu",u="riMore_apRP",c=n(86010),h=function(e){var t=a.useState(!1),n=t[0],h=t[1];return a.createElement("a",{href:e.page,className:r},a.createElement("div",{className:o},a.createElement("div",{className:d},a.createElement("span",{className:"fe fe-zap"})),a.createElement("div",{className:l},a.createElement("div",{className:p},a.createElement("a",{href:e.page},e.title)),a.createElement("div",{className:m},e.description,a.Children.count(e.children)>0&&a.createElement("span",{className:(0,c.Z)(u,"fe","fe-more-horizontal"),onClick:function(){return h(!n)}})))),n&&a.createElement("div",{className:"ri-description-long"},a.createElement(s.Zo,{components:i.Z},e.children)))}},34969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),r=(n(65488),n(85162),n(44996),n(1203),["components"]),o={id:"index-profiler",title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",sidebar_label:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",slug:"/explore/redisinsight/profiler",authors:["ajeet"]},l=void 0,d={unversionedId:"explore/redisinsight/profiler/index-profiler",id:"explore/redisinsight/profiler/index-profiler",title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",description:"RedisInsight profiler analyzes your Redis commands that are being run on the Redis server in real-time. The tool provides you detailed information about the number of commands processed, commands/second and number of connected clients. It also gives information about top prefixes, top keys and top commands.",source:"@site/docs/explore/redisinsight/profiler/index-profiler.mdx",sourceDirName:"explore/redisinsight/profiler",slug:"/explore/redisinsight/profiler",permalink:"/explore/redisinsight/profiler",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/profiler/index-profiler.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-profiler",title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",sidebar_label:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",slug:"/explore/redisinsight/profiler",authors:["ajeet"]},sidebar:"docs",previous:{title:"Use Redis Streams Consumer Groups with RedisInsight",permalink:"/explore/redisinsight/streams"},next:{title:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",permalink:"/explore/redisinsight/redisgraph"}},p={},m=[{value:"Step 1. Create Redis database with RedisTimeSeries module enabled",id:"step-1-create-redis-database-with-redistimeseries-module-enabled",level:2},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",level:2},{value:"Step 3. Cloning the GITHUB repo",id:"step-3-cloning-the-github-repo",level:2},{value:"Step 4: Execute the sensor script",id:"step-4-execute-the-sensor-script",level:2},{value:"Step 5: Accessing the RedisTimeSeries Keys",id:"step-5-accessing-the-redistimeseries-keys",level:2},{value:"Step 6: Running RedisTimeSeries specific queries**",id:"step-6-running-redistimeseries-specific-queries",level:2},{value:"Step 7. Initiate the Profiler",id:"step-7-initiate-the-profiler",level:2},{value:"Additional Links",id:"additional-links",level:2}],u={toc:m};function c(e){var t=e.components,o=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RedisInsight profiler analyzes your Redis commands that are being run on the Redis server in real-time. The tool provides you detailed information about the number of commands processed, commands/second and number of connected clients. It also gives information about top prefixes, top keys and top commands."),(0,i.kt)("p",null,"It basically runs the Redis MONITOR command and generates a summarized view. MONITOR is a debugging command that streams back every command processed by the Redis server. It can help in understanding what is happening to the database. This command can both be used via ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli")," and via ",(0,i.kt)("inlineCode",{parentName:"p"},"telnet"),".All the commands sent to the redis instance are monitored for the duration of the profiling. The ability to see all the requests processed by the server is useful in order to spot bugs in an application both when using Redis as a database and as a distributed caching system."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Because MONITOR streams back all commands, its use comes at a cost.Running monitor command is dangerous to the performance of your production server, hence the profiler is run for a maximum time of 5 minutes, if the user has not stopped it in between. This is to avoid overload on the Redis server."))),(0,i.kt)("p",null,"Follow the below instructions to test drive RedisInsight profiler tool:"),(0,i.kt)("h2",{id:"step-1-create-redis-database-with-redistimeseries-module-enabled"},"Step 1. Create Redis database with RedisTimeSeries module enabled"),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://developer.redis.com/create/rediscloud"},"https://developer.redis.com/create/rediscloud")," and create a Redis database. ",(0,i.kt)("a",{parentName:"p",href:"https://developer.redis.com/howtos/redistimeseries"},"Follow these steps to enable RedisTimeSeries module "),"on Redis Enterprise Cloud"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(11488).Z,width:"1338",height:"1082"})),(0,i.kt)("p",null,"You can use Redis CLI to connect to the remote Redis Enterprise cloud database. You can check memory usage with the Redis ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO")," command."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TIP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RedisInsight allows you to add a Redis Sentinel database too. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.redis.com/latest/ri/using-redisinsight/add-instance/#add-a-redis-sentinel-database"},"documentation")," to learn more."))),(0,i.kt)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TIP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RedisInsight v2.0 is an open source visual tool that lets you do both GUI- and CLI-based interactions with your Redis database.\nIt is an open source visual tool that lets you do both GUI- and CLI-based interactions with your Redis database . It is a desktop manager that provides an intuitive and efficient GUI for Redis, allowing you to interact with your databases, monitor, and manage your data."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/explore/redisinsightv2/"},"Refer to these tutorials")," to learn more about this latest release."))),(0,i.kt)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link")," to access a form that allows you to select the operating system of your choice."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:n(71552).Z,width:"1464",height:"1256"})),(0,i.kt)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),(0,i.kt)("p",null,'Select "Connect to a Redis database"\n',(0,i.kt)("img",{alt:"My Image",src:n(17602).Z,width:"1790",height:"838"})),(0,i.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password. Then click \u201cADD REDIS DATABASE\u201d."),(0,i.kt)("h2",{id:"step-3-cloning-the-github-repo"},"Step 3. Cloning the GITHUB repo"),(0,i.kt)("p",null,"We will be using a python script to fetch sensor data from one of the IoT Edge sensor devices (such as BME680 sensors) and then push the sensor values to the Redis Cloud database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/redis-developer/redis-datasets/tree/master/redistimeseries\ncd redistimeseries/realtime-sensor-jetson\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import bme680\nimport time\nimport datetime\nimport csv\nimport argparse\nimport redis\n\n\nprint("""read-sensor.py - Displays temperature, pressure, humidity, and gas.\nPress Ctrl+C to exit!\n""")\n\ntry:\n    sensor = bme680.BME680(bme680.I2C_ADDR_PRIMARY)\nexcept IOError:\n    sensor = bme680.BME680(bme680.I2C_ADDR_SECONDARY)\n\n# These calibration data can safely be commented\n# out, if desired.\n\nprint(\'Calibration data:\')\nfor name in dir(sensor.calibration_data):\n\n    if not name.startswith(\'_\'):\n        value = getattr(sensor.calibration_data, name)\n\n        if isinstance(value, int):\n            print(\'{}: {}\'.format(name, value))\n\n# These oversampling settings can be tweaked to\n# change the balance between accuracy and noise in\n# the data.\n\nsensor.set_humidity_oversample(bme680.OS_2X)\nsensor.set_pressure_oversample(bme680.OS_4X)\nsensor.set_temperature_oversample(bme680.OS_8X)\nsensor.set_filter(bme680.FILTER_SIZE_3)\nsensor.set_gas_status(bme680.ENABLE_GAS_MEAS)\n\nprint(\'\\n\\nInitial reading:\')\nfor name in dir(sensor.data):\n    value = getattr(sensor.data, name)\n\n    if not name.startswith(\'_\'):\n        print(\'{}: {}\'.format(name, value))\n\nsensor.set_gas_heater_temperature(320)\nsensor.set_gas_heater_duration(150)\nsensor.select_gas_heater_profile(0)\n\n# Up to 10 heater profiles can be configured, each\n# with their own temperature and duration.\n# sensor.set_gas_heater_profile(200, 150, nb_profile=1)\n# sensor.select_gas_heater_profile(1)\n\n\nparser = argparse.ArgumentParser()\nparser.add_argument("--port", type=int,\n                    help="redis instance port", default=6379)\nparser.add_argument(\n    "--password", type=int, help="redis instance password", default=None\n)\nparser.add_argument(\n    "--verbose", help="enable verbose output", action="store_true")\nparser.add_argument("--host", type=str,\n                    help="redis instance host", default="127.0.0.1")\n\n\nargs = parser.parse_args()\n\n# redis setup\nredis_obj = redis.Redis(host=args.host, port=args.port, password=args.password)\ntemperature_key = "ts:temperature"\npressure_key = "ts:pressure"\nhumidity_key = "ts:humidity"\n\nprint(\'\\n\\nPolling:\')\ntry:\n    while True:\n        if not sensor.get_sensor_data():\n            print(\'Can not access sensor data\')\n            continue\n\n        output = \'{0:.2f} C,{1:.2f} hPa,{2:.2f} %RH\'.format(\n            sensor.data.temperature,\n            sensor.data.pressure,\n            sensor.data.humidity)\n\n        if not sensor.data.heat_stable:\n            print(\'Heat unstable: \' + output)\n            continue\n\n        print(\'{0},{1} Ohms\'.format(\n            output,\n            sensor.data.gas_resistance))\n\n        date = datetime.datetime.now()\n        timestamp = int(date.timestamp() * 1000)\n\n        # Create pipeline\n        pipe = redis_obj.pipeline()\n\n        pipe.execute_command(\n            "ts.add", temperature_key, timestamp, sensor.data.temperature\n        )\n\n        pipe.execute_command(\n            "ts.add", pressure_key, timestamp, sensor.data.pressure\n        )\n\n        pipe.execute_command("ts.add", humidity_key,\n                             timestamp, sensor.data.humidity)\n\n        # Execute pipeline\n        pipe.execute()\n\n        time.sleep(1)\n\nexcept KeyboardInterrupt:\n    pass\n\n')),(0,i.kt)("p",null,"The complete walkthrough of this python script is explained ",(0,i.kt)("a",{parentName:"p",href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"},"here"),"."),(0,i.kt)("h2",{id:"step-4-execute-the-sensor-script"},"Step 4: Execute the sensor script"),(0,i.kt)("p",null,"Let us execute the script using the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo python3 sensorloader2.py --host Endpoint_of_Redis_enterprise_Cloud --port port\n")),(0,i.kt)("p",null,"Run the monitor command to verify if sensor values are being fetched or not.(Don\u2019t run this command in the production environment)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'redis-17316.c251.east-us-mz.azure.cloud.redislabs.com:17316> monitor\nOK\n1622212328.833139 [0 122.171.186.213:59471] "monitor"\n1622212329.865158 [0 70.167.220.160:50378] "MULTI"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:temperature" "1622212329847" "35.67"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:pressure" "1622212329847" "957.52"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:humidity" "1622212329847" "11.111"\n1622212329.865158 [0 70.167.220.160:50378] "EXEC"\n1622212330.941178 [0 70.167.220.160:50378] "MULTI"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:temperature" "1622212330920" "35.68"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:pressure" "1622212330920" "957.51"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:humidity" "1622212330920" "11.111"\n1622212330.941178 [0 70.167.220.160:50378] "EXEC"\n\n')),(0,i.kt)("h2",{id:"step-5-accessing-the-redistimeseries-keys"},"Step 5: Accessing the RedisTimeSeries Keys"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.redis.com/explore/redisinsight/getting-started"},"Follow these steps to connect to the database")," using RedisInsight. Once you are connected to RedisInsight GUI, you can verify the 3 RedisTimeSeries keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ts:temperature"),(0,i.kt)("li",{parentName:"ul"},"ts:pressure"),(0,i.kt)("li",{parentName:"ul"},"ts:humidity")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(27853).Z,width:"1330",height:"1504"})),(0,i.kt)("h2",{id:"step-6-running-redistimeseries-specific-queries"},"Step 6: Running RedisTimeSeries specific queries","*","*"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(55617).Z,width:"1314",height:"1232"})),(0,i.kt)("p",null,"Please note that In RedisTimeSeries, only ",(0,i.kt)("a",{parentName:"p",href:"https://oss.redis.com/redistimeseries/commands/#tsrangetsrevrange"},"TS.RANGE "),"and ",(0,i.kt)("a",{parentName:"p",href:"https://oss.redis.com/redistimeseries/commands/#tsmrangetsmrevrange"},"TS.MRANGE")," are supported as of the current release. In the next release, TS.REVRANGE and TS.MREVRANGE will be supported too."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(65754).Z,width:"1308",height:"770"})),(0,i.kt)("h2",{id:"step-7-initiate-the-profiler"},"Step 7. Initiate the Profiler"),(0,i.kt)("p",null,"Click \u201cStart Profiler\u201d while sensor data is continuously being pushed to Redis database."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(98565).Z,width:"1322",height:"578"})),(0,i.kt)("p",null,"Let the profiler tool run for next 1-2 minutes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(1977).Z,width:"1308",height:"1066"})),(0,i.kt)("p",null,"Stop the profiler to see the results as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(75726).Z,width:"1298",height:"618"})),(0,i.kt)("p",null,"Hence, the profiler provides the below statistical details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How many commands were processed"),(0,i.kt)("li",{parentName:"ul"},"Number of connected clients"),(0,i.kt)("li",{parentName:"ul"},"Rate at which the commands were executed"),(0,i.kt)("li",{parentName:"ul"},"Top key patterns (key patterns followed by number of commands)"),(0,i.kt)("li",{parentName:"ul"},"Top Keys"),(0,i.kt)("li",{parentName:"ul"},"Top Commands & their frequency")),(0,i.kt)("h2",{id:"additional-links"},"Additional Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Explore Redis keys using RedisInsight browser tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Usage and Analysis using RedisInsight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/streams"},"Using Redis Streams with RedisInsight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/ri/release-notes/"},"RedisInsight Release Notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.redis.com/explore/redisinsight/slowlog"},"Debug Redis using RedisInsight Slow log Debugging Tool"))),(0,i.kt)("h2",{id:""}),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}c.isMDXComponent=!0},11488:function(e,t,n){t.Z=n.p+"assets/images/image1-d4d2661bc67be076efaad05ee55482d3.png"},27853:function(e,t,n){t.Z=n.p+"assets/images/image2-87fd2049639d7f68eba9da60adf50dc9.png"},55617:function(e,t,n){t.Z=n.p+"assets/images/image3-eb5bed7afe340fcae07bbde310500612.png"},65754:function(e,t,n){t.Z=n.p+"assets/images/image4-8eae12b9bf9867c1e3ba0cd13c244e85.png"},98565:function(e,t,n){t.Z=n.p+"assets/images/image5-f7779b0f13bbdadc313bab919d0c8d83.png"},1977:function(e,t,n){t.Z=n.p+"assets/images/image6-acec39bd7e5791a93a2414a7aa25f142.png"},75726:function(e,t,n){t.Z=n.p+"assets/images/image7-3c9c0dd2dfee8ff1112b850ed0dec91b.png"},17602:function(e,t,n){t.Z=n.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},71552:function(e,t,n){t.Z=n.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"}}]);