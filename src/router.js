/*
 * @Author: zhangxm
 * @Date: 2025-01-23 14:26:45
 * @LastEditors: zhangxm
 * @LastEditTime: 2025-02-06 01:07:15
 * @Description: file content
 * @FilePath: /cdnn/src/router.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Akamai from '../components/Akamai.vue';
import Cloudflare from '../components/Cloudflare.vue';
import AWS from '../components/AWS.vue';
import Linode from '../components/Linode.vue';
import Security from '../components/Security.vue';
import MFA from '../components/MFA.vue';
import Marketplace from '../components/Marketplace.vue';
import DDoS from '../components/DDoS.vue';
import Streaming from '../components/Streaming.vue';
import AkamaiServices from '../components/AkamaiServices.vue';
import Delivery from '../components/Delivery.vue';
import Managed from '../components/Managed.vue';
import Conversant from '../components/Conversant.vue';
import Baishan from '../components/Baishan.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/aws', component: AWS },
	{ path: '/linode', component: Linode },
	{ path: '/akamai', component: Akamai },
	{ path: '/cloudflare', component: Cloudflare },
	{ path: '/security', component: Security },
	{ path: '/mfa', component: MFA },
	{ path: '/marketlace', component: Marketplace },
	{ path: '/ddos', component: DDoS },
	{ path: '/streaming', component: Streaming },
	{ path: '/akamaiservices', component: AkamaiServices },
	{ path: '/delivery', component: Delivery },
	{ path: '/about', component: About },
	{ path: '/managed', component: Managed },
	{ path: '/conversant', component: Conversant },
	{ path: '/baishan', component: Baishan }
];

const router = createRouter({
	history: createWebHashHistory(), // 使用 hash 模式
	routes
});

router.beforeEach((to, from, next) => {
	console.log('URL route on refresh:', to.path);
	next();
});

export default router;
