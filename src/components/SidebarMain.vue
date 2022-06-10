<template>
    <div class="sidebar" :class="sidebarOpen ? 'sidebar-active' : ''">
        <div class="sidebar-inner">
            <section class="top">
                <div class="menu-item">
                    <span class="material-symbols-outlined icon menu" @click="openClose">menu</span>
                    <span class="label app-name">Electoral Map</span>
                </div>
            </section>
            <section class="items">
                <SidebarItem />
            </section>
        </div>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'

export default {
    components: {
        SidebarItem
    },
    props: {
        sidebarOpen: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods: {
        openClose() {
            this.$parent.sidebarOpen = !this.sidebarOpen
        }
    }
}
</script>

<style>
.sidebar {
    width: 70px;
    height: 100%;
    box-shadow: 2px 0px 8px rgba(0,0,0,.15);
    position: relative;
    z-index: 10;
    transition: width 0.25s var(--curve);
    overflow: hidden;
}

.sidebar.sidebar-active {
    width: 250px;
}

.sidebar:not(.sidebar-active) span.label {
    opacity: 0;
}

.sidebar-inner {
    padding: 10px 20px;
}

section.top {
    border-bottom: solid 1px #d3d3d3;
    margin-bottom: 5px;
    padding-bottom: 5px;
}

.menu-item {
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: 12px;
    align-items: center;
}

.menu-item.sub {
    grid-template-columns: 32px 1fr 28px;
    border-radius: 10px;
}

.menu-item.sub:hover {
    background-color: #e7e7e7;
}

.menu-item span.icon {
    justify-self: center;
}

.menu-item span.menu {
    cursor: pointer;
    font-size: 32px;
    transform: scale(1);
    transition: 0.15s var(--curve);
    transition-property: transform opacity;
    user-select: none;
}

.menu-item span.menu:hover {
    transform: scale(1.15);
}

.menu-item span.menu:active {
    transform: scale(0.95);
    opacity: 0.5;
}

.menu-item span.label {
    font-size: 1.05em;
    transition: 0.2s;
    transition-property: opacity;
    min-width: 126px;
}

.menu-item span.label.app-name {
    font-size: 1.3em;
    font-weight: 600;
    letter-spacing: -0.02em;
    min-width: 150px;
}
</style>