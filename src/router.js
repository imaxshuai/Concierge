import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import About from './views/About.vue'
import Login from './views/user/Login.vue'
import Shopper from './views/shopper/Shopper'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', component: Dashboard},
        {path: '/dashboard', name: 'dashboard', component: Dashboard},
        {path: '/shopper', name: 'shopper', component: Shopper},
        {path: '/about', name: 'about', component: About},
        {path: '/login', name: 'login', component: Login},
    ]
})
