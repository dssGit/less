<template>
    <div class="manage">
        <div class="title">精细化管理</div>
        <ul class="manage-nav">
            <li>
                <span>人员</span>
                
                    <img src="@/assets/images/aa.png" alt="">
                
            </li>
            <li>
                <span>财务</span>
                
                    <img src="@/assets/images/bb.png" alt="">
                
            </li>
            <li>
                <span>商品</span>
                
                    <img src="@/assets/images/cc.png" alt="">
                
            </li>
            <li>
                <span>营销</span>
                
                    <img src="@/assets/images/dd.png" alt="">
                
            </li>
            <li>
                <span>客户</span>
                
                    <img src="@/assets/images/ee.png" alt="">
                
            </li>
        </ul>
        <Footer />
    </div>
</template>

<script>
import Footer from './footer.vue';
import '@/assets/css/manage.css'
export default {
    components: {
        Footer
    }
}
</script>