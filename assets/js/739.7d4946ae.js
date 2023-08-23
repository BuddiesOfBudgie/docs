"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[739],{7739:(e,t,n)=>{n.d(t,{Z:()=>K});var r=n(2793),i=n(1048),o=n(7294),l=n(512),s=n(4780),u=n(948),a=n(1657),c=n(1705),p=n(2068),d=n(8791),h=n(3366),f=n(7462);var m=n(5068),b=n(220);function v(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function R(e,t,n){var r=v(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var s={};for(var u in t){if(i[u])for(r=0;r<i[u].length;r++){var a=i[u][r];s[i[u][r]]=n(a)}s[u]=n(u)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,r);return Object.keys(i).forEach((function(l){var s=i[l];if((0,o.isValidElement)(s)){var u=l in t,a=l in r,c=t[l],p=(0,o.isValidElement)(c)&&!c.props.in;!a||u&&!p?a||!u||p?a&&u&&(0,o.isValidElement)(c)&&(i[l]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:c.props.in,exit:g(s,"exit",e),enter:g(s,"enter",e)})):i[l]=(0,o.cloneElement)(s,{in:!1}):i[l]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:g(s,"exit",e),enter:g(s,"enter",e)})}})),i}var x=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,m.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,r=l,v(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})}))):R(e,i,l),firstRender:!1}},n.handleExited=function(e,t){var n=v(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,f.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,h.Z)(e,["component","childFactory"]),i=this.state.contextValue,l=x(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(b.Z.Provider,{value:i},l):o.createElement(b.Z.Provider,{value:i},o.createElement(t,r,l))},t}(o.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};const Z=y;var M=n(917),E=n(5893);const T=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:u,in:a,onExited:c,timeout:p}=e,[d,h]=o.useState(!1),f=(0,l.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:u,height:u,top:-u/2+s,left:-u/2+i},b=(0,l.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return a||d||h(!0),o.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,E.jsx)("span",{className:f,style:m,children:(0,E.jsx)("span",{className:b})})};var k=n(1588);const C=(0,k.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),P=["center","classes","className"];let V,w,S,$,D=e=>e;const j=(0,M.F4)(V||(V=D`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),F=(0,M.F4)(w||(w=D`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),L=(0,M.F4)(S||(S=D`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),B=(0,u.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),N=(0,u.ZP)(T,{name:"MuiTouchRipple",slot:"Ripple"})($||($=D`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),C.rippleVisible,j,550,(({theme:e})=>e.transitions.easing.easeInOut),C.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),C.child,C.childLeaving,F,550,(({theme:e})=>e.transitions.easing.easeInOut),C.childPulsate,L,(({theme:e})=>e.transitions.easing.easeInOut)),I=o.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:u={},className:c}=n,p=(0,i.Z)(n,P),[d,h]=o.useState([]),f=o.useRef(0),m=o.useRef(null);o.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=o.useRef(!1),v=o.useRef(0),g=o.useRef(null),R=o.useRef(null);o.useEffect((()=>()=>{v.current&&clearTimeout(v.current)}),[]);const x=o.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;h((e=>[...e,(0,E.jsx)(N,{classes:{ripple:(0,l.Z)(u.ripple,C.ripple),rippleVisible:(0,l.Z)(u.rippleVisible,C.rippleVisible),ripplePulsate:(0,l.Z)(u.ripplePulsate,C.ripplePulsate),child:(0,l.Z)(u.child,C.child),childLeaving:(0,l.Z)(u.childLeaving,C.childLeaving),childPulsate:(0,l.Z)(u.childPulsate,C.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},f.current)])),f.current+=1,m.current=o}),[u]),y=o.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:i=s||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const l=o?null:R.current,u=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(u.width/2),c=Math.round(u.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-u.left),c=Math.round(n-u.top)}if(i)p=Math.sqrt((2*u.width**2+u.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{x({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},v.current=setTimeout((()=>{g.current&&(g.current(),g.current=null)}),80)):x({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[s,x]),M=o.useCallback((()=>{y({},{pulsate:!0})}),[y]),T=o.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void(v.current=setTimeout((()=>{T(e,t)})));g.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return o.useImperativeHandle(t,(()=>({pulsate:M,start:y,stop:T})),[M,y,T]),(0,E.jsx)(B,(0,r.Z)({className:(0,l.Z)(C.root,u.root,c),ref:R},p,{children:(0,E.jsx)(Z,{component:null,exit:!0,children:d})}))}));var z=n(4867);function O(e){return(0,z.Z)("MuiButtonBase",e)}const X=(0,k.Z)("MuiButtonBase",["root","disabled","focusVisible"]),U=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Y=(0,u.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${X.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),K=o.forwardRef((function(e,t){const n=(0,a.Z)({props:e,name:"MuiButtonBase"}),{action:u,centerRipple:h=!1,children:f,className:m,component:b="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:R=!1,focusRipple:x=!1,LinkComponent:y="a",onBlur:Z,onClick:M,onContextMenu:T,onDragLeave:k,onFocus:C,onFocusVisible:P,onKeyDown:V,onKeyUp:w,onMouseDown:S,onMouseLeave:$,onMouseUp:D,onTouchEnd:j,onTouchMove:F,onTouchStart:L,tabIndex:B=0,TouchRippleProps:N,touchRippleRef:z,type:X}=n,K=(0,i.Z)(n,U),A=o.useRef(null),H=o.useRef(null),W=(0,c.Z)(H,z),{isFocusVisibleRef:q,onFocus:G,onBlur:J,ref:Q}=(0,d.Z)(),[_,ee]=o.useState(!1);v&&_&&ee(!1),o.useImperativeHandle(u,(()=>({focusVisible:()=>{ee(!0),A.current.focus()}})),[]);const[te,ne]=o.useState(!1);o.useEffect((()=>{ne(!0)}),[]);const re=te&&!g&&!v;function ie(e,t,n=R){return(0,p.Z)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}o.useEffect((()=>{_&&x&&!g&&te&&H.current.pulsate()}),[g,x,_,te]);const oe=ie("start",S),le=ie("stop",T),se=ie("stop",k),ue=ie("stop",D),ae=ie("stop",(e=>{_&&e.preventDefault(),$&&$(e)})),ce=ie("start",L),pe=ie("stop",j),de=ie("stop",F),he=ie("stop",(e=>{J(e),!1===q.current&&ee(!1),Z&&Z(e)}),!1),fe=(0,p.Z)((e=>{A.current||(A.current=e.currentTarget),G(e),!0===q.current&&(ee(!0),P&&P(e)),C&&C(e)})),me=()=>{const e=A.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=o.useRef(!1),ve=(0,p.Z)((e=>{x&&!be.current&&_&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ge=(0,p.Z)((e=>{x&&" "===e.key&&H.current&&_&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),w&&w(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let Re=b;"button"===Re&&(K.href||K.to)&&(Re=y);const xe={};"button"===Re?(xe.type=void 0===X?"button":X,xe.disabled=v):(K.href||K.to||(xe.role="button"),v&&(xe["aria-disabled"]=v));const ye=(0,c.Z)(t,Q,A);const Ze=(0,r.Z)({},n,{centerRipple:h,component:b,disabled:v,disableRipple:g,disableTouchRipple:R,focusRipple:x,tabIndex:B,focusVisible:_}),Me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,s.Z)(o,O,i);return n&&r&&(l.root+=` ${r}`),l})(Ze);return(0,E.jsxs)(Y,(0,r.Z)({as:Re,className:(0,l.Z)(Me.root,m),ownerState:Ze,onBlur:he,onClick:M,onContextMenu:le,onFocus:fe,onKeyDown:ve,onKeyUp:ge,onMouseDown:oe,onMouseLeave:ae,onMouseUp:ue,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:ye,tabIndex:v?-1:B,type:X},xe,K,{children:[f,re?(0,E.jsx)(I,(0,r.Z)({ref:W,center:h},N)):null]}))}))}}]);