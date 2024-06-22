"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[691],{1691:(e,t,n)=>{n.d(t,{A:()=>Y});var i=n(9668),o=n(1367),r=n(6540),l=n(4164),s=n(4111),a=n(1848),u=n(3541),c=n(6852),p=n(3034),d=n(638);var h=n(3328),f=n(7241);function m(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function b(e,t,n){return null!=n[t]?n[t]:e.props[t]}function v(e,t,n){var i=m(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var i,o=Object.create(null),r=[];for(var l in e)l in t?r.length&&(o[l]=r,r=[]):r.push(l);var s={};for(var a in t){if(o[a])for(i=0;i<o[a].length;i++){var u=o[a][i];s[o[a][i]]=n(u)}s[a]=n(a)}for(i=0;i<r.length;i++)s[r[i]]=n(r[i]);return s}(t,i);return Object.keys(o).forEach((function(l){var s=o[l];if((0,r.isValidElement)(s)){var a=l in t,u=l in i,c=t[l],p=(0,r.isValidElement)(c)&&!c.props.in;!u||a&&!p?u||!a||p?u&&a&&(0,r.isValidElement)(c)&&(o[l]=(0,r.cloneElement)(s,{onExited:n.bind(null,s),in:c.props.in,exit:b(s,"exit",e),enter:b(s,"enter",e)})):o[l]=(0,r.cloneElement)(s,{in:!1}):o[l]=(0,r.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:b(s,"exit",e),enter:b(s,"enter",e)})}})),o}var g=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var i,o=(i=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i));return i.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},i}(0,h.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,i,o=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,i=l,m(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:b(e,"appear",n),enter:b(e,"enter",n),exit:b(e,"exit",n)})}))):v(e,o,l),firstRender:!1}},n.handleExited=function(e,t){var n=m(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,i.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,o.A)(e,["component","childFactory"]),l=this.state.contextValue,s=g(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(f.A.Provider,{value:l},s):r.createElement(f.A.Provider,{value:l},r.createElement(t,i,s))},t}(r.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};const x=y;var A=n(7437),R=n(6962),M=n(4848);const E=function(e){const{className:t,classes:n,pulsate:i=!1,rippleX:o,rippleY:s,rippleSize:a,in:u,onExited:c,timeout:p}=e,[d,h]=r.useState(!1),f=(0,l.A)(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),m={width:a,height:a,top:-a/2+s,left:-a/2+o},b=(0,l.A)(n.child,d&&n.childLeaving,i&&n.childPulsate);return u||d||h(!0),r.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,M.jsx)("span",{className:f,style:m,children:(0,M.jsx)("span",{className:b})})};var k=n(7553);const T=(0,k.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),C=["center","classes","className"];let V,w,P,S,$=e=>e;const D=(0,A.i7)(V||(V=$`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),j=(0,A.i7)(w||(w=$`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),L=(0,A.i7)(P||(P=$`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),B=(0,a.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),N=(0,a.Ay)(E,{name:"MuiTouchRipple",slot:"Ripple"})(S||(S=$`
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
`),T.rippleVisible,D,550,(({theme:e})=>e.transitions.easing.easeInOut),T.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),T.child,T.childLeaving,j,550,(({theme:e})=>e.transitions.easing.easeInOut),T.childPulsate,L,(({theme:e})=>e.transitions.easing.easeInOut)),F=r.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:a={},className:c}=n,p=(0,o.A)(n,C),[d,h]=r.useState([]),f=r.useRef(0),m=r.useRef(null);r.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=r.useRef(!1),v=(0,R.A)(),g=r.useRef(null),y=r.useRef(null),A=r.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:i,rippleSize:o,cb:r}=e;h((e=>[...e,(0,M.jsx)(N,{classes:{ripple:(0,l.A)(a.ripple,T.ripple),rippleVisible:(0,l.A)(a.rippleVisible,T.rippleVisible),ripplePulsate:(0,l.A)(a.ripplePulsate,T.ripplePulsate),child:(0,l.A)(a.child,T.child),childLeaving:(0,l.A)(a.childLeaving,T.childLeaving),childPulsate:(0,l.A)(a.childPulsate,T.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:i,rippleSize:o},f.current)])),f.current+=1,m.current=r}),[a]),E=r.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:i=!1,center:o=s||t.pulsate,fakeElement:r=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const l=r?null:y.current,a=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-a.left),c=Math.round(n-a.top)}if(o)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{A({pulsate:i,rippleX:u,rippleY:c,rippleSize:p,cb:n})},v.start(80,(()=>{g.current&&(g.current(),g.current=null)}))):A({pulsate:i,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[s,A,v]),k=r.useCallback((()=>{E({},{pulsate:!0})}),[E]),V=r.useCallback(((e,t)=>{if(v.clear(),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void v.start(0,(()=>{V(e,t)}));g.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=t}),[v]);return r.useImperativeHandle(t,(()=>({pulsate:k,start:E,stop:V})),[k,E,V]),(0,M.jsx)(B,(0,i.A)({className:(0,l.A)(T.root,a.root,c),ref:y},p,{children:(0,M.jsx)(x,{component:null,exit:!0,children:d})}))}));var I=n(7245);function z(e){return(0,I.Ay)("MuiButtonBase",e)}const O=(0,k.A)("MuiButtonBase",["root","disabled","focusVisible"]),X=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],U=(0,a.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Y=r.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:h=!1,children:f,className:m,component:b="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:y=!1,focusRipple:x=!1,LinkComponent:A="a",onBlur:R,onClick:E,onContextMenu:k,onDragLeave:T,onFocus:C,onFocusVisible:V,onKeyDown:w,onKeyUp:P,onMouseDown:S,onMouseLeave:$,onMouseUp:D,onTouchEnd:j,onTouchMove:L,onTouchStart:B,tabIndex:N=0,TouchRippleProps:I,touchRippleRef:O,type:Y}=n,K=(0,o.A)(n,X),H=r.useRef(null),W=r.useRef(null),q=(0,c.A)(W,O),{isFocusVisibleRef:G,onFocus:J,onBlur:Q,ref:Z}=(0,d.A)(),[_,ee]=r.useState(!1);v&&_&&ee(!1),r.useImperativeHandle(a,(()=>({focusVisible:()=>{ee(!0),H.current.focus()}})),[]);const[te,ne]=r.useState(!1);r.useEffect((()=>{ne(!0)}),[]);const ie=te&&!g&&!v;function oe(e,t,n=y){return(0,p.A)((i=>{t&&t(i);return!n&&W.current&&W.current[e](i),!0}))}r.useEffect((()=>{_&&x&&!g&&te&&W.current.pulsate()}),[g,x,_,te]);const re=oe("start",S),le=oe("stop",k),se=oe("stop",T),ae=oe("stop",D),ue=oe("stop",(e=>{_&&e.preventDefault(),$&&$(e)})),ce=oe("start",B),pe=oe("stop",j),de=oe("stop",L),he=oe("stop",(e=>{Q(e),!1===G.current&&ee(!1),R&&R(e)}),!1),fe=(0,p.A)((e=>{H.current||(H.current=e.currentTarget),J(e),!0===G.current&&(ee(!0),V&&V(e)),C&&C(e)})),me=()=>{const e=H.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=r.useRef(!1),ve=(0,p.A)((e=>{x&&!be.current&&_&&W.current&&" "===e.key&&(be.current=!0,W.current.stop(e,(()=>{W.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),w&&w(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),E&&E(e))})),ge=(0,p.A)((e=>{x&&" "===e.key&&W.current&&_&&!e.defaultPrevented&&(be.current=!1,W.current.stop(e,(()=>{W.current.pulsate(e)}))),P&&P(e),E&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&E(e)}));let ye=b;"button"===ye&&(K.href||K.to)&&(ye=A);const xe={};"button"===ye?(xe.type=void 0===Y?"button":Y,xe.disabled=v):(K.href||K.to||(xe.role="button"),v&&(xe["aria-disabled"]=v));const Ae=(0,c.A)(t,Z,H);const Re=(0,i.A)({},n,{centerRipple:h,component:b,disabled:v,disableRipple:g,disableTouchRipple:y,focusRipple:x,tabIndex:N,focusVisible:_}),Me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:o}=e,r={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,s.A)(r,z,o);return n&&i&&(l.root+=` ${i}`),l})(Re);return(0,M.jsxs)(U,(0,i.A)({as:ye,className:(0,l.A)(Me.root,m),ownerState:Re,onBlur:he,onClick:E,onContextMenu:le,onFocus:fe,onKeyDown:ve,onKeyUp:ge,onMouseDown:re,onMouseLeave:ue,onMouseUp:ae,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Ae,tabIndex:v?-1:N,type:Y},xe,K,{children:[f,ie?(0,M.jsx)(F,(0,i.A)({ref:q,center:h},I)):null]}))}))}}]);