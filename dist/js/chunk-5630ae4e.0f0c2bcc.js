(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5630ae4e"],{"0160":function(e,t,i){},"10d2":function(e,t,i){"use strict";var s=i("8dd9");t["a"]=s["a"]},"37c6":function(e,t,i){"use strict";i("6ece");var s=i("0789"),r=i("a9ad"),n=i("fe6c"),a=i("a452"),o=i("7560"),l=i("80d2"),c=i("58df");const d=Object(c["a"])(r["a"],Object(n["b"])(["absolute","fixed","top","bottom"]),a["a"],o["a"]);var h=d.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.$vuetify.rtl?"right":"left"]:Object(l["f"])(this.normalizedValue,"%"),width:Object(l["f"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?s["b"]:s["c"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(l["m"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t["a"]=h},"615b":function(e,t,i){},"6ece":function(e,t,i){},"8f9b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("core-section",{attrs:{id:"where-ive-been"}},[i("core-heading",[e._v("Where I've learned")]),i("v-col",{staticClass:"mx-auto px-0",attrs:{cols:"12",md:"9"}},[i("v-timeline",{attrs:{dense:e.$vuetify.breakpoint.smAndDown,light:e.light}},e._l(e.items,(function(t,s){return i("v-timeline-item",e._b({key:s},"v-timeline-item",e.getAttrs(),!1),[i("span",{attrs:{slot:"opposite"},domProps:{textContent:e._s(t.startDate.slice(0,26))},slot:"opposite"}),i("v-card",{staticClass:"pa-3"},[i("h3",{staticClass:"subheading font-weight-bold",domProps:{textContent:e._s(t.company)}}),i("h5",{domProps:{textContent:e._s(t.position)}}),i("div",{domProps:{textContent:e._s(t.summary)}}),i("div",{directives:[{name:"list-item",rawName:"v-list-item",value:t.website,expression:"item.website"}]})])],1)})),1)],1)],1)},r=[],n=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("2fa7")),a=i("2f62");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(i,!0).forEach((function(t){Object(n["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c={name:"WhereIveBeen",data:function(e){return{light:e.random()}},computed:l({},Object(a["b"])("app",["schema"]),{items:function(){return this.schema.work}}),methods:{getAttrs:function(){var e={};return this.random()&&(e.fillDot=!0),this.random()&&(e.largeDot=!0),e},random:function(){return Boolean(Math.round(Math.random()))}}},d=c,h=i("2877"),u=i("6544"),m=i.n(u),p=i("b0af"),g=i("62ad"),v=(i("0160"),i("58df")),f=i("7560"),b=Object(v["a"])(f["a"]).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),_=i("9d26"),y=i("a9ad");const B=Object(v["a"])(y["a"],f["a"]);var C=B.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(_["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const e=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...e},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(e){const t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},t)}}),O=Object(h["a"])(d,s,r,!1,null,null,null);t["default"]=O.exports;m()(O,{VCard:p["a"],VCol:g["a"],VTimeline:b,VTimelineItem:C})},b0af:function(e,t,i){"use strict";i("615b");var s=i("10d2"),r=i("2b0e"),n=i("37c6"),a=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(n["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),o=i("1c87"),l=i("58df");t["a"]=Object(l["a"])(a,o["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...o["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...s["a"].options.computed.classes.call(this)}},styles(){const e={...s["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render(e){const{tag:t,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},fe6c:function(e,t,i){"use strict";i.d(t,"b",(function(){return a}));var s=i("2b0e"),r=i("80d2");const n={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(e=[]){return s["a"].extend({name:"positionable",props:e.length?Object(r["k"])(n,e):n})}t["a"]=a()}}]);
//# sourceMappingURL=chunk-5630ae4e.0f0c2bcc.js.map