<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue';
import Footer from '@/components/common/Footer.vue';
export default{
  components : { 
    NavBar,
    Footer },
}

</script>

<style>
*, div, ul, li, p, a, span {text-decoration: none; list-style: none; padding: 0; margin: 0;}
.viewWrap {width: 100%; min-height: 100vh; z-index: 1;}

</style>
