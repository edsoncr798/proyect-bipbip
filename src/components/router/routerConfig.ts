
export default {
    Home:{
        path: '/',
        name: 'home',
        component: () => import('../home/Home.vue')
    },
    About:{
        path: '/about',
        name: 'about',
        component: () => import('../about/AboutUs.vue')
    },
    Contact:{
        path: '/contact',
        name: 'contact',
        component: () => import('../contact/ContactMe.vue')
    },
    Login:{
        path: '/login',
        name: 'login',
        component: () => import('../auth/Login.vue')
    },
    SignUp:{
        path: '/signup',
        name: 'signup',
        component: () => import('../auth/SignUp.vue')
    },
    Profile:{
        path: '/profile',
        name: 'profile',
        component: () => import('../auth/profile/Profile.vue')
    },
    Notify:{
        path: '/notify',
        name: 'notify',
        component: () => import('../auth/profile/Notify.vue')
    },
    LogOut:{
        path: '/logout',
        name: 'logout',
        component: () => import('../auth/LogOut.vue')
    }
}