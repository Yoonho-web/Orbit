<template>
    <div id="footer">
        <div class="logoWrap">
            <router-link to="/">OR<span>BIT</span></router-link>
        </div>

        <div class="txtWrap">
            <p>COPYRIGHT Ⓒ 2021, ORBIT ALL RIGHTS RESERVED.</p>
        </div>

        <ul class="snsWrap">
            <li>
                <img onclick="window.open('https://github.com/Yoonho-web/Orbit')" src="@/assets/sns/git.png" width="25px">
            </li>
            <li>
                <img onclick="window.open('https://www.facebook.com/loonatheworld')" src="@/assets/sns/facebook_white.png">
            </li>
            <li>
                <img onclick="window.open('https://www.instagram.com/loonatheworld/?hl=ko')" src="@/assets/sns/insta.png">
            </li>
            <li>
                <img onclick="window.open('https://twitter.com/loonatheworld?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')" src="@/assets/sns/twitter_white.png">
            </li>
            <li>
                <img onclick="window.open('https://www.youtube.com/channel/UCOJplhB0wGQWv9OuRmMT-4g')" src="@/assets/sns/youtube_white.png">
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* common */
#footer {overflow: hidden; height: 140px; background: #333; padding: 0 100px;}
#footer p {color: #fff;}

#footer .logoWrap {float: left; margin: 40px 0; }
#footer .logoWrap > a {font-size: 30px; font-weight: 600; color: #fff;}
#footer .logoWrap > a span {color: #aaa;}

#footer .txtWrap {float: left; margin: 40px 100px 0;}
#footer .txtWrap > p {font-size: 18px;}

#footer .snsWrap {float: right; overflow: hidden;}
#footer .snsWrap li {float: left; margin: 40px 15px 0 0;}
#footer .snsWrap li img {width: 25px;}
#footer .snsWrap li img:hover {cursor: pointer;}

</style>