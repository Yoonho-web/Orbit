<template>
  <div>
      <ul>
          <li>트랙</li>
          <li>곡명</li>
          <li>좋아요</li>
      </ul>
      <ul v-for="album in this.$store.state.album" v-bind:key="album.index">
          <li >
              {{album.number}}
              {{album.albumName}}
              {{album.like}}
          </li>
      </ul>
      
  </div>
</template>

<script>
export default {
    methods: {
        getAlbum() {
            //action 소환
            this.$store.dispatch('GET_ALBUM');
        }
    },
    created () {
        this.getAlbum();
    },
}
</script>

<style scoped>
    ul li {float: left; margin: 20px 10px;}
    ul {display: block; float: left;}
</style>