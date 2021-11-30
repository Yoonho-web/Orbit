<template>
    <div class="viewWrap">
        <div class="imgWrap">
            <img src="../../assets/loona.png">
        </div>
        <ul class="memberWrap"> 
            <li>
                <div class="profileImg">
                    <img src="../../assets/member/heejin.jpg" alt="">
                </div>
                <p class="name">희진</p>
                <p class="nation"><span>한국</span></p>
                <p class="birth">2000. 10. 19. (21세)</p>
            </li>
            <li>
                <div class="profileImg">
                    <img src="../../assets/member/chu.jpg" alt="">
                </div>
                <p class="name">희진</p>
                <p class="nation"><span>한국</span></p>
                <p class="birth">2000. 10. 19. (21세)</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.viewWrap .imgWrap {width: 100%; text-align: center;}
.viewWrap .imgWrap img {width: 30%;}

.viewWrap .memberWrap {overflow: hidden;}
.viewWrap .memberWrap li {float: left; width: 25%; height: auto;}
.viewWrap .memberWrap li .profileImg {width: 100%;}
.viewWrap .memberWrap li .profileImg img {width: 100%; height: 100%;}

</style>