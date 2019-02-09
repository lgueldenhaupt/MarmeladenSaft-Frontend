import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Oscars from './views/Oscars.vue';
import Login from './views/Login.vue';

import Api from './modules/masaApi';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true,
      },
    },
    {
      path: '/oscars',
      name: 'oscars',
      component: Oscars,
    },
    {
      path: '/food',
      name: 'food',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Food.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = window.$cookies.get('token');
  const guest = to.matched.some(record => record.meta.guest);

  if (token) {
    Api.getCurrentUser().then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
      if (guest) {
        next({ name: 'home' });
      } else {
        next();
      }
    }).catch((error) => {
      localStorage.removeItem('user');
      window.$cookies.remove('token');
      next({
        name: 'login',
        params: { nextUrl: to.fullPath },
      });
    });
  } else if (!token) {
    if (!guest) {
      next({
        name: 'login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  }
});

export default router;
