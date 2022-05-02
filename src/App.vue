<template>
  <main>
    <l-map style="height: 90vh" class="map-base" :zoom="zoom" :center="center">
      <!-- <l-tile-layer :url="url" :attribution="attribution" :tile-size="tileSize" /> -->
      <l-geo-json :geojson="geojson.victoria" class="victoria" />
    </l-map>
  </main>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, /* LTileLayer */ } from "@vue-leaflet/vue-leaflet";

export default {
  name: 'App',
  components: {
    LMap,
    LGeoJson,
    //LTileLayer
  },
  data() {
    return {
      geojson: {
        victoria: require('./assets/geojson/victoria.json')
      },
      url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F3dWNodXUiLCJhIjoiY2t0Mjh6d2t3MGxtYjMxcGs1Nmwwd2pxdyJ9.TGiI2hgQUsNnQf8Udt9xSQ',
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      zoom: 5,
      center: [-37.8136, 144.957],
      tileSize: 512,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
