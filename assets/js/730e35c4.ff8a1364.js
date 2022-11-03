"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[2659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=d(n),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={id:"index-antipatterns",title:"Redis Anti-Patterns Every Developer Should Avoid",sidebar_label:"Redis Anti-Patterns Every Developer Should Avoid",slug:"/howtos/antipatterns/",authors:["ajeet"]},s=void 0,r={unversionedId:"howtos/antipatterns/index-antipatterns",id:"howtos/antipatterns/index-antipatterns",title:"Redis Anti-Patterns Every Developer Should Avoid",description:"antipattern",source:"@site/docs/howtos/antipatterns/index-antipatterns.mdx",sourceDirName:"howtos/antipatterns",slug:"/howtos/antipatterns/",permalink:"/howtos/antipatterns/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/antipatterns/index-antipatterns.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-antipatterns",title:"Redis Anti-Patterns Every Developer Should Avoid",sidebar_label:"Redis Anti-Patterns Every Developer Should Avoid",slug:"/howtos/antipatterns/",authors:["ajeet"]},sidebar:"docs",previous:{title:"How to build a HackerNews Clone using Redis",permalink:"/howtos/hackernews"},next:{title:"Building a Social Network Application using RediSearch",permalink:"/howtos/socialnetwork/"}},l={},d=[{value:"1. Large databases running on a single shard/Redis instance",id:"1-large-databases-running-on-a-single-shardredis-instance",level:3},{value:"2. One connection per request",id:"2-one-connection-per-request",level:3},{value:"Examples #1 - redis-py",id:"examples-1---redis-py",level:3},{value:"Example #2 - Lettuce",id:"example-2---lettuce",level:3},{value:"3. Connecting directly to Redis instances",id:"3-connecting-directly-to-redis-instances",level:3},{value:"4. More than one secondary shard (Redis OSS)",id:"4-more-than-one-secondary-shard-redis-oss",level:3},{value:"5. Performing single operation",id:"5-performing-single-operation",level:3},{value:"6. Caching keys without TTL",id:"6-caching-keys-without-ttl",level:3},{value:"7. Endless Redis Replication Loop",id:"7-endless-redis-replication-loop",level:3},{value:"8. Hot Keys",id:"8-hot-keys",level:3},{value:"9. Using Keys command",id:"9-using-keys-command",level:3},{value:"10. Running Ephemeral Redis as a primary database",id:"10-running-ephemeral-redis-as-a-primary-database",level:3},{value:"11. Storing JSON blobs in a string",id:"11-storing-json-blobs-in-a-string",level:3},{value:"12. Translating a table or JSON to a HASH without considering query pattern",id:"12-translating-a-table-or-json-to-a-hash-without-considering-query-pattern",level:3},{value:"References",id:"references",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"antipattern",src:n(72405).Z,width:"1804",height:"1208"})),(0,o.kt)("p",null,"Developers don\u2019t just use Redis, they love it. ",(0,o.kt)("a",{parentName:"p",href:"https://insights.stackoverflow.com/survey/2021#technology-most-loved-dreaded-and-wanted"},"Stack Overflow\u2019s annual Developer Survey 2021")," has ranked Redis as the Most Loved Database platform for the fifth years running! But it is equally important to understand that Redis defaults are not the best for everyone. Millions of developers uses Redis due to its speed and performance, however it is important to make sure that it is being used properly."),(0,o.kt)("p",null,'"Antipatterns" basically refers to those practices and solutions that might seem to be a good fit initially but when it comes to implementation phase, it makes your code much more complex. Let us look at the top Redis anti-patterns to avoid:'),(0,o.kt)("h3",{id:"1-large-databases-running-on-a-single-shardredis-instance"},"1. Large databases running on a single shard/Redis instance"),(0,o.kt)("p",null,"With large databases running on a single shard/Redis instance, there are chances that the fail over, backup and recovery all will take longer. Hence, it\u2019s always recommended to keep shards to recommended sizes. General conservative rule of thumb is 25Gb or 25K Ops/Second."),(0,o.kt)("p",null,"Redis Enterprise recommends to shard if you have more than 25 GB of data and a high number of operations. Another aspect is if you have above 25,000 operations per second, then sharding can improve performance. With less number of operations/second, it can handle up to 50GB of data too."),(0,o.kt)("h3",{id:"2-one-connection-per-request"},"2. One connection per request"),(0,o.kt)("p",null,"Opening a connection each operation requires a lot of overhead to build up and tear down the TCP connection. As a developer, you might sometimes create a connection, run a command, and close the connection. While opening and closing connections per command will technically work, it\u2019s far from optimal and needlessly cuts into the performance of Redis as a whole. Hence, it is recommended to use a connection pool (Jedis) or a Redis client that has a reactive design (Lettuce)."),(0,o.kt)("p",null,"Using the OSS Cluster API, the connection to the nodes are maintained by the client as needed, so you\u2019ll have multiple connections open to different nodes at any given time. With Redis Enterprise, the connection is actually to a proxy, which takes care of the complexity of connections at the cluster level."),(0,o.kt)("h3",{id:"examples-1---redis-py"},"Examples #1 - redis-py"),(0,o.kt)("p",null,"Let us look at the redis-py that uses a connection pool to manage connections to a Redis server. By default, each Redis instance you create will in turn create its own connection pool. You can override this behavior and use an existing connection pool by passing an already created connection pool instance to the connection_pool argument of the Redis class. You may choose to do this in order to implement client side sharding or have fine-grain control of how connections are managed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," >>> pool = redis.ConnectionPool(host='localhost', port=6379, db=0)\n >>> r = redis.Redis(connection_pool=pool)\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/develop/python/"},"Learn more about redis-py")),(0,o.kt)("h3",{id:"example-2---lettuce"},"Example #2 - Lettuce"),(0,o.kt)("p",null,"Lettuce provides generic connection pool support.Lettuce connections are designed to be thread-safe so one connection can be shared amongst multiple threads and Lettuce connections auto-reconnection by default. While connection pooling is not necessary in most cases it can be helpful in certain use cases. Lettuce provides generic connection pooling support."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' RedisClient client = RedisClient.create(RedisURI.create(host, port));\n\n GenericObjectPool<StatefulRedisConnection<String, String>> pool = ConnectionPoolSupport\n               .createGenericObjectPool(() -> client.connect(), new GenericObjectPoolConfig());\n\n // executing work\n try (StatefulRedisConnection<String, String> connection = pool.borrowObject()) {\n\n    RedisCommands<String, String> commands = connection.sync();\n    commands.multi();\n    commands.set("key", "value");\n    commands.set("key2", "value2");\n    commands.exec();\n }\n\n // terminating\n pool.close();\n client.shutdown();\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/develop/java/?s=lettuce"},"Learn more about Lettuce")),(0,o.kt)("h3",{id:"3-connecting-directly-to-redis-instances"},"3. Connecting directly to Redis instances"),(0,o.kt)("p",null,"With a large number of clients, a reconnect flood will be able to simply overwhelm a single threaded Redis process and force a failover. Hence, it is recommended that you should use the right tool that allows you to reduce the number of open connections to your Redis server."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.redis.com/latest/rs/administering/designing-production/networking/multiple-active-proxy/"},"Redis Enterprise DMC proxy")," allows you to reduce the number of connections to your cache server by acting as a proxy. There are other 3rd party tool like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/twitter/twemproxy"},"Twemproxy"),". It is a fast and lightweight proxy server that allows you to reduce the number of open connections to your Redis server. It was built primarily to reduce the number of connections to the caching servers on the backend. This, together with protocol pipelining and sharding enables you to horizontally scale your distributed caching architecture."),(0,o.kt)("h3",{id:"4-more-than-one-secondary-shard-redis-oss"},"4. More than one secondary shard (Redis OSS)"),(0,o.kt)("p",null,"Redis OSS uses a shard-based quorum. It's advised to use at least 3 copies of the data (2 replica shards per master shard) in order to be protected from split-brain situations. In nutshell, Redis OSS solves the quorum challenge by having an odd number of shards (primary + 2 replicas)."),(0,o.kt)("p",null,"Redis Enterprise solves the quorum challenge with an odd number of nodes. Redis Enterprise avoids a split-brain situation with only 2 copies of the data, which is more cost-efficient. In addition, the so-called \u2018quorum-only node' can be used to bring a cluster up to an odd number of nodes if an additional, not necessary data node would be too expensive."),(0,o.kt)("h3",{id:"5-performing-single-operation"},"5. Performing single operation"),(0,o.kt)("p",null,"Performing several operations serially increases connection overhead. Instead, use ",(0,o.kt)("a",{parentName:"p",href:"https://redis.io/topics/pipelining"},"Redis Pipelining"),". Pipelining is the process of sending multiple messages down the pipe without waiting on the reply from each - and (typically) processing the replies later when they come in."),(0,o.kt)("p",null,"Pipelining is completely a client side implementation. It is aimed at solving response latency issues in high network latency environments. So, the lesser the amount of time spent over the network in sending commands and reading responses, the better. This is effectively achieved by buffering. The client may (or may not) buffer the commands at the TCP stack (as mentioned in other answers) before they are sent to the server. Once they are sent to the server, the server executes them and buffers them on the server side. The benefit of the pipelining is a drastically improved protocol performance. The speedup gained by pipelining ranges from a factor of five for connections to localhost up to a factor of at least one hundred over slower internet connections."),(0,o.kt)("h3",{id:"6-caching-keys-without-ttl"},"6. Caching keys without TTL"),(0,o.kt)("p",null,"Redis functions primarily as a key-value store. It is possible to set timeout values on these keys. Said that, a timeout expiration automatically deletes the key. Additionally, when we use commands that delete or overwrite the contents of the key, it will clear the timeout. Redis TTL command is used to get the remaining time of the key expiry in seconds. TTL returns the remaining time to live of a key that has a timeout. This introspection capability allows a Redis client to check how many seconds a given key will continue to be part of the dataset.Keys will accumulate and end up being evicted. Hence, it is recommended to set TTLs on all caching keys."),(0,o.kt)("h3",{id:"7-endless-redis-replication-loop"},"7. Endless Redis Replication Loop"),(0,o.kt)("p",null,"When attempting to replicate a very large active database over a slow or saturated link, replication never finishes due to the continuous updates. Hence, it is recommended to tune the slave and client buffers to allow for slower replication. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://redis.com/blog/the-endless-redis-replication-loop-what-why-and-how-to-solve-it/"},"this detailed blog"),"."),(0,o.kt)("h3",{id:"8-hot-keys"},"8. Hot Keys"),(0,o.kt)("p",null,"Redis can easily become the core of your app\u2019s operational data, holding valuable and frequently accessed information. However, if you centralize the access down to a few pieces of data accessed constantly, you create what is known as a hot-key problem. In a Redis cluster, the key is actually what determines where in the cluster that data is stored. The data is stored in one single, primary location based off of hashing that key. So, when you access a single key over and over again, you\u2019re actually accessing a single node/shard over and over again. Let\u2019s put it another way\u2014if you have a cluster of 99 nodes and you have a single key that gets a million requests in a second, all million of those requests will be going to a single node, not spread across the other 98 nodes."),(0,o.kt)("p",null,"Redis even provides tools to find where your hot keys are located. Use redis-cli with the \u2013hotkeys argument alongside any other arguments you need to connect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," $ redis-cli --hotkeys\n")),(0,o.kt)("p",null,"When possible, the best defence is to avoid the development pattern that is creating the situation. Writing the data to multiple keys that reside in different shards will allow you to access the same data more frequently. In nutshell, having specific keys that are accessed with every client operation. Hence, it's recommended to shard out hot keys using hashing algorithms. You can set policy to LFU and run redis-cli --hotkeys to determine."),(0,o.kt)("h3",{id:"9-using-keys-command"},"9. Using Keys command"),(0,o.kt)("p",null,"In Redis, the KEYS command can be used to perform exhaustive pattern matching on all stored keys. This is not advisable, as running this on an instance with a large number of keys could take a long time to complete, and will slow down the Redis instance in the process. In the relational world, this is equivalent to running an unbound query (SELECT...FROM without a WHERE clause). Execute this type of operation with care, and take necessary measures to ensure that your tenants are not performing a KEYS operation from within their application code. Use SCAN, which spreads the iteration over many calls, not tying up your whole server at one time."),(0,o.kt)("p",null,"Scaning keyspace by keyname is an extremely slow operation and will run O(N) with N being the number of keys. It is recommended to use RediSearch to return information based on the contents of the data instead of iterating through the key space."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH orders "@make: ford @model: explorer"\n 2SQL: SELECT * FROM orders WHERE make=ford AND model=explorer"\n')),(0,o.kt)("h3",{id:"10-running-ephemeral-redis-as-a-primary-database"},"10. Running Ephemeral Redis as a primary database"),(0,o.kt)("p",null,"Redis is often used as a primary storage engine for applications. Unlike using Redis as a cache, using Redis as a primary database requires two extra features to be effective. Any primary database should really be highly available. If a cache goes down, then generally your application is in a brown-out state. If a primary database goes down, your application also goes down. Similarly, if a cache goes down and you restart it empty, that\u2019s no big deal. For a primary database, though, that\u2019s a huge deal. Redis can handle these situations easily, but they generally require a different configuration than running as a cache. Redis as a primary database is great, but you\u2019ve got to support it by turning on the right features."),(0,o.kt)("p",null,"With Redis open source, you need to set up Redis Sentinel for high availability. In Redis Enterprise, it\u2019s a core feature that you just need to turn on when creating the database. As for durability, both Redis Enterprise and open source Redis provide durability through AOF or snapshotting so your instance(s) start back up the way you left them."),(0,o.kt)("h3",{id:"11-storing-json-blobs-in-a-string"},"11. Storing JSON blobs in a string"),(0,o.kt)("p",null,"Microservices written in several languages may not marshal/unmarshal JSON in a consistent manner. Application logic will be required to lock/watch a key for atomic updates. JSON manipulation is often a very compute costly operation. Hence, it is recommended to use HASH data structure and also, RedisJSON module."),(0,o.kt)("h3",{id:"12-translating-a-table-or-json-to-a-hash-without-considering-query-pattern"},"12. Translating a table or JSON to a HASH without considering query pattern"),(0,o.kt)("p",null,"The only query mechanism is a SCAN which requires reading the data structure and limits filtering to the MATCH directive. It is recommended to store the table or JSON as a string. Break out the indexes into reverse indexes using a SET or SORTED SET and point back to the key for the string.\nUsing SELECT command and multiple databases inside one Redis instance"),(0,o.kt)("p",null,"The usage of SELECT and multiple databases inside one Redis instance was mentioned as an anti-pattern by Salvatore (the creator of Redis). It is recommended to use a dedicated Redis instance for each database need. This is especially true in microservice architectures where client applications might step on each other's toes (noisy neighbor, database setup/teardown impact, maintenance, upgrade, ...)"),(0,o.kt)("p",null,"The RedisTimeSeries module provides a direct compete to time series databases. But if the only query is based on ordering, it's unnecessary complexity. Hence, it is recommended to use a SORTED SET with a score of 0 for every value. The values are appended. Or use a timestamp for the score for simple time based queries"),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redis.com/redis-best-practices"},"Redis Best Practices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redis.com/blog/7-redis-worst-practices/"},"7 Redis Worst Practices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=V532pU-7zW8"},"Redis Anti-Patterns Video")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.redis.com/develop/java/"},"Java and Redis"))),(0,o.kt)("h2",{id:""}),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}p.isMDXComponent=!0},72405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/antipattern-8be69360b45966c852b6ee9070a11062.png"}}]);