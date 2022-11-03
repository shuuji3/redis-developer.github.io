"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4803],{85162:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(67294),a=s(86010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:s,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(n,l),hidden:s},t)}},65488:(e,t,s)=>{s.d(t,{Z:()=>c});var i=s(87462),a=s(67294),n=s(86010),l=s(72389),r=s(67392),o=s(7094),d=s(12466);const p="tabList__CuJ",u="tabItem_LNqP";function h(e){var t;const{lazy:s,block:l,defaultValue:h,values:c,groupId:m,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??f.map((e=>{let{props:{value:t,label:s,attributes:i}}=e;return{value:t,label:s,attributes:i}})),v=(0,r.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===h?h:h??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,o.U)(),[I,E]=(0,a.useState)(b),R=[],{blockElementScrollPositionUntilNextRender:S}=(0,d.o5)();if(null!=m){const e=N[m];null!=e&&e!==I&&k.some((t=>t.value===e))&&E(e)}const w=e=>{const t=e.currentTarget,s=R.indexOf(t),i=k[s].value;i!==I&&(S(t),E(i),null!=m&&y(m,String(i)))},x=e=>{var t;let s=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;s=R[t]??R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;s=R[t]??R[R.length-1];break}}null==(t=s)||t.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},g)},k.map((e=>{let{value:t,label:s,attributes:l}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>R.push(e),onKeyDown:x,onClick:w},l,{className:(0,n.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":I===t})}),s??t)}))),s?(0,a.cloneElement)(f.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function c(e){const t=(0,l.Z)();return a.createElement(h,(0,i.Z)({key:String(t)},e))}},71131:(e,t,s)=>{s.d(t,{Z:()=>m});var i=s(67294),a=s(3905),n=s(52195);const l="riContainer_bco2",r="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",p="riTitle_x6vI",u="riDescription_RDnu",h="riMore_apRP";var c=s(86010);const m=e=>{const[t,s]=i.useState(!1);return i.createElement("a",{href:e.page,className:l},i.createElement("div",{className:r},i.createElement("div",{className:d},i.createElement("span",{className:"fe fe-zap"})),i.createElement("div",{className:o},i.createElement("div",{className:p},i.createElement("a",{href:e.page},e.title)),i.createElement("div",{className:u},e.description,i.Children.count(e.children)>0&&i.createElement("span",{className:(0,c.Z)(h,"fe","fe-more-horizontal"),onClick:()=>s(!t)})))),t&&i.createElement("div",{className:"ri-description-long"},i.createElement(a.Zo,{components:n.Z},e.children)))}},80442:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=s(87462),a=(s(67294),s(3905));s(65488),s(85162),s(44996),s(71131);const n={id:"index-usinghelm",title:"Installing RedisInsight using Helm",sidebar_label:"Installing RedisInsight using Helm",slug:"/explore/redisinsight/usinghelm",authors:["ajeet"]},l=void 0,r={unversionedId:"explore/redisinsight/usinghelm/index-usinghelm",id:"explore/redisinsight/usinghelm/index-usinghelm",title:"Installing RedisInsight using Helm",description:"Helm is a package manager for Kubernetes. It is the best way to find, share, and use software built for Kubernetes. It is the K8s equivalent of yum or apt.",source:"@site/docs/explore/redisinsight/usinghelm/index-usinghelm.mdx",sourceDirName:"explore/redisinsight/usinghelm",slug:"/explore/redisinsight/usinghelm",permalink:"/explore/redisinsight/usinghelm",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/usinghelm/index-usinghelm.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-usinghelm",title:"Installing RedisInsight using Helm",sidebar_label:"Installing RedisInsight using Helm",slug:"/explore/redisinsight/usinghelm",authors:["ajeet"]},sidebar:"docs",previous:{title:"Utilize Elasticache Auto Discovery For Redis with RedisInsight",permalink:"/explore/redisinsight/autodiscover"},next:{title:"Redis Data Source for Grafana",permalink:"/explore/redisdatasource"}},o={},d=[{value:"Benefits of Helm:",id:"benefits-of-helm",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1. Install the Prerequisites",id:"step-1-install-the-prerequisites",level:3},{value:"Step 2. Install Helm on your Mac system",id:"step-2-install-helm-on-your-mac-system",level:3},{value:"Step 3. Verify if helm is installed correctly",id:"step-3-verify-if-helm-is-installed-correctly",level:3},{value:"Step 4. Download RedisInsight Helm Chart",id:"step-4-download-redisinsight-helm-chart",level:3},{value:"Step 5. Verify if Kubernetes is up and running",id:"step-5-verify-if-kubernetes-is-up-and-running",level:3},{value:"Step 6. Install RedisInsight using Helm chart",id:"step-6-install-redisinsight-using-helm-chart",level:3},{value:"Step 7. Get the application URL",id:"step-7-get-the-application-url",level:3},{value:"Step 8. Listing the IP address",id:"step-8-listing-the-ip-address",level:3},{value:"Step 9. Listing the Helm Chart",id:"step-9-listing-the-helm-chart",level:3},{value:"Step 10. Listing the Redisinsight Pods",id:"step-10-listing-the-redisinsight-pods",level:3},{value:"Step 11. Accessing RedisInsight",id:"step-11-accessing-redisinsight",level:3},{value:"References",id:"references",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Helm is a package manager for Kubernetes. It is the best way to find, share, and use software built for Kubernetes. It is the K8s equivalent of yum or apt.\nHelm helps you manage Kubernetes applications \u2014 Helm Charts help you define, install, and upgrade even the most complex Kubernetes application. Helm is a graduated project in the CNCF and is maintained by the Helm community."),(0,a.kt)("h3",{id:"benefits-of-helm"},"Benefits of Helm:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improves developer productivity"),(0,a.kt)("li",{parentName:"ul"},"Makes application deployment easy, standarized and reusable"),(0,a.kt)("li",{parentName:"ul"},"Enhances operational readiness"),(0,a.kt)("li",{parentName:"ul"},"Reduces the complexity of deployments of microservices"),(0,a.kt)("li",{parentName:"ul"},"Speeds up the adaptation of cloud native applications")),(0,a.kt)("p",null,"It is possible to install RedisInsight using Helm chart. A full-featured desktop GUI client, RedisInsight is an essential tool for Redis developers. It is a lightweight multi-platform management visualization tool that helps you design, develop, and optimize your application capabilities in a single easy-to-use environment. RedisInsight not just makes it easier to interact with your databases and manage your data, but also helps in managing Redis Cluster with ease."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"step-1-install-the-prerequisites"},"Step 1. Install the Prerequisites"),(0,a.kt)("p",null,"Install Docker Desktop for Mac and enable Kubernetes as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:s(59069).Z,width:"781",height:"441"})),(0,a.kt)("h3",{id:"step-2-install-helm-on-your-mac-system"},"Step 2. Install Helm on your Mac system"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," brew install helm\n")),(0,a.kt)("h3",{id:"step-3-verify-if-helm-is-installed-correctly"},"Step 3. Verify if helm is installed correctly"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' helm version\n version.BuildInfo{Version:"v3.6.1",\n GitCommit:"61d8e8c4a6f95540c15c6a65f36a6dd0a45e7a2f", GitTreeState:"dirty",\n GoVersion:"go1.16.5"}\n')),(0,a.kt)("h3",{id:"step-4-download-redisinsight-helm-chart"},"Step 4. Download RedisInsight Helm Chart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," wget https://docs.redis.com/latest/pkgs/redisinsight-chart-0.1.0.tgz\n")),(0,a.kt)("h3",{id:"step-5-verify-if-kubernetes-is-up-and-running"},"Step 5. Verify if Kubernetes is up and running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl get nodes\n NAME             STATUS   ROLES    AGE   VERSION\n docker-desktop   Ready    master   22d   v1.19.7\n")),(0,a.kt)("h3",{id:"step-6-install-redisinsight-using-helm-chart"},"Step 6. Install RedisInsight using Helm chart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' helm install redisinsight redisinsight-chart-0.1.0.tgz --set service.type=NodePort\n\n NAME: redisinsight\n LAST DEPLOYED: Sat Jun 26 11:40:11 2021\n NAMESPACE: default\n STATUS: deployed\n REVISION: 1\n NOTES:\n 1. Get the application URL by running these commands:\n  export NODE_PORT=$(kubectl get --namespace default -o\n jsonpath="{.spec.ports[0].nodePort}" services redisinsight-redisinsight-chart)\n  export NODE_IP=$(kubectl get nodes --namespace default -o\n jsonpath="{.items[0].status.addresses[0].address}")\n  echo http://$NODE_IP:$NODE_PORT\n')),(0,a.kt)("h3",{id:"step-7-get-the-application-url"},"Step 7. Get the application URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services redisinsight-redisinsight-chart)\n export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")\n')),(0,a.kt)("h3",{id:"step-8-listing-the-ip-address"},"Step 8. Listing the IP address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," echo http://$NODE_IP:$NODE_PORT\n http://192.168.65.4:30269\n")),(0,a.kt)("h3",{id:"step-9-listing-the-helm-chart"},"Step 9. Listing the Helm Chart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," helm list\n NAME           NAMESPACE   REVISION    UPDATED                             STATUS      CHART                       APP VERSION\n redisinsight   default     1           2021-06-26 11:40:11.82793 +0530 IST deployed    redisinsight-chart-0.1.0\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"images",src:s(21705).Z,width:"782",height:"527"})),(0,a.kt)("h3",{id:"step-10-listing-the-redisinsight-pods"},"Step 10. Listing the Redisinsight Pods"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl get po\n NAME                                               READY   STATUS    RESTARTS   AGE\n fortune                                            2/2     Running   8          22d\n redisinsight-redisinsight-chart-857b486d8f-w9xpv   1/1     Running   0          15m\n")),(0,a.kt)("h3",{id:"step-11-accessing-redisinsight"},"Step 11. Accessing RedisInsight"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"images",src:s(13980).Z,width:"883",height:"391"}),"\n",(0,a.kt)("img",{alt:"images",src:s(46311).Z,width:"841",height:"467"})),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Explore Redis keys using RedisInsight browser tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/redisearch"},"Unified Search and Analytics using RediSearch Browser Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/redistimeseries"},"Managing time-series data using RedisTimeSeries Browser Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/profiler"},"Analyze Your Redis commands using RedisInsight Profiler tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Debugging Redis using RedisInsight Slowlog Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/streams"},"Using Redis Streams with RedisInsight"))),(0,a.kt)("h2",{id:""}),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}u.isMDXComponent=!0},59069:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image1-6b4439d804d249cfa020804328bd4498.png"},21705:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image2-c1fa2fc8ec918ac90b252d52d8337521.png"},13980:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image3-c620aa0371ee0293a2d651dc67c5c93e.png"},46311:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image_4-942e37868e9a0e3464035f201906dcc8.png"}}]);