import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';

Vue.use(VueRouter);

const route = [
    {path: "/", component: Home},
];

const router = new VueRouter({ mode: 'history', routes: route });

export default router;

