import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/HomePage.vue'
import NotFound from '../pages/NotFoundPage.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/:pathMatch(.*)*', component: NotFound},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router