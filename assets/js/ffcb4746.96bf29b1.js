"use strict";(self.webpackChunkclean_hexagonal_onion_docs=self.webpackChunkclean_hexagonal_onion_docs||[]).push([[99],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},a="4: Hands-On - The domain",s={unversionedId:"getting-to-know-the-domain",id:"getting-to-know-the-domain",title:"4: Hands-On - The domain",description:"The base application we will be working with during this mini lab is a simple service, where one can register book",source:"@site/docs/4.getting-to-know-the-domain.md",sourceDirName:".",slug:"/getting-to-know-the-domain",permalink:"/tackle-eventual-consistency-with-domain-events-docs/docs/getting-to-know-the-domain",draft:!1,editUrl:"https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events-docs/docs/4.getting-to-know-the-domain.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"2: Theory - Domain Events in Spring",permalink:"/tackle-eventual-consistency-with-domain-events-docs/docs/domain-events"},next:{title:"5: Hands-On - Set up the Application",permalink:"/tackle-eventual-consistency-with-domain-events-docs/docs/setting-up-an-initial-application"}},l={},c=[{value:"Domain Diagram",id:"domain-diagram",level:3},{value:"The API",id:"the-api",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"4-hands-on---the-domain"},"4: Hands-On - The domain"),(0,i.kt)("p",null,"The base application we will be working with during this mini lab is a simple service, where one can register book\nauthors, let them write books and eventually publish them. The publishers will not be part of our bounded context\nthough. The app needs to retrieve any information about them from an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MaikKingma/publisher-service"},"external publisher API"),"."),(0,i.kt)("p",null,"In our domain model we have identified two aggregates: Author and Book.\nA publisher is information from another bounded context. It might change over time, and we have no control over it as such.\nThat is why we make it an immutable value object in our context, that is not persisted to our database. The only\nthing we need to know from a publisher, is the identifier of the publisher. We will need it in order to identify the\npublisher of a book."),(0,i.kt)("h3",{id:"domain-diagram"},"Domain Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"domain-model.png",src:n(9486).Z,width:"1786",height:"1280"})),(0,i.kt)("h3",{id:"the-api"},"The API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST /authors/commands/register\nPOST /authors/{id}/commands/writeBook\nGET /authors\n\nGET /books?title\nPOST /books/{id}/commands/publish\n")),(0,i.kt)("p",null,"You can find the http files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," folder in the root of this project."),(0,i.kt)("p",null,"If there are any questions about the domain model or the API definition feel free to ask."))}u.isMDXComponent=!0},9486:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/updated_domain_model-86267f8f5e2aa6011f1c8637c80de811.jpg"}}]);