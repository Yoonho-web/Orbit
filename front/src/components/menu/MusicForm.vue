<template>
    <div class="viewWrap">
        <p class="head">이달의소녀 음반</p>
        <ul class="albumList" v-for="album in this.$store.state.album" v-bind:key="album.index">
            <li>
                <!-- 앨범 몇번째인가? 앨범 제목은 무엇인가 -->
                <p class="tit"><span>{{ album.num }}번째 앨범  </span> {{ album.albumName }} </p>
                <div class="imgWrap">
                    <!-- 이미지  -->
                    <img :src="require(`@/assets/album/${album.image}`)" />
                </div>
                <div class="listWrap">
                    <ul class="listTitle">
                        <li>트랙</li>
                        <li>곡명</li>
                        <li>좋아요</li>
                    </ul>
                    <!-- 엘범 숫자, 곡명, 좋아요를 불러와야지 -->
                    <ul class="listInfo">
                        <li>{{ album.track }}</li>
                        <li>{{ album.songName }}</li>
                        <li>{{ album.like }}</li>
                    </ul>
                </div>
            </li>
        </ul>
        <div>
            <h1>숫자</h1>
            <button v-on:click="numInc">increase</button>
            {{ number }}
            <button v-on:click="colorBox" class="btn">버튼을 누르세요</button>
            <button v-on:click="darkMode">바탕화면 어둡게</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            number : 1
        }
    },
    methods: {
        getAlbum() {
            //action 소환
            this.$store.dispatch('GET_ALBUM');
            // console.log('나는 멍청한새끼');
        },
        
        numInc() {
            // console.log('넘버인크리즈');
            this.number = this.number +1;
            this.numCheck();
        },
        appear() {
            alert(this.number);
        },
        numCheck() {
            if(this.number >= 5){
                // 함수(alert)를 불러온다
                this.appear();
            }
        },
        colorBox() {
            //가져오는거 
            let box = document.querySelector('.btn');
            console.log(box);
            // box.className = 'boxing';
            box.style.background = 'red';
        },
        darkMode() {
            //querySelector를 써보자
            let view = document.querySelector('.viewWrap');
            view.style.background = "black";
            view.style.color = 'white';
        },
        //스크롤 바 값 
        scrollColor() {
            window.addEventListener('scroll', function(){

                if(window.scrollY > 150) {
                    let view = document.querySelector('.viewWrap');
                    view.style.background = "black";
                    view.style.color = 'white';
                }
            });
        }


    },
    created () {
        this.getAlbum();
        this.scrollColor();
    },

}
</script>

<style scoped>
.btn {background-color: #000;}
/* .boxing {background-color: yellow;} */
    .viewWrap {overflow: hidden; margin: 0 auto;}
    .head {font-size: 40px; font-weight: 600;}

    .viewWrap .albumList {}
    .viewWrap .albumList li {overflow: hidden; margin: 20px 10px;}
    .viewWrap .albumList li .tit {font-size: 25px; margin: 0 0 20px;}

    .viewWrap .albumList li .imgWrap {float: left; width: 200px; height: 200px;}
    .viewWrap .albumList li .imgWrap img {width: 100%; height: 100%;}

    .viewWrap .albumList li .listWrap {float: left;}
    .viewWrap .albumList li .listWrap ul {overflow: hidden; margin: 0 20px;}

    .viewWrap .albumList li .listWrap .listTitle {}
    .viewWrap .albumList li .listWrap .listTitle li {float: left; margin: 0 0 0 60px;}

    .viewWrap .albumList li .listWrap .listInfo {}
    .viewWrap .albumList li .listWrap .listInfo li {float: left;}
</style>