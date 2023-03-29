import { createRouter, createWebHistory } from "vue-router";

import invoiceIndex from '../components/invoices/index.vue';

import notFound from '../components/NotFound.vue';

import invoiceNewvue from '../components/invoices/new.vue';

const routes = [
    {
        path:'/',
        component: invoiceIndex
    },
    {
       path:'/invoice/new',
       component: invoiceNewvue 
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router  = createRouter({
    history: createWebHistory(),
    routes
})


export default router
