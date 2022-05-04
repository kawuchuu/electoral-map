<template>
    <div class="pane-wrapper">
        <div class="pane">
            <div class="header">
                <h2>Heading</h2>
                <span @click="closePane" class="close-btn">Close</span>
            </div>
            <div class="pane-content">
                <p>
                    This will contain extra information about the electorate, including the MP, candidates, history etc.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut quas perspiciatis nobis est nesciunt ipsum necessitatibus molestias commodi sint pariatur magnam autem sit eligendi impedit nihil, labore possimus? Quasi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta labore officia numquam quisquam quis molestias omnis a. Eius optio quae aliquid quasi corporis quibusdam neque laboriosam tempore, rerum illo!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia rerum minus assumenda aliquid magni delectus doloribus incidunt iusto architecto? Voluptate quo fugiat excepturi nam vero voluptatibus neque doloremque minima illo.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum commodi fugit nisi sapiente quae tenetur, distinctio itaque doloremque cupiditate eos. Inventore, accusamus. Velit, temporibus. Repellendus, veniam. Ea dolor commodi aliquid.</p>
            </div>
        </div>
        <div class="pane-bg" @click="closePane" />
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
    padding: 20px;
    padding-bottom: 15px;

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
</style>