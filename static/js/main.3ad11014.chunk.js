(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(4),o=c.n(s),i=c(29),r=c.n(i),a=(c(39),c(40),function(){return Object(n.jsxs)("figure",{className:"flex place-content-center items-center pt-8 md:pt-16",children:[Object(n.jsx)("img",{className:"ml-4 md:ml-0 w-32 h-32 rounded-full",src:"https://avatars2.githubusercontent.com/u/6383527?s=460&u=9cec6af101e42574a87753cf26788425d11db5cb&v=4",alt:"Me"}),Object(n.jsxs)("div",{className:"md:p-4 xl:p-8 pl-4 text-left",children:[Object(n.jsx)("blockquote",{className:"text-lg text-color italic",children:'"I\'m looking for something that never makes me stop keeping up with the future."'}),Object(n.jsxs)("figcaption",{className:"font-medium",children:[Object(n.jsx)("div",{className:"text-color",children:"Matteo Pietro Dazzi"}),Object(n.jsx)("a",{href:"https://telegram.me/iLTeoooD",children:"@iLTeoooD"})]})]})]})}),l=c(30),j=c.n(l),d=(c(41),function(e){var t=e.loop,c=e.content,s=e.cssClass;return Object(n.jsx)(j.a,{onInit:function(e){c.forEach((function(t){e.typeString(t.content),t.delay&&e.pauseFor(t.delay),t.deleteAll&&e.deleteAll()})),e.start()},options:{loop:t,wrapperClassName:s||"Typewriter__wrapper",cursorClassName:s?s+" typewriter-cursor":"Typewriter__cursor",delay:90}})}),u=(c(42),function(){var e=["Software engineer","Technology enthusiast","Music addicted"].map((function(e){return{content:e,delay:1500,deleteAll:!0}}));return Object(n.jsx)("div",{className:"flex place-content-center pt-20 md:pt-40 xl:pt-60",children:Object(n.jsx)(d,{loop:!0,content:e,cssClass:"describe-me-typewriter"})})}),m=c(17),p=(c(43),function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),c=t[0],o=t[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY||window.pageYOffset,t="navbar-scrolled";0===e?t="":e<=150&&(t="navbar-scroll-start"),o(t)}))})),Object(n.jsxs)("div",{className:c+" navbar",children:[Object(n.jsx)("a",{className:"navigator pr-4",href:"#contacts",children:"Contacts"}),Object(n.jsx)("a",{className:"navigator pr-4",href:"#projects",children:"Projects"}),Object(n.jsx)("a",{className:"navigator pr-4",href:"#aboutMe",children:"About me"})]})}),b=c(11),f=c(12),h=function(){var e=[{icon:f.e,link:"https://medium.com/@iLTeoooD"},{icon:f.d,link:"https://www.linkedin.com/in/ilteoood/"},{icon:f.b,link:"https://github.com/ilteoood/"},{icon:f.f,link:"https://telegram.me/iLTeoooD"},{icon:f.a,link:"https://facebook.com/iLTeoooD"},{icon:f.c,link:"https://www.instagram.com/_ilteoood"}];return Object(n.jsx)("div",{className:"flex place-content-center py-10 space-x-6 sm:space-x-10 md:space-x-16 xl:space-x-20",id:"contacts",children:e.map((function(e,t){var c=e.icon,s=e.link;return Object(n.jsx)("a",{className:"icon",href:s,children:Object(n.jsx)(b.a,{icon:c})},t)}))})},x=(c(49),function(e){var t=e.title,c=e.sectionId,s=[{content:t}];return Object(n.jsx)("div",{className:"section-title-padding",id:c,children:Object(n.jsx)(d,{content:s,cssClass:"section-title-typewriter"})})}),O=function(){return Object(n.jsxs)("div",{className:"padding-content",children:[Object(n.jsx)(x,{title:"About me",sectionId:"aboutMe"}),Object(n.jsxs)("div",{className:"flex flex-col text-color text-lg",children:[Object(n.jsx)("div",{className:"py-1",children:"Since I remember it, computers are an integral part of my life: first as a leisure tool, then as a learning tool."}),Object(n.jsx)("div",{className:"py-1",children:"I have been studying programming since I was 12 years old: I started as a self-taught and deepened my knowledge during my studies."}),Object(n.jsxs)("div",{className:"py-1",children:["I'm graduated at",Object(n.jsx)("a",{href:"https://www.unimi.it/",children:" Universit\xe0 degli Studi di Milano"}),", on October 2016."]}),Object(n.jsxs)("div",{className:"py-1",children:["Currently I'm working for",Object(n.jsx)("a",{href:"https://www.gft.com/it/it/index/societa/chi-siamo/",children:" GFT Italia Srl"}),"."]}),Object(n.jsxs)("div",{className:"py-1",children:["Want to know more? Keep ",Object(n.jsx)("a",{href:"#contacts",children:"in touch"})," or take a look to my",Object(n.jsx)("a",{href:"https://github.com/ilteoood/resume/raw/main/main.pdf",children:" resume"}),"!"]})]})]})},g=c(33),v=c(58),w=c(32),N=c(56),y=c(57),k=c(31),T=c(55),I=function(e,t){var c=new Date(e.updated_at);return new Date(t.updated_at).getTime()-c.getTime()},C=["portfolio","resume","ilteoood.github.io","ilteoood"];var S=c(18),_=(c(50),function(e){var t=e.repository;return Object(n.jsxs)("div",{className:"flex flex-col text-color",children:[Object(n.jsx)("a",{className:"mr-4",href:t.html_url,children:t.name}),Object(n.jsx)("p",{className:"text-lg italic",children:t.description}),Object(n.jsxs)("div",{className:"flex flex-row",children:[t.forks_count,Object(n.jsx)(b.a,{className:"project-card-icon",icon:S.a}),t.stargazers_count,Object(n.jsx)(b.a,{className:"project-card-icon",icon:S.d}),t.watchers_count,Object(n.jsx)(b.a,{className:"project-card-icon",icon:S.c}),t.open_issues_count,Object(n.jsx)(b.a,{className:"project-card-icon",icon:S.b})]})]})}),D=(c(51),function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],o=t[1],i=Object(s.useState)(5),r=Object(m.a)(i,2),a=r[0],l=r[1];return Object(s.useEffect)((function(){Object(T.a)("https://api.github.com/users/ilteoood/repos",{selector:function(e){return e.json()}}).pipe(Object(v.a)((function(e){return e})),Object(w.a)((function(e){return!e.fork})),Object(w.a)((function(e){return!e.archived})),Object(w.a)((function(e){return!C.includes(e.name)})),Object(N.a)((function(e,t){return[].concat(Object(g.a)(e),[t])}),[]),Object(y.a)(),Object(k.a)((function(e){return e.sort(I)}))).subscribe((function(e){return o(e)}))}),[]),Object(n.jsxs)("div",{className:"padding-content",children:[Object(n.jsx)(x,{title:"Projects",sectionId:"projects"}),Object(n.jsx)(L,{repoToShow:a,repositories:c}),a<c.length&&Object(n.jsx)(M,{onClick:function(){return l(2*a)}})]})}),L=function(e){var t=e.repoToShow,c=e.repositories;return Object(n.jsx)("div",{className:"flex flex-wrap",children:c.slice(0,t).map((function(e){return Object(n.jsx)("div",{className:"mr-5 md:mr-10 xl:mr-14 mt-5",children:Object(n.jsx)(_,{repository:e})},e.name)}))})},M=function(e){var t=e.onClick;return Object(n.jsx)("div",{className:"flex place-content-center",children:Object(n.jsx)("div",{className:"projects-pagination-button text-color",onClick:t,children:"Show more"})})};var A=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p,{}),Object(n.jsx)(u,{}),Object(n.jsx)(a,{}),Object(n.jsx)(O,{}),Object(n.jsx)(D,{}),Object(n.jsx)(h,{})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),o(e),i(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);