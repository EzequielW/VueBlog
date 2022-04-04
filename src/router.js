import { createRouter, createWebHistory }  from 'vue-router'
import Home from './views/Home'
import Register from './views/Register'
import Login from './views/Login'
import Post from './views/Post'
import Write from './views/Write'
import { store } from './store/store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: 'Home' }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { 
                title: 'Register',
                hideForAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { 
                title: 'Login',
                hideForAuth: true
            }
        },
        {
            path: '/posts/:id',
            name: 'post',
            component: Post,
            meta: { title: 'Post' }
        },
        {
            path: '/write',
            name: 'write',
            component: Write,
            meta: { 
                title: 'Write',
                requiresAuth: true
            }
        },
        {
            path :'/:catchAll(.*)',
            component: Home,
            meta: { title: 'Home' }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(store.state.loggedIn){
            next()
        }
        else{
            next({path: '/login'})
        }
    }
    else if(to.matched.some(record => record.meta.hideForAuth)){
        if(store.state.loggedIn){
            next({path: '/'})
        }
        else{
            next()
        }
    }
    else{
        next()
    }
})

export default router