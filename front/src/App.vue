<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue'
export default{
  components : { NavBar },
}

</script>

<style>
*, div, ul, li, p, a, span {text-decoration: none; list-style: none; padding: 0; margin: 0; }
.viewWrap {width: 100%; min-height: 100vh;}
</style>
