import Vue from 'vue'
import Router from 'vue-router'

import { Price } from '@app/price/Price';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path      : '/',
      name      : 'home',
      component : ( new Price( ).build( ) )
    },
  ]
})
