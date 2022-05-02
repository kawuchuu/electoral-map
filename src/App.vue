<template>
  <main>
    <l-map class="map-base" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution" :tile-size="tileSize" :options="options" />
      <l-geo-json :geojson="geojson.aus" class="vic" :options="geoOptions" />
    </l-map>
  </main>
</template>

<script>
export default {
  name: 'App',
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
        aus: require('@/assets/geojson/AUS_2021.json'),
      },
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F3dWNodXUiLCJhIjoiY2t0Mjh6d2t3MGxtYjMxcGs1Nmwwd2pxdyJ9.TGiI2hgQUsNnQf8Udt9xSQ',
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Electorate data &copy; Commonwealth of Australia (Australian Electoral Commission)2022, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      zoom: 12,
      center: [-37.8136, 144.957],
      tileSize: 512,
      options: {
        zoomOffset: -1,
      }
    }
  },
  computed: {
    geoOptions() {
      return {
        onEachFeature: this.onEachFeature,
      }
    },
    onEachFeature() {
      return (feature, layer) => {
        layer.bindTooltip(
          `<h2>Electorate: ${feature.properties.Elect_div}</h2>`,
          {
            permanent: false,
            sticky: true
          }
        )
        layer.setStyle({
          weight: 2
        })
        layer.on({
          mouseover: () => {
            layer.setStyle({
              weight: 5,
            })
          },
          mouseout: () => {
            layer.setStyle({
              weight: 2
            })
          }
        })
      }
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
}

body {
  margin: 0px;
}

main {
  width: 100vw;
  height: 100vh;
}

.map-base {
  width: 100%;
  height: 100%;
  justify-self: center;
  position: relative;
  z-index: 1;
}
</style>
