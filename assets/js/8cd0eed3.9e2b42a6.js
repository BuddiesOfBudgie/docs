"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[609],{5162:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(7294),a=l(4334);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:l,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:l},t)}},4866:(e,t,l)=>{l.d(t,{Z:()=>w});var n=l(7462),a=l(7294),i=l(4334),o=l(2466),s=l(6550),u=l(1980),r=l(7392),d=l(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:a}}=e;return{value:t,label:l,attributes:n,default:a}}))}function p(e){const{values:t,children:l}=e;return(0,a.useMemo)((()=>{const e=t??c(l);return function(e){const t=(0,r.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function b(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:l}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,i=p(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,r]=g({queryString:l,groupId:n}),[c,m]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(l);return[n,(0,a.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:n}),k=(()=>{const e=u??c;return b({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),r(e),m(e)}),[r,m,i]),tabValues:i}}var k=l(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:l,selectedValue:s,selectValue:u,tabValues:r}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,l=d.indexOf(t),n=r[l].value;n!==s&&(c(t),u(n))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const l=d.indexOf(e.currentTarget)+1;t=d[l]??d[0];break}case"ArrowLeft":{const l=d.indexOf(e.currentTarget)-1;t=d[l]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},t)},r.map((e=>{let{value:t,label:l,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:b,onClick:p},o,{className:(0,i.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t})}),l??t)})))}function h(e){let{lazy:t,children:l,selectedValue:n}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},a.createElement(f,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},8478:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>b});var n=l(7462),a=(l(7294),l(3905)),i=l(9960),o=l(4464),s=l(5162),u=l(4866);const r={description:"This document goes over building Budgie Desktop from source.",keywords:["building budgie","compiling budgie"]},d="Building Budgie Desktop",c={unversionedId:"developer/workflow/building-budgie-desktop",id:"developer/workflow/building-budgie-desktop",title:"Building Budgie Desktop",description:"This document goes over building Budgie Desktop from source.",source:"@site/docs/developer/workflow/building-budgie-desktop.mdx",sourceDirName:"developer/workflow",slug:"/developer/workflow/building-budgie-desktop",permalink:"/developer/workflow/building-budgie-desktop",draft:!1,tags:[],version:"current",frontMatter:{description:"This document goes over building Budgie Desktop from source.",keywords:["building budgie","compiling budgie"]},sidebar:"developer",previous:{title:"Developer Documentation",permalink:"/developer/intro"},next:{title:"Providing Backtraces",permalink:"/developer/workflow/providing-backtraces"}},p={},b=[{value:"Build Dependencies",id:"build-dependencies",level:2},{value:"Run-time dependencies",id:"run-time-dependencies",level:2},{value:"Installing Build Dependencies",id:"installing-build-dependencies",level:2},{value:"Cloning the repository",id:"cloning-the-repository",level:2},{value:"Configuring",id:"configuring",level:2},{value:"Building",id:"building",level:2},{value:"Installing",id:"installing",level:2}],g={toc:b},m="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-budgie-desktop"},"Building Budgie Desktop"),(0,a.kt)("h2",{id:"build-dependencies"},"Build Dependencies"),(0,a.kt)("p",null,"budgie-desktop has a number of build dependencies that must be present before attempting configuration. The names are different depending on distribution. The following is a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg-config")," dependencies currently required to build Budgie from source."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"accountsservice >= 0.6.40"),(0,a.kt)("li",{parentName:"ul"},"alsa-lib >= 1.1.0"),(0,a.kt)("li",{parentName:"ul"},"budgie-screensaver (or gnome-screensaver on Debian / Ubuntu)"),(0,a.kt)("li",{parentName:"ul"},"budgie-session"),(0,a.kt)("li",{parentName:"ul"},"gee-0.8 >= 0.20.0"),(0,a.kt)("li",{parentName:"ul"},"gio-2.0 >= 2.64.0"),(0,a.kt)("li",{parentName:"ul"},"gio-unix-2.0 >= 2.64.0"),(0,a.kt)("li",{parentName:"ul"},"gnome-desktop-3.0 >= 41.0"),(0,a.kt)("li",{parentName:"ul"},"gnome-settings-daemon >= 41.0"),(0,a.kt)("li",{parentName:"ul"},"gobject-2.0 >= 2.64.0"),(0,a.kt)("li",{parentName:"ul"},"gobject-introspection-1.0 >= 1.64.0"),(0,a.kt)("li",{parentName:"ul"},"gstreamer-1.0"),(0,a.kt)("li",{parentName:"ul"},"gtk+-3.0 >= 3.24.0"),(0,a.kt)("li",{parentName:"ul"},"ibus-1.0 >= 1.5.10"),(0,a.kt)("li",{parentName:"ul"},"libcanberra-devel"),(0,a.kt)("li",{parentName:"ul"},"libgnome-menu-3.0 >= 3.10.3"),(0,a.kt)("li",{parentName:"ul"},"libnotify >= 0.7"),(0,a.kt)("li",{parentName:"ul"},"libpeas-gtk-1.0 >= 1.26.0"),(0,a.kt)("li",{parentName:"ul"},"libpulse >= 2"),(0,a.kt)("li",{parentName:"ul"},"libwnck >= 3.36.0"),(0,a.kt)("li",{parentName:"ul"},"libxfce4windowing"),(0,a.kt)("li",{parentName:"ul"},"meson"),(0,a.kt)("li",{parentName:"ul"},"magpie 0.9.x"),(0,a.kt)("li",{parentName:"ul"},"polkit-agent-1 >= 0.110"),(0,a.kt)("li",{parentName:"ul"},"polkit-gobject-1 >= 0.110"),(0,a.kt)("li",{parentName:"ul"},"upower-glib >= 0.99.0"),(0,a.kt)("li",{parentName:"ul"},"uuid")),(0,a.kt)("p",null,"And:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gtk-doc (For documentation building from git only)"),(0,a.kt)("li",{parentName:"ul"},"sassc (to build theming)"),(0,a.kt)("li",{parentName:"ul"},"vala >= 0.52.0")),(0,a.kt)("admonition",{title:"Important Information",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please ensure you install budgie-screensaver ",(0,a.kt)("strong",{parentName:"p"},"before")," configuration. If you are on a Debian-based system, ensure you are install gnome-screensaver.")),(0,a.kt)("h2",{id:"run-time-dependencies"},"Run-time dependencies"),(0,a.kt)("p",null,"budgie-desktop requires/recommends the following to be installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"zenity (to display mutter based dialogs)"),(0,a.kt)("li",{parentName:"ul"},"dconf-cli (to handle resetting of dconf)"),(0,a.kt)("li",{parentName:"ul"},"xdotool (lock keys applet)")),(0,a.kt)("h2",{id:"installing-build-dependencies"},"Installing Build Dependencies"),(0,a.kt)(u.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"arch",label:"Arch",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"sudo pacman -S base-devel git",(0,a.kt)("br",null),"sudo pacman -S accountsservice budgie-session budgie-screensaver gnome-settings-daemon gobject-introspection ibus intltool libgee libpeas libwnck3 libxfce4windowing meson magpie sassc vala zenity")),(0,a.kt)(s.Z,{value:"debian-or-ubuntu",label:"Debian / Ubuntu",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt install build-essential git"),(0,a.kt)("p",null,"Enable software sources in your apt sources list then install the dependencies"),(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt build-dep budgie-desktop"),(0,a.kt)("p",null,"The manual method for dependency installation is:"),(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt install build-essential git",(0,a.kt)("br",null),"sudo apt install gnome-settings-daemon-dev gtk-doc-tools intltool libaccountsservice-dev libasound2-dev libgnome-desktop-3-dev libcanberra-dev libgee-0.8-dev libgstreamer1.0-dev libgtk-3-dev libibus-1.0-dev libmagpie-0-dev libpeas-dev libpolkit-agent-1-dev libpulse-dev libupower-glib-dev libwnck-3-dev libxfce4windowing-dev meson ninja-build sassc uuid-dev valac")),(0,a.kt)(s.Z,{value:"fedora",label:"Fedora non-Atomic",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"sudo dnf install accountsservice-devel alsa-lib-devel budgie-screensaver budgie-session desktop-file-utils gettext git glib2-devel gnome-desktop3-devel gnome-settings-daemon-devel gobject-introspection-devel gsettings-desktop-schemas-devel gstreamer1-devel gtk-doc gtk3-devel ibus-devel intltool json-glib-devel libcanberra-devel libX11-devel libXtst-devel libgee-devel libnotify-devel libpeas1-devel libuuid-devel libwnck3-devel libxfce4windowing-devel meson magpie-devel polkit-devel pulseaudio-libs-devel sassc upower-devel vala")),(0,a.kt)(s.Z,{value:"fedora-onyx",label:"Fedora Onyx / Atomic",mdxType:"TabItem"},"For developing Budgie Desktop on top of Fedora Onyx / Atomic, we suggest rebasing on top of our ",(0,a.kt)(i.Z,{to:"https://github.com/BuddiesOfBudgie/atomic-dev",mdxType:"Link"},"Atomic Dev")," ostree images. These are built daily on top of Onyx with the required development libraries, making additional package layer faster and less prone to breakage."),(0,a.kt)(s.Z,{value:"sabayon",label:"Sabayon",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"sudo equo i dev-util/re2c dev-libs/libsass dev-lang/sassc dev-util/intltool dev-util/ninja dev-util/itstool app-text/docbook-sgml-dtd app-text/docbook-dsssl-stylesheets dev-util/meson dev-util/gtk-doc-am app-text/yelp-tools dev-util/gtk-doc x11-libs/wxGTK app-eselect/eselect-wxwidgets")),(0,a.kt)(s.Z,{value:"solus",label:"Solus",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"sudo eopkg it accountsservice-devel alsa-lib-devel gtk-doc gnome-settings-daemon-devel gstreamer-1.0-devel ibus-devel libcanberra-devel libgee-devel libgnome-desktop-devel libnotify-devel libpeas-devel libwnck-devel libxfce4windowing-devel magpie-devel pulseaudio-devel sassc upower-devel vala ccache -c system.devel"))),(0,a.kt)("h2",{id:"cloning-the-repository"},"Cloning the repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/buddiesofbudgie/budgie-desktop.git\ncd budgie-desktop\ngit submodule update --init\n")),(0,a.kt)("h2",{id:"configuring"},"Configuring"),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"arch",label:"Arch",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"cd budgie-desktop",(0,a.kt)("br",null),"meson setup build --prefix=/usr --sysconfdir=/etc --libexecdir=/usr/lib")),(0,a.kt)(s.Z,{value:"debian-or-ubuntu",label:"Debian / Ubuntu",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"cd budgie-desktop",(0,a.kt)("br",null),"meson build --prefix=/usr --libdir=/usr/lib -Dwith-gnome-screensaver=true")),(0,a.kt)(s.Z,{value:"fedora-onyx",label:"Fedora Onyx",mdxType:"TabItem"},"As Fedora Onyx is an immutable variant, you will need to install Budgie Desktop into the persistent usrlocal for your changes to persist after reboot.",(0,a.kt)("br",null),(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"cd budgie-desktop",(0,a.kt)("br",null),"meson build --prefix=/var/usrlocal --sysconfdir=/etc")),(0,a.kt)(s.Z,{value:"solus",label:"Solus",mdxType:"TabItem"},"Solus has special requirements and mandates the use of stateless XDG paths, as well as using the OS default CFLAGS:",(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"cd budgie-desktop",(0,a.kt)("br",null),"meson --prefix /usr --libdir /usr/lib64 --sysconfdir /etc -Dwith-stateless=true build --buildtype plain")),(0,a.kt)(s.Z,{value:"all-other-distributions",label:"All Other Distributions",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"cd budgie-desktop",(0,a.kt)("br",null),"meson build --prefix=/usr --sysconfdir=/etc"))),(0,a.kt)("h2",{id:"building"},"Building"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ninja -j$(($(getconf _NPROCESSORS_ONLN)+1)) -C build\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": When building a distro package, please ensure you use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"meson build --prefix=/usr --sysconfdir=/etc --buildtype plain\n")),(0,a.kt)("p",null,"This ensures your distro flags are respected."),(0,a.kt)("h2",{id:"installing"},"Installing"),(0,a.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"sudo ninja install -C build"))}k.isMDXComponent=!0}}]);