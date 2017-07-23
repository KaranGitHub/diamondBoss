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
    width: 10.125rem;
    height: 12.625rem;
    margin-left: 22.875rem;
    background-color: gray;
    float: left;
  }

  .content {
    height: 12.625rem;    
    float: left;
    margin-left: 6.25rem;
    color: #fff;
    padding-top: 2.2625rem;
    .title {
      font-size: 1.125rem;
    }

    .desc {
      font-size: .6875rem;
      margin-bottom: 2.65rem;
      
    }

    .download-btn {
      text-decoration-line: none;
      color: #86C532;
      background-color: #fff;
      padding: .8125rem 1.5625rem;
    }
  }
}
</style>

