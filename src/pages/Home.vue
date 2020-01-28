<template>
    <main>
        <search></search>
        <banner></banner>
        <img src="img/p1.png" alt="">
        <m1></m1>
        <m2></m2>
        <img src="img/1.jpg" alt="">
        <img src="img/2.jpg" alt="">
        <img src="img/3.jpg" alt="">
        <m3></m3>
    </main>
</template>
<script>
import search from '../component/search'
import banner from '../component/banner'
import m1 from '../component/m1'
import m2 from '../component/m2'
import m3 from '../component/m3'
export default {
    components:{
        search,
        banner,
        m1,
        m2,
        m3
    }
}
</script>
<style lang="scss" scoped>
img{width: 100%}
</style>