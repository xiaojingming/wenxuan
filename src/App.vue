<template>
  <main>
    <router-view/>
    <van-tabbar v-model="active" route active-color="#f41e33">
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/discover">分类搜索</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的文轩</van-tabbar-item>
    </van-tabbar>
  </main>
</template>

<script>
import './js/rem.js';


export default {
  name: "app",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
