(this.webpackJsonpmyspace=this.webpackJsonpmyspace||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/logo.d5ab31ce.svg"},33:function(e,a,t){e.exports=t(71)},38:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},61:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(23),r=t.n(l),s=t(14),m=t(24),o=t(32),i=t(30),u=t(7),E=t(1),h=t(11),d=t.n(h),f=(t(38),function(e){return c.a.createElement("header",{className:"header"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{src:d.a,alt:"Logo Space X",className:"logo"})),c.a.createElement("nav",{className:"main-nav nav"},c.a.createElement("ul",{className:"list"},e.rockets.map((function(a,t){return c.a.createElement("li",{key:t,className:"item"},c.a.createElement(u.b,{to:"/rocket/".concat(a.replace(" ","_").toLowerCase()),onClick:function(){e.changeRocket(a)},className:"item-link"},a))})))),c.a.createElement("nav",{className:"secondary-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{exact:!0,to:"/",className:"item-link",activeClassName:"active"},"Home")),c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{to:"/calendar",className:"item-link",activeClassName:"active"},"Calendar")))))}),p=(t(43),function(e){var a=e.company;return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"home-title"},c.a.createElement("h1",null,c.a.createElement("img",{className:"logo-title",src:d.a,alt:a.name})),c.a.createElement("h2",{className:"subtitle"},a.summary)),c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"home_table home_table-manager"},c.a.createElement("caption",{className:"home_table-title"},"Manager"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CEO"),c.a.createElement("td",{className:"home_table-column"},a.ceo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"COO"),c.a.createElement("td",{className:"home_table-column"},a.coo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO"),c.a.createElement("td",{className:"home_table-column"},a.cto)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO PROPULSION"),c.a.createElement("td",{className:"home_table-column"},a.cto_propulsion)))),c.a.createElement("table",{className:"home_table home_table-location"},c.a.createElement("caption",{className:"home_table-title"},"Location"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"State"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.state)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"City"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.city)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"Address"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.address)))),c.a.createElement("video",{className:"responsive-video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,width:"100%",height:"100%",preload:"auto",src:"./video/mission.mp4"}))))}),N=(t(44),{"Falcon 1":"moon","Falcon 9":"earth","Falcon Heavy":"mars",other:"space"}),b={"Falcon 1":"falcon-1","Falcon 9":"falcon-9","Falcon Heavy":"falcon-heavy",Starship:"starship"},v={falcon_1:"Falcon 1",falcon_9:"Falcon 9",falcon_heavy:"Falcon Heavy",starship:"Starship"},k=function(e){var a=e.rocketName,t=v.hasOwnProperty(a)?v[a]:null;return window.innerWidth>576?c.a.createElement("section",{className:"main"},c.a.createElement("h1",{className:"title"},t),c.a.createElement("div",{className:"video-container"},c.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:"../video/".concat(N.hasOwnProperty(t)?N[t]:N.other,".mp4")}))):c.a.createElement("section",{className:"main"},c.a.createElement("h1",{className:"title"},t),c.a.createElement("div",{className:"video-container"},c.a.createElement("img",{src:"../img/".concat(b[t],".png"),alt:"rocket",className:"rocket-img"})))},g=t(9),y=(t(45),t(31)),O=t(8),_=t.n(O),w=t(13),j=function e(){var a=this;Object(s.a)(this,e),this.startUrl="https://api.spacexdata.com/v4/",this.getData=function(){var e=Object(w.a)(_.a.mark((function e(a){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:if((t=e.sent).ok){e.next=7;break}throw new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status));case 7:return e.next=9,t.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getRocket=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getData(a.startUrl+"rockets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getLaunches=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getData(a.startUrl+"launches/past");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getCompany=Object(w.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getData(a.startUrl+"company");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},F=new j,S=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){F.getLaunches().then((function(e){return c(Object(y.a)(e))}))}),[]);return{launches:t,getLaunch:function(e){return t.find((function(a){return a.id===e}))}}},x=(t(47),function(){return c.a.createElement("section",{className:"xv7irqbfnjm"},c.a.createElement("div",{className:"loadingio-spinner-eclipse-xv7irqbfnjm"},c.a.createElement("div",{className:"ldio-2pu35wpqvcc"},c.a.createElement("div",null))))}),C=function(){var e=S().launches,a=Object(n.useState)(!0),t=Object(g.a)(a,2),l=t[0],r=t[1];Object(n.useEffect)((function(){e.length>100&&r(!1)}),[e.length]);var s=Object(n.useState)(9),m=Object(g.a)(s,2),o=m[0],i=m[1],E=!(o>=e.length),h=e.slice(0,o);return l?c.a.createElement(x,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"calendar"},c.a.createElement("h1",{className:"title"},"Calendar SpaceX"),c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"calendar-list"},h.map((function(e){return c.a.createElement("li",{className:"calendar-item",key:e.id},c.a.createElement("div",{className:"launches"},c.a.createElement("div",{className:"launches-image"},c.a.createElement("img",{src:e.links.patch.small,alt:""})),c.a.createElement("div",{className:"launches-content"},c.a.createElement("h2",{className:"launches-title"},e.name)),c.a.createElement(u.b,{to:"/details/".concat(e.id),className:"button launches-details"},"Learn more")))}))),E?c.a.createElement("div",{className:"button button-more",onClick:function(){i(o+9)}},"Load more"):null)))},D=(t(48),t(26)),R=function(e){var a=Object(n.useState)(null),t=Object(g.a)(a,2),l=t[0],r=t[1],s=S().getLaunch;Object(n.useEffect)((function(){r(s(e.match.params.id))}),[s,e.match.params.id]);var m=Object(E.e)();return l?c.a.createElement("div",null,c.a.createElement("main",{className:"details"},c.a.createElement("h1",{className:"title"},l.name),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-image"},c.a.createElement("img",{src:l.links.patch.small,alt:""})),c.a.createElement("div",{className:"details-content"},c.a.createElement("p",{className:"details-description"},l.details))),c.a.createElement(D.a,{className:"details-youtube",videoId:l.links.youtube_id})),c.a.createElement("div",{onClick:m.goBack,className:"button button-back"},"Go back"))):c.a.createElement(x,null)},L=(t(61),t(29)),I=t.n(L),P={"Falcon 1":"falcon-1","Falcon 9":"falcon-9","Falcon Heavy":"falcon-heavy",Starship:"starship"},H={falcon_1:"Falcon 1",falcon_9:"Falcon 9",falcon_heavy:"Falcon Heavy",starship:"Starship"},T=function(e){var a=e.name,t=e.height,l=e.diameter,r=e.mass,s=e.payload_weights,m=e.description,o=e.rocketName,i=e.changeRocket,u=H.hasOwnProperty(o)?H[o]:null;return Object(n.useEffect)((function(){i(u)}),[u,i]),c.a.createElement("section",{className:"features"},c.a.createElement("h2",{className:"features-title"},a," ",c.a.createElement("br",null),"Overview"),c.a.createElement("div",{className:"overview"},c.a.createElement("table",{className:"table"},c.a.createElement("caption",{className:"table-title"},"Size"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"HEIGHT"),c.a.createElement("td",{className:"table-column"},t.meters," m / ",t.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"DIAMETER"),c.a.createElement("td",{className:"table-column"},l.meters," m / ",l.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"MASS"),c.a.createElement("td",{className:"table-column"},r.kg," kg / ",r.lb," lb")),s.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"table-column"},"PAYLOAD TO ",e.id.toUpperCase()),c.a.createElement("td",{className:"table-column"},e.kg," kg / ",e.lb," lb"))})))),c.a.createElement(I.a,{speed:14},c.a.createElement("img",{src:"../img/".concat(P[a],".png"),alt:"rocket",className:"rocket"})),c.a.createElement("article",null,c.a.createElement("h3",{className:"features-subtitle"},"DESCRIPTION"),c.a.createElement("p",{className:"features-text"},m))))},q=(t(69),function(e){var a=e.elon_twitter,t=e.flickr,n=e.twitter,l=e.website;return c.a.createElement("footer",{className:"footer"},c.a.createElement("img",{src:d.a,alt:"logo Space X",className:"logo"}),c.a.createElement("nav",{className:"footer-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Elon Musk Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Flickr")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:l,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Website")))),c.a.createElement("p",{className:"footer-text"},"For additional questions, contact",c.a.createElement("a",{className:"footer-link",href:"mailto:rideshare@spacex.com"},"rideshare@spacex.com")))}),A=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).fetchData=new j,e.state={rocket:"Falcon 1",rocketFeatures:null,rockets:[],companyData:null},e.changeRocket=function(a){e.setState({rocket:a},e.updateRocket)},e.updateCompany=function(){e.fetchData.getCompany().then((function(a){return e.setState({companyData:a})}))},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateRocket(),this.updateCompany()}},{key:"updateRocket",value:function(){var e=this;this.fetchData.getRocket().then((function(a){return e.setState({rockets:a.map((function(e){return e.name}))}),a})).then((function(a){return a.find((function(a){return a.name===e.state.rocket}))})).then((function(a){e.setState({rocketFeatures:a})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(u.a,{basename:"/space"},c.a.createElement(f,{rockets:this.state.rockets,changeRocket:this.changeRocket}),c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return e.state.companyData&&c.a.createElement(p,{company:e.state.companyData})}}),c.a.createElement(E.a,{path:"/rocket/:rocket",render:function(a){var t=a.match.params.rocket;return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,{rocketName:t}),e.state.rocketFeatures&&c.a.createElement(T,Object.assign({},e.state.rocketFeatures,{rocketName:t,changeRocket:e.changeRocket})))}}),c.a.createElement(E.a,{path:"/calendar",component:C}),c.a.createElement(E.a,{path:"/details/:id",component:R}),this.state.companyData&&c.a.createElement(q,this.state.companyData.links))}}]),t}(c.a.Component);t(70);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cb0a722e.chunk.js.map