<template>
  <div class="download-app clearfix">
    <div class="phone-img"></div>
    <div class="content">
      <div class="title">立即下单,出门送狗</div>
      <div class="desc">出门前打开app立刻下单,接单之后送到指定的位置即可,安心去上班！</div>
      <a class="download-btn" href="/download">我要下载</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'downloadapp'
}
</script>

<style lang="scss" scoped>
.download-app {
  background-color: #86C532;

  .phone-img {
    width: 162px;
    height: 202px;
    margin-left: 368px;
    background-color: gray;
    float: left;
  }

  .content {
    height: 202px;
    float: left;
    margin-left: 100px;
    color: #fff;
    padding-top: 36px;
    .title {
      font-size: 18px;
    }

    .desc {
      font-size: 11px;
      margin-bottom: 42px;
    }

    .download-btn {
      text-decoration-line: none;
      color: #86C532;
      background-color: #fff;
      padding: 13px 20px;
    }
  }
}
</style>

