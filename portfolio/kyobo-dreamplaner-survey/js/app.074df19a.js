(function(t){function e(e){for(var o,r,a=e[0],u=e[1],l=e[2],c=0,d=[];c<a.length;c++)r=a[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==s[u]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},i=[];function r(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8069b63d"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=s[t]=[e,o]}));e.push(n[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=r(t);var l=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}s[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4dcb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{click:t.onCallNativeInterface}},[n("router-view")],1)},i=[],r=(n("466d"),n("ac1f"),n("caad"),{created:function(){window.getApp=this,window.onCallNativeInterfaceFlickingStop=function(){var t=navigator.userAgent;t.match(/(\(iPod|\(iPhone|\(iPad)/)?window.webkit.messageHandlers.iosHandler.postMessage("onWebViewFlickingStop"):t.match(/(Android)/)&&window.Jsinterface.onwebviewflickingstop()},window.onCallNativeInterfaceFlickingStart=function(){var t=navigator.userAgent;t.match(/(\(iPod|\(iPhone|\(iPad)/)?window.webkit.messageHandlers.iosHandler.postMessage("onWebViewFlickingStart"):t.match(/(Android)/)&&window.Jsinterface.onwebviewflickingstart()}},methods:{onCallNativeInterface:function(t){var e=["button","input","a","span","label","select","textarea","img"],n=navigator.userAgent;!e.includes(t.target.tagName.toLowerCase())&&t.target.className.indexOf("noApp")<0&&t.target.className.indexOf("vue-slider")<0&&(n.match(/(\(iPod|\(iPhone|\(iPad)/)?window.webkit.messageHandlers.iosHandler.postMessage("onWebViewTouch"):n.match(/(Android)/)?window.Jsinterface.onwebviewtouch():console.log("pc",t))}}}),a=r,u=n("2877"),l=Object(u["a"])(a,s,i,!1,null,null,null),c=l.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"survey"}},[n("div",{staticClass:"inner"},[n("div",{staticClass:"questionBox",class:{hidden:-1!=t.showResultDataNo}},[n("ul",{ref:"listBox",staticClass:"listBox"},t._l(t.questionList,(function(e,o){return n("li",{key:"questionList-"+o,class:{active:t.showQuestionNo==e.key}},[n("div",{staticClass:"titleBox"},[n("h2",{domProps:{innerHTML:t._s(e.question)}})]),n("div",{staticClass:"answerBox"},t._l(e.answer,(function(s,i){return n("button",{key:"answer-"+o+"-"+i,class:{active:s.isSelected},attrs:{type:"button"},on:{click:function(n){return t.onClickAnswer(e.key,s,i)}}},[t._v(" "+t._s(s.title)+" ")])})),0)])})),0),n("div",{staticClass:"stepBox",class:"step"+t.stepCount},[n("ul",t._l(4,(function(t,e){return n("li",{key:"step-"+e})})),0),n("div",{staticClass:"stepBar"})])]),n("div",{staticClass:"resultBox",class:{active:-1!=t.showResultDataNo}},[n("h2",[t._v("시뮬레이션 결과")]),t._l(t.resultDataList,(function(e,o){return n("div",{key:"resultDataList-"+o,class:{active:t.showResultDataNo==e.key},attrs:{id:"result"+(o+1)}},[n("div",{staticClass:"inner"},[n("div",{staticClass:"visual"},[n("h3",{domProps:{innerHTML:t._s(t.resultDataList[o].title)}})]),n("ul",{staticClass:"noticeList"},t._l(e.text,(function(e,o){return n("li",{key:"text-"+o},[n("p",{domProps:{innerHTML:t._s(e.tit)}}),n("ul",t._l(e.txt,(function(e,o){return n("li",{key:o,domProps:{innerHTML:t._s(e)}})})),0)])})),0)])])}))],2),n("div",{staticClass:"btnBox"},[t.showResultDataNo>0?n("button",{attrs:{type:"button"},on:{click:function(e){return t.resetSurvey()}}},[t._v(" 처음으로 ")]):t._e(),t.stepCount>1&&-1==t.showResultDataNo?n("button",{staticClass:"btnPrev",attrs:{type:"button"},on:{click:function(e){return t.onClickPrev()}}},[t._v(" 이전 ")]):t._e()]),n("PopupTabMenu")],1)])},g=[],f=(n("4de4"),n("fb6a"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popupTabMenu"}},[n("div",{staticClass:"inner"},[n("ul",{staticClass:"tabTitle"},t._l(t.tabDataList,(function(e,o){return n("li",{key:"tabTitle-"+o,on:{click:function(e){return t.showPopup(o)}}},[n("span",[t._v(t._s(e.title))])])})),0),n("transition",{attrs:{name:"fadeToggle",mode:"out-in"}},[t.isTabShow?n("div",{staticClass:"tabContents"},[n("div",[t._l(t.tabDataList,(function(e,o){return n("div",{key:"tabContent-"+o,class:{active:t.tabContentNum==o}},[n("img",{attrs:{src:""+e.content,alt:""}})])})),n("button",{attrs:{type:"button"},on:{click:function(e){return t.popupToggle()}}},[t._v("닫기")])],2)]):t._e()])],1)])}),h=[],b={data:function(){return{tabDataList:[{title:"만성질환이란?",content:n("cd65")},{title:"만성질환 관리",content:n("cd25")},{title:"추천대상",content:n("c89c")},{title:"유의사항",content:n("7b0e")}],tabContentNum:0,isTabShow:!1}},methods:{showPopup:function(t){this.tabContentNum=t,this.popupToggle()},popupToggle:function(){this.isTabShow=!this.isTabShow}}},v=b,w=Object(u["a"])(v,f,h,!1,null,null,null),m=w.exports,y={components:{PopupTabMenu:m},data:function(){return{history:[],showQuestionNo:1,showResultDataNo:-1,questionList:[{key:1,question:"<strong>당뇨, 고혈압, 고지혈증</strong> 등<br>만성 질환을 보유하고 계십니까?",answer:[{title:"네",gotoQuestion:2,resultPage:-1,isSelected:!1},{title:"아니오",gotoQuestion:-1,resultPage:1,isSelected:!1}]},{key:2,question:"3개월 이내에 <strong>의료행위<br>(입원, 수술, 재검사필요소견)</strong>를<br>받은 적이 있었습니까?</span>",answer:[{title:"네",gotoQuestion:-1,resultPage:2,isSelected:!1},{title:"아니오",gotoQuestion:3,resultPage:-1,isSelected:!1}]},{key:3,question:"2년 이내에 <strong>입원, 수술<br>(제왕절개 포함)</strong> 경험이 있었습니까?",answer:[{title:"네",gotoQuestion:4,resultPage:-1,isSelected:!1},{title:"아니오",gotoQuestion:5,resultPage:-1,isSelected:!1}]},{key:4,question:"5년 이내에 <strong>암, 협심증, 심근경색,<br>뇌졸중</strong> 진단을 받은 적이 있었습니까?",answer:[{title:"네",gotoQuestion:-1,resultPage:2,isSelected:!1},{title:"아니오",gotoQuestion:-1,resultPage:3,isSelected:!1}]},{key:5,question:"5년 이내에 <strong>암, 간경화, 투석, 파킨슨,<br>루게릭</strong> 진단을 받은 적이 있었습니까?",answer:[{title:"네",gotoQuestion:-1,resultPage:2,isSelected:!1},{title:"아니오",gotoQuestion:-1,resultPage:4,isSelected:!1}]}],resultDataList:[{key:1,title:"최근에 병원을 방문한 이력이 없으시면<br><strong>일반 보험</strong>으로 심사 받아보세요."},{key:2,title:"고객님의 <strong>자세한 건강 정보</strong>로 심사가<br>필요합니다."},{key:3,title:"만성질환이 있어도 초간편보험<br><strong>(무)교보초간편가입건강보험(갱신형)</strong><br>가입이 가능합니다.",text:[{tit:"고지 항목 축소로 가입대상 확대",txt:["3.5 고지"]},{tit:"<stonrg>3대 질병 중심</strong> 다양한 <strong>특약</strong>",txt:["28종<br>(중증 유병자 위한 보장 강화)"]},{tit:"갱신 보장 개발로 부담 없는<br><strong>보험료</strong>"}]},{key:4,title:"질환이나 병력이 있어도 간편보험<br><strong>(무)교보간편가입건강보험</strong> 가입이<br>가능합니다.",text:[{tit:"고지 항목 3개로 완화된 보험 가입",txt:["3.2.5 고지"]},{tit:"<strong>다양한 특약</strong> 부과로 맞춤설계 우수",txt:["51종<br>(갱신 37종 + 비갱신 14종)"]},{tit:"경쟁력 있는 <strong>보장</strong>",txt:["녹내장, 관절염 수술","넓은 납입면제 범위<br>(재해장해 50% + 3대 질병 진단)"]}]}],stepCount:1,flag:!1}},methods:{onClickAnswer:function(t,e,n){var o=this;if(!this.flag){this.flag=!0;var s=Array.prototype.slice.call(this.questionList).filter((function(e){return e.key==t}));s[0].answer[n].isSelected=!0,this.history.push(t),this.stepCount=this.history.length+1,this.stepCount>this.resultDataList.length&&(this.stepCount=this.resultDataList.length),1!=e.resultPage&&2!=e.resultPage||(this.stepCount=4),setTimeout((function(){var t=e.resultPage>0,n=e.gotoQuestion>0;o.showQuestionNo=n?e.gotoQuestion:o.showQuestionNo,o.showResultDataNo=t?e.resultPage:-1,o.flag=!1}),500)}},onClickPrev:function(){var t=this.history[this.history.length-1];t&&(this.showResultDataNo=-1,this.showQuestionNo=t,this.history=this.history.slice(0,-1),this.stepCount--,this.resetBtnClass())},resetBtnClass:function(){var t=this.$refs.listBox.querySelectorAll("button");t.forEach((function(t){t.classList.remove("active")})),Array.prototype.forEach.call(this.questionList,(function(t){t.answer.forEach((function(t){t.isSelected=!1}))}))},resetSurvey:function(){this.resetBtnClass(),this.history=[],this.stepCount=1,this.showQuestionNo=1,this.showResultDataNo=-1}}},k=y,C=Object(u["a"])(k,d,g,!1,null,null,null),P=C.exports;o["a"].use(p["a"]);var _=[{path:"/home",name:"Home",component:P},{path:"/",name:"Intro",component:function(){return n.e("about").then(n.bind(null,"9d47"))}}],x=new p["a"]({routes:_}),S=x,N=n("2f62");o["a"].use(N["a"]);var T=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("4dcb");o["a"].config.productionTip=!1,new o["a"]({router:S,store:T,render:function(t){return t(c)}}).$mount("#app")},"7b0e":function(t,e,n){t.exports=n.p+"img/img_popup_04.05a1220d.png"},c89c:function(t,e,n){t.exports=n.p+"img/img_popup_03.c81d9c12.png"},cd25:function(t,e,n){t.exports=n.p+"img/img_popup_02.58eb7e83.png"},cd65:function(t,e,n){t.exports=n.p+"img/img_popup_01.190eea3f.png"}});
//# sourceMappingURL=app.074df19a.js.map