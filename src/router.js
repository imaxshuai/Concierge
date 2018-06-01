import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import About from './views/About.vue'
import Login from './views/user/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', component: Dashboard},
        {path: '/about', name: 'about', component: About},
        {path: '/login', name: 'login', component: Login},
    ]
})
