<template>
  <div id="app">
    <HeaderPage/>
    <Home />
    <FooterPage/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    Home,
    HeaderPage,
    FooterPage
  }
}
</script>

<style lang="scss" >
@import './assets/scss/index';
</style>
