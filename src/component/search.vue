<template>
    <div class="head-box">
        <a class="logo"></a>
        <div class="search">
            <input type="text" class="index-search">
            <span class="icon"></span>
        </div>
        <div class="user" @click="goto"><span>登陆</span></div>
    </div>
</template>
<script>
export default {
    methods:{
        goto(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss" scoped>
.head-box{
    position: relative;
    overflow: hidden;
    height: 1.22rem;
    padding: 0 1.96rem 0 2.84rem;
    background-color: #f41e33;
    .logo{
        display: block;
        width: 2.72rem;
        height: 1.22rem;
        position: absolute;
        left: 0;
        top: 0;
        background:url(../../public/img/logo.png) no-repeat center;
        background-size: 90%;
    }
    .user {
        width: 1.92rem;
        height: 1.32rem;
        line-height: 1.32rem;
        font-size: .48rem;
        position: absolute;
        right: 0;
        top: 0;
        text-align: center;
        letter-spacing: .04rem;
        color: #fff;
    }
    .search {
        display: block;
        position: relative;
        height: .85rem;
        line-height: .85rem;
        padding-left: .3rem;
        padding-right: .95rem;
        margin-top: .2rem;
        border-radius: .08rem;
        background-color: #ce1d38;
        font-size: .48rem;
        color: #fff;
        letter-spacing: .08rem;
        vertical-align: middle;
        overflow: hidden;
        .index-search {
            width: 100%;
            height: .95rem;
            line-height: .95rem;
            background: none;
            border: none;
            display: block;
        }
        .icon{
            width: .95rem;
            height: .95rem;
            line-height: .95rem;
            text-align: center;
            font-size: .56rem;
            display: block;
            position: absolute;
            top:0;
            right: 0;
            background: url(../../public/img/search.png) no-repeat center;
            background-size: 50%;
        }
    }
}
</style>