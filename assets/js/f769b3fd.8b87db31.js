(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),i=(n(0),n(254)),a={title:"Config Impact Analysis",description:"[EXPERIMENTAL] Collects function that are called without config checks."},o={unversionedId:"checker-config-impact-analysis",id:"checker-config-impact-analysis",isDocsHomePage:!1,title:"Config Impact Analysis",description:"[EXPERIMENTAL] Collects function that are called without config checks.",source:"@site/docs/checker-config-impact-analysis.md",slug:"/checker-config-impact-analysis",permalink:"/docs/next/checker-config-impact-analysis",version:"current",sidebar:"docs",previous:{title:"Buffer Overrun Analysis (InferBO)",permalink:"/docs/next/checker-bufferoverrun"},next:{title:"Cost: Complexity Analysis",permalink:"/docs/next/checker-cost"}},l=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"[EXPERIMENTAL]"," Collects function that are called without config checks."),Object(i.b)("p",null,"Activate with ",Object(i.b)("inlineCode",{parentName:"p"},"--config-impact-analysis"),"."),Object(i.b)("p",null,"Supported languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C/C++/ObjC: Experimental"),Object(i.b)("li",{parentName:"ul"},"C#/.Net: Experimental"),Object(i.b)("li",{parentName:"ul"},"Erlang: Experimental"),Object(i.b)("li",{parentName:"ul"},"Java: Experimental")),Object(i.b)("p",null,"This checker collects functions whose execution isn't gated by certain pre-defined gating functions. The set of gating functions is hardcoded and empty by default for now, so to use this checker, please modify the code directly in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/infer/src/opensource"},"FbGKInteraction.ml"),"."),Object(i.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(i.b)("p",null,"The following issue types are reported by this checker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#config_impact"},"CONFIG_IMPACT")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#config_impact_strict"},"CONFIG_IMPACT_STRICT"))))}p.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||f[b]||i;return n?c.a.createElement(m,o(o({ref:t},s),{},{components:n})):c.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);