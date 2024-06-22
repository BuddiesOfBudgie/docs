"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[781],{4932:(e,n,r)=>{r.d(n,{A:()=>B});var t=r(9668),o=r(1367),i=r(6540),a=r(4164),l=r(9069),c=r(7245),s=r(4111),u=r(9369),d=r(4467),p=r(2858),f=r(9599),m=r(1264);const v=(e,n,r)=>{const t=e.keys[0];if(Array.isArray(n))n.forEach(((n,t)=>{r(((n,r)=>{t<=e.keys.length-1&&(0===t?Object.assign(n,r):n[e.up(e.keys[t])]=r)}),n)}));else if(n&&"object"==typeof n){(Object.keys(n).length>e.keys.length?e.keys:(o=e.keys,i=Object.keys(n),o.filter((e=>i.includes(e))))).forEach((o=>{if(-1!==e.keys.indexOf(o)){const i=n[o];void 0!==i&&r(((n,r)=>{t===o?Object.assign(n,r):n[e.up(o)]=r}),i)}}))}else"number"!=typeof n&&"string"!=typeof n||r(((e,n)=>{Object.assign(e,n)}),n);var o,i};function b(e){return e?`Level${e}`:""}function g(e){return e.unstable_level>0&&e.container}function w(e){return function(n){return`var(--Grid-${n}Spacing${b(e.unstable_level)})`}}function h(e){return function(n){return 0===e.unstable_level?`var(--Grid-${n}Spacing)`:`var(--Grid-${n}Spacing${b(e.unstable_level-1)})`}}function S(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${b(e.unstable_level-1)})`}const $=({theme:e,ownerState:n})=>{const r=w(n),t={};return v(e.breakpoints,n.gridSize,((e,o)=>{let i={};!0===o&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===o&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof o&&(i={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / ${S(n)}${g(n)?` + ${r("column")}`:""})`}),e(t,i)})),t},y=({theme:e,ownerState:n})=>{const r={};return v(e.breakpoints,n.gridOffset,((e,t)=>{let o={};"auto"===t&&(o={marginLeft:"auto"}),"number"==typeof t&&(o={marginLeft:0===t?"0px":`calc(100% * ${t} / ${S(n)})`}),e(r,o)})),r},x=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=g(n)?{[`--Grid-columns${b(n.unstable_level)}`]:S(n)}:{"--Grid-columns":12};return v(e.breakpoints,n.columns,((e,t)=>{e(r,{[`--Grid-columns${b(n.unstable_level)}`]:t})})),r},A=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=h(n),t=g(n)?{[`--Grid-rowSpacing${b(n.unstable_level)}`]:r("row")}:{};return v(e.breakpoints,n.rowSpacing,((r,o)=>{var i;r(t,{[`--Grid-rowSpacing${b(n.unstable_level)}`]:"string"==typeof o?o:null==(i=e.spacing)?void 0:i.call(e,o)})})),t},k=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=h(n),t=g(n)?{[`--Grid-columnSpacing${b(n.unstable_level)}`]:r("column")}:{};return v(e.breakpoints,n.columnSpacing,((r,o)=>{var i;r(t,{[`--Grid-columnSpacing${b(n.unstable_level)}`]:"string"==typeof o?o:null==(i=e.spacing)?void 0:i.call(e,o)})})),t},G=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return v(e.breakpoints,n.direction,((e,n)=>{e(r,{flexDirection:n})})),r},O=({ownerState:e})=>{const n=w(e),r=h(e);return(0,t.A)({minWidth:0,boxSizing:"border-box"},e.container&&(0,t.A)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||g(e))&&(0,t.A)({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},E=e=>{const n=[];return Object.entries(e).forEach((([e,r])=>{!1!==r&&void 0!==r&&n.push(`grid-${e}-${String(r)}`)})),n},M=(e,n="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${n}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){const n=[];return Object.entries(e).forEach((([e,t])=>{r(t)&&n.push(`spacing-${e}-${String(t)}`)})),n}return[]},_=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map((([e,n])=>`direction-${e}-${n}`)):[`direction-xs-${String(e)}`];var j=r(4848);const N=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],q=(0,m.A)(),C=(0,u.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function L(e){return(0,d.A)({props:e,name:"MuiGrid",defaultTheme:q})}var R=r(1848),W=r(3541);const z=function(e={}){const{createStyledComponent:n=C,useThemeProps:r=L,componentName:u="MuiGrid"}=e,d=i.createContext(void 0),m=n(x,k,A,$,G,O,y),v=i.forwardRef((function(e,n){var v,b,g,w,h,S,$,y;const x=(0,p.A)(),A=r(e),k=(0,f.A)(A),G=i.useContext(d),{className:O,children:q,columns:C=12,container:L=!1,component:R="div",direction:W="row",wrap:z="wrap",spacing:B=0,rowSpacing:D=B,columnSpacing:P=B,disableEqualOverflow:T,unstable_level:Q=0}=k,U=(0,o.A)(k,N);let V=T;Q&&void 0!==T&&(V=e.disableEqualOverflow);const F={},H={},I={};Object.entries(U).forEach((([e,n])=>{void 0!==x.breakpoints.values[e]?F[e]=n:void 0!==x.breakpoints.values[e.replace("Offset","")]?H[e.replace("Offset","")]=n:I[e]=n}));const J=null!=(v=e.columns)?v:Q?void 0:C,K=null!=(b=e.spacing)?b:Q?void 0:B,X=null!=(g=null!=(w=e.rowSpacing)?w:e.spacing)?g:Q?void 0:D,Y=null!=(h=null!=(S=e.columnSpacing)?S:e.spacing)?h:Q?void 0:P,Z=(0,t.A)({},k,{level:Q,columns:J,container:L,direction:W,wrap:z,spacing:K,rowSpacing:X,columnSpacing:Y,gridSize:F,gridOffset:H,disableEqualOverflow:null!=($=null!=(y=V)?y:G)&&$,parentDisableEqualOverflow:G}),ee=((e,n)=>{const{container:r,direction:t,spacing:o,wrap:i,gridSize:a}=e,l={root:["root",r&&"container","wrap"!==i&&`wrap-xs-${String(i)}`,..._(t),...E(a),...r?M(o,n.breakpoints.keys[0]):[]]};return(0,s.A)(l,(e=>(0,c.Ay)(u,e)),{})})(Z,x);let ne=(0,j.jsx)(m,(0,t.A)({ref:n,as:R,ownerState:Z,className:(0,a.A)(ee.root,O)},I,{children:i.Children.map(q,(e=>{var n;return i.isValidElement(e)&&(0,l.A)(e,["Grid"])?i.cloneElement(e,{unstable_level:null!=(n=e.props.unstable_level)?n:Q+1}):e}))}));return void 0!==V&&V!==(null!=G&&G)&&(ne=(0,j.jsx)(d.Provider,{value:V,children:ne})),ne}));return v.muiName="Grid",v}({createStyledComponent:(0,R.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,W.A)({props:e,name:"MuiGrid2"})}),B=z},5327:(e,n,r)=>{var t;r.d(n,{A:()=>d});var o=r(6540),i=r(173),a=r(7340),l=r(3951);function c(e,n,r,t,a){const[l,c]=o.useState((()=>a&&r?r(e).matches:t?t(e).matches:n));return(0,i.A)((()=>{let n=!0;if(!r)return;const t=r(e),o=()=>{n&&c(t.matches)};return o(),t.addListener(o),()=>{n=!1,t.removeListener(o)}}),[e,r]),l}const s=(t||(t=r.t(o,2))).useSyncExternalStore;function u(e,n,r,t,i){const a=o.useCallback((()=>n),[n]),l=o.useMemo((()=>{if(i&&r)return()=>r(e).matches;if(null!==t){const{matches:n}=t(e);return()=>n}return a}),[a,e,t,i,r]),[c,u]=o.useMemo((()=>{if(null===r)return[a,()=>()=>{}];const n=r(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]}),[a,r,e]);return s(u,c,l)}function d(e,n={}){const r=(0,l.A)(),t="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:i=(t?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:p=!1}=(0,a.A)({name:"MuiUseMediaQuery",props:n,theme:r});let f="function"==typeof e?e(r):e;f=f.replace(/^@media( ?)/m,"");return(void 0!==s?u:c)(f,o,i,d,p)}}}]);