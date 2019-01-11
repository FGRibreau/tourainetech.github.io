(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(e,t,a){var r=a(192);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(13).default)("3f8c46e6",r,!0,{})},191:function(e,t,a){"use strict";var r=a(175);a.n(r).a},192:function(e,t,a){(e.exports=a(12)(!1)).push([e.i,"\n#schedule[data-v-668c1f86]{max-width:1280px;margin:auto\n}\n.schedule--grid[data-v-668c1f86]{display:grid;grid-template-columns:50px repeat(4,1fr);grid-column-gap:1rem;margin:1rem\n}\n@media screen and (max-width:660px){\n.schedule--grid[data-v-668c1f86]{max-width:100%;overflow-x:scroll;margin-left:0;margin-right:0\n}\n}\n.schedule-time--cell[data-v-668c1f86]{position:-webkit-sticky;position:sticky;left:0;z-index:10;background:#fff;grid-column-start:1;color:grey;font-size:.8rem;text-align:right;padding-right:1rem;border-right:1px solid #d3d3d3\n}\n.schedule-spacer--cell[data-v-668c1f86]{grid-column-start:1;grid-row-start:1\n}\n.schedule-room--cell[data-v-668c1f86]{grid-row-start:1;text-align:center;padding:1rem;margin-bottom:1rem;background-color:#6abfad;color:#fff\n}\n.schedule-talk--cell[data-v-668c1f86]{text-decoration:none;background-color:#222333;color:#fff;margin-bottom:1rem;border-left:10px solid #20b2aa;position:relative;padding:1rem 1rem 40px\n}\n.schedule-talk--cell h5[data-v-668c1f86]{color:#b3b3b3\n}\n.schedule-talk--cell ul[data-v-668c1f86]{padding:0;list-style:none;margin:.5rem 0 0\n}\n.schedule-talk--cell ul li[data-v-668c1f86]{display:inline-block;font-size:.8em;padding-left:.5rem;padding-right:.5rem;border-radius:.5rem\n}\n.schedule-talk--cell .schedule-room--duration-level[data-v-668c1f86]{display:inline-block;color:#e6e6e6;font-size:.8rem;position:absolute;bottom:5px;left:5px;text-align:left\n}\n.schedule-talk-break--cell[data-v-668c1f86]{border:0;color:#222333;font-weight:100;font-size:1rem;padding-top:1rem;padding-bottom:1rem;background:repeating-linear-gradient(45deg,#d5ede8,#d5ede8 10px,#e7f5f2 0,#e7f5f2 20px)\n}\n.schedule-talk-iot--cell[data-v-668c1f86]{border-color:#5dbf48\n}\n.schedule-talk-game--cell[data-v-668c1f86]{border-color:#f3d800\n}\n.schedule-talk-architecture--cell[data-v-668c1f86]{border-color:#ed5940\n}\n.schedule-talk-tools--cell[data-v-668c1f86]{border-color:#ffa000\n}\n.schedule-talk-front--cell[data-v-668c1f86]{border-color:#0077c2\n}\n.schedule-talk-design--cell[data-v-668c1f86]{border-color:#ff75cc\n}\n.schedule-talk-backend--cell[data-v-668c1f86]{border-color:#345264\n}\n.schedule-talk-iot--category[data-v-668c1f86]{background-color:#5dbf48;color:#000\n}\n.schedule-talk-game--category[data-v-668c1f86]{background-color:#f3d800;color:#000\n}\n.schedule-talk-architecture--category[data-v-668c1f86]{background-color:#ed5940;color:#000\n}\n.schedule-talk-tools--category[data-v-668c1f86]{background-color:#ffa000;color:#000\n}\n.schedule-talk-front--category[data-v-668c1f86]{background-color:#0077c2\n}\n.schedule-talk-design--category[data-v-668c1f86]{background-color:#ff75cc;color:#000\n}\n.schedule-talk-backend--category[data-v-668c1f86]{background-color:#345264\n}",""])},193:function(e,t,a){var r=a(227);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(13).default)("412ff30b",r,!0,{})},222:function(e,t,a){"use strict";a(25);var r=a(23),n=a.n(r),l=a(70),c=a.n(l),o={data:function(){return{times:["8:00","9:00","9:50","10:10","11:00","11:10","12:00","12:20","12:45","13:00","13:30","14:20","14:30","15:20","15:45","16:35","16:45","17:35","18:00"],rooms:["Turing","Pascal","LoveLace","TD1 (premier étage)"]}},computed:{talks:function(){var e=this;this.$store.getters.speakers.map(function(e){return e.id});return c()(this.$store.getters.talks.map(function(t){return n()({},t,{speakerNames:e.$store.getters.getSpeakerForIds(t.speakers).map(function(e){return e.name}).join(", ")})}))},breaks:function(){return this.$store.getters.breaks}},methods:{talkCellStyle:function(e){var t=e.rooms,a=e.times;e.format;return void 0===t?{display:"none"}:{"grid-column-start":t[0]+1,"grid-column-end":t[t.length-1]+2,"grid-row-start":a[0]+1,"grid-row-end":a[a.length-1]+2}},talkCssClass:function(e){var t=e.format,a=e.categories;return["schedule-talk--cell","schedule-talk-"+t+"--cell",a?"schedule-talk-"+a+"--cell":""]},talkName:function(e){switch(e){case"design":return"Design, UI, UX";case"front":return"Front web, mobile";case"backend":return"Backends, Clouds, Big Data";case"game":return"Jeux vidéos et hybrides";case"iot":return"Internet des objets";case"architecture":return"Conception, architecture";case"tools":return"Outillage, pratiques de développement"}},roomName:function(e){return this.rooms[e-1]},levelName:function(e){switch(e){case"beginner":return"Débutant";case"intermediate":return"Intermédiaire";case"hard":return"Confirmé";default:return e}},duration:function(e){switch(e){case"conference":return"50m";case"quickie":return"15m";case"handson":return"1h50";case"keynoteend":return"25m"}}}},s=(a(191),a(4)),i=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"container--white",attrs:{id:"schedule"}},[e._m(0),e._v(" "),a("div",{staticClass:"schedule--grid"},[a("div",{staticClass:"schedule-spacer--cell"}),e._v(" "),e._l(e.rooms,function(t){return a("div",{key:t,staticClass:"schedule-room--cell"},[a("h3",[e._v(e._s(t))])])}),e._v(" "),e._l(e.times,function(t){return a("div",{key:t,staticClass:"schedule-time--cell"},[e._v(e._s(t))])}),e._v(" "),e._l(e.breaks,function(t){return a("div",{key:t.id,staticClass:"schedule-talk--cell schedule-talk-break--cell",style:e.talkCellStyle(t)},[e._v("\n      "+e._s(t.name)+"\n    ")])}),e._v(" "),e._l(e.talks,function(t){return a("nuxt-link",{key:t.id,class:e.talkCssClass(t),style:e.talkCellStyle(t),attrs:{to:"/talk/"+t.id,"data-time":t.time}},[a("div",[a("h4",[e._v(e._s(t.name))]),e._v(" "),a("h5",[e._v(e._s(t.speakerNames))]),e._v(" "),a("ul",[a("li",{class:["schedule-talk-"+t.categories+"--category"]},[e._v(e._s(e.talkName(t.categories)))])]),e._v(" "),a("p",{staticClass:"schedule-room--duration-level"},[e._v("⏱"+e._s(e.duration(t.format))+" — "+e._s(e.levelName(t.level)))])])])})],2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container--fix container--center"},[t("h2",[this._v("Le programme")])])}],!1,null,"668c1f86",null);i.options.__file="Schedule.vue";t.a=i.exports},226:function(e,t,a){"use strict";var r=a(193);a.n(r).a},227:function(e,t,a){(e.exports=a(12)(!1)).push([e.i,"\n.page--schedule[data-v-84f04dec]{margin-top:2rem\n}",""])},259:function(e,t,a){"use strict";a.r(t);var r={components:{Schedule:a(222).a}},n=(a(226),a(4)),l=Object(n.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page--schedule"},[t("Schedule")],1)},[],!1,null,"84f04dec",null);l.options.__file="schedule.vue";t.default=l.exports}}]);