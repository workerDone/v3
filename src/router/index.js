import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue'
import HelloWorld1 from '../components/HelloWorld1.vue'
import HelloWorld2 from '../components/HelloWorld2.vue'
import HelloWorld3 from '../components/HelloWorld3.vue'
import HelloWorld4 from '../components/HelloWorld4.vue'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/2',
      name: 'm',
      component: HelloWorld1
    },
    {
      path: '/2/:name',
      name: 'HelloWorld2',
      component: HelloWorld2,
      children: [
        {
          path: 'first',
          component: HelloWorld3
        },
        {
          path: 'second',
          component: HelloWorld4
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
 
  ]
})