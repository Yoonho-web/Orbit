<template>
    <div id="nav">
        <router-link to="/"><div class="logo">OR<span>BIT</span></div></router-link>

        <ul class="menu">
            <li><router-link to='/introduce'>Introduce</router-link></li>
            <li><router-link to='/music'>Music</router-link></li>
            <li>Photo</li>
        </ul>

        <ul class="user">
            <li>logIn</li>
            <li>signUp</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {overflow: hidden; height: 100px; background-color: #333;}

#nav a {font-weight: bold; color: white;}

#nav a.router-link-exact-active { font-weight: bold; color: rgb(199, 120, 120);}

#nav .logo {float: left; font-size: 30px; font-weight: 600; color: #fff;}
#nav .logo span {color: #aaa;}

#nav .menu {float: center; overflow: hidden;}
#nav .menu li {float: left; font-size: 20px; font-weight: 600; color: #fff; margin: 0 20px;}

#nav .user {float: right; overflow: hidden;}
#nav .user li {float: left; font-size: 20px; font-weight: 600; color: #fff; margin: 0 20px;}
</style>