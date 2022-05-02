<template>
  <main>
    <l-map style="height: 90vh" class="map-base" :zoom="zoom" :center="center">
      <!-- <l-tile-layer :url="url" :attribution="attribution" :tile-size="tileSize" /> -->
      <l-geo-json :geojson="geojson.aus" class="vic" />
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
        vic: require('@/assets/geojson/VIC_2021.json'),
        nsw: require('@/assets/geojson/NSW_2016.json'),
        qld: require('@/assets/geojson/QLD_2018.json'),
        nt: require('@/assets/geojson/NT_2017.json'),
        wa: require('@/assets/geojson/WA_2021.json'),
        sa: require('@/assets/geojson/SA_2018.json'),
        tas: require('@/assets/geojson/TAS_2017.json'),
        act: require('@/assets/geojson/ACT_2018.json'),
        aus: require('@/assets/geojson/AUS_2021.json')
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
