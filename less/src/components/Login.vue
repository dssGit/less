<template>
    <div class="login">
        <Icon />
        <ul class="loginNav">
            <router-link to="/login/phone" tag="li" class="active">手机登录</router-link>  |  
            <router-link to="/login/enterprise" tag="li" >企业登录</router-link>
        </ul>
        <router-view/>
        <router-link to="/census">
            <img src="@/assets/images/in.png" class="in" />
            <span>快速体验</span>
        </router-link>
    </div>
</template>

<script>

import Icon from './login/icon.vue';
import Phone from './login/phone.vue';
import '../assets/css/index.css'
import '../assets/css/login.css'

export default {
    components: {
        Icon,
        Phone
    }
}
</script>

<style scoped>
    
</style>