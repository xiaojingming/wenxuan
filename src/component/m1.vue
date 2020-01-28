<template>
  <div class="kill_more">
    <b class="line"></b>
    <div class="killTime">
      <van-icon name="clock-o" />
      <span>秒杀·00点场</span>
      <div class="time">
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours>9?timeData.hours:'0'+timeData.hours }}</span>
            <span class="symbol">:</span>
            <span class="item">{{ timeData.minutes>9?timeData.minutes:'0'+timeData.minutes }}</span>
            <span class="symbol">:</span>
            <span class="item">{{ timeData.seconds>9?timeData.seconds:'0'+timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
    </div>
    <b class="line2"></b>
    <div class="more">
      <a>更多</a>
      <van-icon name="arrow" />
    </div>
  </div>
</template>
<script>
let hours=new Date().getHours()
let minutes=new Date().getMinutes()
let seconds=new Date().getSeconds()
let t1=hours*60*60*1000+minutes*60*1000+seconds*1000
export default {
  data() {
    return {
        time: 24 * 60 * 60 * 1000-t1
    };
  }
};
</script>
<style lang="scss" scoped>
.item {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.1rem;
  background-color: #3d3d3d;
  color: #fff;
  text-align: center;
  float: left;
  line-height: 0.6rem;
  margin: 0 0.08rem;
}
.symbol{
    float: left;
    display: block;
    height: .6rem;
    font-weight: 500;
    line-height: .6rem;
    margin: 0 .03rem;
    color: #000;
}
.kill_more {
  position: relative;
  overflow: hidden;
  .line {
    font-weight: 700;
    height: 0.06rem;
    width: 2.8rem;
    background-color: #dedede;
    display: block;
    position: absolute;
    left: 0.45rem;
    top: 0.7rem;
  }
  .killTime {
    float: left;
    margin-left: 35%;
    margin-top: 0.4rem;
    font-size: 0.45rem;
    color: #f92438;
    line-height: 0.7rem;
  }
  .van-icon-clock-o {
    margin-right: 0.1rem;
  }
  .line2 {
    font-weight: 700;
    height: 0.06rem;
    width: 16%;
    background-color: #dedede;
    display: block;
    position: absolute;
    left: 68%;
    top: 0.7rem;
  }
  .more {
    float: right;
    font-size: 0.35rem;
    margin-right: 0.3rem;
    line-height: 1.5rem;
    .van-icon-arrow {
      line-height: 1.5rem;
    }
  }
}
</style>