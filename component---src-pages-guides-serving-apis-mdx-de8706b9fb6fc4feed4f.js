(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("NmYn"),r=a.n(o),i=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,l=e.tabs,o=void 0===l?[]:l;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,o=l.baseUrl,r=l.subDirectory,s=o+"/edit/"+l.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),v=a("dI71"),g=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===l,s=new RegExp(l+"/?(#.*)?$"),c=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[g.selectedItem]=o,t),g.listItem)},Object(p.b)(i.Link,{className:g.link,to:""+c},e))}));return Object(p.b)("div",{className:g.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:g.list},o))))))},t}(l.a.Component),w=a("MjG9"),T=a("CzIb"),y=a("Asxa"),N=a("OIbQ"),P=a.n(N),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:P.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=b.tabs,O=b.title,v=b.theme,g=b.description,y=b.keywords,N=b.date,P=Object(T.a)().interiorTheme,k=Object(i.useStaticQuery)("2456312558").site.pathPrefix,A=k?n.pathname.replace(k,""):n.pathname,E=m?A.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",C=v||P;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:O,pageDescription:g,pageKeywords:y,titleType:u},Object(p.b)(h,{title:l?Object(p.b)(l,null):O,label:"label",tabs:m,theme:C}),m&&Object(p.b)(f,{title:O,slug:A,tabs:m,currentTab:E}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(I,{date:N})),Object(p.b)(j.a,{pageContext:t,location:n,slug:A,tabs:m,currentTab:E}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},OoBh:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),l=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),i=(a("qKvR"),["components"]),s={},c={_frontmatter:s},b=r.a;function d(e){var t=e.components,a=Object(l.a)(e,i);return Object(o.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Problem"),Object(o.b)("p",null,"While building cloud applications you often discover that logic or data can and should be exposed as an API to be used by other applications or services. This is part of micro services architecture and engineering. Cloud services that would facilitate development and evolution of these service APIs include service API gateways that can limit or control API access, securing ingresses to services, in addition to ability to meter and charge for services."),Object(o.b)("h3",null,"Why is this Important for Hybrid Cloud Developers?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Every developer needs to expose APIs. Open your services to the world. Each service might have multiple APIs that can be exposed. These APIs could be done to allow integration for external parties, or to allow integration with other applications that the same developer is implementing.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Serverless means pay only for what you use. The ideal situation for any developer is to pay for the exact resource consumed and be able to access unlimited resources as needed when scaling is a requirement. Open Serverless environment, such as those based on Knative, are a promising step in that direction. And because it’s open it does not lock in and can be adapted to any cloud.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Advanced API features now available as a service. When a developer exposes an API there are immediate concerns that she must address. For instance, how to meter the API, how to throttle and deal with rapid scale, how to secure all endpoints, and how to allow retries and other “corner cases”. Many of these concerns are common across APIs and typically can be dealt with by common services by the cloud provider. For instance, an API Gateway. Is this a valid approach in a Hybrid cloud environment?"))),Object(o.b)("h2",null,"Solution Sketch"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[solution or solution sketche(s)]")),Object(o.b)("h3",null,"Constraints / Limitations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[limits to approach]")),Object(o.b)("h3",null,"Key OSS Techs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[important OSS technologies used]")),Object(o.b)("h3",null,"Example Cloud(s)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[at least two public clouds as examples]"),Object(o.b)("li",{parentName:"ul"},"[list services and features used for solutions]")),Object(o.b)("h2",null,"Where to Find More?"),Object(o.b)("h3",null,"Blogs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[list of related videos and articles]")),Object(o.b)("h3",null,"Videos"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[list of related videos]")),Object(o.b)("h3",null,"Tutorials"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[list of related tutorials]")))}d.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-guides-serving-apis-mdx-de8706b9fb6fc4feed4f.js.map