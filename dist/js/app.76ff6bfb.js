(function(){"use strict";var a={75:function(a,r,e){var t=e(8935),n=function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("main",[e("l-map",{staticClass:"map-base",attrs:{zoom:a.zoom,center:a.center}},[e("l-tile-layer",{attrs:{url:a.url,attribution:a.attribution,"tile-size":a.tileSize,options:a.options}}),e("l-geo-json",{staticClass:"vic",attrs:{geojson:a.geojson.aus,options:a.geoOptions}}),a.loaded?a._e():e("div",{staticClass:"load-cover"},[e("div",{staticClass:"load-spinner"})])],1)],1)},o=[],i={name:"App",data(){return{geojson:{aus:null},url:"https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F3dWNodXUiLCJhIjoiY2t0Mjh6d2t3MGxtYjMxcGs1Nmwwd2pxdyJ9.TGiI2hgQUsNnQf8Udt9xSQ",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Electorate data &copy; Commonwealth of Australia (Australian Electoral Commission)2022, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',zoom:5,center:[-27.5,135],tileSize:512,options:{zoomOffset:-1},polData:e(5873),loaded:!1}},computed:{geoOptions(){return{onEachFeature:this.onEachFeature}},onEachFeature(){return(a,r)=>{let e="#000000";const t=a.properties.Elect_div,n=this.polData[t];let o=!1;if(n)switch(n.party){case"Labor":e="#de3533";break;case"Liberal":e="#0047ab",o=!0;break;case"Greens":e="#10c25b";break;case"National":e="#006644",o=!0;break;case"Liberal National":e="#1456f1",o=!0;break;case"Independent":e="#7c34cf";break;case"United Australia":e="#f8ef21";break;case"Katter's Australian":e="#8a2224";break;case"Centre Alliance":e="#ff6300";break}r.bindTooltip(`<h3>${a.properties.Elect_div}</h3>\n          <p style="color: ${e}">${n?n.party:"Unknown"}${o?" (Coalition)":""}</p>\n          <p>${n?n.mp:"Unknown"}</p>`,{permanent:!1,sticky:!0}),r.setStyle({weight:2,color:e}),r.on({mouseover:()=>{r.setStyle({weight:5,color:e})},mouseout:()=>{r.setStyle({weight:2,color:e})}})}}},async mounted(){const a=await fetch("/geojson/AUS_2021.json"),r=await a.json();this.geojson.aus=r,this.loaded=!0}},p=i,l=e(1001),m=(0,l.Z)(p,n,o,!1,null,null,null),y=m.exports,s=e(5148),b=e(3595),L=e(6512);t.Z.component("l-map",s.Z),t.Z.component("l-geo-json",b.Z),t.Z.component("l-tile-layer",L.Z),t.Z.config.productionTip=!1,new t.Z({render:a=>a(y)}).$mount("#app")},5873:function(a){a.exports=JSON.parse('{"Adelaide":{"party":"Labor","mp":"Steve Georganas"},"Aston":{"party":"Liberal","mp":"Alan Tudge"},"Ballarat":{"party":"Labor","mp":"Catherine King"},"Banks":{"party":"Liberal","mp":"David Coleman"},"Barker":{"party":"Liberal","mp":"Tony Pasin"},"Barton":{"party":"Labor","mp":"Linda Burney"},"Bass":{"party":"Liberal","mp":"Bridget Archer"},"Bean":{"party":"Labor","mp":"David Smith"},"Bendigo":{"party":"Labor","mp":"Lisa Chesters"},"Bennelong":{"party":"Liberal","mp":"John Alexander"},"Berowra":{"party":"Liberal","mp":"Julian Leeser"},"Blair":{"party":"Labor","mp":"Shayne Neumann"},"Blaxland":{"party":"Labor","mp":"Jason Clare"},"Bonner":{"party":"Liberal National","mp":"Ross Vasta"},"Boothby":{"party":"Liberal","mp":"Nicolle Flint"},"Bowman":{"party":"Liberal National","mp":"Andrew Laming"},"Braddon":{"party":"Liberal","mp":"Gavin Pearce"},"Bradfield":{"party":"Liberal","mp":"Paul Fletcher"},"Brand":{"party":"Labor","mp":"Madeleine King"},"Brisbane":{"party":"Liberal National","mp":"Trevor Evans"},"Bruce":{"party":"Labor","mp":"Julian Hill"},"Burt":{"party":"Labor","mp":"Matt Keogh"},"Calare":{"party":"National","mp":"Andrew Gee"},"Calwell":{"party":"Labor","mp":"Maria Vamvakinou"},"Canberra":{"party":"Labor","mp":"Alicia Payne"},"Canning":{"party":"Liberal","mp":"Andrew Hastie"},"Capricornia":{"party":"Liberal National","mp":"Michelle Landry"},"Casey":{"party":"Liberal","mp":"Tony Smith"},"Chifley":{"party":"Labor","mp":"Ed Husic"},"Chisholm":{"party":"Liberal","mp":"Gladys Liu"},"Clark":{"party":"Independent","mp":"Andrew Wilkie"},"Cook":{"party":"Liberal","mp":"Scott Morrison"},"Cooper":{"party":"Labor","mp":"Ged Kearney"},"Corangamite":{"party":"Labor","mp":"Libby Coker"},"Corio":{"party":"Labor","mp":"Richard Marles"},"Cowan":{"party":"Labor","mp":"Anne Aly"},"Cowper":{"party":"National","mp":"Pat Conaghan"},"Cunningham":{"party":"Labor","mp":"Sharon Bird"},"Curtin":{"party":"Liberal","mp":"Celia Hammond"},"Dawson":{"party":"Liberal National","mp":"George Christensen"},"Deakin":{"party":"Liberal","mp":"Michael Sukkar"},"Dickson":{"party":"Liberal National","mp":"Peter Dutton"},"Dobell":{"party":"Labor","mp":"Emma McBride"},"Dunkley":{"party":"Labor","mp":"Peta Murphy"},"Durack":{"party":"Liberal","mp":"Melissa Price"},"Eden-Monaro":{"party":"Labor","mp":"Kristy McBain"},"Fadden":{"party":"Liberal National","mp":"Stuart Robert"},"Fairfax":{"party":"Liberal National","mp":"Ted O\'Brien"},"Farrer":{"party":"Liberal","mp":"Sussan Ley"},"Fenner":{"party":"Labor","mp":"Andrew Leigh"},"Fisher":{"party":"Liberal National","mp":"Andrew Wallace"},"Flinders":{"party":"Liberal","mp":"Greg Hunt"},"Flynn":{"party":"Liberal National","mp":"Ken O\'Dowd"},"Forde":{"party":"Liberal National","mp":"Bert Van Manen"},"Forrest":{"party":"Liberal","mp":"Nola Marino"},"Fowler":{"party":"Labor","mp":"Chris Hayes"},"Franklin":{"party":"Labor","mp":"Julie Collins"},"Fraser":{"party":"Labor","mp":"Daniel Mulino"},"Fremantle":{"party":"Labor","mp":"Josh Wilson"},"Gellibrand":{"party":"Labor","mp":"Tim Watts"},"Gilmore":{"party":"Labor","mp":"Fiona Phillips"},"Gippsland":{"party":"National","mp":"Darren Chester"},"Goldstein":{"party":"Liberal","mp":"Tim Wilson"},"Gorton":{"party":"Labor","mp":"Brendan O\'Connor"},"Grayndler":{"party":"Labor","mp":"Anthony Albanese"},"Greenway":{"party":"Labor","mp":"Michelle Rowland"},"Grey":{"party":"Liberal","mp":"Rowan Ramsey"},"Griffith":{"party":"Labor","mp":"Terri Butler"},"Groom":{"party":"Liberal National","mp":"Garth Hamilton"},"Hasluck":{"party":"Liberal","mp":"Ken Wyatt"},"Hawke":{"party":"","mp":""},"Herbert":{"party":"Liberal National","mp":"Phillip Thompson"},"Higgins":{"party":"Liberal","mp":"Katie Allen"},"Hindmarsh":{"party":"Labor","mp":"Mark Butler"},"Hinkler":{"party":"Liberal National","mp":"Keith Pitt"},"Holt":{"party":"Labor","mp":"Anthony Byrne"},"Hotham":{"party":"Labor","mp":"Clare O\'Neil"},"Hughes":{"party":"United Australia","mp":"Craig Kelly"},"Hume":{"party":"Liberal","mp":"Angus Taylor"},"Hunter":{"party":"Labor","mp":"Joel Fitzgibbon"},"Indi":{"party":"Independent","mp":"Helen Haines"},"Isaacs":{"party":"Labor","mp":"Mark Dreyfus"},"Jagajaga":{"party":"Labor","mp":"Kate Thwaites"},"Kennedy":{"party":"Katter\'s Australian","mp":"Bob Katter"},"Kingsford Smith":{"party":"Labor","mp":"Matt Thistlethwaite"},"Kingston":{"party":"Labor","mp":"Amanda Rishworth"},"Kooyong":{"party":"Liberal","mp":"Josh Frydenberg"},"La Trobe":{"party":"Liberal","mp":"Jason Wood"},"Lalor":{"party":"Labor","mp":"Joanne Ryan"},"Leichhardt":{"party":"Liberal National","mp":"Warren Entsch"},"Lilley":{"party":"Labor","mp":"Anika Wells"},"Lindsay":{"party":"Liberal","mp":"Melissa McIntosh"},"Lingiari":{"party":"Labor","mp":"Warren Snowdon"},"Longman":{"party":"Liberal National","mp":"Terry Young"},"Lyne":{"party":"National","mp":"David Gillespie"},"Lyons":{"party":"Labor","mp":"Brian Mitchell"},"Macarthur":{"party":"Labor","mp":"Mike Freelander"},"Mackellar":{"party":"Liberal","mp":"Jason Falinski"},"Macnamara":{"party":"Labor","mp":"Josh Burns"},"Macquarie":{"party":"Labor","mp":"Susan Templeman"},"Makin":{"party":"Labor","mp":"Tony Zappia"},"Mallee":{"party":"National","mp":"Anne Webster"},"Maranoa":{"party":"Liberal National","mp":"David Littleproud"},"Maribyrnong":{"party":"Labor","mp":"Bill Shorten"},"Mayo":{"party":"Centre Alliance","mp":"Rebekha Sharkie"},"McEwen":{"party":"Labor","mp":"Rob Mitchell"},"McMahon":{"party":"Labor","mp":"Chris Bowen"},"McPherson":{"party":"Liberal National","mp":"Karen Andrews"},"Melbourne":{"party":"Greens","mp":"Adam Bandt"},"Menzies":{"party":"Liberal","mp":"Kevin Andrews"},"Mitchell":{"party":"Liberal","mp":"Alex Hawke"},"Monash":{"party":"Liberal","mp":"Russell Broadbent"},"Moncrieff":{"party":"Liberal National","mp":"Angie Bell"},"Moore":{"party":"Liberal","mp":"Ian Goodenough"},"Moreton":{"party":"Labor","mp":"Graham Perett"},"New England":{"party":"National","mp":"Barnaby Joyce"},"Newcastle":{"party":"Labor","mp":"Sharon Claydon"},"Nicholls":{"party":"National","mp":"Damian Drum"},"North Sydney":{"party":"Liberal","mp":"Trent Zimmerman"},"O\'Connor":{"party":"Liberal","mp":"Rick Wilson"},"Oxley":{"party":"Labor","mp":"Milton Dick"},"Page":{"party":"National","mp":"Kevin Hogan"},"Parkes":{"party":"National","mp":"Mark Coulton"},"Parramatta":{"party":"Labor","mp":"Julie Owens"},"Paterson":{"party":"Labor","mp":"Meryl Swanson"},"Pearce":{"party":"Liberal","mp":"Christian Porter"},"Perth":{"party":"Labor","mp":"Patrick Gorman"},"Petrie":{"party":"Liberal National","mp":"Luke Howarth"},"Rankin":{"party":"Labor","mp":"Jim Chalmers"},"Reid":{"party":"Liberal","mp":"Fiona Martin"},"Richmond":{"party":"Labor","mp":"Justine Elliot"},"Riverina":{"party":"National","mp":"Michael McCormack"},"Robertson":{"party":"Liberal","mp":"Lucy Wicks"},"Ryan":{"party":"Liberal National","mp":"Julian Simmonds"},"Scullin":{"party":"Labor","mp":"Andrew Giles"},"Shortland":{"party":"Labor","mp":"Pat Conroy"},"Solomon":{"party":"Labor","mp":"Luke Gosling"},"Spence":{"party":"Labor","mp":"Nick Champion"},"Sturt":{"party":"Liberal","mp":"James Stevens"},"Swan":{"party":"Liberal","mp":"Steve Irons"},"Sydney":{"party":"Labor","mp":"Tanya Plibersek"},"Tangney":{"party":"Liberal","mp":"Ben Morton"},"Wannon":{"party":"Liberal","mp":"Dan Tehan"},"Warringah":{"party":"Independent","mp":"Zali Steggall"},"Watson":{"party":"Labor","mp":"Tony Burke"},"Wentworth":{"party":"Liberal","mp":"Dave Sharma"},"Werriwa":{"party":"Labor","mp":"Anne Stanley"},"Whitlam":{"party":"Labor","mp":"Stephen Jones"},"Wide Bay":{"party":"Liberal National","mp":"Llew O\'Brien"},"Wills":{"party":"Labor","mp":"Peter Khalil"},"Wright":{"party":"Liberal National","mp":"Scott Buchholz"}}')}},r={};function e(t){var n=r[t];if(void 0!==n)return n.exports;var o=r[t]={exports:{}};return a[t].call(o.exports,o,o.exports,e),o.exports}e.m=a,function(){var a=[];e.O=function(r,t,n,o){if(!t){var i=1/0;for(y=0;y<a.length;y++){t=a[y][0],n=a[y][1],o=a[y][2];for(var p=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(e.O).every((function(a){return e.O[a](t[l])}))?t.splice(l--,1):(p=!1,o<i&&(i=o));if(p){a.splice(y--,1);var m=n();void 0!==m&&(r=m)}}return r}o=o||0;for(var y=a.length;y>0&&a[y-1][2]>o;y--)a[y]=a[y-1];a[y]=[t,n,o]}}(),function(){e.n=function(a){var r=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(r,{a:r}),r}}(),function(){e.d=function(a,r){for(var t in r)e.o(r,t)&&!e.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:r[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)}}(),function(){var a={143:0};e.O.j=function(r){return 0===a[r]};var r=function(r,t){var n,o,i=t[0],p=t[1],l=t[2],m=0;if(i.some((function(r){return 0!==a[r]}))){for(n in p)e.o(p,n)&&(e.m[n]=p[n]);if(l)var y=l(e)}for(r&&r(t);m<i.length;m++)o=i[m],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(y)},t=self["webpackChunkelectoral_map"]=self["webpackChunkelectoral_map"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(75)}));t=e.O(t)})();
//# sourceMappingURL=app.76ff6bfb.js.map