<template>
  <div class="box">
    <ul class="list">
      <li v-for="item in datalist" :key="item.img">
        <div class="item item-2">
          <a>
            <div class="img">
              <img
                :src="item.img"
                style="display: inline;"
              />
            </div>
            <h3 class="name">{{item.name}}</h3>
            <div class="promotion"></div>
            <div class="author">{{item.author}}</div>
            <div class="price">
              <span class="price-n">{{item.p1}}</span>
              <span class="price-o">{{item.p2}}</span>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: []
    };
  },
  async created() {
    let {data: {data}} = await this.$axios.get("http://localhost:1911/home/home2");
    this.datalist = data;
  }
};
</script>
<style lang="scss" scoped>
li{width: 100%;float: left;}
.item {
    position: relative;
    >a{
        padding: .08rem .32rem .08rem 4.12rem;
        .img{
            position: absolute;
            width: 3.56rem;
            height: 3.56rem;
            left: .08rem;
            top: .08rem;
            text-align: center;
            img{
                max-width: 100%;
                max-height: 100%;
                font-size: .14rem;
            }
        }
        .name {
            height: 1.08rem;
            line-height: .54rem;
            font-size: .4rem;
            color: #666;
            margin: .28rem 0;
        }
        .author {
            margin-bottom: .3rem;
            margin-top: .3rem;
        }
        .price {
            height: 1rem;
            line-height: .64rem;
            border-bottom: #eee solid .036rem;
            .price-n {
                display: inline-block;
                width: 2.94rem;
                overflow: hidden;
                font-size: .6rem;
                color: #f41e33;
                vertical-align: middle;
            }
           .price-o {
                font-size: .4rem;
                color: #a9a9a9;
                vertical-align: middle;
                text-decoration: line-through;
            }
        }
    }
}
</style>