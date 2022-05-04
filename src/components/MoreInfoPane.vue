<template>
    <div class="pane-wrapper">
        <div class="pane">
            <div class="header">
                <h2>{{ electorate }}</h2>
                <span @click="closePane" class="close-btn">Close</span>
            </div>
            <div class="pane-content">
                <div v-if="!info" class="load-spin-wrapper">
                    <div class="load-spinner black"/>
                </div>
                <p v-else-if="info === 'error'">Failed to load electorate...</p>
                <div v-else>
                    <p>{{ info.info.desc }}</p>
                    <h3>Candidates</h3>
                    <div v-for="(item, index) in info.candidates.y2022" :key="index">
                        <p>{{ item.name.first }} {{ item.name.sur }} - {{item.party}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pane-bg" @click="closePane" />
    </div>
</template>

<script>
export default {
    props: [
        "electorate"
    ],
    methods: {
        closePane() {
            this.$parent.panelOpen = false
        }
    },
    data() {
        return {
            info: null
        }
    },
    async mounted() {
        try {
            const reqEl = await fetch(`/electorates/${this.electorate.toLowerCase()}.json`)
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
    max-width: 640px;
    height: 420px;
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
</style>