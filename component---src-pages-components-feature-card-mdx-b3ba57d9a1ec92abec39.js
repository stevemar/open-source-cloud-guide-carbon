(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=a("NmYn"),l=a.n(r),b=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),o=a("TSYQ"),d=a.n(o),s=a("QH2O"),m=a.n(s),p=a("qKvR"),g=function(e){var t,a=e.title,A=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===A,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,A=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||A,r=n.baseUrl,l=n.subDirectory,i=r+"/edit/"+n.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+u.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),O=a("dI71"),h=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,n=A.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===n,i=new RegExp(n+"/?(#.*)?$"),c=A.replace(i,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+c},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},r))))))},t}(n.a.Component),E=a("MjG9"),w=a("CzIb"),f=a("Asxa"),B=a("OIbQ"),Q=a.n(B),C=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(f.c,{className:Q.a.row},Object(p.b)(f.a,null,Object(p.b)("div",{className:Q.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,n=e.Title,r=t.frontmatter,o=void 0===r?{}:r,d=t.relativePagePath,s=t.titleType,m=o.tabs,u=o.title,O=o.theme,h=o.description,f=o.keywords,B=o.date,Q=Object(w.a)().interiorTheme,k=Object(b.useStaticQuery)("2456312558").site.pathPrefix,y=k?A.pathname.replace(k,""):A.pathname,T=m?y.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",v=O||Q;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:v,pageTitle:u,pageDescription:h,pageKeywords:f,titleType:s},Object(p.b)(g,{title:n?Object(p.b)(n,null):u,label:"label",tabs:m,theme:v}),m&&Object(p.b)(x,{title:u,slug:y,tabs:m,currentTab:T}),Object(p.b)(E.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(C,{date:B})),Object(p.b)(N.a,{pageContext:t,location:A,slug:y,tabs:m,currentTab:T}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},G7Ao:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var A=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),["components"]),i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},o=c("PageDescription"),d=c("FeatureCard"),s={_frontmatter:i},m=l.a;function p(e){var t=e.components,a=Object(n.a)(e,b);return Object(r.b)(m,Object(A.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o,{mdxType:"PageDescription"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<FeatureCard>")," component takes the same props as the ",Object(r.b)("inlineCode",{parentName:"p"},"<ResourceCard>"),"\ncomponent (except for ",Object(r.b)("inlineCode",{parentName:"p"},"aspectRatio"),", this is fixed at ",Object(r.b)("inlineCode",{parentName:"p"},"1:2")," for the card), this\ncomponent should not be used within ",Object(r.b)("inlineCode",{parentName:"p"},"<Row>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<Column>")," components as the grid\nis built in to the component already.")),Object(r.b)("h2",null,"Example"),Object(r.b)(d,{subTitle:"With subtitle",title:"Title",actionIcon:"arrowRight",href:"/",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/9oADAMBAAIQAxAAAAHXzbizxBgqP//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMREhQz/9oACAEBAAEFAth5Pggt2Ixty9P/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AY2kM//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMSMf/aAAgBAgEBPwHLrREhyf/EAB4QAAIBAwUAAAAAAAAAAAAAAAARIQECEBIxQVFx/9oACAEBAAY/AuCjersnfDUl3p//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMVGBkaH/2gAIAQEAAT8hbFFJ0iQmBSZ5JmvtIsinaOz1j//aAAwDAQACAAMAAAAQHw//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/EEoXewxS/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMYH/2gAIAQIBAT8QAxW5yOwz/8QAHRABAQABBAMAAAAAAAAAAAAAAREAIVFhcTFB8P/aAAgBAQABPxBdMkqCcmuBpJtY0SHbfEnqHkvOeDvI4UWIoqvvPlb5/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"demo image",title:"demo image",src:"/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg",srcSet:["/static/8006174cef307d9cf1a013bc15b3dd6c/69549/large-image.jpg 288w","/static/8006174cef307d9cf1a013bc15b3dd6c/473e3/large-image.jpg 576w","/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)(d,{title:"Title",actionIcon:"arrowRight",href:"/",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAaNb2wzDC5//xAAZEAADAAMAAAAAAAAAAAAAAAAAARECEDH/2gAIAQEAAQUChCC7klr/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRIf/aAAgBAwEBPwFRwo//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQIR/9oACAECAQE/AZs1/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQEAAT8hvNipwzsiuf/aAAwDAQACAAMAAAAQk+//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QS6IP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EFHLV//EABwQAQABBAMAAAAAAAAAAAAAAAERABAhUUFhgf/aAAgBAQABPxAZ6qfpw2AQSaoWJbBDb//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"smart work",title:"smart work",src:"/static/f5d54501d6e63ea19dacdbac3f5010e3/2e753/smart-work.jpg",srcSet:["/static/f5d54501d6e63ea19dacdbac3f5010e3/69549/smart-work.jpg 288w","/static/f5d54501d6e63ea19dacdbac3f5010e3/473e3/smart-work.jpg 576w","/static/f5d54501d6e63ea19dacdbac3f5010e3/2e753/smart-work.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("h2",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/FeatureCard/FeatureCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/FeatureCard",path:"components/FeatureCard/FeatureCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/FeatureCard"},'<FeatureCard\n  subTitle="With subtitle"\n  title="Title"\n  actionIcon="arrowRight"\n  href="/"\n  disabled\n  color="dark">\n\n![demo image](/images/large-image.jpg)\n\n</FeatureCard>\n')),Object(r.b)("h3",null,"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"property"),Object(r.b)("th",{parentName:"tr",align:null},"propType"),Object(r.b)("th",{parentName:"tr",align:null},"required"),Object(r.b)("th",{parentName:"tr",align:null},"default"),Object(r.b)("th",{parentName:"tr",align:null},"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"children"),Object(r.b)("td",{parentName:"tr",align:null},"node"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Use large image as child, will display above the card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"href"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Set url for card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"subTitle"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Smaller title")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"title"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Large title")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"actionIcon"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"launch")),Object(r.b)("td",{parentName:"tr",align:null},"Action icon, default is launch, options are ",Object(r.b)("inlineCode",{parentName:"td"},"Launch"),", ",Object(r.b)("inlineCode",{parentName:"td"},"ArrowRight"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Download"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Disabled"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Email"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"color"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"light"),Object(r.b)("td",{parentName:"tr",align:null},"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"dark")," for dark background")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"disabled"),Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"false"),Object(r.b)("td",{parentName:"tr",align:null},"Set for disabled card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"className"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Add custom class name")))))}p.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-feature-card-mdx-b3ba57d9a1ec92abec39.js.map