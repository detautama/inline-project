<template>
  <div id="app">
    <header>
      <span>InLine</span>
    </header>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body.Intro1, body.Intro2 {
  background-color: rgba(53, 73, 94, 0.74) !important;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
  position: fixed;
  width: -webkit-fill-available;
}

.fade-enter-active {
  overflow: hidden;
  transition-delay: .25s;
  position: fixed;
  width: -webkit-fill-available;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
