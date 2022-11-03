"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4985],{85162:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(67294),i=a(86010);const n="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,i.Z)(n,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(87462),i=a(67294),n=a(86010),r=a(72389),l=a(67392),o=a(7094),d=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:a,block:r,defaultValue:u,values:m,groupId:h,className:k}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===u?u:u??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:R}=(0,o.U)(),[S,N]=(0,i.useState)(w),y=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=h){const e=f[h];null!=e&&e!==S&&g.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,a=y.indexOf(t),s=g[a].value;s!==S&&(E(t),N(s),null!=h&&R(h,String(s)))},T=e=>{var t;let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]??y[y.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,n.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},k)},g.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,s.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>y.push(e),onKeyDown:T,onClick:I},r,{className:(0,n.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":S===t})}),a??t)}))),a?(0,i.cloneElement)(b.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,r.Z)();return i.createElement(u,(0,s.Z)({key:String(t)},e))}},71131:(e,t,a)=>{a.d(t,{Z:()=>h});var s=a(67294),i=a(3905),n=a(52195);const r="riContainer_bco2",l="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",p="riTitle_x6vI",c="riDescription_RDnu",u="riMore_apRP";var m=a(86010);const h=e=>{const[t,a]=s.useState(!1);return s.createElement("a",{href:e.page,className:r},s.createElement("div",{className:l},s.createElement("div",{className:d},s.createElement("span",{className:"fe fe-zap"})),s.createElement("div",{className:o},s.createElement("div",{className:p},s.createElement("a",{href:e.page},e.title)),s.createElement("div",{className:c},e.description,s.Children.count(e.children)>0&&s.createElement("span",{className:(0,m.Z)(u,"fe","fe-more-horizontal"),onClick:()=>a(!t)})))),t&&s.createElement("div",{className:"ri-description-long"},s.createElement(i.Zo,{components:n.Z},e.children)))}},12851:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=a(87462),i=(a(67294),a(3905)),n=a(65488),r=a(85162);a(44996),a(71131);const l={id:"index-homebrew",title:"Create a Redis database on Mac OS",description:"A step by step guide to create a Redis database on Mac OS. Learn how to install Homebrew, installing Redis database and more",sidebar_label:"Redis on Mac OS",slug:"/create/homebrew/",authors:["ajeet"]},o=void 0,d={unversionedId:"create/homebrew/index-homebrew",id:"create/homebrew/index-homebrew",title:"Create a Redis database on Mac OS",description:"A step by step guide to create a Redis database on Mac OS. Learn how to install Homebrew, installing Redis database and more",source:"@site/docs/create/homebrew/index-homebrew.mdx",sourceDirName:"create/homebrew",slug:"/create/homebrew/",permalink:"/create/homebrew/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/homebrew/index-homebrew.mdx",tags:[],version:"current",lastUpdatedAt:1663786392,formattedLastUpdatedAt:"Sep 21, 2022",frontMatter:{id:"index-homebrew",title:"Create a Redis database on Mac OS",description:"A step by step guide to create a Redis database on Mac OS. Learn how to install Homebrew, installing Redis database and more",sidebar_label:"Redis on Mac OS",slug:"/create/homebrew/",authors:["ajeet"]},sidebar:"docs",previous:{title:"Kubernetes Operator: What It Is and Why You Should Really Care About It",permalink:"/create/kubernetes/kubernetes-operator"},next:{title:"Redis on Windows",permalink:"/create/windows"}},p={},c=[{value:"Step 1. Install Redis Stack using Homebrew",id:"step-1-install-redis-stack-using-homebrew",level:3},{value:"Start Redis Stack Server",id:"start-redis-stack-server",level:3},{value:"Existing Redis installation",id:"existing-redis-installation",level:3},{value:"Step 2. Add Redis database",id:"step-2-add-redis-database",level:3},{value:"Step 3. Enter Redis database details",id:"step-3-enter-redis-database-details",level:3},{value:"Step 5. Redis for time series",id:"step-5-redis-for-time-series",level:3},{value:"Step 6. Create time series per shop",id:"step-6-create-time-series-per-shop",level:3},{value:"Step 7. Running the query",id:"step-7-running-the-query",level:3},{value:"Step 8. Time series compaction",id:"step-8-time-series-compaction",level:3},{value:"Example:",id:"example",level:4},{value:"Step 1: Install Homebrew",id:"step-1-install-homebrew",level:3},{value:"Step 2: Install Redis using Homebrew package manager",id:"step-2-install-redis-using-homebrew-package-manager",level:3},{value:"Step 3: Start Redis server",id:"step-3-start-redis-server",level:3},{value:"Step 4: Test if Redis server is running.",id:"step-4-test-if-redis-server-is-running",level:3},{value:"Step 5: Launch Redis on system boot",id:"step-5-launch-redis-on-system-boot",level:3},{value:"Start Redis server via \u201claunchctl\u201d command",id:"start-redis-server-via-launchctl-command",level:3},{value:"Step 6: Run Redis service using a Redis configuration file",id:"step-6-run-redis-service-using-a-redis-configuration-file",level:3},{value:"Step 7: Interacting with Redis Client",id:"step-7-interacting-with-redis-client",level:3},{value:"Step 8: Stop the Redis service",id:"step-8-stop-the-redis-service",level:3},{value:"Step 9: Uninstall Redis",id:"step-9-uninstall-redis",level:3},{value:"Next Steps",id:"next-steps",level:3}],u={toc:c};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,s.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Brew Install Redis | Redis Developer Hub")),(0,i.kt)(n.Z,{defaultValue:"redis-stack",values:[{label:"Using Redis on Mac OS",value:"redis-on-macos"},{label:"Using Redis Stack",value:"redis-stack"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"redis-stack",mdxType:"TabItem"},(0,i.kt)("p",null,"To install Redis Stack on mac OS, use Homebrew. Make sure that you have Homebrew installed before starting on the installation instructions below."),(0,i.kt)("p",null,"Follow the instructions below to setup Redis Stack on your Mac OS:"),(0,i.kt)("h3",{id:"step-1-install-redis-stack-using-homebrew"},"Step 1. Install Redis Stack using Homebrew"),(0,i.kt)("p",null,"First, tap the Redis Stack Homebrew tap and then run ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install")," as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),(0,i.kt)("p",null,"This will install all Redis and Redis Stack binaries. How you run these binaries depends on whether you already have Redis installed on your system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," ==> Installing Cask redis-stack-redisinsight\n ==> Moving App 'RedisInsight-preview.app' to '/Applications/RedisInsight-preview.app'\n \ud83c\udf7a  redis-stack-redisinsight was successfully installed!\n ==> Installing Cask redis-stack\n \ud83c\udf7a  redis-stack was successfully installed!\n")),(0,i.kt)("admonition",{title:"INFO",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If this is the first time you\u2019ve installed Redis on your system, then all Redis Stack binaries will be installed and accessible from the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),". On M1 Macs, this assumes that ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/bin")," is in your path. On Intel-based Macs, ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," should be in your path."),(0,i.kt)("p",{parentName:"admonition"},"To check this, run:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," echo $PATH\n")),(0,i.kt)("p",{parentName:"admonition"},"Then, confirm that the output contains ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/bin")," (M1 Mac) or ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," (Intel Mac). If these directories are not in the output, see the \u201cExisting Redis installation\u201d instructions below.")),(0,i.kt)("h3",{id:"start-redis-stack-server"},"Start Redis Stack Server"),(0,i.kt)("p",null,"You can now start Redis Stack Server as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-stack-server\n")),(0,i.kt)("h3",{id:"existing-redis-installation"},"Existing Redis installation"),(0,i.kt)("p",null,"If you have an existing Redis installation on your system, then you\u2019ll need to modify your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable to ensure that you\u2019re using the latest Redis Stack binaries."),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~/zshrc")," (depending on your shell), and add the following line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  export PATH=/usr/local/Caskroom/redis-stack-server/<VERSION>/bin:$PATH\n")),(0,i.kt)("p",null,'Go to Applications and click "RedisInsight Preview" to bring up the Redis Desktop GUI tool.'),(0,i.kt)("h3",{id:"step-2-add-redis-database"},"Step 2. Add Redis database"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"access redisinsight",src:a(82630).Z,width:"2078",height:"1496"})),(0,i.kt)("h3",{id:"step-3-enter-redis-database-details"},"Step 3. Enter Redis database details"),(0,i.kt)("p",null,"Add the local Redis database endpoint and port."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"access redisinsight",src:a(8815).Z,width:"2288",height:"1414"})),(0,i.kt)("h3",{id:"step-5-redis-for-time-series"},"Step 5. Redis for time series"),(0,i.kt)("p",null,"Redis Stack provides you with a native time series data structure. Let's see how a time series might be useful in our bike shop."),(0,i.kt)("p",null,"As we have multiple physical shops too, alongside our online shop, it could be helpful to have an overview of the sales volume. We will create one time series per shop tracking the total amount of all sales. In addition, we will mark the time series with the appropriate region label, east or west. This kind of representation will allow us to easily query bike sales performance per certain time periods, per shop, per region or across all shops."),(0,i.kt)("p",null,'Click "Guides" icon (just below the key) in the left sidebar and choose "Redis for the time series" for this demonstration.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"redis for timeseries",src:a(28003).Z,width:"2282",height:"1232"})),(0,i.kt)("h3",{id:"step-6-create-time-series-per-shop"},"Step 6. Create time series per shop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," TS.CREATE bike_sales_1 DUPLICATE_POLICY SUM LABELS region east compacted no\n TS.CREATE bike_sales_2 DUPLICATE_POLICY SUM LABELS region east compacted no\n TS.CREATE bike_sales_3 DUPLICATE_POLICY SUM LABELS region west compacted no\n TS.CREATE bike_sales_4 DUPLICATE_POLICY SUM LABELS region west compacted no\n TS.CREATE bike_sales_5 DUPLICATE_POLICY SUM LABELS region west compacted no\n")),(0,i.kt)("p",null,"As shown in the following query, we make the shop id (1,2,3,4,5) a part of the time series name. You might also notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"DUPLICATE_POLICY SUM")," argument; this describes what should be done when two events in the same time series share the same timestamp: In this case, it would mean that two sales happened at exactly the same time, so the resulting value should be a sum of the two sales amounts."),(0,i.kt)("p",null,"Since the metrics are collected with a millisecond timestamp, we can compact our time series into sales per hour:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create time series per shop",src:a(75840).Z,width:"2214",height:"952"})),(0,i.kt)("h3",{id:"step-7-running-the-query"},"Step 7. Running the query"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"execute the query",src:a(4631).Z,width:"1774",height:"872"})),(0,i.kt)("h3",{id:"step-8-time-series-compaction"},"Step 8. Time series compaction"),(0,i.kt)("p",null,"RedisTimeSeries supports downsampling with the following aggregations: avg, sum, min, max, range, count, first and last. If you want to keep all of your raw data points indefinitely, your data set grows linearly over time. However, if your use case allows you to have less fine-grained data further back in time, downsampling can be applied. This allows you to keep fewer historical data points by aggregating raw data for a given time window using a given aggregation function."),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," TS.CREATERULE bike_sales_5 bike_sales_5_per_day AGGREGATION sum 86400000\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"time series compaction",src:a(88701).Z,width:"1714",height:"838"}))),(0,i.kt)(r.Z,{value:"redis-on-macos",mdxType:"TabItem"},(0,i.kt)("p",null,"There are two ways to install Redis on Mac OS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/create/from-source/"},"Installing Redis from source")),(0,i.kt)("li",{parentName:"ul"},"Using Homebrew")),(0,i.kt)("p",null,"Homebrew is the easiest and most flexible way to install Redis on Mac OS. It is a package management software for Mac OS.\nIt automates the Redis installation process, making it quick and easy to add Redis to your system."),(0,i.kt)("p",null,"Follow the below steps to install Redis on Mac OS using ",(0,i.kt)("inlineCode",{parentName:"p"},"brew service"),":"),(0,i.kt)("h3",{id:"step-1-install-homebrew"},"Step 1: Install Homebrew"),(0,i.kt)("p",null,"Run the following command to install and start brew service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,i.kt)("h3",{id:"step-2-install-redis-using-homebrew-package-manager"},"Step 2: Install Redis using Homebrew package manager"),(0,i.kt)("p",null,"Use the following commands to install Redis using brew service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," brew update\n brew install redis\n")),(0,i.kt)("h3",{id:"step-3-start-redis-server"},"Step 3: Start Redis server"),(0,i.kt)("p",null,"Run the following command to start the Redis database in the background:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," brew services start redis\n")),(0,i.kt)("p",null,"In order to run the latest version of Redis, you will need to compile Redis from the source.\n",(0,i.kt)("a",{parentName:"p",href:"/create/from-source/"},"Follow this link")," to learn more about it."),(0,i.kt)("h3",{id:"step-4-test-if-redis-server-is-running"},"Step 4: Test if Redis server is running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli ping\n")),(0,i.kt)("p",null,"It should return PONG. This command is often used to test if a connection is still alive."),(0,i.kt)("h3",{id:"step-5-launch-redis-on-system-boot"},"Step 5: Launch Redis on system boot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents\n")),(0,i.kt)("h3",{id:"start-redis-server-via-launchctl-command"},"Start Redis server via \u201claunchctl\u201d command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist\n")),(0,i.kt)("h3",{id:"step-6-run-redis-service-using-a-redis-configuration-file"},"Step 6: Run Redis service using a Redis configuration file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-server /usr/local/etc/redis.conf\n")),(0,i.kt)("h3",{id:"step-7-interacting-with-redis-client"},"Step 7: Interacting with Redis Client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' redis-cli\n redis> set foo bar\n OK\n redis> get foo\n "bar"\n')),(0,i.kt)("h3",{id:"step-8-stop-the-redis-service"},"Step 8: Stop the Redis service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," brew services stop redis\n")),(0,i.kt)("h3",{id:"step-9-uninstall-redis"},"Step 9: Uninstall Redis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," brew uninstall redis\n")),(0,i.kt)("h3",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight"},"Connect to Redis database using RedisInsight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/develop/java"},"Develop with Java and Redis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/develop/python"},"Develop with Python and Redis"))))),(0,i.kt)("h2",{id:""}),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}m.isMDXComponent=!0},82630:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/add_database-9830232a6e209dc61f0bfd5a8bf87ea4.png"},8815:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/testredis1-00dd4af30abfacc3794d407f00ecc353.png"},28003:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/testredis2-74bd5e0774ec1c50adc2a62e37353f2a.png"},75840:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/testredis3-bc694edacbcd09186a2feff7e77e0c71.png"},4631:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/testredis4-8ca0ff4f3a285039d7f621c11f4afb47.png"},88701:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/testredis6-064d294586d0d32e8c015588ec478b00.png"}}]);