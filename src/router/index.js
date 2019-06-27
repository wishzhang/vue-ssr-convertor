import Vue from 'vue';
import Router from 'vue-router';

const AppIndex = () => import('@src/components/page/index/index.vue');
const AppIndexConvertor = () => import('@src/components/page/index/index-convertor.vue');
const AppIndexLayout = () => import('@src/components/common/layout/index-layout.vue');
const AppTransform = () => import('@src/components/page/transform/transform.vue');

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '',
                redirect: '/transform'
            },
            {
                path: '/',
                component: AppIndexLayout,
                children:[
                    {
                        path:'home',
                        component:AppIndexConvertor
                    },
                    {
                        path:'transform',
                        component:AppTransform
                    }
                ]
            }
        ]
    });
}
