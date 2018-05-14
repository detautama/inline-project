import Vue from 'vue'
import Router from 'vue-router'
import Intro1 from '@/components/Intro1'
import Intro2 from '@/components/Intro2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro1',
      component: Intro1
    },
    {
      path: '/intro2',
      name: 'Intro2',
      component: Intro2
    }
  ]
})
