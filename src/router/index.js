import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/mainPage.vue')
	},
	{
		path: '/what',
		name: 'what',
		component: () => import('../views/whatPage.vue')
	},
	{
		path: '/where',
		name: 'where',
		component: () => import('../views/wherePage.vue')
	},
	{
		path: '/who',
		name: 'who',
		component: () => import('../views/whoPage.vue')
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
