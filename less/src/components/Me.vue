<template>
    <div class="me">
        <Header>
            <span slot="title" class="headerTitle">我的</span>
            <span slot="util" class="headerUtil">
                <img src="@/assets/images/fx.png" alt="">
            </span>
        </Header>
        <Lbt/>
        <About/>
        <Footer />
    </div>
</template>

<script>
import Header from './header';
import Footer from './footer';
import Lbt from '@/components/me/lbt.vue';
import About from '@/components/me/about.vue';

import '@/assets/css/me.css'

export default {
    components: {
        Header,
        Footer,
        Lbt,
        About
    }
}
</script>

<style scoped>
    .headerTitle {
        font-size: 36px;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%)
        
    }
    .headerUtil img{
        display: inline-block;
        width: 40px;
        height: 40px;
        font-weight: 600;
        font-size: 40px;
        color: #ccc;
        position: absolute;
        left: 90%;
        top: 65%;
        transform: translate(-50%, -50%)
    }
</style>