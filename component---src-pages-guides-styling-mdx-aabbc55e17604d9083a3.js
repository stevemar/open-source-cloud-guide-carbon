(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),l=a.n(r),s=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),m=a.n(d),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,l=o.subDirectory,i=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},x=a("FCXl"),O=a("dI71"),y=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===o,i=new RegExp(o+"/?(#.*)?$"),c=n.replace(i,a);return Object(p.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(p.b)(s.Link,{className:y.link,to:""+c},e))}));return Object(p.b)("div",{className:y.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:y.list},r))))))},t}(o.a.Component),f=a("MjG9"),v=a("CzIb"),T=a("Asxa"),N=a("OIbQ"),k=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:k.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=b.tabs,g=b.title,O=b.theme,y=b.description,T=b.keywords,N=b.date,k=Object(v.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",H=O||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:y,pageKeywords:T,titleType:d},Object(p.b)(h,{title:o?Object(p.b)(o,null):g,label:"label",tabs:m,theme:H}),m&&Object(p.b)(w,{title:g,slug:I,tabs:m,currentTab:E}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u}),Object(p.b)(P,{date:N})),Object(p.b)(x.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},s9d4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),s=(a("qKvR"),["components"]),i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},b=c("PageDescription"),u=c("InlineNotification"),d={_frontmatter:i},m=l.a;function p(e){var t=e.components,a=Object(o.a)(e,s);return Object(r.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{mdxType:"PageDescription"},Object(r.b)("p",null,"The carbon theme uses Sass to take advantage of the carbon-components styles and\nvariables while authoring novel components. In addition, we use css modules to\nensure we don’t collide with devs and make sure our components are portable and\nshadowable.")),Object(r.b)("h2",null,"Local Styles"),Object(r.b)("p",null,"For your application’s local styles, you can just import your style sheet\n",Object(r.b)("a",{parentName:"p",href:"https://www.gatsbyjs.org/docs/global-css/#adding-global-styles-without-a-layout-component"},"directly into a ",Object(r.b)("inlineCode",{parentName:"a"},"gatsby-browser.js")),"\nfile at the root of your project."),Object(r.b)("p",null,"You can also use sass modules like we do in the theme, this would make it easier\nfor you to share your component with other theme consumers down the line."),Object(r.b)("p",null,"Every Sass file in your project automatically has access to the the following\ncarbon resources:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"colors – ",Object(r.b)("inlineCode",{parentName:"li"},"background: carbon--gray-10;")),Object(r.b)("li",{parentName:"ul"},"spacing - ",Object(r.b)("inlineCode",{parentName:"li"},"margin: $spacing-05;")),Object(r.b)("li",{parentName:"ul"},"theme-tokens - ",Object(r.b)("inlineCode",{parentName:"li"},"color: $text-01;")),Object(r.b)("li",{parentName:"ul"},"motion -\n",Object(r.b)("inlineCode",{parentName:"li"},"transition: all $duration--moderate-01 motion(entrance, productive);")),Object(r.b)("li",{parentName:"ul"},"typography - ",Object(r.b)("inlineCode",{parentName:"li"},"@include carbon--type-style('body-long-01');"))),Object(r.b)("h2",null,"Targeting theme components"),Object(r.b)(u,{mdxType:"InlineNotification"},Object(r.b)("p",null,"We reserve the right to change classes between major releases. Use this strategy\nat your own risk.")),Object(r.b)("p",null,"Theme component classes have a hash of their styles tacked on to the end. This\nis both to prevent collisions, and also to prevent sneaky breaking changes to\nyour styles if we update the class underneath you and you were relying on our\nstyles."),Object(r.b)("p",null,"However, you can target the classes without the hash by using a\n",Object(r.b)("a",{parentName:"p",href:"https://css-tricks.com/almanac/selectors/a/attribute/"},"partial selector"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss"},"[class*='Banner-module--column'] {\n  color: $text-04;\n}\n")),Object(r.b)("p",null,"This will match the class that starts with ",Object(r.b)("inlineCode",{parentName:"p"},"Banner-module--column")," and would be\nimmune to any changes to the hash. We may at some point remove the hash if this\nbecomes an issue."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-styling-mdx-aabbc55e17604d9083a3.js.map