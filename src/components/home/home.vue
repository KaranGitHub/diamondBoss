<template>
  <div>
    <z-header></z-header>
    <z-banner></z-banner>
    <userproblem></userproblem>    
    <z-footer></z-footer>
  </div>
</template>

<script>
import zheader from './../common/header/Header';
import zfooter from './../common/footer/Footer';
import zbanner from './../common/banner/Banner';
import userproblem from './../common/userProblem/Index';

export default {
  name: 'home',
  components: {
    'z-header': zheader,
    'z-footer': zfooter,
    'z-banner': zbanner,
    'userproblem': userproblem
  }
}
</script>


