(function(e){function n(n){for(var a,r,i=n[0],s=n[1],u=n[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,r=1;r<t.length;r++){var i=t[r];0!==o[i]&&(a=!1)}a&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"2f5f49f5","chunk-375f3464":"666c5c8c","chunk-07cf594e":"18bbf2dc","chunk-ca869f0a":"8bebf486","chunk-2d0b327b":"c99819c6","chunk-5f40f578":"1ade6e57","chunk-6c5abf79":"22aea672","chunk-e8b59f74":"1ae0f44d","chunk-2bae0770":"665f6eb6","chunk-5630ae4e":"0f0c2bcc","chunk-5c306bc0":"35268d7b","chunk-f2da52da":"738cb1f9","chunk-1d51c374":"f0e3d79c","chunk-1aff1664":"f95a2eb3","chunk-1a0d480b":"3769301f","chunk-5f531ef1":"6ec0b7ec","chunk-5f5e44df":"68839f87","chunk-aee22a36":"995d15ec","chunk-35190bc0":"a0f60660","chunk-30c5d9cd":"7fd7e6f4"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-07cf594e":1,"chunk-ca869f0a":1,"chunk-5f40f578":1,"chunk-6c5abf79":1,"chunk-e8b59f74":1,"chunk-2bae0770":1,"chunk-5630ae4e":1,"chunk-5c306bc0":1,"chunk-f2da52da":1,"chunk-1d51c374":1,"chunk-1aff1664":1,"chunk-1a0d480b":1,"chunk-5f531ef1":1,"chunk-5f5e44df":1,"chunk-aee22a36":1,"chunk-35190bc0":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-375f3464":"31d6cfe0","chunk-07cf594e":"111db1f9","chunk-ca869f0a":"2b90d227","chunk-2d0b327b":"31d6cfe0","chunk-5f40f578":"2bc344ec","chunk-6c5abf79":"1c96fc7c","chunk-e8b59f74":"fe49db91","chunk-2bae0770":"538b2af5","chunk-5630ae4e":"d0ab0e10","chunk-5c306bc0":"1f4fcdd4","chunk-f2da52da":"b84526af","chunk-1d51c374":"5c7de5e0","chunk-1aff1664":"c66e649d","chunk-1a0d480b":"9e650e34","chunk-5f531ef1":"ba1df444","chunk-5f5e44df":"29dde707","chunk-aee22a36":"3c23e747","chunk-35190bc0":"94cce400","chunk-30c5d9cd":"31d6cfe0"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),t(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,t[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("19b3"),r=t.n(a);r.a},"19b3":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-col",{attrs:{cols:e.cols}},[t("h2",{staticClass:"font-weight-bold primary--text mb-4",class:e.$vuetify.breakpoint.mdAndUp?"display-2":"display-1"},[e._t("default")],2)])},o=[],c={name:"CoreHeading",props:{cols:{type:String,default:"12"}}},i=c,s=t("2877"),u=t("6544"),l=t.n(u),d=t("62ad"),f=Object(s["a"])(i,r,o,!1,null,null,null),h=f.exports;l()(f,{VCol:d["a"]});var p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-row",e._b({staticClass:"pa-5 mx-0",staticStyle:{position:"relative"},attrs:{tag:"section"}},"v-row",e.$attrs,!1),[e._t("default")],2)},m=[],b={inheritAttrs:!1},k=b,v=t("0fd9"),g=Object(s["a"])(k,p,m,!1,null,null,null),y=g.exports;l()(g,{VRow:v["a"]});var w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",{staticClass:"primary--text title font-weight-light"},[e._t("default")],2)},C=[],I={},A=Object(s["a"])(I,w,C,!1,null,null,null),D=A.exports,S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"subheading mb-5"},[e._t("default")],2)},E=[],_={},j=Object(s["a"])(_,S,E,!1,null,null,null),T=j.exports;a["a"].component("core-heading",h),a["a"].component("core-section",y),a["a"].component("core-subheading",D),a["a"].component("core-text",T);var U=t("f309"),x=t("a722");a["a"].use(U["a"],{components:{VLayout:x["a"]}});var O=new U["a"]({theme:{dark:!0,themes:{dark:{primary:"#F09C23",accent:"#9E8371",accent2:"accent2"}}}}),F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("core-drawer"),t("v-content",{staticClass:"overflow-hidden"},[t("router-view")],1)],1)},N=[],B=(t("d3b7"),{components:{CoreDrawer:function(){return Promise.all([t.e("chunk-375f3464"),t.e("chunk-07cf594e"),t.e("chunk-ca869f0a")]).then(t.bind(null,"41c0"))}}}),H=B,P=(t("034f"),t("7496")),L=t("a75b"),J=Object(s["a"])(H,F,N,!1,null,null,null),M=J.exports;l()(J,{VApp:P["a"],VContent:L["a"]});var $=t("8c4f");a["a"].use($["a"]);var R=new $["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}},{path:"/index.html",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}}]});var V=R,X=(t("a15b"),t("d81d"),t("b0c0"),t("ac1f"),t("1276"),t("a5fe")),z={namespaced:!0,state:{schema:X,initials:X.basics.name.split(" ").map((function(e){return e.charAt(0)})).join("")}},G=t("2f62");a["a"].use(G["a"]);var W=new G["a"].Store({modules:{app:z}});a["a"].config.productionTip=!1,new a["a"]({router:V,store:W,vuetify:O,render:function(e){return e(M)}}).$mount("#app")},a5fe:function(e){e.exports=JSON.parse('{"basics":{"name":"Anna Gondring","label":"Front-end & UX/UI Developer","picture":"","email":"a.gondring@gmail.com","phone":"(402) 416.3882","website":"","summary":"As a child I was also on the computer I would. Build GeoCities pages with my friends after school and use them to store extra data. When I went to College I hava a major in History and minor in American Sign. Following College I go a job as a Job Coach for Disabled. I started to realize as much as a positive impact I was having I wanted to solve problems. I started to do Free Code Camp, Code Academy, and Team Tree House. After I felt I had a good understand of the basics I enrolled in a Boot Camp at Columbia University.","location":{"address":"","postalCode":"","city":"NYC","countryCode":"NY","region":""},"profiles":[{"network":"LinkedIn","username":"agondring","url":"https://linkedin.com/agondring"},{"network":"Github","username":"zednon","url":"https://github.com/zednon"}]},"work":[{"company":"The Group That Shall Not Be Name","position":"Admin/Web Developer Intern","url":"","startDate":"2009-01-10 - ongoing","summary":"Have development a website for the group that shall not be name, as well as planed events threw out NYC."},{"company":"Team Tree House","position":"UI/UX, Andriod Development, Front-End","url":"","startDate":"2017-10-01 - on going ","summary":"Study UI/UX, Front-End, and Andriod App Development."},{"company":"Columbia Univ.","position":"Full Stack Boot Camp","url":"","startDate":"2018-09-20 - 2019-03-31","summary":"Attend a Boot Camp at Columbia Univ. Where I learned both Front-End and Back-end Engineering."},{"company":"Free Coder Camp","position":"Respondsive Web Design ","url":"https://www.freecodecamp.org/certification/zednon/responsive-web-design","startDate":"2017-10-28 - on going","summary":"Have ran threw drills on Free Coder Camp to learn Responsive web design, and Front End Engineering ."}],"education":[{"institution":"State University","area":"Computer Science","studyType":"Bachelor","startDate":"2013-01-01","endDate":"2017-01-01","gpa":"4.0","courses":["Computer Sciences"]},{"institution":"Community College","area":"Completion","studyType":"Certificate","startDate":"2012-01-01","endDate":"2013-01-01","gpa":"3.2","courses":["Modern Logo Design"]},{"institution":"Community College","area":"Science","studyType":"Associate","startDate":"2010-01-01","endDate":"2012-01-01","gpa":"3.4","courses":["Graphic Design"]},{"institution":"Community College","area":"Completion","studyType":"Certificate","startDate":"2010-01-01","endDate":"2010-01-01","gpa":"3.1","courses":["Marketing"]}],"skills":[{"name":"","level":5,"keywords":["JavaScript"]},{"name":"","level":7,"keywords":["HTML5/CSS3"]},{"name":"","level":1,"keywords":["React"]},{"name":"","level":5,"keywords":["VUE"]},{"name":"","level":3,"keywords":["Java"]},{"name":"","level":5,"keywords":["ARIA"]},{"name":"","level":4,"keywords":["UX"]},{"name":"","level":5,"keywords":["UI"]},{"name":"","level":8,"keywords":["ADA Compliance "]},{"name":"","level":5,"keywords":["Node.js "]},{"name":"","level":4,"keywords":["Andriod Development "]}],"interests":[{"name":"Front-End","keywords":["I am highly skill in Web Development I can make a site in HTML/CSS and JavaSript in use both React to make the site or VUE. I also code with ARIA tags in place so the site is always user friendly for everyone."]},{"name":"UI","keywords":["I focus on designing the site to look and feel user friend and unique. Insuring the the goals are reflected properly"]},{"name":"UX","keywords":["I focus on the user using the site. looking at research and testing to insure the site is user friendly while making sure the voice of the company is being voiced."]},{"name":"ADA UX","keywords":["I fosuc all people are able to use the site and insure everyone is equal in access to the site. Using speshlized testing I insure the site is always user freindly"]},{"name":"Back-End","keywords":["I work to ensure application and everything that communicates between the database and the browser."]},{"name":"Andriod Development","keywords":["I used both flutter and Java to develop Andriod apps."]}],"Icons":[]}')}});
//# sourceMappingURL=app.f06d57b6.js.map