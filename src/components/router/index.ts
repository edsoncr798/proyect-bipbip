import { createRouter, createWebHashHistory } from 'vue-router'
import routerConfig from './routerConfig'


let routes = [
    routerConfig.Home,
    routerConfig.About,
    routerConfig.Contact,
    routerConfig.Login,
    routerConfig.SignUp,
    routerConfig.Profile,
    routerConfig.Notify,
    routerConfig.LogOut
]

const router = createRouter({
    history: createWebHashHistory(),
    routes 
})

export default router