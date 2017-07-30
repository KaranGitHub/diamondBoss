<template>
  <div>
    <z-header></z-header>
    <z-banner></z-banner>
    <userproblem></userproblem>
    <user-case></user-case>
    <z-footer></z-footer>
  </div>
</template>

<script>
import zheader from './../common/header/index';
import zfooter from './../common/footer/index';
import zbanner from './banner/index';
import userproblem from './userProblem/index';
import usercase from './userCase/index';

export default {
  name: 'home',
  components: {
    'z-header': zheader,
    'z-footer': zfooter,
    'z-banner': zbanner,
    'userproblem': userproblem,
    'user-case': usercase
  }
}
</script>


