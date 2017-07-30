<template>
    <Footer>
        <div class="footer-content clearfix">
            <img class="qrcode" src="http://via.placeholder.com/140x140" alt="微信二维码" title="扫描微信二维码，关注我们">
            <div class="contact">
                <p>全国咨询热线：400-805-8023</p>
                <p>办公地址：上海市杨浦区复旦大学</p>
                <p>沪ICP备16015612号-2</p>
                <p>邮箱：service@bangnongmang.cn</p>
            </div>
        </div>
    
    </Footer>
</template>

<script>
export default {
    name: 'zfooter'
}
</script>


<style lang="scss" scoped>
$footer-bg-color: #282828;
$qrcode-size: 140px;

Footer {
    background-color: $footer-bg-color;
    padding: 16px 0;
}

.footer-content {
    max-width: 960px;
    margin: 0 auto;
}

.qrcode {
    float: left;
    height: $qrcode-size;
    height: $qrcode-size;
}

.contact {
    color: #fff;
    font-size: 16px;
    float: left;
    margin-left: 36px;
    height: $qrcode-size;
    p {
        margin-bottom: 14px;
    }
}
</style>
