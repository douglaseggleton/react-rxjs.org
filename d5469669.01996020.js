(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(83)),i={title:"split()"},c={unversionedId:"api/utils/split",id:"api/utils/split",isDocsHomePage:!1,title:"split()",description:"A RxJS operator that groups the items emitted by the source based on the",source:"@site/docs/api/utils/split.md",slug:"/api/utils/split",permalink:"/react-rxjs.org/docs/api/utils/split",editUrl:"https://github.com/re-rxjs/react-rxjs.org/tree/master/docs/api/utils/split.md",version:"current",sidebar:"someSidebar",previous:{title:"selfDependant()",permalink:"/react-rxjs.org/docs/api/utils/selfDependant"},next:{title:"suspend()",permalink:"/react-rxjs.org/docs/api/utils/suspend"}},l=[{value:"Arguments",id:"arguments",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A RxJS operator that groups the items emitted by the source based on the\nkeySelector function, emitting one Observable for each group."),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"keySelector"),": A function that receives an item and returns the key of that\nitem's group."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"streamSelector"),": (optional) The function to apply to each group observable\n(default = identity).")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"split")," will subscribe to each group observable and share the result to every\ninner subscriber of that group. This inner observable can be mapped to another\nobservable through the ",Object(a.b)("inlineCode",{parentName:"p"},"streamSelector")," argument."))}p.isMDXComponent=!0},83:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);