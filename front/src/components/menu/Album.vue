<template>
    <div class="albumWrap">
        <p class="head">이달의소녀 음반</p>
        <!-- <ul class="albumList">
            <li>트랙</li>
            <li>곡명</li>
            <li>좋아요</li>
        </ul>
        <ul class="albumList" v-for="album in this.$store.state.album" v-bind:key="album.index">
            <li >
                {{album.number}}
                {{album.albumName}}
                {{album.like}}
            </li>
        </ul> -->
        <ul class="albumList">
            <li>
                <!-- 앨범 몇번째인가? 앨범 제목은 무엇인가 -->
                <p class="tit" v-for="title in this.$store.state.title" v-bind:key="title.index">{{album.title}}</p>
                <div class="imgWrap">
                    <img src="@/assets/album/1st.jpg" alt="" />
                </div>
                <div class="listWrap">
                    <ul class="listTitle">
                        <li>트랙</li>
                        <li>곡명</li>
                        <li>좋아요</li>
                    </ul>
                    <!-- 엘범 숫자, 곡명, 좋아요를 불러와야지 -->
                    <ul class="listInfo" v-for="album in this.$store.state.album" v-bind:key="album.index">
                        <li>{{album.number}}</li>
                        <li>{{album.songName}}</li>
                        <li>{{album.like}}</li>
                    </ul>
                </div>
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
        },
    },
    created () {
        this.getAlbum();
    },
}
</script>

<style scoped>
    .albumWrap {overflow: hidden; width: 90%; margin: 0 auto;}
    .head {font-size: 40px; font-weight: 600;}

    .albumWrap .albumList {float: left;}
    .albumWrap .albumList li {overflow: hidden; margin: 20px 10px;}
    .albumWrap .albumList li .tit {font-size: 25px; margin: 0 0 20px;}

    .albumWrap .albumList li .imgWrap {float: left; width: 200px; height: 200px;}
    .albumWrap .albumList li .imgWrap img {width: 100%; height: 100%;}

    .albumWrap .albumList li .listWrap {float: left;}
    .albumWrap .albumList li .listWrap ul {overflow: hidden; margin: 0 20px;}
    .albumWrap .albumList li .listWrap .listTitle li {float: left;}
    .albumWrap .albumList li .listWrap .listInfo li {float: left;}
</style>