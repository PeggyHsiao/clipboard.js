import Vue from 'vue';
import Router from 'vue-router';
import Clipboard from '@/components/Clipboard';

Vue.use(Router)

const routes = [
    {
        path: '/clipboard',
        name: 'clipboard',
        component: Clipboard
    },
];

const router = new Router({
    routes
});

export default router;