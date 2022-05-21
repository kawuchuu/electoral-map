(function(){"use strict";var a={8662:function(a,e,r){r(6992),r(8674),r(9601),r(7727);var t=r(9567),n=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("main",[r("InDevNotice"),a.panelOpen?r("MoreInfoPane",{class:a.showPane,attrs:{electorate:a.currentEl}}):a._e(),r("l-map",{staticClass:"map-base",attrs:{zoom:a.zoom,center:a.center}},[r("l-tile-layer",{attrs:{url:a.url,attribution:a.attribution,"tile-size":a.tileSize,options:a.options}}),r("l-geo-json",{staticClass:"vic",attrs:{geojson:a.geojson.aus,options:a.geoOptions}}),a.loaded?a._e():r("div",{staticClass:"load-cover"},[r("div",{staticClass:"load-spinner"})])],1)],1)},o=[],i=r(6198),l=(r(8975),r(2222),r(1539),function(){var a=this,e=a.$createElement,r=a._self._c||e;return a.closedNotice?a._e():r("div",{staticClass:"indev-notice"},[r("div",{staticClass:"filler"}),r("span",{staticClass:"notice"},[a._v("This web app is currently in early development and is not final. Please note some data and information may not be correct.")]),r("span",{staticClass:"x-close",on:{click:a.hideNotice}},[a._v("Ｘ")])])}),p=[],s={data:function(){return{closedNotice:sessionStorage.getItem("closedNotice")}},methods:{hideNotice:function(){window.sessionStorage.setItem("closedNotice",!0),this.closedNotice=!0}}},c=s,m=r(1001),y=(0,m.Z)(c,l,p,!1,null,"436dfafa",null),u=y.exports,d=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"pane-wrapper"},[r("div",{staticClass:"pane"},[r("div",{staticClass:"header"},[r("h2",[a._v(a._s(a.electorate))]),r("span",{staticClass:"close-btn",on:{click:a.closePane}},[a._v("Close")])]),r("div",{staticClass:"pane-content"},[a.info?"error"===a.info?r("p",[a._v("Failed to load electorate...")]):r("div",[r("p",[a._v(a._s(a.info.info.desc))]),r("h3",[a._v("Candidates in order of ballot")]),a._l(a.info.candidates.y2022,(function(e,t){return r("div",{key:t,staticClass:"candidate"},[r("div",{staticClass:"party-colour",style:{backgroundColor:a.partyColour(e.party)}}),e.portrait?r("div",{staticClass:"candidate-img",style:{backgroundImage:"url('/candidates/"+e.name.sur.replace(/[ ']/g,"")+"_"+a.electorate.replace(/[ ]/g,"")+".jpg')"}}):r("div",{staticClass:"candidate-img"}),r("div",{staticClass:"candidate-info"},[r("p",{staticClass:"candidate-name"},[a._v(a._s(e.name.first)+" "+a._s(e.name.sur))]),r("div",{staticClass:"party"},[r("span",[a._v(a._s(e.party))])])])])})),r("p",{staticClass:"footnote"},[a._v("Source: Australian Electoral Commission, viewed "+a._s(a.info.misc.dateUpdated)+"."),r("br"),a._v("Candidate portrait source: Australian Broadcasting Corporation, viewed "+a._s(a.info.misc.dateUpdated)+".")])],2):r("div",{staticClass:"load-spin-wrapper"},[r("div",{staticClass:"load-spinner black"})])])]),r("div",{staticClass:"pane-bg",on:{click:a.closePane}})])},b=[],L=(r(4916),r(5306),function(a){switch(a){case"Australian Labor Party":return"#de3533";case"Liberal Party of Australia":return"#0047ab";case"The Australian Greens":return"#10c25b";case"National":return"#006644";case"Liberal National":return"#1456f1";case"Independent":return"#828282";case"United Australia Party":return"#f8ef21";case"Katter's Australian Party":return"#8a2224";case"Centre Alliance":return"#ff6300";case"Liberal Democratic Party":return"#0F3B6C";case"Pauline Hanson's One Nation":return"#F26C20";case"Animal Justice Party":return"#A5292A";case"Victorian Socialists":return"#000000";case"Australian Values Party":return"#BDAE78";case"Derryn Hinch's Justice Party":return"#012F5D";case"Australian Federation Party":return"#538A2E";case"Australian Citizens Party":return"#656600";case"The Great Australian Party":return"#142860";case"TNL":return"#53C2BD";case"National Party of Australia":return"#006644";case"Sustainable Australia Party - Stop Overdevelopment / Corruption":return"#008751";case"Reason Australia":return"#4BB8B3";case"FUSION: Science, Pirate, Secular, Climate Emergency":return"#c926f2";case"Socialist Alliance":return"#d40000";default:return"black"}}),h=L,f={props:["electorate"],methods:{closePane:function(){this.$parent.panelOpen=!1},partyColour:h},data:function(){return{info:null}},errorCaptured:function(a,e,r){console.log("caught error!"),this.info="error",console.log(r)},mounted:function(){var a=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/electorates/".concat(a.electorate.toLowerCase().replace(/[ ]/g,"_"),".json"));case 3:return r=e.sent,e.next=6,r.json();case 6:t=e.sent,a.info=t,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),a.info="error";case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},v=f,C=(0,m.Z)(v,d,b,!1,null,"09263102",null),g=C.exports,w={name:"App",components:{InDevNotice:u,MoreInfoPane:g},data:function(){return{geojson:{aus:null},url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Electorate data &copy; Commonwealth of Australia (Australian Electoral Commission)2022, &copy; <a href="https://carto.com/attributions">CARTO</a>',zoom:5,center:[-27.5,135],tileSize:256,options:{},polData:r(5873),loaded:!1,panelOpen:!1,currentEl:""}},computed:{geoOptions:function(){return{onEachFeature:this.onEachFeature}},showPane:function(){return this.panelOpen?"active":""},onEachFeature:function(){var a=this;return function(e,r){var t="#000000",n=e.properties.Elect_div,o=a.polData[n],i=!1;if(o)switch(o.party){case"Labor":t="#de3533";break;case"Liberal":t="#0047ab",i=!0;break;case"Greens":t="#10c25b";break;case"National":t="#006644",i=!0;break;case"Liberal National":t="#1456f1",i=!0;break;case"Independent":t="#828282";break;case"United Australia":t="#f8ef21";break;case"Katter's Australian":t="#8a2224";break;case"Centre Alliance":t="#ff6300";break}r.bindTooltip("<h3>".concat(e.properties.Elect_div,'</h3>\n          <p><div class="party-colour" style="background-color: ').concat(t,'"></div>').concat(o?o.party:"Unknown").concat(i?" (Coalition)":"","</p>\n          <p>").concat(o?o.mp:"Unknown","</p>\n          <em>Click for more info</em>"),{permanent:!1,sticky:!0,opacity:1}),r.setStyle({weight:2,color:t}),r.on({mouseover:function(){r.setStyle({weight:5,color:t})},mouseout:function(){r.setStyle({weight:2,color:t})},click:function(){a.panelOpen=!a.panelOpen,a.currentEl=n}})}}},mounted:function(){var a=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/geojson/AUS_2021.json");case 2:return r=e.sent,e.next=5,r.json();case 5:t=e.sent,a.geojson.aus=t,a.loaded=!0;case 8:case"end":return e.stop()}}),e)})))()}},A=w,k=(0,m.Z)(A,n,o,!1,null,null,null),M=k.exports,N=r(5148),B=r(3595),P=r(6512);t.Z.component("l-map",N.Z),t.Z.component("l-geo-json",B.Z),t.Z.component("l-tile-layer",P.Z),t.Z.config.productionTip=!1,new t.Z({render:function(a){return a(M)}}).$mount("#app")},5873:function(a){a.exports=JSON.parse('{"Adelaide":{"party":"Labor","mp":"Steve Georganas"},"Aston":{"party":"Liberal","mp":"Alan Tudge"},"Ballarat":{"party":"Labor","mp":"Catherine King"},"Banks":{"party":"Liberal","mp":"David Coleman"},"Barker":{"party":"Liberal","mp":"Tony Pasin"},"Barton":{"party":"Labor","mp":"Linda Burney"},"Bass":{"party":"Liberal","mp":"Bridget Archer"},"Bean":{"party":"Labor","mp":"David Smith"},"Bendigo":{"party":"Labor","mp":"Lisa Chesters"},"Bennelong":{"party":"Unclear (as of 21/05/22 23:37)","mp":"Liberal Ahead"},"Berowra":{"party":"Liberal","mp":"Julian Leeser"},"Blair":{"party":"Labor","mp":"Shayne Neumann"},"Blaxland":{"party":"Labor","mp":"Jason Clare"},"Bonner":{"party":"Liberal National","mp":"Ross Vasta"},"Boothby":{"party":"Labor","mp":"Louise Miller-Frost"},"Bowman":{"party":"Liberal National","mp":"Henry Pike"},"Braddon":{"party":"Liberal","mp":"Gavin Pearce"},"Bradfield":{"party":"Liberal","mp":"Paul Fletcher"},"Brand":{"party":"Labor","mp":"Madeleine King"},"Brisbane":{"party":"Unclear (as of 21/05/22 23:41)","mp":"Greens Ahead"},"Bruce":{"party":"Labor","mp":"Julian Hill"},"Burt":{"party":"Labor","mp":"Matt Keogh"},"Calare":{"party":"National","mp":"Andrew Gee"},"Calwell":{"party":"Labor","mp":"Maria Vamvakinou"},"Canberra":{"party":"Labor","mp":"Alicia Payne"},"Canning":{"party":"Liberal","mp":"Andrew Hastie"},"Capricornia":{"party":"Liberal National","mp":"Michelle Landry"},"Casey":{"party":"Liberal","mp":"Aaron Violi"},"Chifley":{"party":"Labor","mp":"Ed Husic"},"Chisholm":{"party":"Labor","mp":"Carina Garland"},"Clark":{"party":"Independent","mp":"Andrew Wilkie"},"Cook":{"party":"Liberal","mp":"Scott Morrison"},"Cooper":{"party":"Labor","mp":"Ged Kearney"},"Corangamite":{"party":"Labor","mp":"Libby Coker"},"Corio":{"party":"Labor","mp":"Richard Marles"},"Cowan":{"party":"Labor","mp":"Anne Aly"},"Cowper":{"party":"National","mp":"Pat Conaghan"},"Cunningham":{"party":"Labor","mp":"Alison Byrnes"},"Curtin":{"party":"Unclear (as of 21/05/22 23:44)","mp":"Independent Ahead"},"Dawson":{"party":"Liberal National","mp":"Andrew Willcox"},"Deakin":{"party":"Unclear (as of 22/05/22 00:10)","mp":"Labor Ahead"},"Dickson":{"party":"Liberal National","mp":"Peter Dutton"},"Dobell":{"party":"Labor","mp":"Emma McBride"},"Dunkley":{"party":"Labor","mp":"Peta Murphy"},"Durack":{"party":"Liberal","mp":"Melissa Price"},"Eden-Monaro":{"party":"Labor","mp":"Kristy McBain"},"Fadden":{"party":"Liberal National","mp":"Stuart Robert"},"Fairfax":{"party":"Liberal National","mp":"Ted O\'Brien"},"Farrer":{"party":"Liberal","mp":"Sussan Ley"},"Fenner":{"party":"Labor","mp":"Andrew Leigh"},"Fisher":{"party":"Liberal National","mp":"Andrew Wallace"},"Flinders":{"party":"Liberal","mp":"Zoe McKenzie"},"Flynn":{"party":"Liberal National","mp":"Colin Boyce"},"Forde":{"party":"Liberal National","mp":"Bert Van Manen"},"Forrest":{"party":"Liberal","mp":"Nola Marino"},"Fowler":{"party":"Independent","mp":"Dai Le"},"Franklin":{"party":"Labor","mp":"Julie Collins"},"Fraser":{"party":"Labor","mp":"Daniel Mulino"},"Fremantle":{"party":"Labor","mp":"Josh Wilson"},"Gellibrand":{"party":"Labor","mp":"Tim Watts"},"Gilmore":{"party":"Unclear (as of 21/05/22 23:49)","mp":"Liberal Ahead"},"Gippsland":{"party":"National","mp":"Darren Chester"},"Goldstein":{"party":"Independent","mp":"Zoe Daniel"},"Gorton":{"party":"Labor","mp":"Brendan O\'Connor"},"Grayndler":{"party":"Labor","mp":"Anthony Albanese"},"Greenway":{"party":"Labor","mp":"Michelle Rowland"},"Grey":{"party":"Liberal","mp":"Rowan Ramsey"},"Griffith":{"party":"Unclear (as of 21/05/22 23:51)","mp":"Terri Butler"},"Groom":{"party":"Liberal National","mp":"Garth Hamilton"},"Hasluck":{"party":"Labor","mp":"Tania Lawrence"},"Hawke":{"party":"Labor","mp":"Sam Rae"},"Herbert":{"party":"Liberal National","mp":"Phillip Thompson"},"Higgins":{"party":"Labor","mp":"Michelle Ananda-Rajah"},"Hindmarsh":{"party":"Labor","mp":"Mark Butler"},"Hinkler":{"party":"Liberal National","mp":"Keith Pitt"},"Holt":{"party":"Labor","mp":"Cassandra Fernado"},"Hotham":{"party":"Labor","mp":"Clare O\'Neil"},"Hughes":{"party":"Liberal","mp":"Jenny Ware"},"Hume":{"party":"Liberal","mp":"Angus Taylor"},"Hunter":{"party":"Labor","mp":"Dan Repacholi"},"Indi":{"party":"Independent","mp":"Helen Haines"},"Isaacs":{"party":"Labor","mp":"Mark Dreyfus"},"Jagajaga":{"party":"Labor","mp":"Kate Thwaites"},"Kennedy":{"party":"Katter\'s Australian","mp":"Bob Katter"},"Kingsford Smith":{"party":"Labor","mp":"Matt Thistlethwaite"},"Kingston":{"party":"Labor","mp":"Amanda Rishworth"},"Kooyong":{"party":"Unclear (as of 21/05/22 23:53)","mp":"Independent Ahead"},"La Trobe":{"party":"Liberal","mp":"Jason Wood"},"Lalor":{"party":"Labor","mp":"Joanne Ryan"},"Leichhardt":{"party":"Liberal National","mp":"Warren Entsch"},"Lilley":{"party":"Labor","mp":"Anika Wells"},"Lindsay":{"party":"Liberal","mp":"Melissa McIntosh"},"Lingiari":{"party":"Unclear (as of 21/05/22 23:54)","mp":"Labor Ahead"},"Longman":{"party":"Liberal National","mp":"Terry Young"},"Lyne":{"party":"National","mp":"David Gillespie"},"Lyons":{"party":"Unclear (as of 21/05/22 23:55)","mp":"Labor Ahead"},"Macarthur":{"party":"Labor","mp":"Mike Freelander"},"Mackellar":{"party":"Independent","mp":"Sophie Scamps"},"Macnamara":{"party":"Unclear (as of 21/05/22 23:56)","mp":"Labor Ahead"},"Macquarie":{"party":"Labor","mp":"Susan Templeman"},"Makin":{"party":"Labor","mp":"Tony Zappia"},"Mallee":{"party":"National","mp":"Anne Webster"},"Maranoa":{"party":"Liberal National","mp":"David Littleproud"},"Maribyrnong":{"party":"Labor","mp":"Bill Shorten"},"Mayo":{"party":"Centre Alliance","mp":"Rebekha Sharkie"},"McEwen":{"party":"Labor","mp":"Rob Mitchell"},"McMahon":{"party":"Labor","mp":"Chris Bowen"},"McPherson":{"party":"Liberal National","mp":"Karen Andrews"},"Melbourne":{"party":"Greens","mp":"Adam Bandt"},"Menzies":{"party":"Unclear (as of 21/05/22 23:57)","mp":"Liberal Ahead"},"Mitchell":{"party":"Liberal","mp":"Alex Hawke"},"Monash":{"party":"Liberal","mp":"Russell Broadbent"},"Moncrieff":{"party":"Liberal National","mp":"Angie Bell"},"Moore":{"party":"Unclear (as of 21/05/22 23:58)","mp":"Ian Goodenough"},"Moreton":{"party":"Labor","mp":"Graham Perett"},"New England":{"party":"National","mp":"Barnaby Joyce"},"Newcastle":{"party":"Labor","mp":"Sharon Claydon"},"Nicholls":{"party":"National","mp":"Damian Drum"},"North Sydney":{"party":"Independent","mp":"Kylea Tink"},"O\'Connor":{"party":"Liberal","mp":"Rick Wilson"},"Oxley":{"party":"Labor","mp":"Milton Dick"},"Page":{"party":"National","mp":"Kevin Hogan"},"Parkes":{"party":"National","mp":"Mark Coulton"},"Parramatta":{"party":"Labor","mp":"Andrew Charlton"},"Paterson":{"party":"Labor","mp":"Meryl Swanson"},"Pearce":{"party":"Labor","mp":"Tracey Roberts"},"Perth":{"party":"Labor","mp":"Patrick Gorman"},"Petrie":{"party":"Liberal National","mp":"Luke Howarth"},"Rankin":{"party":"Labor","mp":"Jim Chalmers"},"Reid":{"party":"Labor","mp":"Sally Sitou"},"Richmond":{"party":"Labor","mp":"Justine Elliot"},"Riverina":{"party":"National","mp":"Michael McCormack"},"Robertson":{"party":"Labor","mp":"Gordon Reid"},"Ryan":{"party":"Greens","mp":"Elizabeth Watson-Brown"},"Scullin":{"party":"Labor","mp":"Andrew Giles"},"Shortland":{"party":"Labor","mp":"Pat Conroy"},"Solomon":{"party":"Labor","mp":"Luke Gosling"},"Spence":{"party":"Labor","mp":"Matt Burnell"},"Sturt":{"party":"Liberal","mp":"James Stevens"},"Swan":{"party":"Labor","mp":"Zaneta Mascarenhas"},"Sydney":{"party":"Labor","mp":"Tanya Plibersek"},"Tangney":{"party":"Labor","mp":"Sam Lim"},"Wannon":{"party":"Liberal","mp":"Dan Tehan"},"Warringah":{"party":"Independent","mp":"Zali Steggall"},"Watson":{"party":"Labor","mp":"Tony Burke"},"Wentworth":{"party":"Unclear (as of 22/05/22 00:03)","mp":"Independent Ahead"},"Werriwa":{"party":"Labor","mp":"Anne Stanley"},"Whitlam":{"party":"Labor","mp":"Stephen Jones"},"Wide Bay":{"party":"Liberal National","mp":"Llew O\'Brien"},"Wills":{"party":"Labor","mp":"Peter Khalil"},"Wright":{"party":"Liberal National","mp":"Scott Buchholz"}}')}},e={};function r(t){var n=e[t];if(void 0!==n)return n.exports;var o=e[t]={id:t,loaded:!1,exports:{}};return a[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=a,function(){var a=[];r.O=function(e,t,n,o){if(!t){var i=1/0;for(c=0;c<a.length;c++){t=a[c][0],n=a[c][1],o=a[c][2];for(var l=!0,p=0;p<t.length;p++)(!1&o||i>=o)&&Object.keys(r.O).every((function(a){return r.O[a](t[p])}))?t.splice(p--,1):(l=!1,o<i&&(i=o));if(l){a.splice(c--,1);var s=n();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[t,n,o]}}(),function(){r.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(e,{a:e}),e}}(),function(){r.d=function(a,e){for(var t in e)r.o(e,t)&&!r.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){r.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){r.nmd=function(a){return a.paths=[],a.children||(a.children=[]),a}}(),function(){var a={143:0};r.O.j=function(e){return 0===a[e]};var e=function(e,t){var n,o,i=t[0],l=t[1],p=t[2],s=0;if(i.some((function(e){return 0!==a[e]}))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(p)var c=p(r)}for(e&&e(t);s<i.length;s++)o=i[s],r.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return r.O(c)},t=self["webpackChunkelectoral_map"]=self["webpackChunkelectoral_map"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(8662)}));t=r.O(t)})();
//# sourceMappingURL=app-legacy.8e7b26a1.js.map