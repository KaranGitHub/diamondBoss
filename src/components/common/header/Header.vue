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
    height: 3.875rem;

    .logo {
        float: left;
        height: 3.875rem;
        line-height: 3.875rem;
        padding-left: 5rem;
        img {
            height: 2.5rem;
            width: 2.5rem;
            margin-right: 1rem;
        }

        span {
            color: #fff;
            font-size: 1.375rem;
        }
    }
}

nav {
    float: left;
    height: 3.875rem;

    li {
        float: left;
        font-size: 1rem;
        line-height: 3.875rem;
        list-style: none;
        padding: 0 1.25rem;

        a {
            color: #fff;
        }
    }
}

.download-app {
    background-color: #63AD00;
    color: #fff;
    float: right;
    font-size: 1.25rem;
    height: 3.875rem;
    line-height: 3.875rem;
    padding: 0 2.75rem;
}
</style>
