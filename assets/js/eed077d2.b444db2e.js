"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6023],{85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),a=n(67294),i=n(86010),o=n(72389),s=n(67392),l=n(7094),d=n(12466),c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,h=e.defaultValue,m=e.values,k=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),w=N.tabGroupChoices,R=N.setTabGroupChoices,E=(0,a.useState)(y),S=E[0],C=E[1],D=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=w[k];null!=T&&T!==S&&b.some((function(e){return e.value===T}))&&C(T)}var Z=function(e){var t=e.currentTarget,n=D.indexOf(t),r=b[n].value;r!==S&&(x(t),C(r),null!=k&&R(k,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=D.indexOf(e.currentTarget)+1;n=null!=(r=D[a])?r:D[0];break;case"ArrowLeft":var i,o=D.indexOf(e.currentTarget)-1;n=null!=(i=D[o])?i:D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return D.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function h(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},1203:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(67294),a=n(3905),i=n(48811),o="riContainer_bco2",s="riDescriptionShort_E27B",l="riDetail_wzFs",d="riIcon_yDou",c="riTitle_x6vI",u="riDescription_RDnu",p="riMore_apRP",h=n(86010),m=function(e){var t=r.useState(!1),n=t[0],m=t[1];return r.createElement("a",{href:e.page,className:o},r.createElement("div",{className:s},r.createElement("div",{className:d},r.createElement("span",{className:"fe fe-zap"})),r.createElement("div",{className:l},r.createElement("div",{className:c},r.createElement("a",{href:e.page},e.title)),r.createElement("div",{className:u},e.description,r.Children.count(e.children)>0&&r.createElement("span",{className:(0,h.Z)(p,"fe","fe-more-horizontal"),onClick:function(){return m(!n)}})))),n&&r.createElement("div",{className:"ri-description-long"},r.createElement(a.Zo,{components:i.Z},e.children)))}},98090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(65488),s=n(85162),l=(n(44996),n(1203),["components"]),d={id:"index-docker",title:"How to Deploy and Run Redis in a Docker container",sidebar_label:"Redis on Docker",slug:"/operate/orchestration/docker/",authors:["ajeet"]},c=void 0,u={unversionedId:"operate/orchestration/docker/index-docker",id:"operate/orchestration/docker/index-docker",title:"How to Deploy and Run Redis in a Docker container",description:"<Tabs",source:"@site/docs/operate/orchestration/docker/index-docker.mdx",sourceDirName:"operate/orchestration/docker",slug:"/operate/orchestration/docker/",permalink:"/operate/orchestration/docker/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/orchestration/docker/index-docker.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-docker",title:"How to Deploy and Run Redis in a Docker container",sidebar_label:"Redis on Docker",slug:"/operate/orchestration/docker/",authors:["ajeet"]},sidebar:"docs",previous:{title:"Overview",permalink:"/operate/orchestration"},next:{title:"Node.js, Nginx, Redis and Docker",permalink:"/operate/docker/nodejs-nginx-redis"}},p={},h=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Step 1: Click on \u201cSetup\u201d",id:"step-1-click-on-setup",level:3},{value:"Step 2: Enter your preferred FQDN",id:"step-2-enter-your-preferred-fqdn",level:3},{value:"Step 3: Enter the admin credentials",id:"step-3-enter-the-admin-credentials",level:3},{value:"Step 4: Create a Database:",id:"step-4-create-a-database",level:3},{value:"Step 5: Connecting using redis-cli",id:"step-5-connecting-using-redis-cli",level:3},{value:"Pre-requisites",id:"pre-requisites-1",level:3},{value:"Step 1: Run the Redis container",id:"step-1-run-the-redis-container",level:3},{value:"Step 2: Verify if the Redis container is running or not:",id:"step-2-verify-if-the-redis-container-is-running-or-not",level:3},{value:"Step 3: Connect to your database",id:"step-3-connect-to-your-database",level:3},{value:"Step 4: Testing Redis container",id:"step-4-testing-redis-container",level:3},{value:"Step 5: Running Redis container with Persistent Storage",id:"step-5-running-redis-container-with-persistent-storage",level:3},{value:"Next Steps",id:"next-steps",level:3}],m={toc:h};function k(e){var t=e.components,d=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{defaultValue:"Redis Enterprise",values:[{label:"Redis Enterprise",value:"Redis Enterprise"},{label:"Redis",value:"Redis"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Redis Enterprise",className:"has-small-images",mdxType:"TabItem"},(0,i.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"Ensure that Docker is installed in your system."),(0,i.kt)("p",null,"If you're new, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"Docker's installation guide")," to install Docker on Mac."),(0,i.kt)("p",null,"To pull and start the Redis Enterprise Software Docker container, run this ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command in the terminal or command-line for your operating system."),(0,i.kt)("p",null,"Note: On Windows, make sure Docker is configured to run Linux-based containers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --cap-add sys_resource --name rp -p 8443:8443 -p 9443:9443 -p 12000:12000 redislabs/redis\n")),(0,i.kt)("p",null,"In the web browser on the host machine, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:8443")," to see the Redis Enterprise Software web console."),(0,i.kt)("h3",{id:"step-1-click-on-setup"},"Step 1: Click on \u201cSetup\u201d"),(0,i.kt)("p",null,"Click Setup to start the node configuration steps."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setting up nodes",src:n(29183).Z,width:"955",height:"848"})),(0,i.kt)("h3",{id:"step-2-enter-your-preferred-fqdn"},"Step 2: Enter your preferred FQDN"),(0,i.kt)("p",null,"In the Node Configuration settings, enter a cluster FQDN such as demo.redis.com. Then click the Next button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Redis Enterprise Setup",src:n(43055).Z,width:"955",height:"711"})),(0,i.kt)("p",null,"Enter your license key, if you have one. If not, click the Next button to use the trial version."),(0,i.kt)("h3",{id:"step-3-enter-the-admin-credentials"},"Step 3: Enter the admin credentials"),(0,i.kt)("p",null,"Enter an email and password for the admin account for the web console."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login credentials",src:n(68681).Z,width:"955",height:"891"})),(0,i.kt)("p",null,"These credentials are also used for connections to the REST API.\nClick OK to confirm that you are aware of the replacement of the HTTPS SSL/TLS certificate on the node, and proceed through the browser warning."),(0,i.kt)("h3",{id:"step-4-create-a-database"},"Step 4: Create a Database:"),(0,i.kt)("p",null,"Select \u201cRedis database\u201d and the \u201csingle region\u201d deployment, and click Next."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Creating a database",src:n(14015).Z,width:"955",height:"733"})),(0,i.kt)("p",null,"Enter a database name such as demodb and click Activate to create your database"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Creating a database",src:n(71079).Z,width:"955",height:"1035"})),(0,i.kt)("p",null,"You now have a Redis database!"),(0,i.kt)("h3",{id:"step-5-connecting-using-redis-cli"},"Step 5: Connecting using redis-cli"),(0,i.kt)("p",null,"After you create the Redis database, you are ready to store data in your database. ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli")," is a built-in simple command-line tool to interact with Redis databases. Run ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli"),", located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/redislabs/bin")," directory, to connect to port 12000 and store and retrieve the value of a key in the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ docker exec -it rp bash\nredislabs@fd8dca50f905:/opt$\n /opt/redislabs/bin/redis-cli -p 12000\n127.0.0.1:12000> auth <enter password>\nOK\n127.0.0.1:12000> set key1 123\nOK\n127.0.0.1:12000> get key1\n"123"\n'))),(0,i.kt)(s.Z,{value:"Redis",mdxType:"TabItem"},(0,i.kt)("h3",{id:"pre-requisites-1"},"Pre-requisites"),(0,i.kt)("p",null,"Ensure that Docker is installed in your system. Follow [Docker's installation guide)","[https://docs.docker.com/engine/install/]"," if you haven\u2019t installed it yet."),(0,i.kt)("h3",{id:"step-1-run-the-redis-container"},"Step 1: Run the Redis container"),(0,i.kt)("p",null,"Execute the following command to run Redis container in the background in a \u201cdetached\u201d mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ docker run --name myredis -d redis\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"myredis")," is the name of Docker container\n",(0,i.kt)("inlineCode",{parentName:"li"},"-d")," representis running Redis in a background in a \u201cdetached\u201d mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redis")," is the name of Docker Image that it fetches from Docker Hub.")),(0,i.kt)("h3",{id:"step-2-verify-if-the-redis-container-is-running-or-not"},"Step 2: Verify if the Redis container is running or not:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ docker ps\nCONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES\n241f2411637e   redis     "docker-entrypoint.s\u2026"   2 minutes ago   Up 2 minutes   6379/tcp   myredis\n')),(0,i.kt)("h3",{id:"step-3-connect-to-your-database"},"Step 3: Connect to your database"),(0,i.kt)("p",null,"The following uses the first three alphanumeric characters of your Container ID and opens up ",(0,i.kt)("inlineCode",{parentName:"p"},"sh")," shell of the Redis Docker container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ docker exec -it 241 sh\n# redis-cli\n")),(0,i.kt)("h3",{id:"step-4-testing-redis-container"},"Step 4: Testing Redis container"),(0,i.kt)("p",null,"Execute the following command to test the Redis server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"127.0.0.1:6379>ping\nPONG\n")),(0,i.kt)("p",null,"Please note: By default, Redis uses 0-15 as indexes for databases, you can change that number in ",(0,i.kt)("inlineCode",{parentName:"p"},"redis.conf"),"."),(0,i.kt)("h3",{id:"step-5-running-redis-container-with-persistent-storage"},"Step 5: Running Redis container with Persistent Storage"),(0,i.kt)("p",null,"In order to enable persistence, you should invoke the Docker container, passing ",(0,i.kt)("inlineCode",{parentName:"p"},"appendonly yes")," option as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ docker run --name some-redis -d redis redis-server --appendonly yes\n")),(0,i.kt)("p",null,"If persistence is enabled, data is stored in the volume ",(0,i.kt)("inlineCode",{parentName:"p"},"/data"),", which can be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"--volumes-from some-volume-container")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-v /docker/host/dir:/data")))),(0,i.kt)("h3",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/"},"Connect to a Redis database using RedisInsight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisdatasource/"},"Connect to a Redis database using Redis datasource for Grafana"))),(0,i.kt)("h2",{id:""}),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}k.isMDXComponent=!0},29183:function(e,t,n){t.Z=n.p+"assets/images/resoftware-1-9cae87f442d005c2d5eef9ce7e277e66.png"},43055:function(e,t,n){t.Z=n.p+"assets/images/resoftware-2-9313ccd8080b582bd7d3af6feb4471b4.png"},68681:function(e,t,n){t.Z=n.p+"assets/images/resoftware-4-d68706c4379a22cc84955f90af69c91e.png"},14015:function(e,t,n){t.Z=n.p+"assets/images/resoftware-5-984c27aa9a4337754665886668670275.png"},71079:function(e,t,n){t.Z=n.p+"assets/images/resoftware-7-b087dde1884f48b22eb5f3e1a1d66d54.png"}}]);