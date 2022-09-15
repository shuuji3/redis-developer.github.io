"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7682],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=o,m=c["".concat(s,".").concat(p)]||c[p]||u[p]||a;return n?i.createElement(m,r(r({ref:t},h),{},{components:n})):i.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],l={id:"index-querymovies",title:"7. Query Movies",sidebar_label:"7. Query Movies",slug:"/howtos/moviesdatabase/querymovies"},s="Querying the Movie Dataset",d={unversionedId:"howtos/moviesdatabase/querymovies/index-querymovies",id:"howtos/moviesdatabase/querymovies/index-querymovies",title:"7. Query Movies",description:"As described earlier in the tutorial, one of the goals of RediSearch is to provide rich querying capabilities such as:",source:"@site/docs/howtos/moviesdatabase/querymovies/index-querymovies.mdx",sourceDirName:"howtos/moviesdatabase/querymovies",slug:"/howtos/moviesdatabase/querymovies",permalink:"/howtos/moviesdatabase/querymovies",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/querymovies/index-querymovies.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-querymovies",title:"7. Query Movies",sidebar_label:"7. Query Movies",slug:"/howtos/moviesdatabase/querymovies"},sidebar:"docs",previous:{title:"6. Import datasets",permalink:"/howtos/moviesdatabase/import"},next:{title:"8. Aggregation",permalink:"/howtos/moviesdatabase/aggregation"}},h={},u=[{value:"Conditions",id:"conditions",level:3},{value:"Find all the movies that contain the word &#39;heat&#39; or related to &#39;heat&#39;",id:"find-all-the-movies-that-contain-the-word-heat-or-related-to-heat",level:4},{value:"Find all the movies with a title that contains the word &#39;heat&#39; or related to &#39;heat&#39;",id:"find-all-the-movies-with-a-title-that-contains-the-word-heat-or-related-to-heat",level:4},{value:"Find all the movies where the title contains &#39;heat&#39; and does NOT contains &#39;california&#39;",id:"find-all-the-movies-where-the-title-contains-heat-and-does-not-contains-california",level:4}],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"querying-the-movie-dataset"},"Querying the Movie Dataset"),(0,a.kt)("p",null,"As described earlier in the tutorial, one of the goals of RediSearch is to provide rich querying capabilities such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"simple and complex conditions"),(0,a.kt)("li",{parentName:"ul"},"sorting"),(0,a.kt)("li",{parentName:"ul"},"pagination"),(0,a.kt)("li",{parentName:"ul"},"counting")),(0,a.kt)("h3",{id:"conditions"},"Conditions"),(0,a.kt)("p",null,"The best way to start to work with RediSearch query capabilities is to look at the various conditions options."),(0,a.kt)("h4",{id:"find-all-the-movies-that-contain-the-word-heat-or-related-to-heat"},"Find all the movies that contain the word 'heat' or related to 'heat'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH "idx:movie" "heat" RETURN 2 title plot\n\n1) (integer) 4\n2) "movie:1141"\n3) 1) "title"\n   2) "Heat"\n   3) "plot"\n   4) "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist."\n4) "movie:818"\n5) 1) "title"\n   2) "California Heat"\n   3) "plot"\n   4) "A lifeguard bets he can be true to just one woman."\n6) "movie:736"\n7) 1) "title"\n   2) "Chicago Justice"\n   3) "plot"\n   4) "The State\'s Attorney\'s dedicated team of prosecutors and investigators navigates heated city politics and controversy head-on,while fearlessly pursuing justice."\n8) "movie:1109"\n9) 1) "title"\n   2) "Love & Hip Hop: Miami"\n   3) "plot"\n   4) "\'Love and Hip Hop Miami\' turns up the heat and doesn\'t hold back in making the 305 the place to be. Multi-platinum selling hip-hop legend Trick Daddy is back in the studio collaborating ..."\n\n')),(0,a.kt)("p",null,"The first line contains the number of documents (",(0,a.kt)("inlineCode",{parentName:"p"},"4"),") that match the query condition, then the list of movies."),(0,a.kt)("p",null,'This query is a "fieldless" condition, this means that the query engine has:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"searched in all the TEXT fields of the index(",(0,a.kt)("inlineCode",{parentName:"li"},"title")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"plot"),")"),(0,a.kt)("li",{parentName:"ul"},"for the word ",(0,a.kt)("inlineCode",{parentName:"li"},"heat")," and related words, this is why the movie:736 is returned since it has the word ",(0,a.kt)("inlineCode",{parentName:"li"},"heated")," in the plot (",(0,a.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisearch/Stemming/"},"stemming"),")"),(0,a.kt)("li",{parentName:"ul"},"returned the result sorted by score, remember that the title has a weight of 1.0, and the plot a weight of 0.5. So when the word or related words are found in the title the score is larger.")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"find-all-the-movies-with-a-title-that-contains-the-word-heat-or-related-to-heat"},"Find all the movies with a title that contains the word 'heat' or related to 'heat'"),(0,a.kt)("p",null,"In this case you have to set the criteria to a the field title using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@title")," notation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH "idx:movie" "@title:heat" RETURN 2 title plot\n1) (integer) 2\n2) "movie:1141"\n3) 1) "title"\n   2) "Heat"\n   3) "plot"\n   4) "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist."\n4) "movie:818"\n5) 1) "title"\n   2) "California Heat"\n   3) "plot"\n   4) "A lifeguard bets he can be true to just one woman."\n\n')),(0,a.kt)("p",null,"So only 2 movies are returned."),(0,a.kt)("h4",{id:"find-all-the-movies-where-the-title-contains-heat-and-does-not-contains-california"},"Find all the movies where the title contains 'heat' and does NOT contains 'california'"),(0,a.kt)("p",null,"For this you add parentheses around the field condition and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," sign to 'california'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH "idx:movie" "@title:(heat -california)" RETURN 2 title plot\n1) (integer) 1\n2) "movie:1141"\n3) 1) "title"\n   2) "Heat"\n   3) "plot"\n   4) "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist."\n\n')),(0,a.kt)("p",null,"Only one movie is returned."),(0,a.kt)("p",null,"If you do not put the ",(0,a.kt)("inlineCode",{parentName:"p"},"( .. )")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"-california")," condition will be applied to all the text fields."),(0,a.kt)("p",null,"You can do test this with the following queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH "idx:movie" "@title:(heat -woman)" RETURN 2 title plot\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH "idx:movie" "@title:heat -woman" RETURN 2 title plot\n')),(0,a.kt)("p",null,'As you can see the first query only searches for woman in the title and returns two movies "Heat" and "California Heat", where the second query eliminates "California Heat" from the list since the plot contains the word ',(0,a.kt)("inlineCode",{parentName:"p"},"woman"),"."))}p.isMDXComponent=!0}}]);