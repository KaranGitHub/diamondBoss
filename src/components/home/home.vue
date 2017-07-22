<template>
  <div>
    <z-header></z-header>
    <z-banner></z-banner>
    <z-footer></z-footer>
  </div>
</template>

<script>
import zheader from './../common/header/Header';
import zfooter from './../common/footer/Footer';
import zbanner from './../common/banner/Banner';

export default {
  name: 'home',
  components: {
    'z-header': zheader,
    'z-footer': zfooter,
    'z-banner': zbanner
  }
}
</script>


