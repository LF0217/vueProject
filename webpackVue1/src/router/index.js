import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export const constantRouterMap = [

    {
        path: '/',
        redirect:'/login',
    },{
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "views/login" */ '../views/login'),
        hidden: true,

    }
];
/**
 * 移动端路由，/m/
 * 需要加m前缀
 * @type {*[]}
 */
export const mobileRouterMap = [
    
];
var routes=constantRouterMap.concat(mobileRouterMap);
const router =  new VueRouter({
    routes: routes
})

router.beforeEach((to, from, next) => {
    
    return next();
});

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
        router.replace(targetPath);
    }
});

export default router;
