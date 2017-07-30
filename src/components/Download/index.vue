<template>
    <div class="page">
        <z-header></z-header>
        <div class="banner">
            <div class="banner-content clearfix">
                <div class="desc">
                    <h2>呆萌博士上线啦!</h2>
                    <div>
                        <div class="qrcode">
                           <img src="http://via.placeholder.com/140x140" alt="微信二维码" title="扫描微信二维码,下载APP">
                        </div>
                        <div class="feature">
                            <p>快速线上下单</p>
                            <p>随时进行托管</p>
                            <p>服务费用低廉</p>
                        </div>
                    </div>
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
    name: 'download',
    components: {
        'z-header': zheader,
        'z-footer': zfooter
    }
}
</script>

<style lang="scss" scoped>
.page {
    height: 100vh;
}

.banner {
    height: 75vh;
    background: url(http://othkiyk4m.bkt.clouddn.com/download.png) no-repeat;
    background-size: cover;
}

.banner-content {
    width: 960px;
    margin: 0 auto;
}
.desc {
    float: left;
    padding-top: 139px;

    h2 {
        font-size: 35px;
        color: #fff;
        font-weight: 300;
        margin-bottom: 35px;
    }
}

.qrcode {
    float: left;
    img {
        height: 140px;
        width: 140px;
        background: #fff;
    }
}

.feature {
    float: left;
    height: 140px;
    margin-left: 40px;

    p {
        font-size: 19px;
        color: #fff;
        margin-bottom: 28px;
    }
}

</style>
