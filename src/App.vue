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
        aus: require('@/assets/geojson/AUS_2021.json'),
      },
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F3dWNodXUiLCJhIjoiY2t0Mjh6d2t3MGxtYjMxcGs1Nmwwd2pxdyJ9.TGiI2hgQUsNnQf8Udt9xSQ',
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Electorate data &copy; Commonwealth of Australia (Australian Electoral Commission)2022, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      zoom: 5,
      center: [-27.5, 135],
      tileSize: 512,
      options: {
        zoomOffset: -1,
      },
      polData: require('@/assets/currentelected.json')
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
        let color = "#000000"
        const elName = feature.properties.Elect_div
        const electorate = this.polData[elName]
        if (electorate) {
          switch(electorate.party) {
            case "Labor":
              color = "#de3533"
              break;
            case "Liberal":
              color = "#0047ab"
              break;
            case "Greens":
              color = "#10c25b"
              break;
            case "National":
              color = "#006644"
              break;
            case "LNP":
              color = "#1456f1"
              break;
            case "Independent":
              color = "#7c34cf"
              break;
            case "United Australia":
              color = "#f8ef21"
              break;
            case "Katter's Australian":
              color = "#8a2224"
              break
            case "Centre Alliance":
              color = "#ff6300"
              break
          }
        }
        layer.bindTooltip(
          `<h3>${feature.properties.Elect_div}</h3>
          <p>Party: ${electorate ? electorate.party : "Unknown"}</p>
          <p>MP: ${electorate ? electorate.mp : "Unknown"}</p>`,
          {
            permanent: false,
            sticky: true
          }
        )
        layer.setStyle({
          weight: 2,
          color
        })
        layer.on({
          mouseover: () => {
            layer.setStyle({
              weight: 5,
              color
            })
          },
          mouseout: () => {
            layer.setStyle({
              weight: 2,
              color
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
