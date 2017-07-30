<template>
  <div>
    <z-header></z-header>
    <z-banner></z-banner>
    <userproblem></userproblem>
    <!-- <download-app></download-app> -->
    <user-case></user-case>
    <z-footer></z-footer>
  </div>
</template>

<script>
import zheader from './../common/header/index';
import zfooter from './../common/footer/index';
import zbanner from './banner/index';
import userproblem from './../common/userProblem/Index';
import downloadapp from './../common/downloadApp/index';
import usercase from './../common/userCase/index';

export default {
  name: 'home',
  components: {
    'z-header': zheader,
    'z-footer': zfooter,
    'z-banner': zbanner,
    'userproblem': userproblem,
    'download-app': downloadapp,
    'user-case': usercase
  }
}
</script>


