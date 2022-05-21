(function(){"use strict";var a={8662:function(a,e,r){var t=r(8935),n=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("main",[r("InDevNotice"),a.panelOpen?r("MoreInfoPane",{class:a.showPane,attrs:{electorate:a.currentEl}}):a._e(),r("l-map",{staticClass:"map-base",attrs:{zoom:a.zoom,center:a.center}},[r("l-tile-layer",{attrs:{url:a.url,attribution:a.attribution,"tile-size":a.tileSize,options:a.options}}),r("l-geo-json",{staticClass:"vic",attrs:{geojson:a.geojson.aus,options:a.geoOptions}}),a.loaded?a._e():r("div",{staticClass:"load-cover"},[r("div",{staticClass:"load-spinner"})])],1)],1)},o=[],i=function(){var a=this,e=a.$createElement,r=a._self._c||e;return a.closedNotice?a._e():r("div",{staticClass:"indev-notice"},[r("div",{staticClass:"filler"}),r("span",{staticClass:"notice"},[a._v("This web app is currently in early development and is not final. Please note some data and information may not be correct.")]),r("span",{staticClass:"x-close",on:{click:a.hideNotice}},[a._v("Ｘ")])])},l=[],p={data(){return{closedNotice:sessionStorage.getItem("closedNotice")}},methods:{hideNotice(){window.sessionStorage.setItem("closedNotice",!0),this.closedNotice=!0}}},s=p,c=r(1001),y=(0,c.Z)(s,i,l,!1,null,"436dfafa",null),m=y.exports,d=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"pane-wrapper"},[r("div",{staticClass:"pane"},[r("div",{staticClass:"header"},[r("h2",[a._v(a._s(a.electorate))]),r("span",{staticClass:"close-btn",on:{click:a.closePane}},[a._v("Close")])]),r("div",{staticClass:"pane-content"},[a.info?"error"===a.info?r("p",[a._v("Failed to load electorate...")]):r("div",[r("p",[a._v(a._s(a.info.info.desc))]),r("h3",[a._v("Candidates in order of ballot")]),a._l(a.info.candidates.y2022,(function(e,t){return r("div",{key:t,staticClass:"candidate"},[r("div",{staticClass:"party-colour",style:{backgroundColor:a.partyColour(e.party)}}),e.portrait?r("div",{staticClass:"candidate-img",style:{backgroundImage:"url('/candidates/"+e.name.sur.replace(/[ ']/g,"")+"_"+a.electorate.replace(/[ ]/g,"")+".jpg')"}}):r("div",{staticClass:"candidate-img"}),r("div",{staticClass:"candidate-info"},[r("p",{staticClass:"candidate-name"},[a._v(a._s(e.name.first)+" "+a._s(e.name.sur))]),r("div",{staticClass:"party"},[r("span",[a._v(a._s(e.party))])])])])})),r("p",{staticClass:"footnote"},[a._v("Source: Australian Electoral Commission, viewed "+a._s(a.info.misc.dateUpdated)+"."),r("br"),a._v("Candidate portrait source: Australian Broadcasting Corporation, viewed "+a._s(a.info.misc.dateUpdated)+".")])],2):r("div",{staticClass:"load-spin-wrapper"},[r("div",{staticClass:"load-spinner black"})])])]),r("div",{staticClass:"pane-bg",on:{click:a.closePane}})])},u=[];const b=a=>{switch(a){case"Australian Labor Party":return"#de3533";case"Liberal Party of Australia":return"#0047ab";case"The Australian Greens":return"#10c25b";case"National":return"#006644";case"Liberal National":return"#1456f1";case"Independent":return"#828282";case"United Australia Party":return"#f8ef21";case"Katter's Australian Party":return"#8a2224";case"Centre Alliance":return"#ff6300";case"Liberal Democratic Party":return"#0F3B6C";case"Pauline Hanson's One Nation":return"#F26C20";case"Animal Justice Party":return"#A5292A";case"Victorian Socialists":return"#000000";case"Australian Values Party":return"#BDAE78";case"Derryn Hinch's Justice Party":return"#012F5D";case"Australian Federation Party":return"#538A2E";case"Australian Citizens Party":return"#656600";case"The Great Australian Party":return"#142860";case"TNL":return"#53C2BD";case"National Party of Australia":return"#006644";case"Sustainable Australia Party - Stop Overdevelopment / Corruption":return"#008751";case"Reason Australia":return"#4BB8B3";case"FUSION: Science, Pirate, Secular, Climate Emergency":return"#c926f2";case"Socialist Alliance":return"#d40000";default:return"black"}};var L=b,h={props:["electorate"],methods:{closePane(){this.$parent.panelOpen=!1},partyColour:L},data(){return{info:null}},errorCaptured(a,e,r){console.log("caught error!"),this.info="error",console.log(r)},async mounted(){try{const a=await fetch(`/electorates/${this.electorate.toLowerCase().replace(/[ ]/g,"_")}.json`),e=await a.json();this.info=e}catch(a){this.info="error"}}},f=h,C=(0,c.Z)(f,d,u,!1,null,"09263102",null),g=C.exports,v={name:"App",components:{InDevNotice:m,MoreInfoPane:g},data(){return{geojson:{aus:null},url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Electorate data &copy; Commonwealth of Australia (Australian Electoral Commission)2022, &copy; <a href="https://carto.com/attributions">CARTO</a>',zoom:5,center:[-27.5,135],tileSize:256,options:{},polData:r(5873),loaded:!1,panelOpen:!1,currentEl:""}},computed:{geoOptions(){return{onEachFeature:this.onEachFeature}},showPane(){return this.panelOpen?"active":""},onEachFeature(){return(a,e)=>{let r="#000000";const t=a.properties.Elect_div,n=this.polData[t];let o=!1;if(n)switch(n.party){case"Labor":r="#de3533";break;case"Liberal":r="#0047ab",o=!0;break;case"Greens":r="#10c25b";break;case"National":r="#006644",o=!0;break;case"Liberal National":r="#1456f1",o=!0;break;case"Independent":r="#828282";break;case"United Australia":r="#f8ef21";break;case"Katter's Australian":r="#8a2224";break;case"Centre Alliance":r="#ff6300";break}e.bindTooltip(`<h3>${a.properties.Elect_div}</h3>\n          <p><div class="party-colour" style="background-color: ${r}"></div>${n?n.party:"Unknown"}${o?" (Coalition)":""}</p>\n          <p>${n?n.mp:"Unknown"}</p>\n          <em>Click for more info</em>`,{permanent:!1,sticky:!0,opacity:1}),e.setStyle({weight:2,color:r}),e.on({mouseover:()=>{e.setStyle({weight:5,color:r})},mouseout:()=>{e.setStyle({weight:2,color:r})},click:()=>{this.panelOpen=!this.panelOpen,this.currentEl=t}})}}},async mounted(){const a=await fetch("/geojson/AUS_2021.json"),e=await a.json();this.geojson.aus=e,this.loaded=!0}},A=v,w=(0,c.Z)(A,n,o,!1,null,null,null),k=w.exports,M=r(5148),N=r(3595),S=r(6512);t.Z.component("l-map",M.Z),t.Z.component("l-geo-json",N.Z),t.Z.component("l-tile-layer",S.Z),t.Z.config.productionTip=!1,new t.Z({render:a=>a(k)}).$mount("#app")},5873:function(a){a.exports=JSON.parse('{"Adelaide":{"party":"Labor","mp":"Steve Georganas"},"Aston":{"party":"Liberal","mp":"Alan Tudge"},"Ballarat":{"party":"Labor","mp":"Catherine King"},"Banks":{"party":"Liberal","mp":"David Coleman"},"Barker":{"party":"Liberal","mp":"Tony Pasin"},"Barton":{"party":"Labor","mp":"Linda Burney"},"Bass":{"party":"Unclear (as of 22/05/22 01:58)","mp":"Liberal Ahead"},"Bean":{"party":"Labor","mp":"David Smith"},"Bendigo":{"party":"Labor","mp":"Lisa Chesters"},"Bennelong":{"party":"Unclear (as of 22/05/22 01:55)","mp":"Labor Ahead"},"Berowra":{"party":"Liberal","mp":"Julian Leeser"},"Blair":{"party":"Labor","mp":"Shayne Neumann"},"Blaxland":{"party":"Labor","mp":"Jason Clare"},"Bonner":{"party":"Liberal National","mp":"Ross Vasta"},"Boothby":{"party":"Labor","mp":"Louise Miller-Frost"},"Bowman":{"party":"Liberal National","mp":"Henry Pike"},"Braddon":{"party":"Liberal","mp":"Gavin Pearce"},"Bradfield":{"party":"Liberal","mp":"Paul Fletcher"},"Brand":{"party":"Labor","mp":"Madeleine King"},"Brisbane":{"party":"Unclear (as of 21/05/22 23:41)","mp":"Greens Ahead"},"Bruce":{"party":"Labor","mp":"Julian Hill"},"Burt":{"party":"Labor","mp":"Matt Keogh"},"Calare":{"party":"National","mp":"Andrew Gee"},"Calwell":{"party":"Labor","mp":"Maria Vamvakinou"},"Canberra":{"party":"Labor","mp":"Alicia Payne"},"Canning":{"party":"Liberal","mp":"Andrew Hastie"},"Capricornia":{"party":"Liberal National","mp":"Michelle Landry"},"Casey":{"party":"Unclear (as of 22/05/22 01:55)","mp":"Liberal Ahead"},"Chifley":{"party":"Labor","mp":"Ed Husic"},"Chisholm":{"party":"Labor","mp":"Carina Garland"},"Clark":{"party":"Independent","mp":"Andrew Wilkie"},"Cook":{"party":"Liberal","mp":"Scott Morrison"},"Cooper":{"party":"Labor","mp":"Ged Kearney"},"Corangamite":{"party":"Labor","mp":"Libby Coker"},"Corio":{"party":"Labor","mp":"Richard Marles"},"Cowan":{"party":"Labor","mp":"Anne Aly"},"Cowper":{"party":"Unclear (as of 22/05/22 01:57)","mp":"National Ahead"},"Cunningham":{"party":"Labor","mp":"Alison Byrnes"},"Curtin":{"party":"Independent","mp":"Kate Chaney"},"Dawson":{"party":"Liberal National","mp":"Andrew Willcox"},"Deakin":{"party":"Unclear (as of 22/05/22 00:10)","mp":"Labor Ahead"},"Dickson":{"party":"Liberal National","mp":"Peter Dutton"},"Dobell":{"party":"Labor","mp":"Emma McBride"},"Dunkley":{"party":"Labor","mp":"Peta Murphy"},"Durack":{"party":"Liberal","mp":"Melissa Price"},"Eden-Monaro":{"party":"Labor","mp":"Kristy McBain"},"Fadden":{"party":"Liberal National","mp":"Stuart Robert"},"Fairfax":{"party":"Liberal National","mp":"Ted O\'Brien"},"Farrer":{"party":"Liberal","mp":"Sussan Ley"},"Fenner":{"party":"Labor","mp":"Andrew Leigh"},"Fisher":{"party":"Liberal National","mp":"Andrew Wallace"},"Flinders":{"party":"Liberal","mp":"Zoe McKenzie"},"Flynn":{"party":"Liberal National","mp":"Colin Boyce"},"Forde":{"party":"Liberal National","mp":"Bert Van Manen"},"Forrest":{"party":"Liberal","mp":"Nola Marino"},"Fowler":{"party":"Independent","mp":"Dai Le"},"Franklin":{"party":"Labor","mp":"Julie Collins"},"Fraser":{"party":"Labor","mp":"Daniel Mulino"},"Fremantle":{"party":"Labor","mp":"Josh Wilson"},"Gellibrand":{"party":"Labor","mp":"Tim Watts"},"Gilmore":{"party":"Unclear (as of 21/05/22 23:49)","mp":"Liberal Ahead"},"Gippsland":{"party":"National","mp":"Darren Chester"},"Goldstein":{"party":"Independent","mp":"Zoe Daniel"},"Gorton":{"party":"Labor","mp":"Brendan O\'Connor"},"Grayndler":{"party":"Labor","mp":"Anthony Albanese"},"Greenway":{"party":"Labor","mp":"Michelle Rowland"},"Grey":{"party":"Liberal","mp":"Rowan Ramsey"},"Griffith":{"party":"Unclear (as of 21/05/22 23:51)","mp":"Greens Ahead"},"Groom":{"party":"Liberal National","mp":"Garth Hamilton"},"Hasluck":{"party":"Labor","mp":"Tania Lawrence"},"Hawke":{"party":"Labor","mp":"Sam Rae"},"Herbert":{"party":"Liberal National","mp":"Phillip Thompson"},"Higgins":{"party":"Labor","mp":"Michelle Ananda-Rajah"},"Hindmarsh":{"party":"Labor","mp":"Mark Butler"},"Hinkler":{"party":"Liberal National","mp":"Keith Pitt"},"Holt":{"party":"Labor","mp":"Cassandra Fernado"},"Hotham":{"party":"Labor","mp":"Clare O\'Neil"},"Hughes":{"party":"Liberal","mp":"Jenny Ware"},"Hume":{"party":"Liberal","mp":"Angus Taylor"},"Hunter":{"party":"Labor","mp":"Dan Repacholi"},"Indi":{"party":"Independent","mp":"Helen Haines"},"Isaacs":{"party":"Labor","mp":"Mark Dreyfus"},"Jagajaga":{"party":"Labor","mp":"Kate Thwaites"},"Kennedy":{"party":"Katter\'s Australian","mp":"Bob Katter"},"Kingsford Smith":{"party":"Labor","mp":"Matt Thistlethwaite"},"Kingston":{"party":"Labor","mp":"Amanda Rishworth"},"Kooyong":{"party":"Independent","mp":"Monique Ryan"},"La Trobe":{"party":"Liberal","mp":"Jason Wood"},"Lalor":{"party":"Labor","mp":"Joanne Ryan"},"Leichhardt":{"party":"Liberal National","mp":"Warren Entsch"},"Lilley":{"party":"Labor","mp":"Anika Wells"},"Lindsay":{"party":"Liberal","mp":"Melissa McIntosh"},"Lingiari":{"party":"Unclear (as of 21/05/22 23:54)","mp":"Labor Ahead"},"Longman":{"party":"Liberal National","mp":"Terry Young"},"Lyne":{"party":"National","mp":"David Gillespie"},"Lyons":{"party":"Unclear (as of 21/05/22 23:55)","mp":"Labor Ahead"},"Macarthur":{"party":"Labor","mp":"Mike Freelander"},"Mackellar":{"party":"Independent","mp":"Sophie Scamps"},"Macnamara":{"party":"Unclear (as of 21/05/22 23:56)","mp":"Labor Ahead"},"Macquarie":{"party":"Labor","mp":"Susan Templeman"},"Makin":{"party":"Labor","mp":"Tony Zappia"},"Mallee":{"party":"National","mp":"Anne Webster"},"Maranoa":{"party":"Liberal National","mp":"David Littleproud"},"Maribyrnong":{"party":"Labor","mp":"Bill Shorten"},"Mayo":{"party":"Centre Alliance","mp":"Rebekha Sharkie"},"McEwen":{"party":"Labor","mp":"Rob Mitchell"},"McMahon":{"party":"Labor","mp":"Chris Bowen"},"McPherson":{"party":"Liberal National","mp":"Karen Andrews"},"Melbourne":{"party":"Greens","mp":"Adam Bandt"},"Menzies":{"party":"Unclear (as of 21/05/22 23:57)","mp":"Liberal Ahead"},"Mitchell":{"party":"Liberal","mp":"Alex Hawke"},"Monash":{"party":"Liberal","mp":"Russell Broadbent"},"Moncrieff":{"party":"Liberal National","mp":"Angie Bell"},"Moore":{"party":"Liberal","mp":"Ian Goodenough"},"Moreton":{"party":"Labor","mp":"Graham Perett"},"New England":{"party":"National","mp":"Barnaby Joyce"},"Newcastle":{"party":"Labor","mp":"Sharon Claydon"},"Nicholls":{"party":"National","mp":"Damian Drum"},"North Sydney":{"party":"Independent","mp":"Kylea Tink"},"O\'Connor":{"party":"Liberal","mp":"Rick Wilson"},"Oxley":{"party":"Labor","mp":"Milton Dick"},"Page":{"party":"National","mp":"Kevin Hogan"},"Parkes":{"party":"National","mp":"Mark Coulton"},"Parramatta":{"party":"Labor","mp":"Andrew Charlton"},"Paterson":{"party":"Labor","mp":"Meryl Swanson"},"Pearce":{"party":"Labor","mp":"Tracey Roberts"},"Perth":{"party":"Labor","mp":"Patrick Gorman"},"Petrie":{"party":"Liberal National","mp":"Luke Howarth"},"Rankin":{"party":"Labor","mp":"Jim Chalmers"},"Reid":{"party":"Labor","mp":"Sally Sitou"},"Richmond":{"party":"Labor","mp":"Justine Elliot"},"Riverina":{"party":"National","mp":"Michael McCormack"},"Robertson":{"party":"Labor","mp":"Gordon Reid"},"Ryan":{"party":"Greens","mp":"Elizabeth Watson-Brown"},"Scullin":{"party":"Labor","mp":"Andrew Giles"},"Shortland":{"party":"Labor","mp":"Pat Conroy"},"Solomon":{"party":"Labor","mp":"Luke Gosling"},"Spence":{"party":"Labor","mp":"Matt Burnell"},"Sturt":{"party":"Liberal","mp":"James Stevens"},"Swan":{"party":"Labor","mp":"Zaneta Mascarenhas"},"Sydney":{"party":"Labor","mp":"Tanya Plibersek"},"Tangney":{"party":"Labor","mp":"Sam Lim"},"Wannon":{"party":"Liberal","mp":"Dan Tehan"},"Warringah":{"party":"Independent","mp":"Zali Steggall"},"Watson":{"party":"Labor","mp":"Tony Burke"},"Wentworth":{"party":"Independent","mp":"Allegra Spender"},"Werriwa":{"party":"Labor","mp":"Anne Stanley"},"Whitlam":{"party":"Labor","mp":"Stephen Jones"},"Wide Bay":{"party":"Liberal National","mp":"Llew O\'Brien"},"Wills":{"party":"Labor","mp":"Peter Khalil"},"Wright":{"party":"Liberal National","mp":"Scott Buchholz"}}')}},e={};function r(t){var n=e[t];if(void 0!==n)return n.exports;var o=e[t]={exports:{}};return a[t].call(o.exports,o,o.exports,r),o.exports}r.m=a,function(){var a=[];r.O=function(e,t,n,o){if(!t){var i=1/0;for(c=0;c<a.length;c++){t=a[c][0],n=a[c][1],o=a[c][2];for(var l=!0,p=0;p<t.length;p++)(!1&o||i>=o)&&Object.keys(r.O).every((function(a){return r.O[a](t[p])}))?t.splice(p--,1):(l=!1,o<i&&(i=o));if(l){a.splice(c--,1);var s=n();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[t,n,o]}}(),function(){r.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(e,{a:e}),e}}(),function(){r.d=function(a,e){for(var t in e)r.o(e,t)&&!r.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){r.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={143:0};r.O.j=function(e){return 0===a[e]};var e=function(e,t){var n,o,i=t[0],l=t[1],p=t[2],s=0;if(i.some((function(e){return 0!==a[e]}))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(p)var c=p(r)}for(e&&e(t);s<i.length;s++)o=i[s],r.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return r.O(c)},t=self["webpackChunkelectoral_map"]=self["webpackChunkelectoral_map"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(8662)}));t=r.O(t)})();
//# sourceMappingURL=app.92abac18.js.map