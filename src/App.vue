<template>
  <main>
    <l-map class="map-base" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution" :tile-size="tileSize" :options="options" />
      <l-geo-json :geojson="geojson.aus" class="vic" :options="geoOptions" />
      <div class="load-cover" v-if="!loaded">
        <div class="load-spinner"/>
      </div>
    </l-map>
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      geojson: {
        aus: null
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
      polData: require('@/assets/currentelected.json'),
      loaded: false
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
        let coalition = false
        if (electorate) {
          switch(electorate.party) {
            case "Labor":
              color = "#de3533"
              break;
            case "Liberal":
              color = "#0047ab"
              coalition = true
              break;
            case "Greens":
              color = "#10c25b"
              break;
            case "National":
              color = "#006644"
              coalition = true
              break;
            case "Liberal National":
              color = "#1456f1"
              coalition = true
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
          <p style="color: ${color}">${electorate ? electorate.party : "Unknown"}${coalition ? " (Coalition)" : ""}</p>
          <p>${electorate ? electorate.mp : "Unknown"}</p>`,
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
  },
  async mounted() {
    const reqMap = await fetch('/geojson/AUS_2021.json')
    const mapData = await reqMap.json()
    this.geojson.aus = mapData
    this.loaded = true
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
  width: 100vw;
  height: 100vh;
}

main {
  width: 100%;
  height: 100%;
}

.map-base {
  width: 100%;
  height: 100%;
  justify-self: center;
  position: relative;
  z-index: 1;
}

.load-cover {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.load-spinner {
    border: 4px solid white;
    border-left: 4px solid transparent;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

main .leaflet-container {
  font-family: 'Inter';
}

main .leaflet-tooltip {
  border-radius: 10px;
  padding: 10px 12px;
}

main .leaflet-tooltip h3 {
  margin: 0px 0px 5px;
  font-family: 2.25em;
}

main .leaflet-tooltip p {
  margin: 2px 0px;
}
</style>
