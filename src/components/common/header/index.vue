<template>
    <header class="clearfix">
        <nav>
            <a class="logo" href="/">
                <img src="http://othkiyk4m.bkt.clouddn.com/logo-round-diamondboss.png" />
                <span>呆萌博士</span>
            </a>
            <div class="menu-box">
                <ul class="clearfix">
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="steps">功能步骤</router-link>
                    </li>
                    <li>
                        <router-link to="about-us">关于我们</router-link>
                    </li>
                </ul>
            </div class="menu-box">
            <router-link class="btn-download-app" to="download">下载APP</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'zheader'
}
</script>

<style scoped lang="scss">
$header-height: 62px;
$bg-color: #86C532;
$bg-color-darken: #63AD00;

a {
    text-decoration: none;
}

header {
    background-color: $bg-color;
    height: $header-height;
    font-weight: 100;
}

.logo {
    float: left;
    height: $header-height;
    line-height: $header-height;
    padding-left: 40px;
    display: flex;

    img {
        height: 40px;
        width: 40px;
        margin: auto;
        margin-right: 16px;
    }

    span {
        color: #fff;
        font-size: 22px;
    }
}

.menu-box {
    float: left;
    height: $header-height;

    li {
        float: left;
        line-height: $header-height;
        list-style: none;

        a {
            color: #fff;
            display: inline-block;
            font-size: 16px;
            padding: 0 20px;

            &:hover {
                background-color: $bg-color-darken;
            }
        }
    }
}

.btn-download-app {
    background-color: $bg-color-darken;
    color: #fff;
    float: right;
    font-size: 20px;
    height: $header-height;
    line-height: $header-height;
    padding: 0 44px;
}
</style>
