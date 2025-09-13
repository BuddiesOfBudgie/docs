"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["330"],{7992:function(e,t,r){r.d(t,{A:()=>F});var n=r(6540),i=r(9836),o=r(2682);function a(e){try{return e.matches(":focus-visible")}catch(e){}return!1}var s=r(4555),l=r(8506),u=r(3157),c=r(1888);let d=function(e){let t=n.useRef(e);return(0,c.A)(()=>{t.current=e}),n.useRef((...e)=>(0,t.current)(...e)).current},p={};function h(e,t){let r=n.useRef(p);return r.current===p&&(r.current=e(t)),r}class f{static create(){return new f}static use(){let e=h(f.create).current,[t,r]=n.useState(!1);return e.shouldMount=t,e.setShouldMount=r,n.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){let e,t,r;return this.mounted||(this.mounted=((r=new Promise((r,n)=>{e=r,t=n})).resolve=e,r.reject=t,r),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}var m=r(4707),v=r(160),b=r(6612),g=r(7241);function y(e,t){var r=Object.create(null);return e&&n.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=t&&(0,n.isValidElement)(e)?t(e):e}),r}function x(e,t,r){return null!=r[t]?r[t]:e.props[t]}var A=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},M=function(e){function t(t,r){var n=e.call(this,t,r)||this,i=n.handleExited.bind(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));return n.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},n}(0,b.A)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var r,i,o=t.children,a=t.handleExited;return{children:t.firstRender?y(e.children,function(t){return(0,n.cloneElement)(t,{onExited:a.bind(null,t),in:!0,appear:x(t,"appear",e),enter:x(t,"enter",e),exit:x(t,"exit",e)})}):(Object.keys(i=function(e,t){function r(r){return r in t?t[r]:e[r]}e=e||{},t=t||{};var n,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var s={};for(var l in t){if(i[l])for(n=0;n<i[l].length;n++){var u=i[l][n];s[i[l][n]]=r(u)}s[l]=r(l)}for(n=0;n<o.length;n++)s[o[n]]=r(o[n]);return s}(o,r=y(e.children))).forEach(function(t){var s=i[t];if((0,n.isValidElement)(s)){var l=t in o,u=t in r,c=o[t],d=(0,n.isValidElement)(c)&&!c.props.in;u&&(!l||d)?i[t]=(0,n.cloneElement)(s,{onExited:a.bind(null,s),in:!0,exit:x(s,"exit",e),enter:x(s,"enter",e)}):u||!l||d?u&&l&&(0,n.isValidElement)(c)&&(i[t]=(0,n.cloneElement)(s,{onExited:a.bind(null,s),in:c.props.in,exit:x(s,"exit",e),enter:x(s,"enter",e)})):i[t]=(0,n.cloneElement)(s,{in:!1})}}),i),firstRender:!1}},r.handleExited=function(e,t){var r=y(this.props.children);e.key in r||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var r=(0,v.A)({},t.children);return delete r[e.key],{children:r}}))},r.render=function(){var e=this.props,t=e.component,r=e.childFactory,i=(0,m.A)(e,["component","childFactory"]),o=this.state.contextValue,a=A(this.state.children).map(r);return(delete i.appear,delete i.enter,delete i.exit,null===t)?n.createElement(g.A.Provider,{value:o},a):n.createElement(g.A.Provider,{value:o},n.createElement(t,i,a))},t}(n.Component);M.propTypes={},M.defaultProps={component:"div",childFactory:function(e){return e}};let k=[];class E{static create(){return new E}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}var R=r(7437),P=r(4848),w=r(7804);let S=(0,w.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),$=(0,R.i7)`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,C=(0,R.i7)`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,j=(0,R.i7)`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,D=(0,s.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),T=(0,s.Ay)(function(e){let{className:t,classes:r,pulsate:o=!1,rippleX:a,rippleY:s,rippleSize:l,in:u,onExited:c,timeout:d}=e,[p,h]=n.useState(!1),f=(0,i.A)(t,r.ripple,r.rippleVisible,o&&r.ripplePulsate),m=(0,i.A)(r.child,p&&r.childLeaving,o&&r.childPulsate);return u||p||h(!0),n.useEffect(()=>{if(!u&&null!=c){let e=setTimeout(c,d);return()=>{clearTimeout(e)}}},[c,u,d]),(0,P.jsx)("span",{className:f,style:{width:l,height:l,top:-(l/2)+s,left:-(l/2)+a},children:(0,P.jsx)("span",{className:m})})},{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${S.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${$};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${S.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${S.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${S.childLeaving} {
    opacity: 0;
    animation-name: ${C};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${S.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${j};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,I=n.forwardRef(function(e,t){var r;let o,{center:a=!1,classes:s={},className:u,...c}=(0,l.b)({props:e,name:"MuiTouchRipple"}),[d,p]=n.useState([]),f=n.useRef(0),m=n.useRef(null);n.useEffect(()=>{m.current&&(m.current(),m.current=null)},[d]);let v=n.useRef(!1),b=(r=(o=h(E.create).current).disposeEffect,n.useEffect(r,k),o),g=n.useRef(null),y=n.useRef(null),x=n.useCallback(e=>{let{pulsate:t,rippleX:r,rippleY:n,rippleSize:o,cb:a}=e;p(e=>[...e,(0,P.jsx)(T,{classes:{ripple:(0,i.A)(s.ripple,S.ripple),rippleVisible:(0,i.A)(s.rippleVisible,S.rippleVisible),ripplePulsate:(0,i.A)(s.ripplePulsate,S.ripplePulsate),child:(0,i.A)(s.child,S.child),childLeaving:(0,i.A)(s.childLeaving,S.childLeaving),childPulsate:(0,i.A)(s.childPulsate,S.childPulsate)},timeout:550,pulsate:t,rippleX:r,rippleY:n,rippleSize:o},f.current)]),f.current+=1,m.current=a},[s]),A=n.useCallback((e={},t={},r=()=>{})=>{let n,i,o,{pulsate:s=!1,center:l=a||t.pulsate,fakeElement:u=!1}=t;if(e?.type==="mousedown"&&v.current){v.current=!1;return}e?.type==="touchstart"&&(v.current=!0);let c=u?null:y.current,d=c?c.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(!l&&void 0!==e&&(0!==e.clientX||0!==e.clientY)&&(e.clientX||e.touches)){let{clientX:t,clientY:r}=e.touches&&e.touches.length>0?e.touches[0]:e;n=Math.round(t-d.left),i=Math.round(r-d.top)}else n=Math.round(d.width/2),i=Math.round(d.height/2);l?(o=Math.sqrt((2*d.width**2+d.height**2)/3))%2==0&&(o+=1):o=Math.sqrt((2*Math.max(Math.abs((c?c.clientWidth:0)-n),n)+2)**2+(2*Math.max(Math.abs((c?c.clientHeight:0)-i),i)+2)**2),e?.touches?null===g.current&&(g.current=()=>{x({pulsate:s,rippleX:n,rippleY:i,rippleSize:o,cb:r})},b.start(80,()=>{g.current&&(g.current(),g.current=null)})):x({pulsate:s,rippleX:n,rippleY:i,rippleSize:o,cb:r})},[a,x,b]),R=n.useCallback(()=>{A({},{pulsate:!0})},[A]),w=n.useCallback((e,t)=>{if(b.clear(),e?.type==="touchend"&&g.current){g.current(),g.current=null,b.start(0,()=>{w(e,t)});return}g.current=null,p(e=>e.length>0?e.slice(1):e),m.current=t},[b]);return n.useImperativeHandle(t,()=>({pulsate:R,start:A,stop:w}),[R,A,w]),(0,P.jsx)(D,{className:(0,i.A)(S.root,s.root,u),ref:y,...c,children:(0,P.jsx)(M,{component:null,exit:!0,children:d})})});var V=r(2844);function B(e){return(0,V.Ay)("MuiButtonBase",e)}let O=(0,w.A)("MuiButtonBase",["root","disabled","focusVisible"]),L=(0,s.Ay)("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});function N(e,t,r,n=!1){return d(i=>(r&&r(i),n||e[t](i),!0))}let F=n.forwardRef(function(e,t){let r=(0,l.b)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:c=!1,children:p,className:h,component:m="button",disabled:v=!1,disableRipple:b=!1,disableTouchRipple:g=!1,focusRipple:y=!1,focusVisibleClassName:x,LinkComponent:A="a",onBlur:M,onClick:k,onContextMenu:E,onDragLeave:R,onFocus:w,onFocusVisible:S,onKeyDown:$,onKeyUp:C,onMouseDown:j,onMouseLeave:D,onMouseUp:T,onTouchEnd:V,onTouchMove:O,onTouchStart:F,tabIndex:H=0,TouchRippleProps:z,touchRippleRef:W,type:U,...X}=r,q=n.useRef(null),K=f.use(),Y=(0,u.A)(K.ref,W),[G,J]=n.useState(!1);v&&G&&J(!1),n.useImperativeHandle(s,()=>({focusVisible:()=>{J(!0),q.current.focus()}}),[]);let Q=K.shouldMount&&!b&&!v;n.useEffect(()=>{G&&y&&!b&&K.pulsate()},[b,y,G,K]);let Z=N(K,"start",j,g),_=N(K,"stop",E,g),ee=N(K,"stop",R,g),et=N(K,"stop",T,g),er=N(K,"stop",e=>{G&&e.preventDefault(),D&&D(e)},g),en=N(K,"start",F,g),ei=N(K,"stop",V,g),eo=N(K,"stop",O,g),ea=N(K,"stop",e=>{a(e.target)||J(!1),M&&M(e)},!1),es=d(e=>{q.current||(q.current=e.currentTarget),a(e.target)&&(J(!0),S&&S(e)),w&&w(e)}),el=()=>{let e=q.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},eu=d(e=>{y&&!e.repeat&&G&&" "===e.key&&K.stop(e,()=>{K.start(e)}),e.target===e.currentTarget&&el()&&" "===e.key&&e.preventDefault(),$&&$(e),e.target===e.currentTarget&&el()&&"Enter"===e.key&&!v&&(e.preventDefault(),k&&k(e))}),ec=d(e=>{y&&" "===e.key&&G&&!e.defaultPrevented&&K.stop(e,()=>{K.pulsate(e)}),C&&C(e),k&&e.target===e.currentTarget&&el()&&" "===e.key&&!e.defaultPrevented&&k(e)}),ed=m;"button"===ed&&(X.href||X.to)&&(ed=A);let ep={};"button"===ed?(ep.type=void 0===U?"button":U,ep.disabled=v):(X.href||X.to||(ep.role="button"),v&&(ep["aria-disabled"]=v));let eh=(0,u.A)(t,q),ef={...r,centerRipple:c,component:m,disabled:v,disableRipple:b,disableTouchRipple:g,focusRipple:y,tabIndex:H,focusVisible:G},em=(e=>{let{disabled:t,focusVisible:r,focusVisibleClassName:n,classes:i}=e,a=(0,o.A)({root:["root",t&&"disabled",r&&"focusVisible"]},B,i);return r&&n&&(a.root+=` ${n}`),a})(ef);return(0,P.jsxs)(L,{as:ed,className:(0,i.A)(em.root,h),ownerState:ef,onBlur:ea,onClick:k,onContextMenu:_,onFocus:es,onKeyDown:eu,onKeyUp:ec,onMouseDown:Z,onMouseLeave:er,onMouseUp:et,onDragLeave:ee,onTouchEnd:ei,onTouchMove:eo,onTouchStart:en,ref:eh,tabIndex:v?-1:H,type:U,...ep,...X,children:[p,Q?(0,P.jsx)(I,{ref:Y,center:c,...z}):null]})})},734:function(e,t,r){r.d(t,{A:()=>k});var n=r(6540),i=r(9836),o=r(2682),a=r(7437),s=r(4555),l=r(4805),u=r(8506),c=r(8039),d=r(3521),p=r(7804),h=r(2844);function f(e){return(0,h.Ay)("MuiCircularProgress",e)}(0,p.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=r(4848);let v=(0,a.i7)`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,b=(0,a.i7)`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,g="string"!=typeof v?(0,a.AH)`
        animation: ${v} 1.4s linear infinite;
      `:null,y="string"!=typeof b?(0,a.AH)`
        animation: ${b} 1.4s ease-in-out infinite;
      `:null,x=(0,s.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.A)(r.color)}`]]}})((0,l.A)(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:g||{animation:`${v} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,d.A)()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),A=(0,s.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),M=(0,s.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.circle,t[`circle${(0,c.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((0,l.A)(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:y||{animation:`${b} 1.4s ease-in-out infinite`}}]}))),k=n.forwardRef(function(e,t){let r=(0,u.b)({props:e,name:"MuiCircularProgress"}),{className:n,color:a="primary",disableShrink:s=!1,size:l=40,style:d,thickness:p=3.6,value:h=0,variant:v="indeterminate",...b}=r,g={...r,color:a,disableShrink:s,size:l,thickness:p,value:h,variant:v},y=(e=>{let{classes:t,variant:r,color:n,disableShrink:i}=e,a={root:["root",r,`color${(0,c.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(r)}`,i&&"circleDisableShrink"]};return(0,o.A)(a,f,t)})(g),k={},E={},R={};if("determinate"===v){let e=2*Math.PI*((44-p)/2);k.strokeDasharray=e.toFixed(3),R["aria-valuenow"]=Math.round(h),k.strokeDashoffset=`${((100-h)/100*e).toFixed(3)}px`,E.transform="rotate(-90deg)"}return(0,m.jsx)(x,{className:(0,i.A)(y.root,n),style:{width:l,height:l,...E,...d},ownerState:g,ref:t,role:"progressbar",...R,...b,children:(0,m.jsx)(A,{className:y.svg,ownerState:g,viewBox:"22 22 44 44",children:(0,m.jsx)(M,{className:y.circle,style:k,ownerState:g,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})})})},3521:function(e,t,r){r.d(t,{A:()=>n});function n(e=[]){return([,t])=>t&&function(e,t=[]){if("string"!=typeof e.main)return!1;for(let r of t)if(!e.hasOwnProperty(r)||"string"!=typeof e[r])return!1;return!0}(t,e)}},6035:function(e,t,r){r.d(t,{A:()=>n});let n=r(9468).A}}]);