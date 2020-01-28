<template>
  <van-swipe indicator-color="rgba(244,30,51,0.8)" >
    <van-swipe-item v-for="item in images" :key="item">
      <img :src="item" alt />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "http://static.winxuancdn.com/topic/subject/202001/sd/640-304.jpg?202001201110",
        "http://static.winxuancdn.com/topic/subject/202001/new/640-304.jpg?202001201110"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  max-height: 8rem;
  display: block;
}
</style>