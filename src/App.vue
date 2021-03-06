<template>
  <main>
    <InDevNotice/>
    <MoreInfoPane v-if="panelOpen" :class="showPane" :electorate="currentEl"/>
    <div class="main-content">
      <SidebarMain :sidebarOpen="sidebarOpen" />
      <l-map class="map-base" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution" :tile-size="tileSize" :options="options" />
        <l-geo-json :geojson="geojson.aus" class="vic" :options="geoOptions" />
        <div class="load-cover" v-if="!loaded">
          <div class="load-spinner"/>
        </div>
      </l-map>
    </div>
  </main>
</template>

<script>
import InDevNotice from '@/components/InDevNotice'
import MoreInfoPane from '@/components/MoreInfoPane.vue'
import SidebarMain from '@/components/SidebarMain.vue'

export default {
  name: 'App',
  components: {
    InDevNotice,
    MoreInfoPane,
    SidebarMain
  },
  data() {
    return {
      geojson: {
        aus: null
      },
      //might change this tileset later
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Electorate data &copy; Commonwealth of Australia (Australian Electoral Commission)2022, &copy; <a href="https://carto.com/attributions">CARTO</a>',
      zoom: 5,
      center: [-27.5, 135],
      tileSize: 256,
      options: {
        //zoomOffset: -4,
      },
      polData: require('@/assets/currentelected.json'),
      loaded: false,
      panelOpen: false,
      currentEl: '',
      sidebarOpen: false
    }
  },
  computed: {
    geoOptions() {
      return {
        onEachFeature: this.onEachFeature,
      }
    },
    showPane() {
      return this.panelOpen ? 'active' : ''
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
              color = "#828282"
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
          <p><div class="party-colour" style="background-color: ${color}"></div>${electorate ? electorate.party : "Unknown"}${coalition ? " (Coalition)" : ""}</p>
          <p>${electorate ? electorate.mp : "Unknown"}</p>
          <em>Click for more info</em>`,
          {
            permanent: false,
            sticky: true,
            opacity: 1
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
          },
          click: () => {
            this.panelOpen = !this.panelOpen
            this.currentEl = elName
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --curve: cubic-bezier(0, 0, 0, 1);
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

.main-content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
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

.load-spinner.black {
  border-color: black;
  border-left-color: transparent;
}

main .leaflet-container, body {
  font-family: 'Inter';
}

main .leaflet-tooltip {
  border-radius: 10px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(20px) saturate(2);
  border: none;
  min-width: 150px;
}

main .leaflet-tooltip-left:before, main .leaflet-tooltip-right:before {
  display: none;
}

main .leaflet-tooltip h3 {
  margin: 0px 0px 5px;
  font-family: 2.25em;
}

main .leaflet-tooltip p {
  margin: 2px 0px;
}

em {
  opacity: 0.5;
  font-size: 0.1;
}

.party-colour {
  width: 9px;
  height: 9px;
  border-radius: 10px;
  display: inline-block;
  margin-right: 5px;
}

h1, h2, h3 {
  font-weight: 600;
  letter-spacing: -0.01em;
}
</style>
