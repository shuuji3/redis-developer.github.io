"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5653],{85162:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294),s=a(86010);const i="tabItem_Ymn6";function n(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,n),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),s=a(67294),i=a(86010),n=a(72389),o=a(67392),l=a(7094),d=a(12466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:n,defaultValue:c,values:m,groupId:h,className:k}=e,v=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,o.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:S,setTabGroupChoices:y}=(0,l.U)(),[N,R]=(0,s.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,d.o5)();if(null!=h){const e=S[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&R(e)}const O=e=>{const t=e.currentTarget,a=T.indexOf(t),r=b[a].value;r!==N&&(I(t),R(r),null!=h&&y(h,String(r)))},w=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},b.map((e=>{let{value:t,label:a,attributes:n}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:w,onClick:O},n,{className:(0,i.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,s.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,n.Z)();return s.createElement(c,(0,r.Z)({key:String(t)},e))}},71131:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(67294),s=a(3905),i=a(52195);const n="riContainer_bco2",o="riDescriptionShort_E27B",l="riDetail_wzFs",d="riIcon_yDou",p="riTitle_x6vI",u="riDescription_RDnu",c="riMore_apRP";var m=a(86010);const h=e=>{const[t,a]=r.useState(!1);return r.createElement("a",{href:e.page,className:n},r.createElement("div",{className:o},r.createElement("div",{className:d},r.createElement("span",{className:"fe fe-zap"})),r.createElement("div",{className:l},r.createElement("div",{className:p},r.createElement("a",{href:e.page},e.title)),r.createElement("div",{className:u},e.description,r.Children.count(e.children)>0&&r.createElement("span",{className:(0,m.Z)(c,"fe","fe-more-horizontal"),onClick:()=>a(!t)})))),t&&r.createElement("div",{className:"ri-description-long"},r.createElement(s.Zo,{components:i.Z},e.children)))}},93343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=a(87462),s=(a(67294),a(3905)),i=a(65488),n=a(85162);a(44996),a(71131);const o={id:"index-riot",title:"RIOT",sidebar_label:"RIOT",slug:"/explore/riot",authors:["ajeet"]},l=void 0,d={unversionedId:"explore/riot/index-riot",id:"explore/riot/index-riot",title:"RIOT",description:"Redis Input/Output Tools (RIOT) is a set of import/export command line utilities for Redis:",source:"@site/docs/explore/riot/index-riot.mdx",sourceDirName:"explore/riot",slug:"/explore/riot",permalink:"/explore/riot",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/riot/index-riot.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-riot",title:"RIOT",sidebar_label:"RIOT",slug:"/explore/riot",authors:["ajeet"]},sidebar:"docs",previous:{title:"RedisMod",permalink:"/explore/redismod"},next:{title:"Overview",permalink:"/operate"}},p={},u=[{value:"Using RIOT Redis",id:"using-riot-redis",level:2},{value:"Step 1. Getting Started",id:"step-1-getting-started",level:3},{value:"Step 2. Build and Run",id:"step-2-build-and-run",level:3},{value:"Step 3. Install via Homebrew (macOS)",id:"step-3-install-via-homebrew-macos",level:3},{value:"Usage",id:"usage",level:3},{value:"Step 4. Example",id:"step-4-example",level:3},{value:"Step 5. Verification",id:"step-5-verification",level:3},{value:"Step 6. Architecture",id:"step-6-architecture",level:3},{value:"Using RIOT DB",id:"using-riot-db",level:2},{value:"Step 1. Getting Started",id:"step-1-getting-started-1",level:3},{value:"Step 2. Build and Run",id:"step-2-build-and-run-1",level:3},{value:"Step 3. Install via Homebrew (macOS)",id:"step-3-install-via-homebrew-macos-1",level:3},{value:"Step 4. Usage",id:"step-4-usage",level:3},{value:"Step 5. Drivers",id:"step-5-drivers",level:3},{value:"Oracle",id:"oracle",level:4},{value:"IBM Db2",id:"ibm-db2",level:4},{value:"MS SQL Server",id:"ms-sql-server",level:4},{value:"MySQL",id:"mysql",level:4},{value:"PostgreSQL",id:"postgresql",level:4},{value:"SQLite",id:"sqlite",level:4},{value:"Step 6. Import",id:"step-6-import",level:3},{value:"Import from PostgreSQL",id:"import-from-postgresql",level:4},{value:"Import into hashes",id:"import-into-hashes",level:4},{value:"Import into hashes and set TTL on the key",id:"import-into-hashes-and-set-ttl-on-the-key",level:4},{value:"Import into hashes and set TTL and add to a set named myset",id:"import-into-hashes-and-set-ttl-and-add-to-a-set-named-myset",level:4},{value:"Step 7. Export",id:"step-7-export",level:3},{value:"Export to PostgreSQL",id:"export-to-postgresql",level:4},{value:"Import from PostgreSQL to JSON strings",id:"import-from-postgresql-to-json-strings",level:4},{value:"Further References",id:"further-references",level:3}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Redis Input/Output Tools (RIOT) is a set of import/export command line utilities for Redis:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"RIOT Redis: live replication from any Redis database (including AWS Elasticache) to another Redis database."),(0,s.kt)("li",{parentName:"ul"},"RIOT DB: migrate from an RDBMS to Redis, RediSearch, RedisJSON, ...")),(0,s.kt)(i.Z,{defaultValue:"RIOT Redis",values:[{label:"RIOT Redis",value:"RIOT Redis"},{label:"RIOT DB",value:"RIOT DB"}],mdxType:"Tabs"},(0,s.kt)(n.Z,{value:"RIOT Redis",mdxType:"TabItem"},(0,s.kt)("h2",{id:"using-riot-redis"},"Using RIOT Redis"),(0,s.kt)("p",null,"Most database migration tools available today are offline in nature. Migrating data from AWS ElastiCache to Redis Enterprise Cloud for example means backing up your Elasticache data to an AWS S3 bucket and importing it into Redis Enterprise Cloud using its UI.This implies some downtime and might result in data loss.\nOther available techniques include creating point-in-time snapshots of the source Redis server & applying the changes to the destination servers to keep both servers in sync.\nIt might sound like a good approach but can be challenging when you have to maintain dozens of scripts to implement the migration strategy."),(0,s.kt)("p",null,"RIOT Redis is a migration tool that allows for seamless live replication between two Redis databases."),(0,s.kt)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),(0,s.kt)("p",null,"Download the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/riot/releases/latest"},"latest release")," and unzip the archive."),(0,s.kt)("p",null,"Launch the ",(0,s.kt)("inlineCode",{parentName:"p"},"bin/riot-redis")," script and follow the usage information provided."),(0,s.kt)("h3",{id:"step-2-build-and-run"},"Step 2. Build and Run"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/riot.git\ncd riot/riot-redis\n./riot-redis\n")),(0,s.kt)("h3",{id:"step-3-install-via-homebrew-macos"},"Step 3. Install via Homebrew (macOS)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"brew install jruaux/tap/riot-redis`\n")),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f riot-redis\nUsage: {app} [OPTIONS] [COMMAND]\n      --help                Show this help message and exit.\n  -V, --version             Print version information and exit.\n  -q, --quiet               Log errors only\n  -d, --debug               Log in debug mode (includes normal stacktrace)\n  -i, --info                Set log level to info\n")),(0,s.kt)("p",null,"You can use --help on any subcommand:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f riot-redis --help\n\n\u276f riot-redis import --help\n\n\u276f riot-redis import ..  hset --help\n")),(0,s.kt)("p",null,"Redis connection options are the same as redis-cli:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --hostname=<host>     Server hostname (default: 127.0.0.1)\n  -p, --port=<port>         Server port (default: 6379)\n  -s, --socket=<socket>     Server socket (overrides hostname and port)\n      --user=<username>     Used to send ACL style 'AUTH username pass'. Needs password.\n  -a, --pass[=<password>]   Password to use when connecting to the server\n  -u, --uri=<uri>           Server URI\n  -o, --timeout=<sec>       Redis command timeout (default: 60)\n  -n, --db=<int>            Database number (default: 0)\n  -c, --cluster             Enable cluster mode\n  -t, --tls                 Establish a secure TLS connection\n  -l, --latency             Show latency metrics\n  -m, --pool=<int>          Max pool connections (default: 8)\n")),(0,s.kt)("p",null,"Redis URI syntax is described here."),(0,s.kt)("h3",{id:"step-4-example"},"Step 4. Example"),(0,s.kt)("p",null,"Here is an example of a live replication from a source Redis running on localhost and port 6379, to a target Redis running on localhost and port 6380:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f riot-redis -h source -p 6379 replicate --idle-timeout 500 -h target -p 6380 --live\n")),(0,s.kt)("h3",{id:"step-5-verification"},"Step 5. Verification"),(0,s.kt)("p",null,"Once replication is complete RIOT Redis will perform a verification step to compare values and TTLs between source and target databases. The output looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"OK:1000 V:0 >:0 <:0 T:0\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"OK: # identical values")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"V: # mismatched values")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},": # keys only present in source database"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"<: # keys only present in target database")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"T: # keys with TTL difference greater than tolerance"))),(0,s.kt)("h3",{id:"step-6-architecture"},"Step 6. Architecture"),(0,s.kt)("p",null,"RIOT Redis implements client-side replication using a producer/consumer approach:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"the producer is connected to the source Redis (e.g. ElastiCache) and iterates over keys to read their corresponding values")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"the consumer is connected to the target Redis (e.g. Redis Enterprise Cloud) and writes the key/value tuples previously created"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Key reader: initiates a SCAN and optionally calls SUBSCRIBE to listen for keyspace notifications (live replication)."),(0,s.kt)("li",{parentName:"ol"},"Value reader: takes the keys and calls DUMP and TTL."),(0,s.kt)("li",{parentName:"ol"},"Key/Value writer: takes key/value/ttl tuples and calls RESTORE and EXPIRE.")),(0,s.kt)("p",null,"Note: Live replication makes use of keyspace notifications. Make sure the source Redis database has keyspace notifications enabled using notify-keyspace-events = KA in redis.conf or via CONFIG SET."),(0,s.kt)("p",null,"Note: The live replication mechanism does not guarantee data consistency. Redis sends keyspace notifications over pub/sub which does not provide guaranteed delivery. It is possible that RIOT Redis can miss some notifications in case of network failures for example.")),(0,s.kt)(n.Z,{value:"RIOT DB",mdxType:"TabItem"},(0,s.kt)("h2",{id:"using-riot-db"},"Using RIOT DB"),(0,s.kt)("p",null,"RIOT DB lets you import/export data from relational databases."),(0,s.kt)("h3",{id:"step-1-getting-started-1"},"Step 1. Getting Started"),(0,s.kt)("p",null,"Download the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/riot/releases/latest"},"latest release")," and unzip the archive."),(0,s.kt)("p",null,"Launch the bin/riot-db script and follow the usage information provided."),(0,s.kt)("h3",{id:"step-2-build-and-run-1"},"Step 2. Build and Run"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f git clone https://github.com/redis-developer/riot.git\n\u276f cd riot/riot-db\n\u276f ./riot-db\n")),(0,s.kt)("h3",{id:"step-3-install-via-homebrew-macos-1"},"Step 3. Install via Homebrew (macOS)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"brew install jruaux/tap/riot-db\n")),(0,s.kt)("h3",{id:"step-4-usage"},"Step 4. Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f riot-db\nUsage: riot-db [OPTIONS] [COMMAND]\n      --help                Show this help message and exit.\n  -V, --version             Print version information and exit.\n  -q, --quiet               Log errors only\n  -d, --debug               Log in debug mode (includes normal stacktrace)\n  -i, --info                Set log level to info\n")),(0,s.kt)("p",null,"You can use --help on any subcommand:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f riot-db --help\n\u276f riot-db import --help\n\u276f riot-db import \u2026 hset --help\n")),(0,s.kt)("p",null,"Redis connection options are the same as redis-cli:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --hostname=<host>     Server hostname (default: 127.0.0.1)\n  -p, --port=<port>         Server port (default: 6379)\n  -s, --socket=<socket>     Server socket (overrides hostname and port)\n      --user=<username>     Used to send ACL style 'AUTH username pass'. Needs password.\n  -a, --pass[=<password>]   Password to use when connecting to the server\n  -u, --uri=<uri>           Server URI\n  -o, --timeout=<sec>       Redis command timeout (default: 60)\n  -n, --db=<int>            Database number (default: 0)\n  -c, --cluster             Enable cluster mode\n  -t, --tls                 Establish a secure TLS connection\n  -l, --latency             Show latency metrics\n  -m, --pool=<int>          Max pool connections (default: 8)\n\n")),(0,s.kt)("h3",{id:"step-5-drivers"},"Step 5. Drivers"),(0,s.kt)("p",null,"RIOT DB includes drivers for the most common RDBMSs:"),(0,s.kt)("h4",{id:"oracle"},"Oracle"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"jdbc:oracle:thin:@myhost:1521:orcl\n")),(0,s.kt)("h4",{id:"ibm-db2"},"IBM Db2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"jdbc:db2://host:port/database\n")),(0,s.kt)("h4",{id:"ms-sql-server"},"MS SQL Server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"jdbc:sqlserver://[serverName[\\instanceName][:portNumber]][;property=value[;property=value]]\n")),(0,s.kt)("h4",{id:"mysql"},"MySQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"jdbc:mysql://[host]:[port][/database][?properties]\n")),(0,s.kt)("h4",{id:"postgresql"},"PostgreSQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"jdbc:postgresql://host:port/database\n")),(0,s.kt)("h4",{id:"sqlite"},"SQLite"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"jdbc:sqlite:sqlite_database_file_path\n")),(0,s.kt)("p",null,"For non-included databases you must install the corresponding JDBC driver under the lib directory and modify the RIOT DB CLASSPATH:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"*nix: bin/riot-db \u2192 CLASSPATH=$APP_HOME/lib/myjdbc.jar:$APP_HOME/lib/\u2026\nWindows: bin{app}.bat \u2192 set CLASSPATH=%APP_HOME%\\lib\\myjdbc.jar;%APP_HOME%\\lib\\\u2026\n")),(0,s.kt)("h3",{id:"step-6-import"},"Step 6. Import"),(0,s.kt)("p",null,"Use the import command to import the result set of a SQL statement."),(0,s.kt)("h4",{id:"import-from-postgresql"},"Import from PostgreSQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u276f riot-db -h localhost -p 6379 import "SELECT * FROM orders" --url jdbc:postgresql://host:port/database --username appuser --password passwd hset --keyspace order --keys order_id\n')),(0,s.kt)("p",null,"You can specify one or many Redis commands as targets of the import:"),(0,s.kt)("h4",{id:"import-into-hashes"},"Import into hashes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f riot-db import .. set --keyspace blah --keys id\n")),(0,s.kt)("h4",{id:"import-into-hashes-and-set-ttl-on-the-key"},"Import into hashes and set TTL on the key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f riot-db import .. hset --keyspace blah --keys id expire --keyspace blah --keys id\n")),(0,s.kt)("h4",{id:"import-into-hashes-and-set-ttl-and-add-to-a-set-named-myset"},"Import into hashes and set TTL and add to a set named myset"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u276f riot-db import .. hset --keyspace blah --keys id expire --keyspace blah --keys id sadd --keyspace myset --members id\n")),(0,s.kt)("h3",{id:"step-7-export"},"Step 7. Export"),(0,s.kt)("h4",{id:"export-to-postgresql"},"Export to PostgreSQL"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u276f riot-db export "INSERT INTO mytable (id, field1, field2) VALUES (CAST(:id AS SMALLINT), :field1, :field2)" --url jdbc:postgresql://host:port/database --username appuser --password passwd --scan-match "hash:*" --key-regex "hash:(?<id>.*)"\n')),(0,s.kt)("h4",{id:"import-from-postgresql-to-json-strings"},"Import from PostgreSQL to JSON strings"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u276f riot-db -h localhost -p 6379 import "SELECT * FROM orders" --url jdbc:postgresql://host:port/database --username appuser --password passwd set --keyspace order --keys order_id\n')),(0,s.kt)("p",null,"This will produce Redis strings that look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n        "order_id": 10248,\n        "customer_id": "VINET",\n        "employee_id": 5,\n        "order_date": "1996-07-04",\n        "required_date": "1996-08-01",\n        "shipped_date": "1996-07-16",\n        "ship_via": 3,\n        "freight": 32.38,\n        "ship_name": "Vins et alcools Chevalier",\n        "ship_address": "59 rue de l\'Abbaye",\n        "ship_city": "Reims",\n        "ship_postal_code": "51100",\n        "ship_country": "France"\n}\n')))),(0,s.kt)("h3",{id:"further-references"},"Further References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.redis.com/riot/#_architecture"},"RIOT Architecture")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.redis.com/riot/"},"RIOT Overview"))))}m.isMDXComponent=!0}}]);