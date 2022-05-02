import Vue from 'vue'
import App from './App.vue'
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer } from "vue2-leaflet";

Vue.component('l-map', LMap)
Vue.component('l-geo-json', LGeoJson)
Vue.component('l-tile-layer', LTileLayer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
