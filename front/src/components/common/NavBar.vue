<template>
    <div id="nav">
        <router-link to="/"><div class="logo">OR<span>BIT</span></div></router-link>
        <div class="menuWrap">
            <ul class="menu">
                <li><router-link to='/introduce'>Introduce</router-link></li>
                <li><router-link to='/music'>Music</router-link></li>
                <li><router-link to='/photo'>Photo</router-link></li>
            </ul>
            <ul class="member">
                <li>logIn</li>
                <li>signUp</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#nav {overflow: hidden; background-color: #333; z-index: 999;}
#nav .menuWrap {width: 1080px; margin: 30px auto; position: relative;}

#nav a {font-weight: bold; color: white;}
#nav a.router-link-exact-active {font-weight: bold; color: rgb(199, 120, 120);}

#nav .logo {float: left; font-size: 25px; font-weight: 600; color: #fff; margin: 30px;}
#nav .logo span {color: #aaa;}

#nav .menuWrap .menu {overflow: hidden; position: absolute;top: 2px;right: 40%;}
#nav .menuWrap .menu li {float: left; font-size: 20px; font-weight: 600; color: #fff; margin: 0 40px;}

#nav .menuWrap .member {float: right; overflow: hidden;}
#nav .menuWrap .member li {float: left; font-size: 20px; font-weight: 600; color: #fff; margin: 0 20px;}
</style>