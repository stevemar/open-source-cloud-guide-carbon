(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("NmYn"),r=n.n(o),c=n("Wbzz"),l=n("Xrax"),s=n("k4MR"),u=n("TSYQ"),b=n.n(u),d=n("QH2O"),m=n.n(d),p=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},n)))))},N=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,o=i.baseUrl,r=i.subDirectory,l=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+N.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:N.link,href:l},"Edit this page on GitHub"))):null},O=n("FCXl"),f=n("dI71"),x=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),o=n===i,l=new RegExp(i+"/?(#.*)?$"),s=a.replace(l,n);return Object(p.b)("li",{key:e,className:b()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(p.b)(c.Link,{className:x.link,to:""+s},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:x.list},o))))))},t}(i.a.Component),h=n("MjG9"),T=n("CzIb"),I=n("Asxa"),q=n("OIbQ"),y=n.n(q),w=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(I.c,{className:y.a.row},Object(p.b)(I.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,o=t.frontmatter,u=void 0===o?{}:o,b=t.relativePagePath,d=t.titleType,m=u.tabs,N=u.title,f=u.theme,x=u.description,I=u.keywords,q=u.date,y=Object(T.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=k?a.pathname.replace(k,""):a.pathname,C=m?P.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",D=f||y;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:D,pageTitle:N,pageDescription:x,pageKeywords:I,titleType:d},Object(p.b)(g,{title:i?Object(p.b)(i,null):N,label:"label",tabs:m,theme:D}),m&&Object(p.b)(v,{title:N,slug:P,tabs:m,currentTab:C}),Object(p.b)(h.a,{padded:!0},n,Object(p.b)(j,{relativePagePath:b}),Object(p.b)(w,{date:q})),Object(p.b)(O.a,{pageContext:t,location:a,slug:P,tabs:m,currentTab:C}),Object(p.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},IHbj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return g}));var a=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("013z"),c=(n("qKvR"),["components"]),l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},u=s("PageDescription"),b=s("Title"),d=s("InlineNotification"),m={_frontmatter:l},p=r.a;function g(e){var t=e.components,n=Object(i.a)(e,c);return Object(o.b)(p,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(u,{mdxType:"PageDescription"},Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<InlineNotification>")," component is used to communicate important\ninformation to a user.")),Object(o.b)("h2",null,"Example"),Object(o.b)(b,{mdxType:"Title"},"Info"),Object(o.b)(d,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Lorem ipsum:")," dolor sit amet,\n",Object(o.b)("a",{parentName:"p",href:"/components/InlineNotification"},"consectetur adipiscing")," elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.")),Object(o.b)(b,{mdxType:"Title"},"Error"),Object(o.b)(d,{kind:"error",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Error:")," dolor sit amet,\n",Object(o.b)("a",{parentName:"p",href:"/components/InlineNotification"},"consectetur adipiscing")," elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.")),Object(o.b)(b,{mdxType:"Title"},"Success"),Object(o.b)(d,{kind:"success",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Success:")," dolor sit amet,\n",Object(o.b)("a",{parentName:"p",href:"/components/InlineNotification"},"consectetur adipiscing")," elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.")),Object(o.b)(b,{mdxType:"Title"},"Warning"),Object(o.b)(d,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning:")," dolor sit amet,\n",Object(o.b)("a",{parentName:"p",href:"/components/InlineNotification"},"consectetur adipiscing")," elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.")),Object(o.b)("h2",null,"Code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/InlineNotification/InlineNotification.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/InlineNotification",path:"components/InlineNotification/InlineNotification.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/InlineNotification"},'// Info\n\n<InlineNotification>\n\n**Lorem ipsum:** dolor sit amet,\n[consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.\n\n</InlineNotification>\n\n// Error\n\n<InlineNotification kind="error">\n\n**Error:** dolor sit amet,\n[consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.\n\n</InlineNotification>\n\n// Success\n\n<InlineNotification kind="success">\n\n**Success:** dolor sit amet,\n[consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.\n\n</InlineNotification>\n\n// Warning\n\n<InlineNotification kind="warning">\n\n**Warning:** dolor sit amet,\n[consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio\narcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar\npellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim\ndui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit\nnon vel quam.\n\n</InlineNotification>\n')),Object(o.b)("h3",null,"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"property"),Object(o.b)("th",{parentName:"tr",align:null},"propType"),Object(o.b)("th",{parentName:"tr",align:null},"required"),Object(o.b)("th",{parentName:"tr",align:null},"default"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"children"),Object(o.b)("td",{parentName:"tr",align:null},"node"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Pass in the children that will be rendered within the notification")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"className"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Specify an optional className to be applied to the container node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"kind"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"yes"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"info")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"error"),", ",Object(o.b)("inlineCode",{parentName:"td"},"info"),", ",Object(o.b)("inlineCode",{parentName:"td"},"success"),", ",Object(o.b)("inlineCode",{parentName:"td"},"warning"))))))}g.isMDXComponent=!0},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-inline-notification-mdx-996be87de0bb95c189e9.js.map