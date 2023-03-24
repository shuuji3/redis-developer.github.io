"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3459,5653,7644,8454],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(i),u=a,g=p["".concat(d,".").concat(u)]||p[u]||m[u]||s;return i?n.createElement(g,r(r({ref:t},l),{},{components:i})):n.createElement(g,r({ref:t},l))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},50358:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(67294),a=i(52263);const s="authorByline_VoxI",r="authorLabel_a70t",o="authorProfileImage_URwT";const d=function(e){let{frontMatter:t}=e;const{siteConfig:i}=(0,a.Z)(),d=i.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:s},n.createElement("img",{className:o,src:`/img/${d[e].image?d[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${d[e].name}`}),n.createElement("div",null,n.createElement("div",{className:r},"Author:"),n.createElement("div",null,n.createElement("a",{href:d[e].link,target:"_blank"},d[e].name),", ",d[e].title))))),n.createElement("hr",null)))}},34260:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var n=i(87462),a=(i(67294),i(3905)),s=i(50358);const r=i.p+"assets/images/digital-identity-cd58a2fe2b530097b745791a1e2c813e.png";var o=i(4975),d=i(34045),c=i(31788);const l={id:"index-digital-identity-validation",title:"How to perform Digital Identity Validation using Redis in an e-commerce app",sidebar_label:"How to use Redis for Digital Identity Validation",slug:"/howtos/solutions/fraud-detection/digital-identity-validation",authors:["prasan","will"]},m=void 0,p={unversionedId:"howtos/solutions/fraud-detection/digital-identity-validation/index-digital-identity-validation",id:"howtos/solutions/fraud-detection/digital-identity-validation/index-digital-identity-validation",title:"How to perform Digital Identity Validation using Redis in an e-commerce app",description:"Know Your Customer (KYC)",source:"@site/docs/howtos/solutions/fraud-detection/digital-identity-validation/index-digital-identity-validation.mdx",sourceDirName:"howtos/solutions/fraud-detection/digital-identity-validation",slug:"/howtos/solutions/fraud-detection/digital-identity-validation",permalink:"/howtos/solutions/fraud-detection/digital-identity-validation",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/fraud-detection/digital-identity-validation/index-digital-identity-validation.mdx",tags:[],version:"current",lastUpdatedAt:1679564122,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"index-digital-identity-validation",title:"How to perform Digital Identity Validation using Redis in an e-commerce app",sidebar_label:"How to use Redis for Digital Identity Validation",slug:"/howtos/solutions/fraud-detection/digital-identity-validation",authors:["prasan","will"]}},u={},g=[{value:"Know Your Customer (KYC)",id:"know-your-customer-kyc",level:2},{value:"What is Digital identity?",id:"what-is-digital-identity",level:2},{value:"Why You Should Use Redis for Digital Identity Validation",id:"why-you-should-use-redis-for-digital-identity-validation",level:2},{value:"Microservices Architecture for an E-commerce Application",id:"microservices-architecture-for-an-e-commerce-application",level:2},{value:"Storing Digital identity",id:"storing-digital-identity",level:3},{value:"Validating Digital identity",id:"validating-digital-identity",level:3},{value:"E-commerce Application Frontend using Next.js and Tailwind",id:"e-commerce-application-frontend-using-nextjs-and-tailwind",level:2},{value:"Building a Digital Identity Validation Microservice with Redis",id:"building-a-digital-identity-validation-microservice-with-redis",level:2},{value:"Storing Digital identity",id:"storing-digital-identity-1",level:3},{value:"Validating Digital identity",id:"validating-digital-identity-1",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Resources",id:"additional-resources",level:3}],h={toc:g};function y(e){let{components:t,...m}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,m,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{frontMatter:l,mdxType:"Authors"}),(0,a.kt)(c.default,{mdxType:"SourceCode"}),(0,a.kt)("h2",{id:"know-your-customer-kyc"},"Know Your Customer (KYC)"),(0,a.kt)("p",null,'"Know Your Customer" (KYC) regulations refer to a set of policies and procedures that financial institutions and other regulated businesses must follow to verify the identity of their customers. Customer details can be like name, address, date of birth, and other government-issued identification/ documents.'),(0,a.kt)("p",null,"KYC regulations are intended to prevent money laundering, terrorist financing, and other illicit activities.\nFinancial services companies are combating the use of stolen identity information by reducing reliance on static methods for verifying identity (Knowledge-Based Authentication - KBA) and instead moving to Digital Identities."),(0,a.kt)("h2",{id:"what-is-digital-identity"},"What is Digital identity?"),(0,a.kt)("p",null,"Digital identity refers to a set of attributes, credentials, and data that uniquely identify an individual or entity in the digital world, merging the physical and the online aspects of their identity."),(0,a.kt)("img",{src:r,alt:"Digital Identity attributes",width:"500",className:"margin-bottom--md"}),(0,a.kt)("p",null,"Digital identities consist of two parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Static")," data: personally identifiable information (PII) such as name, address, and biometrics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dynamic")," data: behavioural and contextual information such as browsing history, device type, and location data. Dynamic digital identities are constantly updated based on the information available from each digital transaction.")),(0,a.kt)("p",null,"Companies must monitor customer's every transaction and behaviour, then use stored digital identities to score the ",(0,a.kt)("strong",{parentName:"p"},"risk")," (",(0,a.kt)("strong",{parentName:"p"},"possible suspicious activity"),") of that transaction."),(0,a.kt)("h2",{id:"why-you-should-use-redis-for-digital-identity-validation"},"Why You Should Use Redis for Digital Identity Validation"),(0,a.kt)("p",null,"Main requirements of a storage layer for digital identities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Must maintain ",(0,a.kt)("strong",{parentName:"li"},"real-time read latency")," to fit within transaction SLA."),(0,a.kt)("li",{parentName:"ul"},"Must have a ",(0,a.kt)("strong",{parentName:"li"},"flexible data model")," to store multiple unstructured data types such as behavioural, transactional, location, social/mobile and more.")),(0,a.kt)("p",null,"These two factors are limiting for using RDBMS (Relation Database Management Systems) to manage and validate digital identities in real time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Redis Enterprise"),", on the other hand, is optimized for high throughput, low latency, and real-time query performance, easily satisfying the first criterion. With ",(0,a.kt)("strong",{parentName:"p"},"sub-millisecond latency")," and hundreds of millions of operations per second across both read and write operations, it is well-suited for managing dynamic digital identity data. As the volume of data grows, we can expect near-linear scalability and 99.999% of uptime with ",(0,a.kt)("strong",{parentName:"p"},"Active-Active geo-replication"),"."),(0,a.kt)("p",null,"Redis Enterprise's flexible data model has native support for multiple data types, including ",(0,a.kt)("strong",{parentName:"p"},"JSON, hashes, streams, graphs and more"),". Additionally, it can process complex searches on structured and unstructured data, as well as filtering by numeric properties and geographical distances, making it easier to manage and query large datasets of digital identities."),(0,a.kt)("h2",{id:"microservices-architecture-for-an-e-commerce-application"},"Microservices Architecture for an E-commerce Application"),(0,a.kt)(d.default,{mdxType:"MicroservicesArchitectureWithRedis"}),(0,a.kt)("h3",{id:"storing-digital-identity"},"Storing Digital identity"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"digital-identity-code-flow-01",src:i(46706).Z,width:"1336",height:"630"})),(0,a.kt)("p",null,"Note : Our demo (github) app doesn't have a ",(0,a.kt)("inlineCode",{parentName:"p"},"login service"),", all user sessions are currently authenticated in ",(0,a.kt)("inlineCode",{parentName:"p"},"apigateway")," service. so ",(0,a.kt)("inlineCode",{parentName:"p"},"login service")," is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"apigateway")," service as per demo app context."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Login service")," stores the (user) digital identity as stream entry to Redis\n",(0,a.kt)("img",{alt:"Login Identity in Transaction Stream",src:i(99491).Z,width:"2448",height:"928"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Digital identity service")," reads the identity from Redis stream")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Digital identity service")," stores identity as JSON to Redis\n",(0,a.kt)("img",{alt:"Login Identity as JSON",src:i(95057).Z,width:"1444",height:"778"})))),(0,a.kt)("h3",{id:"validating-digital-identity"},"Validating Digital identity"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"digital-identity-code-flow-02",src:i(78298).Z,width:"1372",height:"646"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Orders service")," stores the digital identity to Redis stream to calculate it's identity score\n",(0,a.kt)("img",{alt:"Validation Identity in Transaction Stream",src:i(85501).Z,width:"2374",height:"920"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Digital identity service")," reads the identity from Redis stream")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Digital identity service")," calculates the identity score and stores to Redis stream\n",(0,a.kt)("img",{alt:"Identity score in Transaction Stream",src:i(48055).Z,width:"2294",height:"736"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Digital identity service")," stores identity with score as Redis JSON\n",(0,a.kt)("img",{alt:"Validation Identity as JSON",src:i(54898).Z,width:"1372",height:"814"})))),(0,a.kt)("h2",{id:"e-commerce-application-frontend-using-nextjs-and-tailwind"},"E-commerce Application Frontend using Next.js and Tailwind"),(0,a.kt)(o.default,{mdxType:"MicroservicesEcommerceDesign"}),(0,a.kt)("h2",{id:"building-a-digital-identity-validation-microservice-with-redis"},"Building a Digital Identity Validation Microservice with Redis"),(0,a.kt)("p",null,'In this tutorial, we will be verifying "digital identity" by calculating "digital identity" score using Redis. Let\'s consider only few characteristics of user\'s Digital Identity for the demo like IP address, browser fingerprint and session (but you can always store more characteristics like location, device type..etc in a real application).'),(0,a.kt)("h3",{id:"storing-digital-identity-1"},"Storing Digital identity"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Login service")," stores the (user) digital identity as stream entry to Redis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//addLoginToTransactionStream\nconst userId = 'USR_4e7acc44-e91e-4c5c-9112-bdd99d799dd3';\nconst sessionId = 'SES_94ff24a8-65b5-4795-9227-99906a43884e';\n\nconst entry: ITransactionStreamMessage = {\n  action: 'INSERT_LOGIN_IDENTITY',\n  logMessage: `Digital identity to be stored for the user ${userId}`,\n  userId: userId,\n  sessionId: sessionId,\n\n  identityBrowserAgent: req.headers['user-agent'],\n  identityIpAddress:\n    req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress,\n};\n\nconst nodeRedisClient = getNodeRedisClient();\nconst streamKeyName = 'TRANSACTION_STREAM';\nconst id = '*'; //* = auto generate\nawait nodeRedisClient.xAdd(streamKeyName, id, entry);\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Digital identity service")," reads the identity from Redis stream")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Below is some code for how you would use Redis to listen for the stream events:\n\nasync function listenToStream(\n  onMessage: (message: any, messageId: string) => Promise<void>,\n) {\n  // using node-redis\n  const redis = getNodeRedisClient();\n  const streamKeyName = 'TRANSACTION_STREAM'; //stream name\n  const groupName = 'TRANSACTION_CON_GROUP'; // listening consumer group name (custom)\n  const consumerName = 'IDENTITY_CON'; // listening consumer name (custom)\n  const readMaxCount = 100;\n\n  // Check if the stream group already exists\n  if (!(await redis.exists(streamKeyName))) {\n    const idPosition = '0'; //0 = start, $ = end or any specific id\n    await nodeRedisClient.xGroupCreate(streamKeyName, groupName, idPosition, {\n      MKSTREAM: true,\n    });\n  }\n\n  // setup a loop to listen for stream events\n  while (true) {\n    // read set of messages from different streams\n    const dataArr = await nodeRedisClient.xReadGroup(\n      commandOptions({\n        isolated: true,\n      }),\n      groupName,\n      consumerName,\n      [\n        {\n          // you can specify multiple streams in array\n          key: streamKeyName,\n          id: '>', // Next entry ID that no consumer in this group has read\n        },\n      ],\n      {\n        COUNT: readMaxCount, // Read n entries at a time\n        BLOCK: 0, // block for 0 (infinite) seconds if there are none.\n      },\n    );\n\n    for (let data of dataArr) {\n      for (let messageItem of data.messages) {\n        // process the message received (in our case, perform payment)\n        await onMessage(messageItem.message, messageItem.id);\n\n        // acknowledge individual messages after processing\n        nodeRedisClient.xAck(streamKeyName, groupName, messageItem.id);\n      }\n    }\n  }\n}\n\n// `listenToStream` listens for events and calls the `onMessage` callback to further handle the events.\nlistenToStream({\n  onMessage: processTransactionStream,\n});\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Digital identity service")," stores identity as JSON to Redis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const processTransactionStream: IMessageHandler = async (\n  message: ITransactionStreamMessage,\n  messageId,\n) => {\n  if (message) {\n    if (message.action == 'INSERT_LOGIN_IDENTITY') {\n      const insertedKey = await addDigitalIdentityToRedis(message);\n    } else if (message.action == 'CALCULATE_IDENTITY_SCORE') {\n      //...\n    }\n  }\n};\n\nconst addDigitalIdentityToRedis = async (\n  message: ITransactionStreamMessage,\n) => {\n  let insertedKey = '';\n\n  const userId = message.userId;\n  const digitalIdentity: IDigitalIdentity = {\n    action: message.action,\n    userId: userId,\n    sessionId: message.sessionId,\n\n    ipAddress: message.identityIpAddress,\n    browserFingerprint: crypto\n      .createHash('sha256')\n      .update(message.identityBrowserAgent)\n      .digest('hex'),\n    identityScore: message.identityScore ? message.identityScore : '',\n\n    createdOn: new Date(),\n    createdBy: userId,\n    statusCode: DB_ROW_STATUS.ACTIVE, //1\n  };\n\n  const repository = digitalIdentityRepo.getRepository();\n  if (repository) {\n    const entity = repository.createEntity(digitalIdentity);\n    insertedKey = await repository.save(entity);\n  }\n\n  return insertedKey;\n};\n")),(0,a.kt)("h3",{id:"validating-digital-identity-1"},"Validating Digital identity"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Orders service")," stores the digital identity to be validated in Redis stream")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//adding Identity To TransactionStream\nconst userId = 'USR_4e7acc44-e91e-4c5c-9112-bdd99d799dd3';\nconst sessionId = 'SES_94ff24a8-65b5-4795-9227-99906a43884e';\nlet orderDetails = {\n  orderId: '63f5f8dc3696d145a45775a6',\n  orderAmount: '1000',\n  userId: userId,\n};\n\nconst entry: ITransactionStreamMessage = {\n  action: 'CALCULATE_IDENTITY_SCORE',\n  logMessage: `Digital identity to be validated/ scored for the user ${userId}`,\n  userId: userId,\n  sessionId: sessionId,\n\n  identityBrowserAgent: req.headers['user-agent'],\n  identityIpAddress:\n    req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress,\n  identityTransactionDetails: orderDetails ? JSON.stringify(orderDetails) : '',\n};\n\nconst nodeRedisClient = getNodeRedisClient();\nconst streamKeyName = 'TRANSACTION_STREAM';\nconst id = '*'; //* = auto generate\nawait nodeRedisClient.xAdd(streamKeyName, id, entry);\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Digital identity service")," reads the identity from Redis stream")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Below is some code for how you would use Redis to listen for the stream events:\n\nasync function listenToStream(\n  onMessage: (message: any, messageId: string) => Promise<void>,\n) {\n  // using node-redis\n  const redis = getNodeRedisClient();\n  const streamKeyName = 'TRANSACTION_STREAM'; //stream name\n  const groupName = 'TRANSACTION_CON_GROUP'; // listening consumer group name (custom)\n  const consumerName = 'IDENTITY_CON'; // listening consumer name (custom)\n  const readMaxCount = 100;\n\n  // Check if the stream group already exists\n  if (!(await redis.exists(streamKeyName))) {\n    const idPosition = '0'; //0 = start, $ = end or any specific id\n    await nodeRedisClient.xGroupCreate(streamKeyName, groupName, idPosition, {\n      MKSTREAM: true,\n    });\n  }\n\n  // setup a loop to listen for stream events\n  while (true) {\n    // read set of messages from different streams\n    const dataArr = await nodeRedisClient.xReadGroup(\n      commandOptions({\n        isolated: true,\n      }),\n      groupName,\n      consumerName,\n      [\n        {\n          // you can specify multiple streams in array\n          key: streamKeyName,\n          id: '>', // Next entry ID that no consumer in this group has read\n        },\n      ],\n      {\n        COUNT: readMaxCount, // Read n entries at a time\n        BLOCK: 0, // block for 0 (infinite) seconds if there are none.\n      },\n    );\n\n    for (let data of dataArr) {\n      for (let messageItem of data.messages) {\n        // process the message received (in our case, perform payment)\n        await onMessage(messageItem.message, messageItem.id);\n\n        // acknowledge individual messages after processing\n        nodeRedisClient.xAck(streamKeyName, groupName, messageItem.id);\n      }\n    }\n  }\n}\n\n// `listenToStream` listens for events and calls the `onMessage` callback to further handle the events.\nlistenToStream({\n  onMessage: processTransactionStream,\n});\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Digital identity service")," calculates the identity score and stores to Redis stream")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const processTransactionStream: IMessageHandler = async (\n  message: ITransactionStreamMessage,\n  messageId,\n) => {\n  if (message) {\n    if (message.action == 'INSERT_LOGIN_IDENTITY') {\n      //...\n    } else if (message.action == 'CALCULATE_IDENTITY_SCORE') {\n      // calculate identity score\n      const identityScore = await calculateIdentityScore(message);\n      message.identityScore = identityScore.toString();\n\n      //point 3 - store identity score to stream\n      const entry = {\n        action: 'LOG_IDENTITY_SCORE',\n        logMessage: `${identityScore} is the digital identity score for the user ${message.userId}`,\n        userId: message.userId,\n        sessionId: message.sessionId,\n        identityScore: identityScore.toString(),\n      };\n      const nodeRedisClient = getNodeRedisClient();\n      const streamKeyName = 'TRANSACTION_STREAM';\n      const id = '*'; //* = auto generate\n      await nodeRedisClient.xAdd(streamKeyName, id, entry);\n\n      // point 4\n      const insertedKey = await addDigitalIdentityToRedis(message);\n    }\n  }\n};\n\nconst calculateIdentityScore = async (message: ITransactionStreamMessage) => {\n  //Compare the \"digital identity\" with previously stored \"login identities\" and determine the identity score\n\n  let identityScore = 0;\n  const repository = digitalIdentityRepo.getRepository();\n\n  if (message && message.userId && repository) {\n    let queryBuilder = repository\n      .search()\n      .where('userId')\n      .eq(message.userId)\n      .and('action')\n      .eq('INSERT_LOGIN_IDENTITY')\n      .and('statusCode')\n      .eq(DB_ROW_STATUS.ACTIVE);\n\n    //console.log(queryBuilder.query);\n    const digitalIdentities = await queryBuilder.return.all();\n\n    if (digitalIdentities && digitalIdentities.length) {\n      //if browser details matches -> +1 score\n      const matchBrowserItems = digitalIdentities.filter((_digIdent) => {\n        let identityBrowserAgentHash = crypto\n          .createHash('sha256')\n          .update(message.identityBrowserAgent)\n          .digest('hex');\n        return _digIdent.browserFingerprint == identityBrowserAgentHash;\n      });\n      if (matchBrowserItems.length > 0) {\n        identityScore += 1;\n      }\n\n      //if IP address  matches -> +1 score\n      const matchIpAddressItems = digitalIdentities.filter((_digIdent) => {\n        return _digIdent.ipAddress == message.identityIpAddress;\n      });\n      if (matchIpAddressItems.length > 0) {\n        identityScore += 1;\n      }\n    }\n  }\n\n  //calculate average score\n  const noOfIdentityCharacteristics = 2; //2 == browserFingerprint, ipAddress\n  identityScore = identityScore / noOfIdentityCharacteristics;\n  return identityScore; // identityScore final value ranges between 0 (no match) and 1 (full match)\n};\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Digital identity service")," stores identity with score as Redis JSON")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const addDigitalIdentityToRedis = async (\n  message: ITransactionStreamMessage,\n) => {\n  let insertedKey = '';\n\n  const userId = message.userId;\n  const digitalIdentity: IDigitalIdentity = {\n    action: message.action,\n    userId: userId,\n    sessionId: message.sessionId,\n\n    ipAddress: message.identityIpAddress,\n    browserFingerprint: crypto\n      .createHash('sha256')\n      .update(message.identityBrowserAgent)\n      .digest('hex'),\n    identityScore: message.identityScore ? message.identityScore : '',\n\n    createdOn: new Date(),\n    createdBy: userId,\n    statusCode: DB_ROW_STATUS.ACTIVE, //1\n  };\n\n  const repository = digitalIdentityRepo.getRepository();\n  if (repository) {\n    const entity = repository.createEntity(digitalIdentity);\n    insertedKey = await repository.save(entity);\n  }\n\n  return insertedKey;\n};\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Digital Identity's extra characteristics helps in securing transaction better rather than just session validation.\nDigital identity score along with user profile score and AI (Artificial Intelligence) score can greatly enhance the transaction security. Check out additional resources below for learning more about Redis."),(0,a.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/solutions/fraud-detection/transaction-risk-scoring"},"Transaction Risk Scoring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/solutions/microservices/cqrs"},"CQRS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/solutions/microservices/interservice-communication"},"Interservice communication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/solutions/microservices/caching"},"Query caching")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/solutions/microservices/api-gateway-caching"},"API gateway caching")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/c/Redisinc"},"Redis YouTube channel")),(0,a.kt)("li",{parentName:"ul"},"Clients like ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/redis/node-redis"},"Node Redis")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/redis/redis-om-node"},"Redis om Node")," help you to use Redis in Node.js applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight")," : To view your Redis data or to play with raw Redis commands in the workbench")))}y.isMDXComponent=!0},34045:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const s={},r=void 0,o={unversionedId:"howtos/solutions/microservices/common-data/microservices-arch-with-redis",id:"howtos/solutions/microservices/common-data/microservices-arch-with-redis",title:"microservices-arch-with-redis",description:"The e-commerce microservices application discussed in the rest of this tutorial uses the following architecture:",source:"@site/docs/howtos/solutions/microservices/common-data/microservices-arch-with-redis.mdx",sourceDirName:"howtos/solutions/microservices/common-data",slug:"/howtos/solutions/microservices/common-data/microservices-arch-with-redis",permalink:"/howtos/solutions/microservices/common-data/microservices-arch-with-redis",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/microservices/common-data/microservices-arch-with-redis.mdx",tags:[],version:"current",lastUpdatedAt:1679564122,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{}},d={},c=[],l={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The e-commerce microservices application discussed in the rest of this tutorial uses the following architecture:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"products service")," - handles querying products from the database and returning them to the frontend"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"orders service")," - handles validating and creating orders"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"order history service")," - handles querying a customer's order history"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"payments service")," - handles processing orders for payment"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"digital identity service")," - handles storing identity and calculating identity score"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"api gateway")," - unifies your services under a single endpoint"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"mongodb")," - serves as the primary database, storing orders, order history, products, etc."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"redis")," - serves as the stream processor and caching database")))}m.isMDXComponent=!0},4975:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=i(87462),a=(i(67294),i(3905)),s=i(31788);const r={},o=void 0,d={unversionedId:"howtos/solutions/microservices/common-data/microservices-ecommerce",id:"howtos/solutions/microservices/common-data/microservices-ecommerce",title:"microservices-ecommerce",description:"The e-commerce microservices application consists of a frontend, built using Next.js with TailwindCSS. The application backend uses Node.js. The data is stored in MongoDB and Redis. Below you will find screenshots of the frontend of the e-commerce app:",source:"@site/docs/howtos/solutions/microservices/common-data/microservices-ecommerce.mdx",sourceDirName:"howtos/solutions/microservices/common-data",slug:"/howtos/solutions/microservices/common-data/microservices-ecommerce",permalink:"/howtos/solutions/microservices/common-data/microservices-ecommerce",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/microservices/common-data/microservices-ecommerce.mdx",tags:[],version:"current",lastUpdatedAt:1679585474,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{}},c={},l=[],m={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The e-commerce microservices application consists of a frontend, built using ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," with ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"TailwindCSS"),". The application backend uses ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js"),". The data is stored in ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB")," and ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free/"},"Redis"),". Below you will find screenshots of the frontend of the e-commerce app:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard"),": Shows the list of products with search functionality"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"redis microservices e-commerce app frontend products page",src:i(89628).Z,width:"2475",height:"1873"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Shopping Cart"),': Add products to the cart, then check out using the "Buy Now" button\n',(0,a.kt)("img",{alt:"redis microservices e-commerce app frontend shopping cart",src:i(70114).Z,width:"2772",height:"1942"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Order history"),": Once an order is placed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Orders")," link in the top navigation bar shows the order status and history"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"redis microservices e-commerce app frontend order history page",src:i(61032).Z,width:"2511",height:"1351"})))),(0,a.kt)(s.default,{mdxType:"SourceCode"}))}p.isMDXComponent=!0},31788:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const s={},r=void 0,o={unversionedId:"howtos/solutions/microservices/common-data/microservices-source-code-tip",id:"howtos/solutions/microservices/common-data/microservices-source-code-tip",title:"microservices-source-code-tip",description:"Below is a command to the clone the source code for the application used in this tutorial",source:"@site/docs/howtos/solutions/microservices/common-data/microservices-source-code-tip.mdx",sourceDirName:"howtos/solutions/microservices/common-data",slug:"/howtos/solutions/microservices/common-data/microservices-source-code-tip",permalink:"/howtos/solutions/microservices/common-data/microservices-source-code-tip",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/microservices/common-data/microservices-source-code-tip.mdx",tags:[],version:"current",lastUpdatedAt:1679343780,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{}},d={},c=[],l={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"GITHUB CODE",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Below is a command to the clone the source code for the application used in this tutorial"),(0,a.kt)("p",{parentName:"admonition"},"git clone --branch v1.0.0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-microservices-ecommerce-solutions"},"https://github.com/redis-developer/redis-microservices-ecommerce-solutions"))))}m.isMDXComponent=!0},99491:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/code-flow-1-1-9d80b1113aa7d3117efd65204acc237e.png"},95057:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/code-flow-1-3-65726fb21663dd9418202d8ecf8f886c.png"},85501:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/code-flow-2-1-dad509c6623bc7a88d205149c1430898.png"},48055:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/code-flow-2-3-85985f11f15ec97fad58db6e78418e47.png"},54898:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/code-flow-2-4-4e96036cd0cf8cff623bf1e59d32b3a7.png"},46706:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/digital-identity-code-flow-1-3fae6f6dda8f19c8fdac47f7b50cd71a.png"},78298:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/digital-identity-code-flow-2-8346452121743f890997565138b5f7b0.png"},70114:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/design-cart-2-2a3b76656f26a754bed6a6c63ad8beef.png"},89628:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/design-dashboard-6a34137ca4862561cc2f065ed55ae081.png"},61032:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/design-order-history-16fc808f70b63d91a37a3ea76baa232d.png"}}]);