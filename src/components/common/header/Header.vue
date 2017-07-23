<template>
    <header class="clearfix">
        <a class="logo" href="/">
            <img src="http://othkiyk4m.bkt.clouddn.com/logo-round-diamondboss.png" />
            <span>呆萌博士</span>
        </a>
        <nav>
            <ul class="clearfix">
                <li>
                    <a href="/">首页</a>
                </li>
                <li>
                    <a href="/steps">功能步骤</a>
                </li>
                <li>
                    <a href="/about">关于我们</a>
                </li>
            </ul>
        </nav>
        <a class="download-app" href="/download">下载APP</a>
    </header>
</template>

<script>
export default {
    name: 'zheader'
}
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
}

header {
    background-color: #86C532;
    height: 62px;

    .logo {
        float: left;
        height: 62px;
        line-height: 62px;
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
}

nav {
    float: left;
    height: 62px;

    li {
        float: left;
        font-size: 16px;
        line-height: 62px;
        list-style: none;
        padding: 0 20px;

        a {
            color: #fff;
        }
    }
}

.download-app {
    background-color: #63AD00;
    color: #fff;
    float: right;
    font-size: 20px;
    height: 62px;
    line-height: 62px;
    padding: 0 44px;
}
</style>
