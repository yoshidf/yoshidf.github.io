(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(e,t,a){"use strict";a.r(t);a(149);var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=(a(140),a(181)),s=a(156),c=a(139),m=a(146),p=(a(165),a(147)),d=a(151),u=a(148),f=(a(166),function(e){var t=e.className,a=e.name;e.level;return o.a.createElement("div",{className:t},o.a.createElement("label",{htmlFor:a+"-bar"},a),o.a.createElement("div",{id:a+"-bar",className:"skill__bar"},o.a.createElement("div",{className:"skill__level"})))});f.displaName="SkillBar";var g=Object(c.default)(f).withConfig({displayName:"skill-bar",componentId:"r0jkw1-0"})([".skill__bar{height:10px;background-color:lightgrey;padding:1px;}.skill__level{background-color:#25303B;width:","%;height:8px;}"],function(e){return e.level||0}),h=a(153),b=a.n(h);function v(){var e=b()(["\n    .timeline__item div.inner {\n      width: 40%;\n      margin: 5px 0 0 0;\n    }\n\n    .timeline__item div.inner h2:after {\n      top: 20px;\n      left: unset;\n      right: -5px;\n    }\n    .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return v=function(){return e},e}var x=[{company:"Lendico",begin:{month:"apr",year:"2018"},duration:null,occupation:"Desenvolvedor frontend",description:"Integro o time de Frontend responsável pelo desenvolvimento e a manutenção da plataforma online de empréstimos."},{company:"Anapro",begin:{month:"dec",year:"2016"},duration:"1 ano e 5 meses",occupation:"Desenvolvedor",description:"Desenvolvimento e manutenção, corretiva e preventiva, de aplicações web para o mercado imobiliário."},{company:"Anapro",begin:{month:"set",year:"2012"},duration:"4 anos e 3 meses",occupation:"Tecnico de suporte",description:"Responsável pela implantação e parametrização do sistema, treinamentos e suporte ao cliente. Atuando também presencialmente em lançamentos imobiliários garantindo o sucesso e bom uso da ferramenta."}],y=Object(c.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("h1",null,"Experiências"),x.map(function(e){return o.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},o.a.createElement("div",{className:"inner"},o.a.createElement("span",{className:"timeline__date"},o.a.createElement("span",{className:"timeline__month"},e.begin.month),o.a.createElement("span",{className:"timeline__year"},e.begin.year)),o.a.createElement("h2",{className:"timeline__title"},e.occupation," na ",e.company," ",o.a.createElement("br",null),o.a.createElement("small",{className:"timeline__title--small"},"(",e.duration||"até o momento",")")),o.a.createElement("p",null,e.description)))}))}).withConfig({displayName:"timeline",componentId:"sc-1jstdm-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:1px;height:calc(100% - 70px);background:#25303B;}.timeline__item{width:100%;margin:0 0 20px 0;position:relative;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:6px;border:1px solid #25303B;}.timeline__date{display:block;width:60px;padding:10px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:12px;font-weight:900;text-transform:uppercase;background:#25303B;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';position:absolute;top:-5px;left:40px;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n+2) div.inner{float:right;}.timeline__title{background:#25303B;}.timeline__title:after{background:#25303B;}.timeline__title--small{font-size:10px;}",""],function(e){return Object(l.config)().media.sm(v())}),w=a(242),E=a.n(w),_=(a(182),a(244)),k=a.n(_),N=a(245),C=a.n(N),I=Object(c.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}).withConfig({displayName:"loader",componentId:"sc-12ofosi-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),z=a(143),j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={repos:[],status:"loading"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=k()(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()("https://api.github.com/users/santosfrancisco/repos?type=owner&sort=updated&per_page=5&page=1");case 2:(t=e.sent).json&&t.json.length&&this.setState({repos:t.json,status:"ready"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.state.status;return o.a.createElement("div",{className:this.props.className},o.a.createElement(z.d,{type:"h2"},"Últimos repositórios no Github"),"loading"===e&&o.a.createElement("div",{className:"repositories__loader"},o.a.createElement(I,null)),"ready"===e&&this.state.repos&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"repositories__content"},this.state.repos.map(function(e){return o.a.createElement(o.a.Fragment,{key:e.name},o.a.createElement("div",{className:"repositories__repo"},o.a.createElement("a",{href:e.html_url},o.a.createElement("strong",null,e.name)),o.a.createElement("div",null,e.description),o.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),o.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),o.a.createElement("hr",null))}))))},t}(o.a.Component),q=Object(c.default)(j).withConfig({displayName:"repositories",componentId:"sc-3kfpo3-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-date{color:#bbb;font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;}.repositories__loader{display:flex;}hr{margin-top:16px;}"]),L={firstName:"Francisco",lastName:"Santos",occupation:"Frontend Developer",bio:"",social:{twitter:"https://twitter.com/_franciscodf",linkedin:"https://www.linkedin.com/in/santos-francisco",github:"https://github.com/santosfrancisco",email:"yoshi.df@gmail.com"},skills:[{name:"HTML",level:70},{name:"CSS",level:60},{name:"Javascript",level:50},{name:"NodeJs",level:40},{name:"React",level:60},{name:"Git",level:70}]},S=c.default.hr.withConfig({displayName:"pages__Separator",componentId:"sc-10w55l2-0"})(["margin-top:24px;margin-bottom:16px;"]),T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e={title:"Hello! I'm Francisco!",cover:{publicURL:"https://images.unsplash.com/photo-1533892743580-890e5b193113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}};return o.a.createElement(m.a,{location:this.props.location},o.a.createElement(u.a,{title:e.title,path:"/",cover:e.cover&&e.cover.publicURL}),o.a.createElement(d.a,{heroImg:e.cover&&e.cover.publicURL,title:e.title}),o.a.createElement(p.a,{className:this.props.className},o.a.createElement(l.Container,{className:"page-content",fluid:!0},o.a.createElement(l.Row,null,o.a.createElement(l.Col,{xs:4,className:"avatar"},o.a.createElement("img",{className:"avatar__image",src:"https://avatars1.githubusercontent.com/u/15852005?s=460&v=4",alt:""}),o.a.createElement("div",{className:"social"},L.social.github&&o.a.createElement("a",{className:"social-link github",href:L.social.github},o.a.createElement(s.b,{className:"social-icon",size:"32"})),L.social.linkedin&&o.a.createElement("a",{className:"social-link linkedin",href:L.social.linkedin},o.a.createElement(s.c,{className:"social-icon",size:"32"})),L.social.twitter&&o.a.createElement("a",{className:"social-link twitter",href:L.social.twitter},o.a.createElement(s.d,{className:"social-icon",size:"32"})),L.social.email&&o.a.createElement("a",{className:"social-link email",href:"mailto:"+L.social.email},o.a.createElement(s.a,{className:"social-icon",size:"32"}))))),o.a.createElement(l.Row,null,o.a.createElement(l.Col,{xs:4,sm:4},o.a.createElement("div",null,o.a.createElement(z.d,null,"Sobre"),o.a.createElement(z.c,null,"Desenvolvedor, apaixonado pelo que faço. Sempre interessado em como os sites foram feitos, comecei a estudar HTML por hobby."),o.a.createElement(z.c,null,"Em 2012 comecei a trabalhar como técnico de suporte e me aproximei dos desenvolvedores. Em 2015, comecei a estudar C# e comecei a contribuir com a equipe dando manutenção em uma aplicação em C# e .NET."),o.a.createElement(z.c,null,"Atualmente atuo como desenvolvedor frontend e trabalho principalmente com ",o.a.createElement("strong",null,"Javascript, NodeJS e React.")))),o.a.createElement(l.Col,{xs:4,sm:4},o.a.createElement("div",null,o.a.createElement(z.d,null,"Skills"),L.skills.map(function(e){return o.a.createElement(g,{key:e.name,name:e.name,level:e.level})})))),o.a.createElement(S,null),o.a.createElement(y,null),o.a.createElement(S,null),o.a.createElement(q,null))),!1)},t}(o.a.Component);t.default=Object(c.default)(T).withConfig({displayName:"pages",componentId:"sc-10w55l2-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:200px;border-radius:100px;margin:0 auto;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}"])},140:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(141),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(144),m=a.n(c);a.d(t,"PageRenderer",function(){return m.a});var p=a(28);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),u=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,t){e.exports={siteTitle:"Francisco Santos",siteDescription:"👋 Hey I'm Francisco!",authorName:"Francisco Santos",twitterUsername:"_franciscodf",authorAvatar:"/images/avatar.jpeg",multilangPosts:!0,authorDescription:"\n  Hi! I'm Francisco! Developer and passionate about what I do.\n  ",siteUrl:"https://santosfrancisco.github.io/",disqusSiteUrl:"http://www.devchico.com/",pathPrefix:"/",siteCover:"/images/cover.jpeg",googleAnalyticsId:"UA-47305515-4",background_color:"#ffffff",theme_color:"#222222",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",postsPerPage:6,disqusShortname:"yoshidf",headerLinks:[{label:"Home",url:"/"},{label:"Blog",url:"/blog"}],websiteHost:{name:"GitHub",url:"https://github.com"},footerLinks:[["Explore",{label:"Blog",url:"/blog"}],["Follow the author",{label:"Github",url:"https://github.com/yoshidf",iconClassName:"fa fa-github"},{label:"Website",url:"http://www.devchico.com",iconClassName:"fa fa-globe"},{label:"Twitter",url:"https://twitter.com/_franciscodf",iconClassName:"fa fa-twitter"}]]}},143:function(e,t,a){"use strict";var n=a(153),r=a.n(n),i=a(0),o=a.n(i),l=a(139),s=a(140);function c(){var e=r()(['\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  color: #222222cc;\n  background-color: #e8e8e8;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n']);return c=function(){return e},e}var m=Object(l.createGlobalStyle)(c()),p=Object(l.default)(s.Link).withConfig({displayName:"commons__StyledLink",componentId:"sc-1ft4tzs-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),d=l.default.p.withConfig({displayName:"commons__Text",componentId:"sc-1ft4tzs-1"})(["line-height:1.6;margin:1em 0 0 0;"]),u=Object(l.default)(function(e){var t=e.className,a=e.type,n=void 0===a?"h1":a,r=e.children,i=n;return o.a.createElement(i,{className:t},r)}).withConfig({displayName:"commons__Title",componentId:"sc-1ft4tzs-2"})(["margin-bottom:24px;"]);a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p}),a.d(t,"c",function(){return d}),a.d(t,"d",function(){return u})},144:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},145:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(46),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=a(140),s=a(139),c=a(156),m=s.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-9awaiq-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:rgba(32,35,42,0.85);"]),p=s.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"sc-9awaiq-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:1260px;z-index:1000;justify-content:flex-end;overflow-x:auto;overflow-y:hidden;"]),d=Object(s.default)(l.Link).withConfig({displayName:"header__HeaderLink",componentId:"sc-9awaiq-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),u=Object(s.default)(function(e){var t=e.className;return o.a.createElement("a",{className:t,href:"https://github.com/santosfrancisco",target:"_blank"},o.a.createElement(c.b,{size:32}))}).withConfig({displayName:"header__GithubLink",componentId:"sc-9awaiq-3"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.headerLinks;return o.a.createElement(m,null,o.a.createElement(p,null,e.map(function(e,t){return o.a.createElement(d,{to:e.url,key:"header-link-"+t},e.label)}),o.a.createElement(u,null)))},t}(o.a.Component),g=(a(149),a(158),s.default.footer.withConfig({displayName:"footer__FooterWrapper",componentId:"ercsdv-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:rgba(32,35,42,0.85);color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-right:1em;}}& a{color:#ffffff;font-weight:bold;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{margin:0 0 1rem;}.footer-item{padding:0.25rem 0;color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,a=(e.footerLinks,e.websiteHost);return o.a.createElement(g,null,o.a.createElement("nav",null,o.a.createElement("div",{className:"footer-col"},o.a.createElement("h5",{className:"footer-title"},t," © 2018"),o.a.createElement("p",{className:"footer-item-text"},"Built with"," ",o.a.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),o.a.createElement("p",{className:"footer-item-text"},"Theme using"," ",o.a.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),o.a.createElement("p",{className:"footer-item-text"},"Hosted with ",o.a.createElement("span",{className:"footer-heart"},"❤")," by"," ",o.a.createElement("a",{className:"footer-link",href:a.url},a.name),"."))))},t}(o.a.Component),b=a(142),v=a.n(b),x=(a(159),a(143)),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(i.Fragment,null,o.a.createElement(x.a,null),o.a.createElement(f,{headerLinks:v.a.headerLinks}),o.a.createElement("div",null,e),o.a.createElement(h,{siteConfig:v.a}))},t}(o.a.Component);a.d(t,"a",function(){return y})},147:function(e,t,a){"use strict";var n=a(139).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"ypg1qo-0"})(["position:relative;border-radius:3px;width:80%;max-width:900px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);@media (max-width:780px){width:90%;padding:25px;}"]);a.d(t,"a",function(){return n})},148:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=a(160),s=a.n(l),c=a(140),m=a(142),p=a.n(m),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,a=e.path,n=void 0===a?"":a,r=e.lang,i=void 0===r?"en":r,l=this.props.title?this.props.title+" | "+p.a.siteTitle:p.a.siteTitle,m=p.a.siteUrl.substring(0,p.a.siteUrl.length-1),d=""+m+(this.props.imageFb||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),u=""+m+(this.props.imageTw||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),f=this.props.description||p.a.siteDescription;return o.a.createElement(s.a,{title:l},o.a.createElement("html",{lang:i}),o.a.createElement("meta",{name:"description",content:f}),o.a.createElement("meta",{property:"og:url",content:m+Object(c.withPrefix)(n)}),o.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),o.a.createElement("meta",{property:"og:title",content:l}),o.a.createElement("meta",{property:"og:description",content:f}),o.a.createElement("meta",{property:"og:image",content:d}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:p.a.twitterUsername}),o.a.createElement("meta",{name:"twitter:title",content:l}),o.a.createElement("meta",{name:"twitter:description",content:f}),o.a.createElement("meta",{name:"twitter:image",content:u}))},t}(o.a.Component);a.d(t,"a",function(){return d})},150:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=a(140),s=a(139),c=s.default.div.withConfig({displayName:"tag-list__ListContainer",componentId:"sc-7a03eo-0"})(["display:inline;margin:0 0.5rem 0 0;color:#7f7e7e;"]),m=Object(s.default)(l.Link).withConfig({displayName:"tag-list__TagListItem",componentId:"sc-7a03eo-1"})(["margin-left:0.3rem;color:#7f7e7e;&:hover{border-bottom:1px dotted #7f7e7e;}&:before{content:'#';}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,a=e.icon;return o.a.createElement(c,null,!0===a&&o.a.createElement(i.Fragment,null,"🏷 "),t.map(function(e,a){return o.a.createElement(i.Fragment,{key:"tag-list-"+a},o.a.createElement(m,{to:"tags/"+e},e),a<t.length-1?", ":"")}))},t}(o.a.Component);a.d(t,"a",function(){return p})},151:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=a(140),s=a(142),c=a.n(s),m=a(139),p=m.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"ge53dk-0"})(["position:relative;display:table;width:100%;height:350px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),d=m.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"ge53dk-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=m.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"ge53dk-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.heroImg||Object(l.withPrefix)(c.a.siteCover),t=this.props.title;return o.a.createElement(p,{style:{backgroundImage:'url("'+e+'")'}},o.a.createElement(d,null,o.a.createElement(u,null,t)))},t}(o.a.Component);a.d(t,"a",function(){return f})},165:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=a(139),s=a(150),c=l.default.header.withConfig({displayName:"content-header__Header",componentId:"sc-1jy0610-0"})(["margin-bottom:2rem;color:#7f7e7e;"]),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,a=e.tags;return o.a.createElement(c,null,t&&o.a.createElement("time",null,t),Array.isArray(a)&&a.length>0&&o.a.createElement(i.Fragment,null,o.a.createElement("span",null," in"),o.a.createElement(s.a,{tags:a})))},t}(o.a.Component),p=l.default.div.withConfig({displayName:"content__ContentBody",componentId:"sc-1eqzw7i-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}&.anchor,&.gatsby-resp-image-link{border:none;}}& > blockquote{box-sizing:border-box;margin:1.75em 0 1.75em -2.2em;padding:0 0 0 1.75em;border-left:0.4em solid rgba(32,35,42,0.85);}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;background:#2d2d2d;color:#ffffff;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:#022a4b;display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:.75em;border-left:.25em solid #ffa7c4;}& p > code.language-text,& li > code.language-text{background:rgba(255,229,100,0.2);color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.content,a=e.date,n=e.tags;return o.a.createElement("section",null,(n||a)&&o.a.createElement(m,{date:a,tags:n}),o.a.createElement(p,{dangerouslySetInnerHTML:{__html:t}}))},t}(o.a.Component);a.d(t,"a",function(){return d})},166:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=a(161),s=a.n(l),c=a(142),m=a.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=m.a.disqusShortname;if(!e)return null;var t={url:""+m.a.disqusSiteUrl+this.props.slug,title:this.props.title};return o.a.createElement(s.a.DiscussionEmbed,{shortname:e,config:t})},t}(o.a.Component);a.d(t,"a",function(){return p})}}]);
//# sourceMappingURL=component---src-pages-index-js-4496317b7dcf5948e719.js.map