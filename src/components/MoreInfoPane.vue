<template>
    <div class="pane-wrapper">
        <div class="pane">
            <div class="header">
                <h2>Heading</h2>
                <span @click="closePane">Close</span>
            </div>
            <div class="pane-content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur rerum officia aspernatur fuga libero error ab dolores placeat! Sequi, natus? Iste, pariatur natus aut nulla eum voluptates porro repellendus?</p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur rerum officia aspernatur fuga libero error ab dolores placeat! Sequi, natus? Iste, pariatur natus aut nulla eum voluptates porro repellendus?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur rerum officia aspernatur fuga libero error ab dolores placeat! Sequi, natus? Iste, pariatur natus aut nulla eum voluptates porro repellendus?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur rerum officia aspernatur fuga libero error ab dolores placeat! Sequi, natus? Iste, pariatur natus aut nulla eum voluptates porro repellendus?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur rerum officia aspernatur fuga libero error ab dolores placeat! Sequi, natus? Iste, pariatur natus aut nulla eum voluptates porro repellendus?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur rerum officia aspernatur fuga libero error ab dolores placeat! Sequi, natus? Iste, pariatur natus aut nulla eum voluptates porro repellendus?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur rerum officia aspernatur fuga libero error ab dolores placeat! Sequi, natus? Iste, pariatur natus aut nulla eum voluptates porro repellendus?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur rerum officia aspernatur fuga libero error ab dolores placeat! Sequi, natus? Iste, pariatur natus aut nulla eum voluptates porro repellendus?</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closePane() {
            this.$parent.panelOpen = false
        }
    }
}
</script>

<style scoped>
.pane-wrapper {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.25);
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
    padding: 20px 25px;
    box-shadow: 0px 2px 10px rgba(0,0,0,.25);
}

.header {
    width: 100%;
    border-bottom: solid 1px lightgrey;
    padding-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header h2 {
    margin: 0px;
}

.pane-content {
    width: 100%;
    height: calc(100% - 25px);
    overflow: hidden;
    overflow-y: auto;
}
</style>