"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4001],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50358:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(52263);const i="authorByline_VoxI",o="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:n}=e;const{siteConfig:t}=(0,r.Z)(),l=t.customFields.authors;return a.createElement(a.Fragment,null,n.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),n.authors.map((e=>a.createElement("div",{key:e,className:i},a.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:o},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},99682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),i=t(50358);const o={id:"index-lesson_9",title:"Caching REST Services with Redis",sidebar_label:"Caching w/ Redis",slug:"/develop/java/redis-and-spring-course/lesson_9",authors:["bsb"]},s=void 0,l={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9",id:"develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9",title:"Caching REST Services with Redis",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9.mdx",sourceDirName:"develop/java/spring/redis-and-spring-course/lesson_9",slug:"/develop/java/redis-and-spring-course/lesson_9",permalink:"/develop/java/redis-and-spring-course/lesson_9",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-lesson_9",title:"Caching REST Services with Redis",sidebar_label:"Caching w/ Redis",slug:"/develop/java/redis-and-spring-course/lesson_9",authors:["bsb"]},sidebar:"docs",previous:{title:"Recommendations w/ RedisGraph",permalink:"/develop/java/redis-and-spring-course/lesson_8"},next:{title:"Overview",permalink:"/develop/java/spring/rate-limiting"}},c={},p=[{value:"Objectives",id:"objectives",level:3},{value:"Agenda",id:"agenda",level:3},{value:"Spring-Redis Caching Recipe",id:"spring-redis-caching-recipe",level:3},{value:"Using the @Cacheable annotation",id:"using-the-cacheable-annotation",level:3}],d={toc:p};function u(e){let{components:n,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{frontMatter:o,mdxType:"Authors"}),(0,r.kt)("h3",{id:"objectives"},"Objectives"),(0,r.kt)("p",null,"Learn how easy it is to use Redis as a cache in your Spring applications"),(0,r.kt)("h3",{id:"agenda"},"Agenda"),(0,r.kt)("p",null,"In this lesson, students will learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The basics of Caching RESTful Services"),(0,r.kt)("li",{parentName:"ul"},"How to configure the Spring Data Redis ",(0,r.kt)("inlineCode",{parentName:"li"},"RedisCacheManager")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"RedisCacheConfiguration")),(0,r.kt)("li",{parentName:"ul"},"How to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"@Cacheable")," annotation to mark a REST controller response as cacheable\nIf you get stuck:"),(0,r.kt)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redi2read/tree/course/milestone-9"},"https://github.com/redis-developer/redi2read/tree/course/milestone-9"))),(0,r.kt)("h3",{id:"spring-redis-caching-recipe"},"Spring-Redis Caching Recipe"),(0,r.kt)("p",null,"To implement caching in our Spring Boot application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure the Redis cache manager"),(0,r.kt)("li",{parentName:"ul"},"Enable application-wide caching with the ",(0,r.kt)("inlineCode",{parentName:"li"},"@EnableCaching")," annotation")),(0,r.kt)("p",null,"In the main application file (",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/Redi2readApplication.java"),"), add the ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheManager")," method as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\n@EnableCaching\npublic class Redi2readApplication {\n\n  // ...\n\n  @Bean\n  public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {\n    RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig() //\n        .prefixCacheNameWith(this.getClass().getPackageName() + ".") //\n        .entryTtl(Duration.ofHours(1)) //\n        .disableCachingNullValues();\n\n    return RedisCacheManager.builder(connectionFactory) //\n        .cacheDefaults(config) //\n        .build();\n  }\n\n  // ...\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheManager")," method takes an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisConnectionFactory"),". In it we will configure our cache to use a Redis\nkey prefix equals to our application\u2019s main package plus a period, that is ",(0,r.kt)("inlineCode",{parentName:"p"},"com.redislabs.edu.redi2read."),"\nWe also set the TTL or \u201cTime to Live\u201d of our cache entries to 1 hour and make sure that we don\u2019t cache nulls.\nAt the class level, we also use the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableCaching "),"to globally enable caching for our applications.\nThe changes above will need the import statements shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.cache.annotation.EnableCaching;\nimport org.springframework.data.redis.cache.RedisCacheConfiguration;\nimport org.springframework.data.redis.cache.RedisCacheManager;\nimport java.time.Duration;\n")),(0,r.kt)("h3",{id:"using-the-cacheable-annotation"},"Using the @Cacheable annotation"),(0,r.kt)("p",null,"In the context of a RESTful service, caching makes sense at the handoff between the application and the HTTP protocol.\nIt seems almost silly to think about caching anything in an application powered by Redis, but complex business logic\ntouching many data repositories and performing intense calculations can add to your response\u2019s latency.\nThe ideal place to perform this caching is at the controller level. For example, let\u2019s say that we wanted to cache\nthe responses of our book searches in the ",(0,r.kt)("inlineCode",{parentName:"p"},"BookController"),". We could simple add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Cacheable")," annotation as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("/search")\n@Cacheable("book-search")\npublic SearchResults<String,String> search(@RequestParam(name="q")String query) {\n  RediSearchCommands<String, String> commands = searchConnection.sync();\n  SearchResults<String, String> results = commands.search(searchIndexName, query);\n  return results;\n}\n')),(0,r.kt)("p",null,"Spring will now use Redis to create keys under the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.redislabs.edu.redi2read.book-search")," prefix to store cache entries for the search method.\nThere is no need to perform cache maintenance yourself. Spring will intercept the request and check the cache;\nin the case of a cache hit, it will return its value. Otherwise, in case of a miss, it will store the cache\u2019s search method\u2019s return value,\nallowing the method to execute as if there was no cache at all.\nIf we try the request ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/books/search?q=java"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8080/api/books/search?q=java'\n")),(0,r.kt)("p",null,"On the first request we get a 28 ms response time:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PostMan Request 2",src:t(10702).Z,width:"1684",height:"1040"})),(0,r.kt)("p",null,"Subsequent responses return in the range of 8 ms to 10 ms consistently:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PostMan Request 1",src:t(70442).Z,width:"1684",height:"1040"})))}u.isMDXComponent=!0},70442:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image1-b14ce854155fedafbf2e5e2ae72c476c.png"},10702:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image2-96a417f52c38a686e5b194570d9db8dc.png"}}]);