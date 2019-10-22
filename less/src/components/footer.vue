<template>
    <div class="footer">
        <ul class="footer-nav">
            <router-link to="/manage" tag="li" class="btn">
                <div><img src="@/assets/images/jxh.png"/></div>
                <span>精细化</span>
            </router-link>
            <router-link to="/census" tag="li" class="addLi">
                <div class="add">
                    <img src="@/assets/images/add.png"/>
                </div>
            </router-link>
            <router-link to="/me" tag="li" class="btn">
                <div><img src="@/assets/images/mi.png" /></div>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<script>

import '@/assets/css/footer.css'
export default {
    
}
</script>