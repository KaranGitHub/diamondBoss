<template>
  <div class="user-problem">
    <div class="content">
      <div class="title-wrap">
        <div class="icon">
          <img src="http://othkiyk4m.bkt.clouddn.com/icon-question.png" />
        </div>
        <div class="title">
          <h3>用户遇到的问题</h3>
          <p>USER QUESTION</p>
        </div>
      </div>
      <swiper :options="swiperOption">
        <template v-for="(item, key) in items">
          <swiper-slide v-bind:key="key">
            <img :src="item" />
          </swiper-slide>
        </template>
      </swiper>
      <div class="problem-content">
        <div class="problem-title">
          外出有事
        </div>
        <div class="problem-desc">
          怕宠物独自在家搞破坏,又不方便带其出门
        </div>
      </div>
      <div class="problem-solve">
        <div class="title">如何解决？</div>
        <img id="arrow" src="http://via.placeholder.com/40x12" />
      </div>
      <div class="download-app clearfix">
        <div class="phone-img"></div>
        <div class="content">
          <div class="title">立即下单,出门送狗</div>
          <div class="desc">出门前打开app立刻下单,接单之后送到指定的位置即可,安心去上班！</div>
          <a class="download-btn" href="/download">我要下载</a>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

let items = [
  'http://via.placeholder.com/140x140',
  'http://via.placeholder.com/140x140',
  'http://via.placeholder.com/140x140',
  'http://via.placeholder.com/140x140',
  'http://via.placeholder.com/140x140',
  'http://via.placeholder.com/140x140',
  'http://via.placeholder.com/140x140',
  'http://via.placeholder.com/140x140',
];
export default {
  name: 'userproblem',
  data: function () {
    return {
      items: items,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000,
        slidesPerView: 7,
        loop: true,
        onAutoplay: function(e) {
          console.log('changed');
          console.log(e);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100vh;
}

.user-problem {
  background-color: #282828; // height: 500px;
  .title-wrap {
    color: #fff;
    padding-top: 25px;
    text-align: center;

    .icon {
      width: 43px;
      height: 43px;

      background-color: #fff;
      border-radius: 50%;
      padding: 8px;
      margin: 0 auto;

      img {
        line-height: 43px;
        width: 27px;
        height: 27px;
      }
    }

    .title {
      margin-top: 27px;

      h3 {
        font-size: 20px;
        font-weight: normal;
      }

      p {
        font-size: 12px;
      }
    }
  }

  .swiper-container {
    max-width: 1335px;
    margin: 0 auto;
    height: 180px;
    line-height: 180px;
  }
  .swiper-slide {
    width: 140px;
    height: 140px;
    img {
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .swiper-slide-active {
    img {
      width: 180px;
      height: 180px;
    }
    
  }

  .problem-content {
    color: #fff;
    margin-top: 16px;
    text-align: center;
  }

  .problem-title {
    font-size: 20px;
  }

  .problem-desc {
    font-size: 13px;
  }

  .problem-solve {
    margin-top: 16px;
    color: #fff;
    text-align: center;

    .title {
      font-size: 10px;
    }
  }
}

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
