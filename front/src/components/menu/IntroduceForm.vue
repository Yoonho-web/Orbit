<template>
    <div>
        <div class="headImg"></div>
        <ul class="memberWrap">
            <li>
                <div class="memImgWrap">
                    <div class="img"></div>
                </div>
                <p class="tit">희진</p>
                <p class="birth">생일: 2000년 10월 19일 (21세)</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.memberWrap {}


/* top img */
.headImg {display: block; background: url('../../assets/loona.png')no-repeat; width: 100%; height: 100px; margin: 0 auto;}

.memberWrap {overflow: hidden; width: 90%; margin: 0 auto;}
.memberWrap li {float: left; margin: 20px 10px 0;}
.memberWrap li .memImgWrap {width: 400px; height: 400px;}
.memberWrap li .memImgWrap .img {width: 100%; height: 100%; background-color: #000;}
.memberWrap li .tit {font-size: 20px; font-weight: 600; text-align: center; margin: 10px 0;}
.memberWrap li .birth {text-align: center;}
/* member Image */
</style>