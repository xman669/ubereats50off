(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{3601:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(3),s=n(10),o=n(1),c=n(109),l=n.n(c),u=n(1010),b=n(104),m=n.n(b);let j=!1;var f=(e,t)=>{if(!1===j){const n=m()(["am4chartType"],e);Object.assign(t.options,n)}j=!0},d=n(176),h=n(1430),p=n(647);var O=({ref:e,object:t,forceReInit:n,forceReInitCounter:r,isThumb:a,isDownloadedFonts:s})=>{Object(i.useEffect)(()=>{if(0===r)return;let i;return(async()=>{if(!Object(o.isAlive)(t))return null;let i;if(t.setProp("isInitializationInProcess",!0),t.lastUsedChartConfig)i=t.lastUsedChartConfig;else{if(i=await Object(u.a)(t),null===i)return null;t.setProp("lastUsedChartConfig",i);const e=await Object(d.b)(d.a.am4core,t.partsGettersMapping);f(i.options,e)}const{options:s,...c}=l()(i),b=1===r;return h.a.add({isFirstInitialization:b,config:c,dom:e.current,am4chartType:s.am4chartType,isThumb:a,object:t,forceReInit:n})})().then(e=>{i=e}),()=>{if(i){if(Object(o.isAlive)(t)){const{isInitializedPropName:e,chartInstancePropName:n,animationTimerIdPropName:r}=t.getInstanceProps(i);t.setProp(e,!1),t.setProp(n,null),t.setProp(r,null)}Object(p.a)(i,t.partsGettersMapping),i=null}}},[r]);Object(i.useEffect)(()=>{s&&n().then()},[s])},I=n(17),g=n(265),P=n(57),T=n(67),w=n(184);var E=e=>{const[t,n]=Object(i.useState)(w.l);return Object(i.useEffect)(()=>{if(w.l)return;const t=Object(I.isAliveChart)(e)?e.usedFonts.filter(e=>!Object(g.b)(e)).map(e=>new Promise(t=>{Object(g.a)(e,{usersDataStorage:P.e,assetsStorage:P.a,successHandler:t,errorHandler:t})})):[];Promise.race([Object(T.h)(e.waitingFontsLoadingBeforeRenderingTimeout),Promise.all(t)]).then(()=>{n(!0)})},[]),t};var z=(e,t)=>{const n=Object(i.useRef)(null),[r,a]=Object(i.useState)(0),o=E(e);return O({ref:n,object:e,forceReInitCounter:r,forceReInit:()=>new Promise(t=>{a(r+1),Object(s.when)(()=>!e.isInitializationInProcess).then(t)}),isThumb:t,isDownloadedFonts:o}),n},v=n(1009),F=n(78),y=n(103);const C=()=>!0,R=Object(i.memo)(({object:e})=>{Object(a.b)(()=>[e.isInitialized,e.hasDynamicLink,e.shouldHideOnFirstInitialization]),(e=>{Object(y.a)(()=>[e.hasDynamicLink,e.isResizing],([t,n])=>{if(!t||n)return;let i;const r=()=>{e.importFromGoogle().then(()=>{i=setTimeout(r,6e4)})};return r(),()=>{i&&clearTimeout(i)}},{fireImmediately:!0})})(e);const t=z(e,!1);return r.a.createElement("div",{ref:t,className:"object-type-chart"},!e.shouldHideOnFirstInitialization&&r.a.createElement(F.a,null))},C),k=Object(i.memo)(({object:e})=>{Object(a.b)(()=>[e.isInitializedThumb,e.shouldHideOnFirstInitialization]);const t=z(e,!0);return r.a.createElement("div",{ref:t,className:"object-type-chart"},!e.shouldHideOnFirstInitialization&&r.a.createElement(F.a,null))},C),H=Object(i.memo)(({object:e,isThumb:t})=>{if(Object(a.b)(()=>[e.isBroken]),e.isBroken)return null;const n=t?k:R;return r.a.createElement(n,{object:e})},C),D=Object(i.memo)(({object:e,isThumb:t})=>r.a.createElement(v.a,{onError:r.a.createElement(H,{object:e,isThumb:t})},r.a.createElement(H,{object:e,isThumb:t})),C);t.default=D}}]);