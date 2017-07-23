<template>
  <div class="user-case clearfix">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
  </div>
</template>å

<script>
export default {
  name: 'user-case'
}
</script>

<style lang="scss" scoped>
.user-case {
    height: 430px;
    & > div {
        float: left;
        width: 25%;
        height: 100%;
    }
}
</style>
