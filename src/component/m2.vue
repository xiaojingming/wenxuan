<template>
    <div class="productItem">
        <div class="item" v-for="(item,index) in datalist" :key="index">
            <div class="img">
                <img :src="item.img" alt="">
            </div>
            <span class="tag">秒杀<br>包邮</span>
            <div class="price">
                <p class="price-n">{{item.p1}}</p>
                <p class="price-o">{{item.p2}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            datalist:[]
        }
    },
    async created(){
        let {data:{data}}=await this.$axios.get('http://localhost:1911/home/home1')
        this.datalist=data
    }
}
</script>
<style lang="scss" scoped>
.productItem {
    overflow: hidden;
    margin-top: .2rem;
    .item{
        position: relative;
        color: #f92438;
        width: 25%;
        float: left;
        .img {
            width: 100%;
            height: 3rem;
            line-height: 2.7rem;
            img{
                width: 100%;
                max-width: 100%;
                max-height: 100%;
            }
        }
        .tag{
            width: 1.2rem;
            height: 1.2rem;
            line-height: .48rem;
            border-radius: 50%;
            background-color: #fa8533;
            color: #fff;
            position: absolute;
            right: 0;
            top: 40%;
            z-index: 10;
            font-size: .38rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .price{
            text-align: center;
            line-height: .8rem;
            .price-n{
                font-size: .6rem;
                color: #f41e33;
                vertical-align: middle;
            }
            .price-o{
                font-size: .4rem;
                color: #a9a9a9;
                vertical-align: middle;
                text-decoration: line-through;
            }
        }
    }
}
</style>