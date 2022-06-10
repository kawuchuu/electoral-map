<template>
    <div class="pane-wrapper">
        <div class="pane">
            <div class="header">
                <h2>{{ electorate }}</h2>
                <span @click="closePane" class="close-btn material-symbols-outlined">close</span>
            </div>
            <div class="pane-content">
                <div v-if="!info" class="load-spin-wrapper">
                    <div class="load-spinner black"/>
                </div>
                <p v-else-if="info === 'error'">Failed to load electorate...</p>
                <div v-else>
                    <p>{{ info.info.desc }}</p>
                    <h3>Candidates in order of ballot</h3>
                    <div class="candidate" v-for="(item, index) in info.candidates.y2022" :key="index">
                        <div class="party-colour" :style="{backgroundColor: partyColour(item.party)}"></div>
                        <div v-if="!item.portrait" class="candidate-img" />
                        <div v-else class="candidate-img" :style="{backgroundImage: `url('/candidates/${item.name.sur.replace(/[ ']/g, '')}_${electorate.replace(/[ ]/g, '')}.jpg')`}"/>
                        <div class="candidate-info">
                            <p class="candidate-name">{{ item.name.first }} {{ item.name.sur }}</p>
                            <div class="party">
                                <span>{{ item.party }}</span>
                            </div>
                        </div>
                    </div>
                    <p class="footnote">Source: Australian Electoral Commission, viewed {{ info.misc.dateUpdated }}.<br>Candidate portrait source: Australian Broadcasting Corporation, viewed {{ info.misc.dateUpdated }}.</p>
                </div>
            </div>
        </div>
        <div class="pane-bg" @click="closePane" />
    </div>
</template>

<script>
import partyColour from '@/components/partycolour'
//import { parse } from 'csv-parse/browser/esm'

export default {
    props: [
        "electorate"
    ],
    methods: {
        closePane() {
            this.$parent.panelOpen = false
        },
        partyColour
    },
    data() {
        return {
            info: null
        }
    },
    errorCaptured(err, vm, info) {
        console.log('caught error!')
        this.info = 'error'
        console.log(info)
    },
    async mounted() {
        try {
            const reqEl = await fetch(`/electorates/${this.electorate.toLowerCase().replace(/[ ]/g, '_')}.json`)
            const elData = await reqEl.json()
            this.info = elData
        } catch(err) {
            this.info = 'error'
        }
    }
}
</script>

<style scoped>
.pane-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    pointer-events: none;

    transition: 0.2s;
    transition-property: opacity;
}

.pane-wrapper.active {
    opacity: 1;
    pointer-events: all;
}

.pane {
    width: 100%;
    max-width: 820px;
    height: 560px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0,0,0,.4);
    z-index: 1;
    overflow: hidden;
}

.header {
    border-bottom: solid 1px rgba(0,0,0,.12);
    margin: 20px;
    padding-bottom: 15px;
    margin-bottom: 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.header h2 {
    margin: 0px;
}

.pane-content {
    height: calc(100% - 75px);
    overflow: hidden;
    overflow-y: auto;
    padding: 5px 20px;
}

.pane-bg {
    background: rgba(0,0,0,.25);
    position: fixed;
    width: 100%;
    height: 100%;
}

.close-btn {
    cursor: pointer;
}

.close-btn:hover {
    opacity: 0.5;
}

.load-spin-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.footnote {
    font-size: 0.8em;
    opacity: 0.8;
}

.candidate {
    display: flex;
    margin: 20px 0px;
}

.party-colour {
    margin-right: 5px;
    height: 100px;
    width: 5px;
}

.candidate-name {
    font-size: 1.15em;
    margin: 5px 0px 8px;
    font-weight: 500;
}

.candidate-img {
    width: 70px;
    height: 100px;
    background: lightgrey;
    background-image: url('@/assets/no_candidate_image.png');
    margin-right: 15px;
    background-size: cover;
    background-position: center;
}

.party span {
    font-size: 0.8em;
}
</style>