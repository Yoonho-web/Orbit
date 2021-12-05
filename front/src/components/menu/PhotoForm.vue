<template>
    <div class="viewWrap">
        <button v-on:click="getH" v-on:mouseleave="pathInit">희진</button>
        <button v-on:click="getC">츄</button>
        <ul class="memberWrap">
            <li>
                <div class="memImgWrap">
                    <div class="img">
                        <img v-bind:src="path">
                    </div>
                </div>
            </li>
            <li>
                <div class="memImgWrap">
                    <div class="img"></div>
                </div>
                <p class="tit">츄</p>
                <p class="birth">1999년 10월 20일[4] (22세)</p>
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


/* top img */

.viewWrap {overflow: hidden;}
.viewWrap li {float: left; margin: 20px 10px 0;}
.viewWrap li .memImgWrap {width: 1000px; background-color: #000;}
.viewWrap li .memImgWrap .img img {height: 20%; background-color: #000;}
.viewWrap li .tit {font-size: 20px; font-weight: 600; text-align: center; margin: 10px 0;}
.viewWrap li .birth {text-align: center;}
/* member Image */
</style>