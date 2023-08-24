"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[447],{4742:(e,t,a)=>{a.d(t,{q:()=>r});var n=a(2734),i=a(8396);const r=function(e,t,a){void 0===e&&(e="row"),void 0===t&&(t="column"),void 0===a&&(a="md");const r=(0,n.Z)();return(0,i.Z)(r.breakpoints.down(a))?t:e}},8645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>O,contentTitle:()=>_,default:()=>V,frontMatter:()=>A,metadata:()=>F,toc:()=>N});var n=a(7462),i=a(7294),r=a(3905),o=a(3612),s=a(5999),l=a(4996),u=a(6486),d=a(8006),m=a(1233),g=a(7357),c=a(3946),p=a(7400),b=a(4464),h=a(5162),f=a(4866);const y=[{budgieAvailablePostInstall:null,budgieVersion:"10.8",installationInfo:()=>i.createElement(i.Fragment,null,"Arch Linux offers a Budgie Desktop profile within its 'archinstall' installer, though more intrepid users also have the option to install the desktop manually.",i.createElement(f.Z,null,i.createElement(h.Z,{value:"archinstall",label:"archinstall"},'Under the "Profile" option, select "desktop", then "budgie".'),i.createElement(h.Z,{value:"manual",label:"Manual Installation"},"After completing manual installation, run the following to install Budgie and a login manager:",i.createElement(b.Z,{language:"bash"},"sudo pacman -S budgie lightdm-gtk-greeter"),"It's also recommended to install nm-applet, the default GTK theme, and the default icon theme:",i.createElement(b.Z,{language:"bash"},"sudo pacman -S arc-gtk-theme papirus-icon-theme network-manager-applet"),"Finally, enable LightDM:",i.createElement(b.Z,{language:"bash"},"sudo systemctl enable --now lightdm")))),name:"Arch Linux",showInGrid:!1,website:"https://archlinux.org"},{budgieAvailablePostInstall:null,budgieVersion:"10.5.2",name:"Debian",showInGrid:!1,installationInfo:()=>i.createElement(o.Z,{icon:"\ud83d\udea7",type:"note",title:"Coming Soon"},"Installation instructions coming soon!"),website:"https://debian.org"},{budgieAvailablePostInstall:"10.8",budgieVersion:"10.7.1",name:"EndeavourOS",showInGrid:!0,summary:()=>i.createElement(s.Z,{id:"get.budgie.endeavouros.summary",description:"Summary of EndeavourOS"},"EndeavourOS is a terminal-centric distro built on top of Arch Linux. EndeavourOS offers through their unified installer the ability to install Budgie Desktop, with user choice on their desired experience."),website:"https://endeavouros.com"},{budgieAvailablePostInstall:"10.8",budgieVersion:"10.7.1",name:"Fedora Budgie Spin",showInGrid:!0,summary:()=>i.createElement(s.Z,{id:"get.budgie.fedorabudgiespin.summary",description:"Summary of Fedora Budgie Spin"},"Fedora Budgie Spin offers a near-stock Budgie Desktop experience on top of the Fedora open source platform."),website:"https://fedoraproject.org/spins/budgie/"},{budgieAvailablePostInstall:"10.7.1",budgieVersion:"10.7.1",installationInfo:()=>i.createElement(i.Fragment,null,"Budgie is not yet available in a quarterly release of FreeBSD; however, it can be installed if the Latest binary repository or the master branch of the ports repository is used instead.",i.createElement(f.Z,null,i.createElement(h.Z,{value:"package",label:"Package"},"Install X11 and the Budgie package group:",i.createElement(b.Z,{language:"bash"},"pkg install xorg-minimal budgie")),i.createElement(h.Z,{value:"port",label:"Port"},"Configure and install X11:",i.createElement(b.Z,{language:"bash"},"cd /usr/ports/x11/xorg-minimal && make config-recursive install clean"),"Configure and install Budgie:",i.createElement(b.Z,{language:"bash"},"cd /usr/ports/x11/budgie && make config-recursive install clean"))),"Finally, enable DBus and LightDM:",i.createElement(b.Z,{language:"bash"},'sysrc dbus_enable="YES" lightdm_enable="YES"'),"After a reboot, you will be able to log into Budgie.",i.createElement(o.Z,{icon:"\ud83d\udea7",type:"caution"},"Using the Latest repository or the master version of the ports repository may result in system instability.")),name:"FreeBSD",showInGrid:!1,website:"https://freebsd.org"},{budgieAvailablePostInstall:"10.7.2",budgieVersion:"10.6.4",installationInfo:()=>i.createElement(i.Fragment,null,"Manjaro Budgie Community Edition offers Budgie Desktop as an out-of-the-box experience on top of Manjaro. Manjaro is based on Arch Linux.",i.createElement(o.Z,{icon:"\ud83d\udea7",type:"caution"},"The Budgie Desktop experience offered by this edition is incomplete, setting no default theme or enabling our built-in theme. This results in a partially broken user experience.")),name:"Manjaro Budgie Community Edition",showInGrid:!1,website:"https://manjaro.org"},{budgieAvailablePostInstall:null,budgieVersion:"10.7.2",installationInfo:()=>i.createElement(i.Fragment,null,"Budgie Desktop can be installed through the following mechanisms on openSUSE.",i.createElement(f.Z,null,i.createElement(h.Z,{value:"graphical",label:"Graphical (Leap 15.4+ and Tumbleweed)"},'Choose the "Budgie Desktop Environment" pattern under the "Desktop Environments" section when searching for patterns in YaST Software Management.'),i.createElement(h.Z,{value:"installer",label:"Installer (Leap 15.4+ and Tumbleweed)"},'At the \'Installation Settings\' page, click on "Software" and then choose the "Budgie Desktop Environment" pattern under the "Desktop Environments" section when searching for patterns.'),i.createElement(h.Z,{value:"cli",label:"CLI"},i.createElement(b.Z,{language:"bash"},"sudo zypper install budgie-desktop")))),name:"OpenSUSE",showInGrid:!1,website:"https://opensuse.org"},{budgieAvailablePostInstall:null,budgieVersion:"10.7.2",name:"NixOS",installationInfo:()=>i.createElement(i.Fragment,null,"Budgie Desktop can be installed by adding the following to your system configuration:",i.createElement(b.Z,{language:"nix"},"# Enable the X server.",i.createElement("br",null),"services.xserver.enable = true;",i.createElement("br",null),"# Enable the Budgie Desktop.",i.createElement("br",null),"services.xserver.desktopManager.budgie.enable = true;",i.createElement("br",null),"# Enable a display manager (recommended).",i.createElement("br",null),"services.xserver.displayManager.lightdm.enable = true;")),summary:()=>i.createElement(s.Z,{id:"get.budgie.nixos.summary",description:"Summary of NixOS"},"NixOS is a Linux distribution based on the Nix package manager and build system."),showInGrid:!0,website:"https://nixos.org/download.html#nixos-iso"},{budgieAvailablePostInstall:"10.8",budgieVersion:"10.7.2",name:"Solus",summary:()=>i.createElement(s.Z,{id:"get.budgie.solus.summary",description:"Summary of Solus"},"Solus offers a curated Budgie Desktop experience on top of its built-from-scratch operating system."),showInGrid:!0,website:"https://getsol.us"},{budgieAvailablePostInstall:"10.7.1",budgieVersion:"10.6.4",name:"Ubuntu Budgie",summary:()=>i.createElement(s.Z,{id:"get.budgie.ubuntubudgie.summary",description:"Summary of Ubuntu Budgie"},"Ubuntu Budgie offers a highly curated Budgie Desktop experience with Ubuntu at its core."),showInGrid:!0,website:"https://ubuntubudgie.org"},{budgieAvailablePostInstall:"10.8",budgieVersion:"10.7.2",name:"Ultramarine Linux",summary:()=>i.createElement(s.Z,{id:"get.budgie.ultramarinelinux.summary",description:"Summary of Ultramarine Linux"},"Ultramarine Linux is a Fedora-based Linux distribution designed to stay out of your way and be easy to use."),showInGrid:!0,website:"https://ultramarine-linux.org"},{budgieAvailablePostInstall:"10.7.1",budgieVersion:"10.6.4",name:"Void Linux",installationInfo:()=>i.createElement(i.Fragment,null,"Void Linux does not offer a Budgie Desktop installer profile, but it can be installed manually on top of the base image. First, install the required packages:",i.createElement(b.Z,{language:"bash"},"sudo xbps-install budgie-desktop network-manager-applet lightdm-gtk3-greeter"),"Enable DBus, elogind, NetworkManager, and LightDM:",i.createElement(b.Z,{language:"bash"},"sudo ln -s /etc/sv/dbus /var/service",i.createElement("br",null),"sudo ln -s /etc/sv/elogind /var/service",i.createElement("br",null),"sudo ln -s /etc/sv/NetworkManager /var/service",i.createElement("br",null),"sudo ln -s /etc/sv/lightdm /var/service"),"Finally, disable dhcpcd:",i.createElement(b.Z,{language:"bash"},"sudo rm -f /var/service/dhcpcd"),i.createElement("p",null,"After a reboot, you will be able to log into Budgie.")),showInGrid:!1,website:"https://voidlinux.org"}];var E=a(9960),w=a(8396),k=a(7918);const v="2023-08-20",x="https://buddiesofbudgie.org/blog/budgie-10.8-released",Z="10.8";var I=a(888),B=a(2177),S=a(5620),D=a(4742),L=a(120);const G=e=>{let{info:t}=e;const a=(0,w.Z)(S.J.breakpoints.up("sm")),n=(0,u.kebabCase)((0,u.toLower)(t.name)),r=(0,l.Z)(`/img/logos/${n}.svg`),o=(0,l.Z)(`/img/distribution/screenshots/${n}.webp`),d=t.budgieVersion===Z,c=t.budgieAvailablePostInstall?t.budgieAvailablePostInstall===Z:d,b=!d&&!c,h=L.ou.now().toISODate({format:"basic"}),f=(0,i.useMemo)((()=>t.website.replace("ISODATE",h)),[t.website,h]),[y,v,x]=[(0,s.I)({id:"latest",description:"Latest",message:"Latest"}),(0,s.I)({id:"latest_postinstall",description:"Latest with post-install upgrade",message:"Latest with post-install upgrade"}),(0,s.I)({id:"outdated",description:"Outdated",message:"Outdated"})],G=d?y:c?v:x;return i.createElement(p.Z,{key:`OSCard-${t.name}-GridItem`,xs:6},i.createElement(g.Z,{className:"OSCard card",height:1,key:`card-${n}`},i.createElement(g.Z,{className:"card__image"},i.createElement("img",{alt:(0,s.I)({message:"Screenshot of {distribution}",id:"get.budgie.card.imagealttext",description:"Alt text for images of various distributions"},{distribution:t.name}),src:o,style:{aspectRatio:"16 / 9"}})),i.createElement(m.Z,{className:"card__body",gap:2},i.createElement(m.Z,{alignItems:"center",direction:"row",gap:2},i.createElement("img",{src:r,style:{height:48,width:48,objectFit:"scale-down"}}),i.createElement("h3",{style:{margin:0}},t.name)),i.createElement("h4",{style:{fontWeight:"normal"}},i.createElement(t.summary,null))),i.createElement(m.Z,{alignItems:a?"center":"flex-start",className:"card__footer",direction:(0,D.q)("row","column-reverse","sm"),justifyContent:a?"space-between":void 0,width:a?1:"max-content"},i.createElement(E.Z,{className:"button button--lg button--primary",style:{marginBlockStart:a?void 0:12},target:"_blank",to:f},i.createElement(s.Z,{id:"download",description:"Download"},"Download")),i.createElement(k.Z,{color:b?"warning":"success",label:G,icon:b?i.createElement(B.Z,null):i.createElement(I.Z,null),size:"medium"}))))},M=()=>{const[e,t]=[y.filter((e=>e.showInGrid)),y.filter((e=>!!e.installationInfo))],a=L.ou.fromISO(v).diffNow("days").days<=14;return i.createElement(m.Z,{gap:2,key:"SupportList"},a&&i.createElement(o.Z,{icon:"\ud83c\udf89",title:(0,s.I)({id:"newBudgieRelease",message:"New Budgie Release"}),type:"tip"},i.createElement(m.Z,{gap:2},i.createElement(s.Z,{id:"get.budgie.newrelease",description:"Flavor text used to inform the user there is a new release of Budgie",values:{version:Z}},"The Buddies of Budgie team just released Budgie Desktop {version}. Please keep in mind that it may take some time for the release to be available on the operating systems shown below, as this is a manual process performed by our amazing community of package maintainers."),i.createElement(E.Z,{className:"button button--primary",style:{maxWidth:"max-content",textDecoration:"none"},target:"_blank",to:x},i.createElement(s.Z,{id:"readMore",description:"Read More on the blog post for this release"},"Read Mode")))),i.createElement("h2",{style:{fontWeight:"bold",margin:0},key:"SupportList-EffortlesslyHeader"},i.createElement(s.Z,{id:"get.budgie.header.effortlessly",description:"Header text for getting Budgie effortlessly through live media"},"Get Budgie Effortlessly")),i.createElement("h4",{style:{fontWeight:"normal",margin:0},key:"SupportList-EffortlesslyDescription"},i.createElement(s.Z,{id:"get.budgie.description.effortlessly",description:"Description text for getting Budgie effortlessly through live media"},'You are able to get Budgie Desktop out-of-the-box, with no extra effort, with the operating systems shown below. These operating systems range in the experience they provide, some will be more curated with additional widgets / extensions for Budgie Desktop, others may be closer to the "stock" / "vanilla" Budgie Desktop experience.')),i.createElement(p.Z,{columns:{xs:6,sm:6,md:6,lg:12},container:!0,columnSpacing:2,key:"SupportList-Grid",margin:0,rowGap:4,width:1},e.map((e=>i.createElement(G,{info:e,key:`OSCard-${e.name}-Entry`})))),i.createElement("h2",{style:{fontWeight:"bold",margin:"1vh 0"},key:"SupportList-BitMoreWorkHeader"},i.createElement(s.Z,{id:"get.budgie.header.bitmorework",description:"Header text for getting Budgie with a bit more work"},"Get Budgie with a bit more work")),i.createElement(m.Z,{gap:4,key:"SupportList-ManualItems"},t.map((e=>{const t=(0,u.kebabCase)((0,u.toLower)(e.name)),a=(0,l.Z)(`/img/logos/${t}.svg`);return i.createElement(g.Z,{className:"ManualOSCard card",key:`SupportList-ManualItem-${e.name}-Box`},i.createElement(m.Z,{className:"card__body",gap:2,key:`SupportList-ManualItem-${e.name}-Stack`,pb:0},i.createElement(m.Z,{alignItems:"center",direction:"row",columnGap:1},i.createElement("img",{src:a,style:{height:32,width:32,objectFit:"scale-down"}}),i.createElement("h3",{style:{margin:0}},e.name),i.createElement(c.Z,{"aria-label":(0,s.I)({message:"Open in new tab"}),component:"a",href:e.website,size:"small",sx:{color:S.J.palette.success.main},target:"_blank"},i.createElement(d.Z,null))),i.createElement(m.Z,{gap:2},i.createElement(e.installationInfo,{key:`InstallationInfo-${e.name}`}))))}))),i.createElement("hr",null),i.createElement(o.Z,{type:"note"},i.createElement(s.Z,{id:"get.budgie.description.reference",description:"Text describing that there is no reference platform for Budgie Desktop"},'None of these operating systems are viewed as being the "reference" platform for Budgie Desktop, rather we want you to be able to pick the OS that fits your needs best, and have Budgie Desktop along with you!')))},A={description:"Get Budgie Desktop across the Linux operating system of your choice!",hide_table_of_contents:!0,keywords:["budgie desktop","installing"],pagination_next:null,pagination_prev:null,title:"Getting Budgie"},_=void 0,F={unversionedId:"user/getting-budgie",id:"user/getting-budgie",title:"Getting Budgie",description:"Get Budgie Desktop across the Linux operating system of your choice!",source:"@site/docs/user/getting-budgie.mdx",sourceDirName:"user",slug:"/user/getting-budgie",permalink:"/user/getting-budgie",draft:!1,tags:[],version:"current",frontMatter:{description:"Get Budgie Desktop across the Linux operating system of your choice!",hide_table_of_contents:!0,keywords:["budgie desktop","installing"],pagination_next:null,pagination_prev:null,title:"Getting Budgie"},sidebar:"user"},O={},N=[],P={toc:N},C="wrapper";function V(e){let{components:t,...a}=e;return(0,r.kt)(C,(0,n.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Budgie Desktop and our macrocosm of applications are available across a wide variety of Linux-based operating systems."),(0,r.kt)(M,{mdxType:"SupportList"}))}V.isMDXComponent=!0}}]);