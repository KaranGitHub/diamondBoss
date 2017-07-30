<template>
    <div>
        <z-header></z-header>
        <div class="steps">
            <div class="steps-content">
                <div class="step step-1">
                    <div class="desc">
                        <h3>免密登陆</h3>
                        <p>养狗的人在社会中比一般人要更具有信任度，多和狗狗相处还可以增加心灵的正能量.</p>
                    </div>
                </div>
                <div class="step step-2">
                    <div class="desc">
                        <h3>小区定位</h3>
                        <p>养狗的人在社会中比一般人要更具有信任度，多和狗狗相处还可以增加心灵的正能量.</p>
                    </div>
                </div>
                <div class="step step-3">
                    <div class="desc">
                        <h3>填写资料</h3>
                        <p>养狗的人在社会中比一般人要更具有信任度，多和狗狗相处还可以增加心灵的正能量.</p>
                    </div>
                </div>
                <div class="step step-4">
                    <div class="desc">
                        <h3>下单支付</h3>
                        <p>养狗的人在社会中比一般人要更具有信任度，多和狗狗相处还可以增加心灵的正能量.</p>
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
    name: 'steps',
    components: {
        'z-header': zheader,
        'z-footer': zfooter,
    }
}
</script>

<style lang="scss" scoped>
.steps-content {
    width: 960px;
    margin: 0 auto;
}

.step {
    height: 627px;
    padding: 0 72px;
    width: 100%;
}

.desc {
    max-width: 328px;

    h3 {
        font-size: 28px;
        margin: 70px 0 35px 0;
    }

    p {
        font-size: 21px;
    }
}

.step-1,
.step-3 {
    .desc {
        float: right;
    }
}

.step-2,
.step-4 {
    .desc {
        float: left;
    }
}
</style>
