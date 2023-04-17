"use strict";(self.webpackChunkclean_hexagonal_onion_docs=self.webpackChunkclean_hexagonal_onion_docs||[]).push([[702],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(v,r(r({ref:n},u),{},{components:t})):a.createElement(v,r({ref:n},u))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const o={sidebar_position:3},r="3: Theory - Solutions",s={unversionedId:"Solutions",id:"Solutions",title:"3: Theory - Solutions",description:"In the Java context, several technologies and frameworks can facilitate handling eventual consistency, particularly in",source:"@site/docs/3.Solutions.md",sourceDirName:".",slug:"/Solutions",permalink:"/tackle-eventual-consistency-witch-domain-events/docs/Solutions",draft:!1,editUrl:"https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events-docs/docs/3.Solutions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2: Theory - Eventual Consistency",permalink:"/tackle-eventual-consistency-witch-domain-events/docs/eventual-consistency"},next:{title:"4: Hands-On - The domain",permalink:"/tackle-eventual-consistency-witch-domain-events/docs/getting-to-know-the-domain"}},l={},c=[{value:"Apache Kafka:",id:"apache-kafka",level:3},{value:"Spring Cloud Stream:",id:"spring-cloud-stream",level:3},{value:"Axon Framework:",id:"axon-framework",level:3},{value:"Eventuate:",id:"eventuate",level:3},{value:"Lagom:",id:"lagom",level:3},{value:"Vert.x:",id:"vertx",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3-theory---solutions"},"3: Theory - Solutions"),(0,i.kt)("p",null,"In the Java context, several technologies and frameworks can facilitate handling eventual consistency, particularly in\ndistributed systems. Here are some popular options:"),(0,i.kt)("h3",{id:"apache-kafka"},"Apache Kafka:"),(0,i.kt)("p",null,"A distributed streaming platform that enables handling of event-driven architecture and eventual\nconsistency by providing a publish-subscribe messaging system. Kafka can be used to produce, store, and consume domain\nevents, allowing asynchronous communication between services and facilitating eventual consistency."),(0,i.kt)("h3",{id:"spring-cloud-stream"},"Spring Cloud Stream:"),(0,i.kt)("p",null,"A framework for building message-driven microservices using Spring Boot and various messaging\nsystems like Apache Kafka, RabbitMQ, and others. Spring Cloud Stream simplifies the implementation of domain events\nand event-driven architecture, making it easier to manage eventual consistency in Java applications."),(0,i.kt)("h3",{id:"axon-framework"},"Axon Framework:"),(0,i.kt)("p",null,"An event-driven and domain-driven design (DDD) framework for Java that simplifies the\nimplementation of event sourcing, Command Query Responsibility Segregation (CQRS), and domain events. Axon handles the\ncomplexities of event-driven architecture, allowing developers to focus on the business logic and ensuring eventual\nconsistency."),(0,i.kt)("h3",{id:"eventuate"},"Eventuate:"),(0,i.kt)("p",null,"A platform for developing event-driven and eventually consistent microservices using event sourcing and\nCQRS patterns. Eventuate supports various messaging systems like Apache Kafka, RabbitMQ, and ActiveMQ. It offers a high-level\nAPI for writing event-driven applications and supports multiple languages, including Java."),(0,i.kt)("h3",{id:"lagom"},"Lagom:"),(0,i.kt)("p",null,"A microservices framework designed for Java and Scala developers, built on top of the Play Framework and Akka.\nLagom offers features like event sourcing and CQRS out-of-the-box, making it easier to implement domain events and\nmanage eventual consistency in distributed systems."),(0,i.kt)("h3",{id:"vertx"},"Vert.x:"),(0,i.kt)("p",null,"A toolkit for building reactive applications on the JVM, which provides an event-driven, non-blocking\ndevelopment model. Vert.x can be used with messaging systems like Apache Kafka or RabbitMQ to handle domain events and\nimplement eventual consistency in Java applications."),(0,i.kt)("p",null,"These technologies can be used individually or combined, depending on your application requirements and architecture.\nBy leveraging these tools, developers can better manage eventual consistency in Java applications, particularly in\ndistributed systems."))}p.isMDXComponent=!0}}]);