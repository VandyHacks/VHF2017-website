webpackJsonp([0],{136:function(e,t,a){function i(e){a(166)}var n=a(24)(a(139),a(160),i,null,null);e.exports=n.exports},137:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:String},data:function(){return{open:!1}},computed:{arrowDirection:function(){return this.open?"right":"down"}}}},138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{white:{type:Boolean,default:!1}}}},139:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(156),n=a.n(i),r=a(157),s=a.n(r),o=a(155),l=a.n(o),d=a(154),A=a.n(d);t.default={components:{mlhbadge:n.a,separator:s.a,infobox:l.a,faqitem:A.a}}},140:function(e,t,a){t=e.exports=a(47)(!0),t.push([e.i,".faq-item[data-v-00cd8692]{margin:10px 0 10px 10px}.question[data-v-00cd8692]{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex}.title[data-v-00cd8692]{display:inline-block;line-height:24px}.answer[data-v-00cd8692]{margin-left:22px}.slide-fade-enter-active[data-v-00cd8692],.slide-fade-leave-active[data-v-00cd8692]{-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top}.slide-fade-enter-active[data-v-00cd8692]{-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;-o-transition:transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s}.slide-fade-leave-active[data-v-00cd8692]{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;-o-transition:transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s}.slide-fade-enter[data-v-00cd8692],.slide-fade-leave-to[data-v-00cd8692]{-webkit-transform:scaleY(0);-ms-transform:scaleY(0);transform:scaleY(0)}.slide-fade-enter-to[data-v-00cd8692]{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1)}.arrow-wrapper[data-v-00cd8692]{margin-right:10px}.arrow[data-v-00cd8692]{height:26px;width:12px;-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;-o-transition:transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s}.arrow.right[data-v-00cd8692]{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}","",{version:3,sources:["C:/Users/Yunyu/Documents/site-dev/components/FaqItem.vue"],names:[],mappings:"AACA,2BAA2B,uBAAuB,CACjD,AACD,2BAA2B,eAAe,oBAAoB,oBAAoB,YAAY,CAC7F,AACD,wBAAwB,qBAAqB,gBAAgB,CAC5D,AACD,yBAAyB,gBAAgB,CACxC,AACD,oFAAoF,6BAA6B,yBAAyB,oBAAoB,CAC7J,AACD,0CAA0C,0CAA0C,kCAAkC,6BAA6B,0BAA0B,gDAAiD,CAC7N,AACD,0CAA0C,yCAAyC,iCAAiC,4BAA4B,yBAAyB,8CAA+C,CACvN,AACD,yEAAyE,4BAA4B,wBAAwB,mBAAmB,CAC/I,AACD,sCAAsC,4BAA4B,wBAAwB,mBAAmB,CAC5G,AACD,gCAAgC,iBAAiB,CAChD,AACD,wBAAwB,YAAY,WAAW,0CAA2C,kCAAmC,6BAA8B,0BAA2B,gDAAmD,CACxO,AACD,8BAA8B,gCAAgC,4BAA4B,uBAAuB,CAChH",file:"FaqItem.vue",sourcesContent:["\n.faq-item[data-v-00cd8692]{margin:10px 0 10px 10px\n}\n.question[data-v-00cd8692]{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.title[data-v-00cd8692]{display:inline-block;line-height:24px\n}\n.answer[data-v-00cd8692]{margin-left:22px\n}\n.slide-fade-enter-active[data-v-00cd8692],.slide-fade-leave-active[data-v-00cd8692]{-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top\n}\n.slide-fade-enter-active[data-v-00cd8692]{-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;-o-transition:transform .25s;transition:transform .25s;transition:transform .25s, -webkit-transform .25s\n}\n.slide-fade-leave-active[data-v-00cd8692]{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;-o-transition:transform .1s;transition:transform .1s;transition:transform .1s, -webkit-transform .1s\n}\n.slide-fade-enter[data-v-00cd8692],.slide-fade-leave-to[data-v-00cd8692]{-webkit-transform:scaleY(0);-ms-transform:scaleY(0);transform:scaleY(0)\n}\n.slide-fade-enter-to[data-v-00cd8692]{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1)\n}\n.arrow-wrapper[data-v-00cd8692]{margin-right:10px\n}\n.arrow[data-v-00cd8692]{height:26px;width:12px;-webkit-transition:-webkit-transform 0.25s;transition:-webkit-transform 0.25s;-o-transition:transform 0.25s;transition:transform 0.25s;transition:transform 0.25s, -webkit-transform 0.25s\n}\n.arrow.right[data-v-00cd8692]{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)\n}\n"],sourceRoot:""}])},141:function(e,t,a){t=e.exports=a(47)(!0),t.push([e.i,"#mlh-trust-badge{display:block;min-width:50px;max-width:50px;position:absolute;right:15px;top:0;width:10%;z-index:5}@media (min-width:960px){#mlh-trust-badge{max-width:75px;right:35px}}@media (min-width:1200px){#mlh-trust-badge{max-width:96px;right:50px}}","",{version:3,sources:["C:/Users/Yunyu/Documents/site-dev/components/MlhBadge.vue"],names:[],mappings:"AACA,iBAAiB,cAAc,eAAe,eAAe,kBAAkB,WAAW,MAAM,UAAU,SAAS,CAClH,AACD,yBACA,iBAAiB,eAAe,UAAU,CACzC,CACA,AACD,0BACA,iBAAiB,eAAe,UAAU,CACzC,CACA",file:"MlhBadge.vue",sourcesContent:["\n#mlh-trust-badge{display:block;min-width:50px;max-width:50px;position:absolute;right:15px;top:0;width:10%;z-index:5\n}\n@media (min-width: 960px){\n#mlh-trust-badge{max-width:75px;right:35px\n}\n}\n@media (min-width: 1200px){\n#mlh-trust-badge{max-width:96px;right:50px\n}\n}\n"],sourceRoot:""}])},142:function(e,t,a){t=e.exports=a(47)(!0),t.push([e.i,"#__nuxt,body,html{height:100%}.parallax-group{position:relative;height:100vh}.parallax-layer.deepest>:first-child{z-index:-3}.parallax-layer.deep>:first-child{z-index:-2}.parallax-layer.back>:first-child{z-index:-1}.parallax-layer.base{position:static}.parallax{overflow-x:hidden;overflow-y:auto;height:auto}@supports ((-webkit-perspective:1px) or (perspective:1px)) and (not (-webkit-overflow-scrolling:touch)) and (not (-ms-ime-align:auto)){#__nuxt,body,html{overflow:hidden}.parallax{-webkit-perspective:1px;perspective:1px;perspective-origin:100%;-webkit-perspective-origin:100%;height:inherit}.parallax-group{position:relative;height:inherit;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.parallax-layer{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transform-origin:100%;-ms-transform-origin:100%;transform-origin:100%}.parallax-layer.deepest{-webkit-transform:translateZ(-3px) scale(4);transform:translateZ(-3px) scale(4)}.parallax-layer.deep{-webkit-transform:translateZ(-2.5px) scale(3.5);transform:translateZ(-2.5px) scale(3.5)}.parallax-layer.back{-webkit-transform:translateZ(-.5px) scale(1.5);transform:translateZ(-.5px) scale(1.5)}.parallax-layer.base{-webkit-transform:translateZ(0);transform:translateZ(0);top:auto}}.logo{position:absolute;left:0;right:0;margin:17.5vh auto 0;width:290px}@media (min-width:360px){.logo{width:320px}}@media (min-width:432px){.logo{width:390px}}@media (min-width:576px){.logo{width:495px}}@media (min-width:768px){.logo{width:635px}}.batman-building{position:absolute;left:0;right:0;margin:33vh auto 0;max-width:256px;-webkit-filter:drop-shadow(0 50px 25px hsla(0,0%,100%,.66));filter:drop-shadow(0 50px 25px rgba(255,255,255,.66))}@media (min-width:432px){.batman-building{max-width:360px}}@media (min-width:576px){.batman-building{max-width:400px}}@media (min-width:1600px){.batman-building{max-width:512px}}.skyline{position:absolute;left:0;right:0;bottom:0;margin:auto auto 0;overflow:hidden;border-bottom:50px solid #e0e7f5;-webkit-filter:drop-shadow(0 5px #e0e7f5);filter:drop-shadow(0 5px #e0e7f5)}@media (min-width:432px){.skyline{border-bottom:30px solid #e0e7f5}}@media (min-width:576px){.skyline{border-bottom:20px solid #e0e7f5}}@media (min-width:768px){.skyline{border-bottom:none;-webkit-filter:none;filter:none}}.page-content{top:100%;background:#fff}.feature-block{padding:36px;background:#fff}@media (min-width:768px){.feature-block{padding:60px}}.text-contents{max-width:1200px;margin-left:auto;margin-right:auto}.text-contents h1{text-align:center}@media (min-width:768px){.text-contents h1{font-size:36px}}.faq-header{text-decoration:underline;font-weight:400}.description{background:#222a53;color:#fff}.schedule{background:#565f86;color:#fff}.sponsors{background:#394574;color:#fff}","",{version:3,sources:["C:/Users/Yunyu/Documents/site-dev/pages/index.vue"],names:[],mappings:"AACA,kBAAkB,WAAW,CAC5B,AACD,gBAAgB,kBAAkB,YAAY,CAC7C,AACD,qCAAqC,UAAU,CAC9C,AACD,kCAAkC,UAAU,CAC3C,AACD,kCAAkC,UAAU,CAC3C,AACD,qBAAqB,eAAe,CACnC,AACD,UAAU,kBAAkB,gBAAgB,WAAW,CACtD,AACD,uIACA,kBAAkB,eAAe,CAChC,AACD,UAAU,wBAAwB,gBAAgB,wBAAwB,gCAAgC,cAAc,CACvH,AACD,gBAAgB,kBAAkB,eAAe,oCAAoC,2BAA2B,CAC/G,AACD,gBAAgB,kBAAkB,MAAM,QAAQ,SAAS,OAAO,8BAA8B,0BAA0B,qBAAqB,CAC5I,AACD,wBAAwB,4CAA4C,mCAAmC,CACtG,AACD,qBAAqB,gDAAgD,uCAAuC,CAC3G,AACD,qBAAqB,+CAAgD,sCAAuC,CAC3G,AACD,qBAAqB,gCAAgC,wBAAwB,QAAQ,CACpF,CACA,AACD,MAAM,kBAAkB,OAAO,QAAQ,qBAAqB,WAAW,CACtE,AACD,yBACA,MAAM,WAAW,CAChB,CACA,AACD,yBACA,MAAM,WAAW,CAChB,CACA,AACD,yBACA,MAAM,WAAW,CAChB,CACA,AACD,yBACA,MAAM,WAAW,CAChB,CACA,AACD,iBAAiB,kBAAkB,OAAO,QAAQ,mBAAmB,gBAAgB,4DAA+D,qDAAsD,CACzM,AACD,yBACA,iBAAiB,eAAe,CAC/B,CACA,AACD,yBACA,iBAAiB,eAAe,CAC/B,CACA,AACD,0BACA,iBAAiB,eAAe,CAC/B,CACA,AACD,SAAS,kBAAkB,OAAO,QAAQ,SAAS,mBAAmB,gBAAgB,iCAAiC,0CAA0C,iCAAiC,CACjM,AACD,yBACA,SAAS,gCAAgC,CACxC,CACA,AACD,yBACA,SAAS,gCAAgC,CACxC,CACA,AACD,yBACA,SAAS,mBAAmB,oBAAoB,WAAW,CAC1D,CACA,AACD,cAAc,SAAS,eAAe,CACrC,AACD,eAAe,aAAa,eAAe,CAC1C,AACD,yBACA,eAAe,YAAY,CAC1B,CACA,AACD,eAAe,iBAAiB,iBAAiB,iBAAiB,CACjE,AACD,kBAAkB,iBAAiB,CAClC,AACD,yBACA,kBAAkB,cAAc,CAC/B,CACA,AACD,YAAY,0BAA0B,eAAkB,CACvD,AACD,aAAa,mBAAmB,UAAW,CAC1C,AACD,UAAU,mBAAmB,UAAW,CACvC,AACD,UAAU,mBAAmB,UAAW,CACvC",file:"index.vue",sourcesContent:["\nbody,html,#__nuxt{height:100%\n}\n.parallax-group{position:relative;height:100vh\n}\n.parallax-layer.deepest>:first-child{z-index:-3\n}\n.parallax-layer.deep>:first-child{z-index:-2\n}\n.parallax-layer.back>:first-child{z-index:-1\n}\n.parallax-layer.base{position:static\n}\n.parallax{overflow-x:hidden;overflow-y:auto;height:auto\n}\n@supports ((-webkit-perspective: 1px) or (perspective: 1px)) and (not (-webkit-overflow-scrolling: touch)) and (not (-ms-ime-align: auto)){\nbody,html,#__nuxt{overflow:hidden\n}\n.parallax{-webkit-perspective:1px;perspective:1px;perspective-origin:100%;-webkit-perspective-origin:100%;height:inherit\n}\n.parallax-group{position:relative;height:inherit;-webkit-transform-style:preserve-3d;transform-style:preserve-3d\n}\n.parallax-layer{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transform-origin:100%;-ms-transform-origin:100%;transform-origin:100%\n}\n.parallax-layer.deepest{-webkit-transform:translateZ(-3px) scale(4);transform:translateZ(-3px) scale(4)\n}\n.parallax-layer.deep{-webkit-transform:translateZ(-2.5px) scale(3.5);transform:translateZ(-2.5px) scale(3.5)\n}\n.parallax-layer.back{-webkit-transform:translateZ(-0.5px) scale(1.5);transform:translateZ(-0.5px) scale(1.5)\n}\n.parallax-layer.base{-webkit-transform:translateZ(0);transform:translateZ(0);top:auto\n}\n}\n.logo{position:absolute;left:0;right:0;margin:17.5vh auto 0;width:290px\n}\n@media (min-width: 360px){\n.logo{width:320px\n}\n}\n@media (min-width: 432px){\n.logo{width:390px\n}\n}\n@media (min-width: 576px){\n.logo{width:495px\n}\n}\n@media (min-width: 768px){\n.logo{width:635px\n}\n}\n.batman-building{position:absolute;left:0;right:0;margin:33vh auto 0;max-width:256px;-webkit-filter:drop-shadow(0 50px 25px rgba(255,255,255,0.66));filter:drop-shadow(0 50px 25px rgba(255,255,255,0.66))\n}\n@media (min-width: 432px){\n.batman-building{max-width:360px\n}\n}\n@media (min-width: 576px){\n.batman-building{max-width:400px\n}\n}\n@media (min-width: 1600px){\n.batman-building{max-width:512px\n}\n}\n.skyline{position:absolute;left:0;right:0;bottom:0;margin:auto auto 0;overflow:hidden;border-bottom:50px solid #e0e7f5;-webkit-filter:drop-shadow(0 5px #e0e7f5);filter:drop-shadow(0 5px #e0e7f5)\n}\n@media (min-width: 432px){\n.skyline{border-bottom:30px solid #e0e7f5\n}\n}\n@media (min-width: 576px){\n.skyline{border-bottom:20px solid #e0e7f5\n}\n}\n@media (min-width: 768px){\n.skyline{border-bottom:none;-webkit-filter:none;filter:none\n}\n}\n.page-content{top:100%;background:#fff\n}\n.feature-block{padding:36px;background:#fff\n}\n@media (min-width: 768px){\n.feature-block{padding:60px\n}\n}\n.text-contents{max-width:1200px;margin-left:auto;margin-right:auto\n}\n.text-contents h1{text-align:center\n}\n@media (min-width: 768px){\n.text-contents h1{font-size:36px\n}\n}\n.faq-header{text-decoration:underline;font-weight:normal\n}\n.description{background:#222a53;color:white\n}\n.schedule{background:#565f86;color:white\n}\n.sponsors{background:#394574;color:white\n}\n"],sourceRoot:""}])},144:function(e,t,a){t=e.exports=a(47)(!0),t.push([e.i,".separator[data-v-ac7a9824]{width:60px;height:4px;background:#000;margin:20px auto}.separator.white[data-v-ac7a9824]{background:#fff}","",{version:3,sources:["C:/Users/Yunyu/Documents/site-dev/components/Separator.vue"],names:[],mappings:"AACA,4BAA4B,WAAW,WAAW,gBAAgB,gBAAgB,CACjF,AACD,kCAAkC,eAAe,CAChD",file:"Separator.vue",sourcesContent:["\n.separator[data-v-ac7a9824]{width:60px;height:4px;background:#000;margin:20px auto\n}\n.separator.white[data-v-ac7a9824]{background:#fff\n}\n"],sourceRoot:""}])},145:function(e,t,a){t=e.exports=a(47)(!0),t.push([e.i,".infobox[data-v-e5a4e0b4]{margin-top:10px;background:#e2e3e9;padding:25px}","",{version:3,sources:["C:/Users/Yunyu/Documents/site-dev/components/Infobox.vue"],names:[],mappings:"AACA,0BAA0B,gBAAgB,mBAAmB,YAAY,CACxE",file:"Infobox.vue",sourcesContent:["\n.infobox[data-v-e5a4e0b4]{margin-top:10px;background:#e2e3e9;padding:25px\n}\n"],sourceRoot:""}])},146:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMjIgMjRsLTQuMTIyLTQgOC04LTgtOCA0LjEyMi00IDExLjg3OCAxMnoiLz48L3N2Zz4="},147:function(e,t,a){e.exports=a.p+"img/batman.a34a242.svg"},148:function(e,t,a){e.exports=a.p+"img/skyline.b9a11d4.svg"},149:function(e,t,a){e.exports=a.p+"img/vandyhacks-text.cef468a.svg"},154:function(e,t,a){function i(e){a(164)}var n=a(24)(a(137),a(158),i,"data-v-00cd8692",null);e.exports=n.exports},155:function(e,t,a){function i(e){a(169)}var n=a(24)(null,a(163),i,"data-v-e5a4e0b4",null);e.exports=n.exports},156:function(e,t,a){function i(e){a(165)}var n=a(24)(null,a(159),i,null,null);e.exports=n.exports},157:function(e,t,a){function i(e){a(168)}var n=a(24)(a(138),a(162),i,"data-v-ac7a9824",null);e.exports=n.exports},158:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"faq-item"},[i("div",{staticClass:"question",on:{click:function(t){e.open=!e.open}}},[i("div",{staticClass:"arrow-wrapper"},[i("img",{staticClass:"arrow",class:e.arrowDirection,attrs:{src:a(146)}})]),i("h4",{staticClass:"title"},[e._v(e._s(e.title))])]),i("transition",{attrs:{name:"slide-fade"}},[e.open?i("div",{staticClass:"answer"},[e._t("default")],2):e._e()])],1)},staticRenderFns:[]}},159:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{id:"mlh-trust-badge",href:"https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white",rel:"noopener",target:"_blank"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",alt:"Major League Hacking 2017 Hackathon Season"}})])}]}},160:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"parallax"},[a("div",{staticClass:"parallax-group"},[a("div",{staticClass:"parallax-layer base"},[a("mlhbadge")],1),e._m(0),e._m(1),e._m(2)]),a("div",{staticClass:"parallax-layer base page-content"},[a("div",{staticClass:"description feature-block"},[a("div",{staticClass:"text-contents"},[a("h1",[e._v("Welcome to VandyHacks IV")]),a("separator",{attrs:{white:""}}),a("p",[e._v("Founded in the spring of 2015, VandyHacks was the first collegiate hackathon to call Nashville, Tennessee home. Now, we're proud to bring you VandyHacks IV! From October 20-22, 400+ students from colleges and universities across the nation will gather at Vanderbilt University’s Engineering and Science Building for a weekend of collaboration, innovation, and entrepreneurship. For 36 hours, participants will work together to bring their ideas to life - and have lots of fun doing it! VandyHacks welcomes beginners, and we encourage all students to apply, regardless of major or background.")])],1)]),a("div",{staticClass:"feature-new feature-block"},[a("div",{staticClass:"text-contents"},[a("h1",[e._v("What's new")]),a("separator"),a("div",{staticClass:"row"},[a("infobox",[e._v("Certain vengeful hey scorpion beguiling recast calmly outside across piranha well this fumbling besides and that prudently splashed some hellish jeez away abusive weak this gloated oh crud hence unihibitedly the fluid far more a nutria one ducked darn that against met wow ireful victorious constitutionally a much seagull recast came less a stared mocking more bowed.")]),a("infobox",[e._v("A goodness bawdy shuffled the gradually unwound selfish oh brilliant far dove darn whooped much goat far less rode blubbered wailed house the gazelle gosh as opposite overpaid before and and far and flustered since oriole attentively rethought hamster eagle aside jeez this a smirked as nauseatingly anteater underneath tenaciously since lynx well assisted depending.")]),a("infobox",[e._v("Partook amazingly arose greyhound a unobtrusive wombat mastodon hugged goodness regardless much elusive but thus wild dear opaque more more by a a more rashly however frenetic goodness wow gosh hyena where plankton much indefatigably far a that jeez toward goodness as hello far raccoon temperately overshot wherever abidingly goodness hyena hung.")])],1)],1)]),a("div",{staticClass:"schedule feature-block"},[a("div",{staticClass:"text-contents"},[a("h1",[e._v("Schedule")]),a("separator",{attrs:{white:""}}),a("p",[e._v("As spoiled dolphin jeez neglectfully after less more and less filled antagonistically far and examined while far quail darn far saucily alert circa rabbit or noticeable according wow wherever cuffed alas but creepy congenially the one alertly dwelled scorpion fussy mawkish sordid much far circa next one darn towards more or irrespective antelope simply alas as the gorilla hotly forward along up gibbered where more excepting across boundless massive jeez frowned some tangible mammoth far between far that. Sapien orci elementum commodo etiam eget phasellus mi semper ultrices, ultricies hendrerit non duis aenean morbi aliquet condimentum ipsum ut, himenaeos maecenas nunc et imperdiet conubia ut euismod nec morbi donec vulputate odio molestie tempor consectetur justo mauris velit et, class risus magna laoreet maecenas ut sed accumsan per rutrum, pellentesque iaculis mi pharetra interdum accumsan tellus porttitor lectus amet quisque eros volutpat diam. Curabitur luctus porta himenaeos dictum a amet magna leo himenaeos erat, platea nam imperdiet nisl etiam eros lorem dictumst semper molestie sem tempus turpis augue erat tellus massa dui arcu, tortor ornare ligula augue lorem litora fermentum neque, cras curae a habitant gravida fermentum ligula mattis aenean pulvinar cubilia est tellus risus integer curabitur cubilia nostra interdum, habitant platea nam iaculis sollicitudin aliquet convallis tellus habitant, eu purus ut velit nam id lacinia accumsan porta. Sapien orci elementum commodo etiam eget phasellus mi semper ultrices, ultricies hendrerit non duis aenean morbi aliquet condimentum ipsum ut, himenaeos maecenas nunc et imperdiet conubia ut euismod nec morbi donec vulputate odio molestie tempor consectetur justo mauris velit et, class risus magna laoreet maecenas ut sed accumsan per rutrum, pellentesque iaculis mi pharetra interdum accumsan tellus porttitor lectus amet quisque eros volutpat diam.")])],1)]),a("div",{staticClass:"faq feature-block"},[a("div",{staticClass:"text-contents"},[a("h1",[e._v("FAQ")]),a("separator"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h3",{staticClass:"faq-header"},[e._v("General")]),a("faqitem",{attrs:{title:"I have no idea how to code! What if I've never been to a hackathon?"}},[e._v("\n              Even more reason for you to come! We will be hosting beginners' workshops for you to get started, and our mentors can always help you out along the way. We greatly encourage new hackers to attend, and no prior experience is necessary!\n            ")]),a("h3",{staticClass:"faq-header"},[e._v("Applying")]),a("faqitem",{attrs:{title:"Who can apply?"}},[e._v("\n              Anyone who is 18 years or older (we will be checking ID) and is currently enrolled in college or university with a valid student ID. International students are invited to apply and attend, but we cannot guarantee full travel reimbursement.\n            ")]),a("faqitem",{attrs:{title:"How does registration work?"}},[e._v("\n              Applications will open soon on vandyhacks.orgVandyHacks.org. Acceptance is determined by a variety of factors, and applications will be reviewed by our board on a rolling basis. Once you’re accepted, you’ll receive an email from the VandyHacks team. If you're curious, email us for more info at\n              "),a("a",{attrs:{href:"mailto:info@vandyhacks.org"}},[e._v("info@vandyhacks.org")]),e._v("! ")]),a("h3",{staticClass:"faq-header"},[e._v("Logistics")]),a("faqitem",{attrs:{title:"How do I get there?"}},[e._v("\n              Cars, buses, or flights, depending on location! We'll be sending buses to specific schools with large numbers of applicants.\n            ")]),a("faqitem",{attrs:{title:"Will travel reimbursements be provided?"}},[e._v("\n              Travel reimbursements outside of the bus routes are tentative and will be awarded on a rolling basis.\n            ")]),a("faqitem",{attrs:{title:"Will there be parking available for attendees?"}},[e._v("\n              Yes! Attendees will be able to find parking at the 25th Avenue Garage, conveniently located next to Vanderbilt’s Engineering and Science Building. You can find it here.\n            ")])],1),a("div",{staticClass:"col-md-6"},[a("h3",{staticClass:"faq-header"},[e._v("Event")]),a("faqitem",{attrs:{title:"What should I bring?"}},[e._v("\n              Be sure to bring your photo ID, laptop, phone, chargers, a change of clothes, toiletries, and any other devices you want to use. A government-issued ID is required to rent any hardware.\n            ")]),a("faqitem",{attrs:{title:"Where will I sleep?"}},[e._v("\n              We will have designated quiet rooms, so bring a blanket and pillow!\n            ")]),a("faqitem",{attrs:{title:"What will I eat?"}},[e._v("\n              Meals will be provided throughout the event, starting with dinner on Friday and ending with lunch on Sunday. Snacks will also be provided periodically. Vegetarian and gluten-free options are available. Be sure to designate any allergies or dietary restrictions on your application.\n            ")]),a("faqitem",{attrs:{title:"How are teams formed? Do I need a team?"}},[e._v("\n              Teams are limited to four people in size. If you're applying with a team, we will review all of your team members' applications to determine admission. We will also have a pitch session where attendees can share their ideas and find potential teammates.\n            ")]),a("faqitem",{attrs:{title:"Will there be other activities besides hacking?"}},[e._v("\n              Of course! This year, our hacker experience team has planned a bunch of fun events for attendees to relax. Stay tuned for more info!\n            ")])],1)])],1)]),a("div",{staticClass:"sponsors feature-block"},[a("div",{staticClass:"text-contents"},[a("h1",[e._v("Sponsors")]),a("separator",{attrs:{white:""}}),a("p",[e._v("As spoiled dolphin jeez neglectfully after less more and less filled antagonistically far and examined while far quail darn far saucily alert circa rabbit or noticeable according wow wherever cuffed alas but creepy congenially the one alertly dwelled scorpion fussy mawkish sordid much far circa next one darn towards more or irrespective antelope simply alas as the gorilla hotly forward along up gibbered where more excepting across boundless massive jeez frowned some tangible mammoth far between far that. Sapien orci elementum commodo etiam eget phasellus mi semper ultrices, ultricies hendrerit non duis aenean morbi aliquet condimentum ipsum ut, himenaeos maecenas nunc et imperdiet conubia ut euismod nec morbi donec vulputate odio molestie tempor consectetur justo mauris velit et, class risus magna laoreet maecenas ut sed accumsan per rutrum, pellentesque iaculis mi pharetra interdum accumsan tellus porttitor lectus amet quisque eros volutpat diam. Curabitur luctus porta himenaeos dictum a amet magna leo himenaeos erat, platea nam imperdiet nisl etiam eros lorem dictumst semper molestie sem tempus turpis augue erat tellus massa dui arcu, tortor ornare ligula augue lorem litora fermentum neque, cras curae a habitant gravida fermentum ligula mattis aenean pulvinar cubilia est tellus risus integer curabitur cubilia nostra interdum, habitant platea nam iaculis sollicitudin aliquet convallis tellus habitant, eu purus ut velit nam id lacinia accumsan porta. Sapien orci elementum commodo etiam eget phasellus mi semper ultrices, ultricies hendrerit non duis aenean morbi aliquet condimentum ipsum ut, himenaeos maecenas nunc et imperdiet conubia ut euismod nec morbi donec vulputate odio molestie tempor consectetur justo mauris velit et, class risus magna laoreet maecenas ut sed accumsan per rutrum, pellentesque iaculis mi pharetra interdum accumsan tellus porttitor lectus amet quisque eros volutpat diam.")])],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"parallax-layer deepest"},[i("img",{staticClass:"skyline",attrs:{alt:"Nashville Skyline",src:a(148)}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"parallax-layer deep"},[i("img",{staticClass:"logo",attrs:{alt:"VandyHacks IV",src:a(149)}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"parallax-layer back"},[i("img",{staticClass:"batman-building",attrs:{alt:"AT&T Building",src:a(147)}})])}]}},162:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:{separator:!0,white:e.white}})},staticRenderFns:[]}},163:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"infobox"},[e._t("default")],2)])},staticRenderFns:[]}},164:function(e,t,a){var i=a(140);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(48)("2e0a6ac7",i,!0)},165:function(e,t,a){var i=a(141);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(48)("47faa0ec",i,!0)},166:function(e,t,a){var i=a(142);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(48)("367c4e1c",i,!0)},168:function(e,t,a){var i=a(144);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(48)("28843700",i,!0)},169:function(e,t,a){var i=a(145);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(48)("5031ba5b",i,!0)}});