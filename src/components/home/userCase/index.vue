<template>
    <div class="user-case clearfix">
        <div class="user-case-content">
            <div>1</div>
            <div class="red">2</div>
            <div>3</div>
            <div class="red">4</div>
        </div>
    </div>
</template>å

<script>
export default {
    name: 'user-case'
}
</script>

<style lang="scss" scoped>
.user-case-content {
    width: 960px;
    margin: 0 auto;
    background-color: gray;

    &>div {
        float: left;
        width: 25%;
        height: 430px;
        
    }
}

.red {
    background: red;
}
</style>
