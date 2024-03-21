"use strict";(self.webpackChunkclean_hexagonal_onion_docs=self.webpackChunkclean_hexagonal_onion_docs||[]).push([[334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="1: Workshop Intro",l={unversionedId:"intro",id:"intro",title:"1: Workshop Intro",description:"Welcome to the Tackle Eventual Consistency with Domain Events Meetup at the/experts HQ in Breda.",source:"@site/docs/1.intro.md",sourceDirName:".",slug:"/intro",permalink:"/tackle-eventual-consistency-with-domain-events-docs/docs/intro",draft:!1,editUrl:"https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events-docs/docs/1.intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"2: Theory - Eventual Consistency",permalink:"/tackle-eventual-consistency-with-domain-events-docs/docs/eventual-consistency"}},s={},c=[{value:"Getting Help",id:"getting-help",level:2},{value:"TDD",id:"tdd",level:3},{value:"Timeboxing",id:"timeboxing",level:3},{value:"What you will need",id:"what-you-will-need",level:3},{value:"Connect with me",id:"connect-with-me",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-workshop-intro"},"1: Workshop Intro"),(0,r.kt)("p",null,"Welcome to the ",(0,r.kt)("strong",{parentName:"p"},"Tackle Eventual Consistency with Domain Events")," Meetup at the/experts HQ in Breda.\nMy name is Maik Kingma, and I will be your coach for today. Since I cannot be with everyone simultaneously,\nthese docs will provide you with a step-by-step guide."),(0,r.kt)("h2",{id:"getting-help"},"Getting Help"),(0,r.kt)("p",null,"I will do my best to answer all the questions that you may have. Just raise a hand or shout out to anyone with a the/experts shirt to get some assistance. Keep validating your own work with the provided tests.\nIn case you get stuck somewhere along the way, you can either use the prepared TDD branches in each task for a more guided approach, or\ncheck out the solution branch named ",(0,r.kt)("inlineCode",{parentName:"p"},"task01/*_DONE"),", linked at the end of each task documentation."),(0,r.kt)("h3",{id:"tdd"},"TDD"),(0,r.kt)("p",null,"If you want there is the possibility to do Test Driven Development. At the end of a chapter you\nwill find happy flow unit tests, in some cases also an integration test. You can use these to do TDD.\nIf you want an even more guided approach, I prepared a TDD branch for each task in the repository, named something like ",(0,r.kt)("inlineCode",{parentName:"p"},"task01/*_TDD"),".\nThey are also linked at the end of each chapter documentation."),(0,r.kt)("h3",{id:"timeboxing"},"Timeboxing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"18:00-19:00")," Pizza & Beers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"19:00-19:20")," Presentation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"19:20-19:50")," Getting started (Chapters 1-5)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"19:50-20:15")," Chapter 6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"20:15-20:40")," Chapter 7-8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"20:40-21:00")," Chapter 9: Live Demo"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"21:00")," End & Safe Travels home")),(0,r.kt)("h3",{id:"what-you-will-need"},"What you will need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK 17 or higher (the example solutions are based on Java 21)"),(0,r.kt)("li",{parentName:"ul"},"Docker Desktop"),(0,r.kt)("li",{parentName:"ul"},"An IDE of your choice (ideally IntelliJ)"),(0,r.kt)("li",{parentName:"ul"},"an internet connection")),(0,r.kt)("h3",{id:"connect-with-me"},"Connect with me"),(0,r.kt)("p",null,"Feel free to connect on LinkedIn, Medium, or Twitter(X). I am always happy to chat about software development. (Links are in\nthe About section of the header)"))}d.isMDXComponent=!0}}]);