<template>
  <div class="indev-notice" v-if="!closedNotice">
    <div />
    <span class="notice">This web app is currently in early development and is not final. Please note some data and information may not be correct.</span>
    <span class="x-close" @click="hideNotice">Ｘ</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closedNotice: sessionStorage.getItem('closedNotice')
    }
  },
  methods: {
    hideNotice() {
      window.sessionStorage.setItem('closedNotice', true)
      this.closedNotice = true
    }
  }
}
</script>

<style scoped>
.indev-notice {
  top: 0;
  width: 100%;
  height: auto;
  background: gold;
  padding: 10px 0px;
  color: black;
  box-shadow: 0px 0px 5px rgba(0,0,0,.25);
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

a {
    color: #167ad8;
    text-decoration: underline;
}
.notice {
    transform: translateX(50px);
}
.x-close {
    font-size: 1.2em;
    width: 50px;
    cursor: pointer;
}
.x-close:hover {
    opacity: 0.3;
}
</style>