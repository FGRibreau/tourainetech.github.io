(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(t,e,n){var a=n(179);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(13).default)("67a1a2b4",a,!0,{})},177:function(t,e,n){"use strict";var a={props:{speaker:{type:Object,default:function(){return{}}}}},r=(n(178),n(4)),i=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"speaker--bloc"},[e("div",{staticClass:"container--image"},[e("img",{attrs:{src:this.speaker.avatar,alt:this.speaker.name}})]),this._v(" "),e("h3",[this._v(this._s(this.speaker.name))])])},[],!1,null,"0d313bc7",null);i.options.__file="SpeakerBloc.vue";e.a=i.exports},178:function(t,e,n){"use strict";var a=n(174);n.n(a).a},179:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"\n.speaker--bloc[data-v-0d313bc7]{text-align:center;background-color:#222333;border-radius:2px;padding:1rem;color:#fff;height:available\n}\n.speaker--bloc img[data-v-0d313bc7]{width:100px;height:100px;border-radius:50%;border:3px solid #fff\n}\n.speaker--bloc h3[data-v-0d313bc7]{font-size:1rem\n}",""])},211:function(t,e,n){var a=n(235);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(13).default)("eb402424",a,!0,{})},234:function(t,e,n){"use strict";var a=n(211);n.n(a).a},235:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"\n.container--fix[data-v-25b691c1]{margin-top:5rem;margin-bottom:5rem;text-align:center\n}\nh1[data-v-25b691c1]{color:#222333;margin-bottom:1rem\n}\nh2[data-v-25b691c1]{color:#6abfad\n}\n.container--image[data-v-25b691c1]{margin-top:2rem;margin-bottom:1rem;min-height:150px;display:flex;justify-content:center\n}\n.container--image img[data-v-25b691c1]{width:150px;border-radius:50%;align-self:center;flex:0 0 auto\n}\ndiv.description--container[data-v-25b691c1]{text-align:left;background-color:#b1ded4;padding:2rem;margin-top:2rem\n}\ndiv.description--container p[data-v-25b691c1]{line-height:32px\n}\n.talk-speakers--grid[data-v-25b691c1]{background:#222333;display:flex;flex-direction:row;justify-content:center\n}\n@media screen and (max-width:660px){\ndiv.description--container[data-v-25b691c1]{margin-left:-2rem;margin-right:-2rem\n}\ndiv.description--container .description--link a[data-v-25b691c1]{padding-left:1rem;padding-right:1rem\n}\n}",""])},257:function(t,e,n){"use strict";n.r(e);n(25),n(49),n(50);var a=n(177),r=new(n(224).Converter),i={components:{SpeakerBloc:a.a},validate:function(t){var e=t.store,n=t.params;return e.getters.talks.filter(function(t){return t.id===n.id}).length>0},asyncData:function(t){var e=t.store,n=t.params;return{talk:e.getters.talks.filter(function(t){return t.id===n.id})[0]}},computed:{abstractHTML:function(){return r.makeHtml(this.talk.abstract)},speakers:function(){var t=this;return this.$store.getters.speakers.filter(function(e){var n=e.id;return t.talk.speakers.includes(n)})}},head:function(){var t="Touraine Tech 2019 - ".concat(this.talk.name),e="https://touraine.tech/talk/".concat(this.talk.name);return{titleTemplate:t,meta:[{hid:"description",name:"description",content:this.talk.name},{hid:"ogtitle",property:"og:title",content:t},{hid:"ogdescription",property:"og:description",content:this.talk.name},{hid:"ogtype",property:"og:type",content:"website"},{hid:"ogurl",property:"og:url",content:e},{hid:"oglocale",property:"og:locale",content:"fr_FR"},{hid:"twittercard",name:"twitter:card",content:"summary"},{hid:"twittertitle",name:"twitter:title",content:t},{hid:"twitterdescription",name:"twitter:description",content:this.talk.name},{hid:"twitterimagealt",name:"twitter:image:alt",content:"Logo ".concat(this.talk.name)}]}}},o=(n(234),n(4)),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container--fix"},[n("h1",[t._v(t._s(t.talk.name))]),t._v(" "),n("div",{staticClass:"talk-speakers--grid"},t._l(t.speakers,function(t){return n("nuxt-link",{key:t.name,attrs:{to:"/speaker/"+t.name}},[n("SpeakerBloc",{attrs:{speaker:t}})],1)}),1),t._v(" "),n("div",{staticClass:"description--container"},[n("p",{domProps:{innerHTML:t._s(t.abstractHTML)}})])])},[],!1,null,"25b691c1",null);s.options.__file="_id.vue";e.default=s.exports}}]);