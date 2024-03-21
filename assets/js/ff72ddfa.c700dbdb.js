"use strict";(self.webpackChunkclean_hexagonal_onion_docs=self.webpackChunkclean_hexagonal_onion_docs||[]).push([[595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:9},r="8: Bonus - Add Kafka publishing",l={unversionedId:"add-kafka-publishing",id:"add-kafka-publishing",title:"8: Bonus - Add Kafka publishing",description:"Timebox: 25 minutes",source:"@site/docs/9.add-kafka-publishing.md",sourceDirName:".",slug:"/add-kafka-publishing",permalink:"/tackle-eventual-consistency-with-domain-events-docs/docs/add-kafka-publishing",draft:!1,editUrl:"https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events-docs/docs/9.add-kafka-publishing.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8: Hands-On - Add the event listener",permalink:"/tackle-eventual-consistency-with-domain-events-docs/docs/add-event-listener"}},s={},c=[{value:"Timebox: 25 minutes",id:"timebox-25-minutes",level:3},{value:"Live Code Demo",id:"live-code-demo",level:2},{value:"Solution",id:"solution",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"8-bonus---add-kafka-publishing"},"8: Bonus - Add Kafka publishing"),(0,i.kt)("h3",{id:"timebox-25-minutes"},"Timebox: 25 minutes"),(0,i.kt)("p",null,"With the completion of section 8 we are now able to publish and consume domain events in our application.\nHowever, we are still missing the actual publishing of the domain events to a message broker. In this section we\nwill look at how to modify our code to publish the domain events to Kafka."),(0,i.kt)("p",null,"The challenge we are facing with that is, that the ApplicationEventPublisher from Spring is triggered when we call\nour save method on our JPA repository. In order to be able to publish to our Kafka queue at the very same moment and\npreferably in one transaction, we need to modify our code a bit."),(0,i.kt)("h2",{id:"live-code-demo"},"Live Code Demo"),(0,i.kt)("p",null,"As this piece of the Lab is quite complex, let's have a look at it together.\nIn case you were really quick, you can check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events/tree/task_10/add_kafka_publishing_DONE"},"solution branch")),(0,i.kt)("h3",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Got stuck anywhere along the way? Not to worry, you can find the fully implemented solution\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events/tree/task_10/add_kafka_publishing_DONE"},"in this branch"),"."))}p.isMDXComponent=!0}}]);