import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Alert from '@/components/Alert';
import Home from '@/components/home/Home';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/alert',
      name: 'Alert',
      component: Alert
    }
  ]
})
