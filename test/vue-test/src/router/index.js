import Vue from 'vue';
import Router from 'vue-router';
import ClipboardDemo from '@/components/ClipboardDemo';

Vue.use(Router)

const routes = [
    {
        path: '/ClipboardDemo',
        name: 'clipboarddemo',
        component: ClipboardDemo
    },
];

const router = new Router({
    routes
});

export default router;