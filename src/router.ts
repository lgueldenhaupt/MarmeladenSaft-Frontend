import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FoodChoice from './components/foodchoice/FoodChoice';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/food',
            name: 'food',
            component: FoodChoice,
        },
    ],
});
