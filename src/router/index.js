import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Alert from '@/components/Alert';
import Home from '@/components/home/home';
import AboutUs from '@/components/aboutUs/index';
import Trusteeship from '@/components/common/trusteeship/index';
import ServiceAgreement from '@/components/common/serviceAgreement/index';
import Steps from '@/components/steps/index';
import Download from '@/components/Download/index';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/alert',
      name: 'Alert',
      component: Alert
    }, {
      path: '/trusteeship',
      name: 'Trusteeship',
      component: Trusteeship
    }, {
      path: '/service-agreement',
      name: 'ServiceAgreement',
      component: ServiceAgreement
    }, {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    }, {
      path: '/steps',
      name: 'Steps',
      component: Steps
    }, {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})
