<template>
    <div>
        <div class="headImg"></div>
        <button v-on:mouseover="getH" v-on:mouseleave="pathInit">희진</button>
        <button v-on:mouseover="getC" v-on:mouseleave="pathInit">츄</button>
        <ul class="memberWrap">
            <li>
                <div class="memImgWrap">
                    <div class="img">
                        <img v-bind:src="path">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    //희진을 클릭 했을 때 사진이 뜨는 거
    //희진을 클릭 시 희진 관련 img src를 불러와야함 
    data() {
        return {
            path: ''
        }
    },
    methods: {
        getH() {
            this.path = require("@/assets/member/heejin.jpg");
        },
        getC() {
            this.path = require("@/assets/member/chu.jpg");
        },
        pathInit(){
            this.path = ''
        }
    },
}
</script>

<style scoped>
.memberWrap {}


/* top img */
.headImg {display: block; background: url('../../assets/loona.png')no-repeat; width: 100%; height: 100px; margin: 0 auto;}

.memberWrap {overflow: hidden; width: 90%; margin: 0 auto;}
.memberWrap li {float: left; margin: 20px 10px 0;}
.memberWrap li .memImgWrap {width: 1000px; background-color: #000;}
.memberWrap li .memImgWrap .img img {height: 20%; background-color: #000;}
.memberWrap li .tit {font-size: 20px; font-weight: 600; text-align: center; margin: 10px 0;}
.memberWrap li .birth {text-align: center;}
/* member Image */
</style>