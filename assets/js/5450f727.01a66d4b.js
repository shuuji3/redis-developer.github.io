"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7470],{85162:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(67294),n=a(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(87462),n=a(67294),i=a(86010),r=a(72389),o=a(67392),l=a(7094),d=a(12466);const p="tabList__CuJ",u="tabItem_LNqP";function h(e){var t;const{lazy:a,block:r,defaultValue:h,values:c,groupId:m,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??g.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),w=(0,o.l)(b,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===h?h:h??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,l.U)(),[y,S]=(0,n.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,d.o5)();if(null!=m){const e=v[m];null!=e&&e!==y&&b.some((t=>t.value===e))&&S(e)}const R=e=>{const t=e.currentTarget,a=E.indexOf(t),s=b[a].value;s!==y&&(I(t),S(s),null!=m&&N(m,String(s)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},k)},b.map((e=>{let{value:t,label:a,attributes:r}=e;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>E.push(e),onKeyDown:C,onClick:R},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,r.Z)();return n.createElement(h,(0,s.Z)({key:String(t)},e))}},71131:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(67294),n=a(3905),i=a(52195);const r="riContainer_bco2",o="riDescriptionShort_E27B",l="riDetail_wzFs",d="riIcon_yDou",p="riTitle_x6vI",u="riDescription_RDnu",h="riMore_apRP";var c=a(86010);const m=e=>{const[t,a]=s.useState(!1);return s.createElement("a",{href:e.page,className:r},s.createElement("div",{className:o},s.createElement("div",{className:d},s.createElement("span",{className:"fe fe-zap"})),s.createElement("div",{className:l},s.createElement("div",{className:p},s.createElement("a",{href:e.page},e.title)),s.createElement("div",{className:u},e.description,s.Children.count(e.children)>0&&s.createElement("span",{className:(0,c.Z)(h,"fe","fe-more-horizontal"),onClick:()=>a(!t)})))),t&&s.createElement("div",{className:"ri-description-long"},s.createElement(n.Zo,{components:i.Z},e.children)))}},23515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(87462),n=(a(67294),a(3905));a(65488),a(85162),a(44996),a(71131);const i={id:"index-chatapp",title:"How to build a Chat application using Redis",sidebar_label:"How to build a Chat application using Redis",slug:"/howtos/chatapp",authors:["ajeet"]},r=void 0,o={unversionedId:"howtos/chatapp/index-chatapp",id:"howtos/chatapp/index-chatapp",title:"How to build a Chat application using Redis",description:"Real-time chat app is an online communication channel that allows you to conduct real-time conversations. More and more developers are tapping into the power of Redis as it is extremely fast & due to its support for variety of rich data structure such as Lists, Sets, Sorted Sets, Hashes etc. Redis comes along with a Pub/Sub messaging feature functionality that allows developers to scale the backend by spawning multiple server instances.",source:"@site/docs/howtos/chatapp/index-chatapp.mdx",sourceDirName:"howtos/chatapp",slug:"/howtos/chatapp",permalink:"/howtos/chatapp",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/chatapp/index-chatapp.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-chatapp",title:"How to build a Chat application using Redis",sidebar_label:"How to build a Chat application using Redis",slug:"/howtos/chatapp",authors:["ajeet"]},sidebar:"docs",previous:{title:"10. Sample Application",permalink:"/howtos/moviesdatabase/sampleapp"},next:{title:"How to build a Fraud Detection System using Redis",permalink:"/howtos/frauddetection"}},l={},d=[{value:"Step 1. Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3. Installing the requred packages",id:"step-3-installing-the-requred-packages",level:3},{value:"Step 4. Starting the frontend",id:"step-4-starting-the-frontend",level:3},{value:"Step 4. Installing the required Python modules",id:"step-4-installing-the-required-python-modules",level:3},{value:"Step 5: Running the Backend",id:"step-5-running-the-backend",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Initialization",id:"initialization",level:4},{value:"Creating of demo users",id:"creating-of-demo-users",level:4},{value:"Pub/sub",id:"pubsub",level:4},{value:"Real-time chat and session handling",id:"real-time-chat-and-session-handling",level:4},{value:"How the data is stored?",id:"how-the-data-is-stored",level:3},{value:"How the data is accessed?",id:"how-the-data-is-accessed",level:3},{value:"Related Posts",id:"related-posts",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Real-time chat app is an online communication channel that allows you to conduct real-time conversations. More and more developers are tapping into the power of Redis as it is extremely fast & due to its support for variety of rich data structure such as Lists, Sets, Sorted Sets, Hashes etc. Redis comes along with a Pub/Sub messaging feature functionality that allows developers to scale the backend by spawning multiple server instances.\nPlease note that this code is open source. You can find the link at the end of this tutorial."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/miK7xDkDXF0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,"In this tutorial, we will see how to develop real time messaging apps with Flask, Socket.IO and Redis. This example uses Redis Pub/sub feature combined with websockets for implementing the real time chat app communication between client and server."),(0,n.kt)("p",null,"Please note that this code is open source and implements the basic features of a live chat app. You can find the link at the end of this tutorial."),(0,n.kt)("h3",{id:"step-1-prerequisites"},"Step 1. Prerequisites"),(0,n.kt)("p",null,"In order to perform this instant messaging app development, you will need the following software:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Python 3.6+")),(0,n.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),(0,n.kt)("p",null,"First of all, we will clone the project that implements basic chat functionality."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/basic-redis-chat-app-demo-python\n")),(0,n.kt)("h3",{id:"step-3-installing-the-requred-packages"},"Step 3. Installing the requred packages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd client\nyarn install\n")),(0,n.kt)("h3",{id:"step-4-starting-the-frontend"},"Step 4. Starting the frontend"),(0,n.kt)("p",null,"To run the frontend of the chat app, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"yarn start\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"You can now access a chat window in the browser.\n\n  Local:            http://localhost:3000\n  On Your Network:  http://192.168.1.9:3000\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"chatapp",src:a(50330).Z,width:"1044",height:"1116"})),(0,n.kt)("h3",{id:"step-4-installing-the-required-python-modules"},"Step 4. Installing the required Python modules"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ..\npip3 install -r requirements.txt\n")),(0,n.kt)("h3",{id:"step-5-running-the-backend"},"Step 5: Running the Backend"),(0,n.kt)("p",null,"To start the fully chat app, run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 -m venv venv/\nsource venv/bin/activate\npython3 app.py\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 app.py\n * Restarting with stat\n * Debugger is active!\n * Debugger PIN: 220-696-610\n(8122) wsgi starting up on http://127.0.0.1:5000\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chatapp",src:a(26230).Z,width:"2434",height:"1730"})),(0,n.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,"This instant messaging app server works as a basic REST API which involves keeping the session and handling the user state in the chat room (besides the WebSocket/real-time part). When the server starts, the initialization step occurs. At first, a new Redis connection is established and it's checked whether it's needed to load the demo data."),(0,n.kt)("h4",{id:"initialization"},"Initialization"),(0,n.kt)("p",null,"For simplicity, a key with total_users value is checked: if it does not exist, we fill the Redis database with initial data. EXISTS total_users (checks if the key exists)\nThe demo data initialization is handled in multiple steps:"),(0,n.kt)("h4",{id:"creating-of-demo-users"},"Creating of demo users"),(0,n.kt)("p",null,"We create a new user id: INCR total_users. Then we set a user ID lookup key by user name: e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SET username:nick user:1\n")),(0,n.kt)("p",null,"And finally, the rest of the data is written to the hash set:"),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  HSET user:1 username "nick" password "bcrypt_hashed_password".\n')),(0,n.kt)("p",null,'Additionally, each user is added to the default "General" room.\nFor handling chat rooms for each user, we have a set that holds the chat room ids. Here\'s an example command of how to add the room:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' SADD user:1:rooms "0"\n')),(0,n.kt)("p",null,"Populate private messages between users. At first, private rooms are created: if a private room needs to be established, for each user a room id: room:1:2 is generated, where numbers correspond to the user ids in ascending order."),(0,n.kt)("p",null,"E.g. Create a private room between 2 users:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD user:1:rooms 1:2 and SADD user:2:rooms 1:2\n")),(0,n.kt)("p",null,"Then we add messages to this room by writing to a sorted set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," ZADD room:1:2 1615480369 \"{'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}\"\n")),(0,n.kt)("p",null,"We use a stringified JSON for keeping the message structure and simplify the implementation details for this demo-app."),(0,n.kt)("p",null,'Populate the "General" room with messages. Messages are added to the sorted set with id of the "General" room: room:0'),(0,n.kt)("h4",{id:"pubsub"},"Pub/sub"),(0,n.kt)("p",null,"After initialization, a pub/sub subscription is created: SUBSCRIBE MESSAGES. At the same time, each server instance will run a listener on a message on this channel to receive real-time updates."),(0,n.kt)("p",null,"Again, for simplicity, each message is serialized to JSON, which we parse and then handle in the same manner, as WebSocket messages."),(0,n.kt)("p",null,"Pub/sub allows connecting multiple servers written in different platforms without taking into consideration the implementation detail of each server."),(0,n.kt)("h4",{id:"real-time-chat-and-session-handling"},"Real-time chat and session handling"),(0,n.kt)("p",null,"When a WebSocket/real-time server is instantiated, which listens for the next events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connection. A new user is connected. At this point, a user ID is captured and saved to the session (which is cached in Redis). Note, that session caching is language/library-specific and it's used here purely for persistence and maintaining the state between server reloads.")),(0,n.kt)("p",null,"A global set with online_users key is used for keeping the online state for each user. So on a new connection, a user ID is written to that set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD online_users 1\n")),(0,n.kt)("p",null,"Here we have added user with id 1 to the set online_users"),(0,n.kt)("p",null,"After that, a message is broadcasted to the clients to notify them that a new user is joined the chat."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disconnect. It works similarly to the connection event, except we need to remove the user for online_users set and notify the clients: SREM online_users 1 (makes user with id 1 offline).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Message. A user sends a message, and it needs to be broadcasted to the other clients. The pub/sub allows us also to broadcast this message to all server instances which are connected to this Redis:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," PUBLISH message \"{'serverId': 4132, 'type':'message', 'data': {'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}}\"\n")),(0,n.kt)("p",null,"Note we send additional data related to the type of the message and the server id. Server id is used to discard the messages by the server instance which sends them since it is connected to the same MESSAGES channel."),(0,n.kt)("p",null,"The type field of the serialized JSON corresponds to the real-time method we use for real-time communication (connect/disconnect/message)."),(0,n.kt)("p",null,"The data is method-specific information. In the example above it's related to the new message."),(0,n.kt)("h3",{id:"how-the-data-is-stored"},"How the data is stored?"),(0,n.kt)("p",null,"Redis is used mainly as a database to keep the user/messages data and for sending messages between connected servers."),(0,n.kt)("p",null,"The real-time functionality is handled by Socket.IO for server-client messaging. Additionally each server instance subscribes to the MESSAGES channel of pub/sub and dispatches messages once they arrive. Note that, the server transports pub/sub messages with a separate event stream (handled by Server Sent Events), this is due to the need of running pub/sub message loop apart from socket.io signals."),(0,n.kt)("p",null,"The chat data is stored in various keys and various data types.\nUser data is stored in a hash set where each user entry contains the next values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"username: unique user name;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"password: hashed password")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Additionally a set of chat rooms is associated with user")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rooms are sorted sets which contains messages where score is the timestamp for each message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each chat room has a name associated with it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'The "online" set is global for all users is used for keeping track on which user is online.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each user hash's set is accessed by key user:{userId}. The data for it stored with ",(0,n.kt)("inlineCode",{parentName:"p"},"HSET key field data"),". User ID is calculated by incrementing the ",(0,n.kt)("inlineCode",{parentName:"p"},"total_users")," key (",(0,n.kt)("inlineCode",{parentName:"p"},"INCR total_users"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Usernames are stored as separate keys (",(0,n.kt)("inlineCode",{parentName:"p"},"username:{username}"),") which returns the userId for quicker access and stored with ",(0,n.kt)("inlineCode",{parentName:"p"},"SET username:{username} {userId}"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rooms which a user belongs to are stored at ",(0,n.kt)("inlineCode",{parentName:"p"},"user:{userId}:rooms")," as a set of chat room ids. A room is added by ",(0,n.kt)("inlineCode",{parentName:"p"},"SADD user:{userId}:rooms {roomId}")," command.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Messages are stored at ",(0,n.kt)("inlineCode",{parentName:"p"},"room:{roomId}")," key in a sorted set (as mentioned above). They are added with the ",(0,n.kt)("inlineCode",{parentName:"p"},"ZADD room:{roomId} {timestamp} {message}")," command. Messages are serialized to an app-specific JSON string."))),(0,n.kt)("h3",{id:"how-the-data-is-accessed"},"How the data is accessed?"),(0,n.kt)("p",null,"Get User HGETALL user:{id}."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," HGETALL user:2\n")),(0,n.kt)("p",null,"where we get data for the user with id: 2."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Online users: SMEMBERS online_users. This will return ids of users which are online")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get room ids of a user: SMEMBERS user:{id}:rooms.\nExample:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," SMEMBERS user:2:rooms\n")),(0,n.kt)("p",null,"This will return IDs of chat rooms for user with ID: 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get list of messages ",(0,n.kt)("inlineCode",{parentName:"li"},"ZREVRANGE room:{roomId} {offset_start} {offset_end}"),".\nExample:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," ZREVRANGE room:1:2 0 50\n")),(0,n.kt)("p",null,"It will return 50 messages with 0 offsets for the private room between users with IDs 1 and 2."),(0,n.kt)("h2",{id:"related-posts"},"Related Posts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-dotnet"},"Building a Chat application demo in .Net")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-java"},"Building a Chat application demo in Java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs"},"Building a Chat application demo in NodeJS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-demo-go"},"Building a Chat application demo in Go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-demo-ruby"},"Building a Chat application demo in Ruby"))))}u.isMDXComponent=!0},26230:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/chatapp_homepage-e18893a7fe583a1dbda4c15347ee9d52.png"},50330:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/chatapp_server-5bee233da218811142ccb0a536639640.png"}}]);