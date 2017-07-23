<template>
  <div class="user-problem">
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-problem {
  background-color: #282828;
  height: 31.25rem;

  .title-wrap {
    color: #fff;
    padding-top: 2.9375rem;
    text-align: center;

    .icon {
      width: 3.125rem;
      height: 3.125rem;

      background-color: #fff;
      border-radius: 50%;
      padding: .87125rem;
      margin: 0 auto;

      img {
        line-height: 3.125rem;
        width: 1.5625rem;
        height: 1.5625rem;
      }
    }

    .title {
      margin-top: 1.6875rem;

      h3 {
        font-size: 1.25rem;
        font-weight: normal;
      }

      p {
        font-size: .71875rem;
      }
    }
  }

  .swiper-container {
    width: 83.4375rem;
    margin: 0 auto;
  }
  .swiper-slide {
    width: 8.75rem;
    height: 8.75rem;
  }

  .problem-content {
    color: #fff;
    margin-top: 2rem;
    text-align: center;
  }

  .problem-title {
    font-size: 1.125rem;
  }

  .problem-desc {
    font-size: .8125rem;
  }

  .problem-solve {
    margin-top: 2rem;
    color: #fff;
    text-align: center;

    .title {
      font-size: .625rem;
    }
  }
}
</style>
