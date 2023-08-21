"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54],{6054:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(2793),i=n(1048),o=n(7294),l=n(512),s=n(4780),a=n(948),u=n(1657),c=n(1467),p=n(798),d=n(8791),h=n(3366),f=n(7462);var m=n(5068),b=n(220);function v(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function y(e,t,n){var r=v(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var s={};for(var a in t){if(i[a])for(r=0;r<i[a].length;r++){var u=i[a][r];s[i[a][r]]=n(u)}s[a]=n(a)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,r);return Object.keys(i).forEach((function(l){var s=i[l];if((0,o.isValidElement)(s)){var a=l in t,u=l in r,c=t[l],p=(0,o.isValidElement)(c)&&!c.props.in;!u||a&&!p?u||!a||p?u&&a&&(0,o.isValidElement)(c)&&(i[l]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:c.props.in,exit:g(s,"exit",e),enter:g(s,"enter",e)})):i[l]=(0,o.cloneElement)(s,{in:!1}):i[l]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:g(s,"exit",e),enter:g(s,"enter",e)})}})),i}var R=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},x=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,m.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,r=l,v(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})}))):y(e,i,l),firstRender:!1}},n.handleExited=function(e,t){var n=v(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,f.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,h.Z)(e,["component","childFactory"]),i=this.state.contextValue,l=R(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(b.Z.Provider,{value:i},l):o.createElement(b.Z.Provider,{value:i},o.createElement(t,r,l))},t}(o.Component);x.propTypes={},x.defaultProps={component:"div",childFactory:function(e){return e}};const M=x;n(7278);var E=n(8137);n(8417),n(8679);function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,E.O)(t)}var k=function(){var e=Z.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var T=n(5893);const C=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:a,in:u,onExited:c,timeout:p}=e,[d,h]=o.useState(!1),f=(0,l.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:a,height:a,top:-a/2+s,left:-a/2+i},b=(0,l.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||h(!0),o.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,T.jsx)("span",{className:f,style:m,children:(0,T.jsx)("span",{className:b})})};var P=n(1588);const V=(0,P.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),w=["center","classes","className"];let S,$,D,j,L=e=>e;const B=k(S||(S=L`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),N=k($||($=L`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),F=k(D||(D=L`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),I=(0,a.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),O=(0,a.ZP)(C,{name:"MuiTouchRipple",slot:"Ripple"})(j||(j=L`
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
`),V.rippleVisible,B,550,(({theme:e})=>e.transitions.easing.easeInOut),V.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),V.child,V.childLeaving,N,550,(({theme:e})=>e.transitions.easing.easeInOut),V.childPulsate,F,(({theme:e})=>e.transitions.easing.easeInOut)),z=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:a={},className:c}=n,p=(0,i.Z)(n,w),[d,h]=o.useState([]),f=o.useRef(0),m=o.useRef(null);o.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=o.useRef(!1),v=o.useRef(0),g=o.useRef(null),y=o.useRef(null);o.useEffect((()=>()=>{v.current&&clearTimeout(v.current)}),[]);const R=o.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;h((e=>[...e,(0,T.jsx)(O,{classes:{ripple:(0,l.Z)(a.ripple,V.ripple),rippleVisible:(0,l.Z)(a.rippleVisible,V.rippleVisible),ripplePulsate:(0,l.Z)(a.ripplePulsate,V.ripplePulsate),child:(0,l.Z)(a.child,V.child),childLeaving:(0,l.Z)(a.childLeaving,V.childLeaving),childPulsate:(0,l.Z)(a.childPulsate,V.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},f.current)])),f.current+=1,m.current=o}),[a]),x=o.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:i=s||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const l=o?null:y.current,a=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-a.left),c=Math.round(n-a.top)}if(i)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{R({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},v.current=setTimeout((()=>{g.current&&(g.current(),g.current=null)}),80)):R({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[s,R]),E=o.useCallback((()=>{x({},{pulsate:!0})}),[x]),Z=o.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void(v.current=setTimeout((()=>{Z(e,t)})));g.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return o.useImperativeHandle(t,(()=>({pulsate:E,start:x,stop:Z})),[E,x,Z]),(0,T.jsx)(I,(0,r.Z)({className:(0,l.Z)(V.root,a.root,c),ref:y},p,{children:(0,T.jsx)(M,{component:null,exit:!0,children:d})}))}));var X=n(4867);function U(e){return(0,X.Z)("MuiButtonBase",e)}const Y=(0,P.Z)("MuiButtonBase",["root","disabled","focusVisible"]),A=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],K=(0,a.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Y.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),_=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:h=!1,children:f,className:m,component:b="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:y=!1,focusRipple:R=!1,LinkComponent:x="a",onBlur:M,onClick:E,onContextMenu:Z,onDragLeave:k,onFocus:C,onFocusVisible:P,onKeyDown:V,onKeyUp:w,onMouseDown:S,onMouseLeave:$,onMouseUp:D,onTouchEnd:j,onTouchMove:L,onTouchStart:B,tabIndex:N=0,TouchRippleProps:F,touchRippleRef:I,type:O}=n,X=(0,i.Z)(n,A),Y=o.useRef(null),_=o.useRef(null),H=(0,c.Z)(_,I),{isFocusVisibleRef:W,onFocus:q,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=o.useState(!1);v&&Q&&ee(!1),o.useImperativeHandle(a,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=o.useState(!1);o.useEffect((()=>{ne(!0)}),[]);const re=te&&!g&&!v;function ie(e,t,n=y){return(0,p.Z)((r=>{t&&t(r);return!n&&_.current&&_.current[e](r),!0}))}o.useEffect((()=>{Q&&R&&!g&&te&&_.current.pulsate()}),[g,R,Q,te]);const oe=ie("start",S),le=ie("stop",Z),se=ie("stop",k),ae=ie("stop",D),ue=ie("stop",(e=>{Q&&e.preventDefault(),$&&$(e)})),ce=ie("start",B),pe=ie("stop",j),de=ie("stop",L),he=ie("stop",(e=>{G(e),!1===W.current&&ee(!1),M&&M(e)}),!1),fe=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),q(e),!0===W.current&&(ee(!0),P&&P(e)),C&&C(e)})),me=()=>{const e=Y.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=o.useRef(!1),ve=(0,p.Z)((e=>{R&&!be.current&&Q&&_.current&&" "===e.key&&(be.current=!0,_.current.stop(e,(()=>{_.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),E&&E(e))})),ge=(0,p.Z)((e=>{R&&" "===e.key&&_.current&&Q&&!e.defaultPrevented&&(be.current=!1,_.current.stop(e,(()=>{_.current.pulsate(e)}))),w&&w(e),E&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&E(e)}));let ye=b;"button"===ye&&(X.href||X.to)&&(ye=x);const Re={};"button"===ye?(Re.type=void 0===O?"button":O,Re.disabled=v):(X.href||X.to||(Re.role="button"),v&&(Re["aria-disabled"]=v));const xe=(0,c.Z)(t,J,Y);const Me=(0,r.Z)({},n,{centerRipple:h,component:b,disabled:v,disableRipple:g,disableTouchRipple:y,focusRipple:R,tabIndex:N,focusVisible:Q}),Ee=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,s.Z)(o,U,i);return n&&r&&(l.root+=` ${r}`),l})(Me);return(0,T.jsxs)(K,(0,r.Z)({as:ye,className:(0,l.Z)(Ee.root,m),ownerState:Me,onBlur:he,onClick:E,onContextMenu:le,onFocus:fe,onKeyDown:ve,onKeyUp:ge,onMouseDown:oe,onMouseLeave:ue,onMouseUp:ae,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:xe,tabIndex:v?-1:N,type:O},Re,X,{children:[f,re?(0,T.jsx)(z,(0,r.Z)({ref:H,center:h},F)):null]}))}))}}]);