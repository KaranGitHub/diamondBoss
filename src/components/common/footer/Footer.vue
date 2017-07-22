<template>
  <Footer class="clearfix">
    <img src="http://via.placeholder.com/140x140">
    <div class="contact">
        <p>全国咨询热线：400-805-8023</p>
        <p>办公地址：上海市杨浦区复旦大学</p>
        <p>沪ICP备16015612号-2</p>
        <p>邮箱：service@bangnongmang.cn</p>
    </div>
  </Footer>
</template>

<script>
export default {
  name: 'zfooter'
}
</script>


<style lang="scss" scoped>
Footer {
    background-color: #282828;
    padding: 2rem 0;
    

    img {
        float: left;
        margin-left: 23rem;
    }
}

.contact {
    color: #fff;
    font-size: 1rem;
    float: left;
    margin-left: 2.25rem;
    height: 8.75rem;
    p {
        margin-bottom: .875rem;
    }
}
</style>
