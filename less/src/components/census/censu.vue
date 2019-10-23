<template>
    <div class="censu" :style="{borderColor: bg}">
        <div class="after" :style="{borderColor: bg}"></div>
        <div class="title">出勤（人）</div>
        <div class="titleNum">0</div>
        <ul :style="{backgroundColor: bg}">
            <li>
                <div>今天迟到（次）</div>
                <div>0</div>
            </li>
            <li>
                <div>今天请假（次）</div>
                <div>0</div>
            </li>
            <li>
                <div>今天待审（次）</div>
                <div>0</div>
            </li>
        </ul>    
    </div>
</template>

<script>

import '@/assets/css/censu.css'
export default {
    data() {
        return {
            bg: null
        }
    },
    mounted() {
        let r = Math.ceil(Math.random() * 255);
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);
        this.bg = 'rgb(' + r + ',' + g +','+ b +')'
        console.log(this.bg)
    }

}
</script>