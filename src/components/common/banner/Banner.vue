<template>
    <div class="banner">
        <swiper :options="swiperOption">
            <template v-for="(item, key) in items">
                <swiper-slide v-bind:key="key">
                    <img :src="item" />
                </swiper-slide>
            </template>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

let items = [
    'https://img11.360buyimg.com/da/jfs/t4000/107/2234194410/85271/6c24d985/58a50cafNb60886c9.jpg',
    'https://img20.360buyimg.com/da/jfs/t3154/175/5917485830/129679/f123634c/5897e6a2N83837dd2.jpg',
    'https://img1.360buyimg.com/da/jfs/t3133/89/5984232745/66970/beaf615c/589ac9bcNe544a72e.jpg',
    'https://img20.360buyimg.com/da/jfs/t3157/165/6117849901/102894/88bf53b8/589d67b6Ne8986a9e.jpg'
];

export default {
    name: 'zbanner',
    data: function () {
        return {
            items: items,
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                direction: 'vertical',
                autoplay: 5000
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    height: 31.25rem;
    width: 100%;
    overflow: hidden;
}

.swiper-container {
    width: 100%;
    height: 31.25rem;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    height: 31.25rem;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

img {
    width: 100%;
    height: 100%;
}
</style>

