<template>
    <div>
        <z-header></z-header>
        <div class="content">
            <div class="about-us">
                <h3 class="title">关于我们<span>|</span>About Us
                </h3>
                <p class="desc">
                    我们是一群热爱生活的年轻人
                    <br> 我们能的愿景是提高让更多的爱狗人士，更好的去照看宠物，让用户感受到宠物带来的快乐。
                    <br> 我们会一直为此努力下去
                </p>
                <div class="imgs-box">
                    <img class='first' src="http://via.placeholder.com/770x547">
                    <img src="http://via.placeholder.com/770x547">
                </div>
            </div>
            <div class="our-vision">
                <h3 class="title">我们的愿景<span>|</span>Our vision
                </h3>
                <p class="desc">
                    我们是一群热爱生活的年轻人
                    <br> 我们能的愿景是提高让更多的爱狗人士，更好的去照看宠物，让用户感受到宠物带来的快乐。
                    <br> 我们会一直为此努力下去
                </p>
                <div class="imgs-box">
                    <img class='first' src="http://via.placeholder.com/770x547">
                    <img src="http://via.placeholder.com/770x547">
                </div>
            </div>
        </div>
        <z-footer></z-footer>
    </div>
</template>

<script>
import zheader from './../common/header/index';
import zfooter from './../common/footer/index';

export default {
    name: 'aboutUs',
    components: {
        'z-header': zheader,
        'z-footer': zfooter
    }
}
</script>

<style lang="scss" scoped>
.content {
    max-width: 960px;
    margin: 0 auto;
}

.about-us, .our-vision {
    margin: 150px 0;
}
.title {
    font-family: PingFangSC-Regular;
    font-size: 38px;
    color: #515151;
    text-align: center;

    span {
        color: #444;
        margin: 0 13px;
    }
}

.desc {
    text-align: center;
    font-size: 26px;
    color: #A6A6A6;
    line-height: 40px;
}

.imgs-box {
    text-align: center;

    img {
        width: 385px;
        height: 274px;
    }
    
    .first {
        margin-right: 13px;
    }
}
</style>
