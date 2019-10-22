<template>
<div class="census">
    <Header>
        <span slot="title" class="headerTitle">统计</span>
        <span slot="util" class="headerUtil" @click="showList">···</span>
    </Header>

    <div class="date">
        <div>
            <span>2019/1/1</span>至<span>2019/2/5</span>
        </div>
    </div>
    <Censu />
    <Censu />
    <Censu />
    <Censu />
    <div class="space"></div>
    <ul v-show="show" class="showList">
        <div></div>
        <li>
            <img src="@/assets/images/a.png" alt="">
            <span>客户统计</span>
        </li>
        <li>
            <img src="@/assets/images/b.png" alt="">
            <span>绩效统计</span>
        </li>
        <li>
            <img src="@/assets/images/c.png" alt="">
            <span>考勤统计</span>
        </li>
        <li>
            <img src="@/assets/images/d.png" alt="">
            <span>批审统计</span>
        </li>
        <li>
            <img src="@/assets/images/e.png" alt="">
            <span>捐益统计</span>
        </li>
        <li>
            <img src="@/assets/images/f.png" alt="">
            <span>库存统计</span>
        </li>
    </ul>
    <Footer />
</div>
</template>

<script>

import Header from './header.vue'
import Footer from './footer.vue'
import Censu from '@/components/census/censu.vue'
import '@/assets/css/census.css'

export default {
    components: {
        Header,
        Footer,
        Censu
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        showList() {
            this.show = this.show == true ? false : true;
        }    
    }
}
</script>

<style scoped>
    html, body{
        height: auto;
    }
    .census{
        height: auto;
    }
    .space{
        margin-bottom: 100px;
    }
    
</style>
