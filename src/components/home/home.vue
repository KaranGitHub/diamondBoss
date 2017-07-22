<template>
  <div>
      <z-header></z-header>
      <z-footer></z-footer>
  </div>
</template>

<script>
import zheader from './../common/header/Header';
import zfooter from './../common/footer/Footer';

export default {
  name: 'home',
  components: {
      'z-header': zheader,
      'z-footer': zfooter
  }
}
</script>


