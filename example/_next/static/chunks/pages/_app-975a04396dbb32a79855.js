(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2153:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return l}});var s=n(1967),r=n(6582),c=n(4512);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){var t=e.Component,n=e.pageProps;return(0,c.jsxs)(s.dI,{children:[(0,c.jsxs)(r.default,{children:[(0,c.jsx)("link",{rel:"shortcut icon",href:"/crossmint-client-sdk/example/favicon.ico"}),(0,c.jsx)("title",{children:"CrossMint | The easiest way to purchase and collect NFTs"}),(0,c.jsx)("meta",{name:"title",content:"CrossMint | The easiest way to purchase and collect NFTs"}),(0,c.jsx)("meta",{name:"description",content:"CrossMint makes it easy to purchase and hold NFTs, by providing NFT creators a credit card checkout plugin for their sites, and providing users a custodial wallet to hold them, that can be accessed via email and password or social authentication."}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:url",content:"https://www.crossmint.io/"}),(0,c.jsx)("meta",{property:"og:title",content:"CrossMint | The easiest way to purchase and collect NFTs"}),(0,c.jsx)("meta",{property:"og:description",content:"CrossMint makes it easy to purchase and hold NFTs, by providing NFT creators a credit card checkout plugin for their sites, and providing users a custodial wallet to hold them, that can be accessed via email and password or social authentication."}),(0,c.jsx)("meta",{property:"og:image",content:"https://www.crossmint.io/assets/crossmint/metadata.png"}),(0,c.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,c.jsx)("meta",{property:"twitter:url",content:"https://www.crossmint.io/"}),(0,c.jsx)("meta",{property:"twitter:title",content:"CrossMint | The easiest way to purchase and collect NFTs"}),(0,c.jsx)("meta",{property:"twitter:description",content:"CrossMint makes it easy to purchase and hold NFTs, by providing NFT creators a credit card checkout plugin for their sites, and providing users a custodial wallet to hold them, that can be accessed via email and password or social authentication."}),(0,c.jsx)("meta",{property:"twitter:image",content:"https://www.crossmint.io/assets/crossmint/metadata.png"})]}),(0,c.jsx)(t,i({},n))]})}n(705),n(8935)},2609:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2153)}])},705:function(){},8935:function(){},6582:function(e,t,n){e.exports=n(8853)},1967:function(e,t,n){"use strict";n.d(t,{pQ:function(){return r},dI:function(){return m},y$:function(){return i}});var o=n(2735);const s=(0,o.createContext)({});const r=({candyMachineId:e,className:t,disabled:n,onClick:r,style:c,tabIndex:a,theme:i="dark",collectionTitle:l,collectionDescription:u,collectionPhoto:d,...p})=>{const{connecting:m,connect:h}=(0,o.useContext)(s),w=(0,o.useCallback)((t=>{r&&r(t),t.defaultPrevented||h(e,l,u,d)}),[r]),f=(0,o.useMemo)((()=>m?o.createElement("p",null,"Connecting ..."):o.createElement("p",null,"Buy with credit card")),[m]);return o.createElement("button",{className:`client-sdk-button-trigger client-sdk-button-trigger-${i}`,disabled:n,onClick:w,style:{...c},tabIndex:a,...p},o.createElement("img",{className:"client-sdk-button-icon",src:"https://www.crossmint.io/assets/crossmint/logo.png",alt:"Crossmint logo"}),f)};var c=n(2788);const a=(0,o.createContext)({});function i(){return(0,o.useContext)(a)}const l=({className:e="",container:t="body"})=>{const n=(0,o.useRef)(null),{setVisible:s}=i(),[r,a]=(0,o.useState)(!1),[l,u]=(0,o.useState)(null),d=(0,o.useCallback)((()=>{a(!1),setTimeout((()=>s(!1)),150)}),[a,s]);return(0,o.useLayoutEffect)((()=>{const{overflow:e}=window.getComputedStyle(document.body);return setTimeout((()=>a(!0)),0),document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[d]),(0,o.useLayoutEffect)((()=>u(document.querySelector(t))),[u,t]),l&&(0,c.createPortal)(o.createElement("div",{"aria-modal":"true",className:`client-sdk-modal ${r&&"client-sdk-modal-fade-in"} ${e}`,ref:n},o.createElement("div",{className:"client-sdk-modal-container"},o.createElement("span",{className:"client-sdk-modal-loader"})),o.createElement("div",{className:"client-sdk-modal-overlay"})),l)},u="https://crossmint.io",d="http://localhost:3001",p=({development:e,children:t})=>{const[n,r]=(0,o.useState)(!1),[c,a]=(0,o.useState)(null),{setVisible:l}=i(),p=(t,n,o,s)=>{const c=window.open(`${e?d:u}/signin?callbackUrl=${encodeURIComponent(`${e?d:u}/checkout/mint?candyMachineId=${t}&closeOnSuccess=false${n?`&collectionTitle=${n}`:""}${o?`&collectionDescription=${o}`:""}${s?`&collectionPhoto=${s}`:""}`)}`,"popUpWindow",`height=750,width=400,left=${window.innerWidth/2-200},top=${window.innerHeight/2-375},resizable=yes,scrollbars=yes,toolbar=yes,menubar=true,location=no,directories=no, status=yes`);c?(l(!0),a(c),function(e){const t=setInterval((function(){e.closed&&(clearInterval(t),r(!1),l(!1))}),500)}(c)):(r(!1),console.log("Failed to open popup window"))};return o.createElement(s.Provider,{value:{connecting:n,popup:c,connect:(e,t,o,s)=>{n||(r(!0),p(e,t,o,s))}}},t)},m=({development:e=!1,children:t,...n})=>{const[s,r]=(0,o.useState)(!1);return o.createElement(a.Provider,{value:{visible:s,setVisible:r}},o.createElement(p,{development:e},t,s&&o.createElement(l,{...n})))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(2609),t(6261)}));var n=e.O();_N_E=n}]);