/*
 * @Author: zhangxm
 * @Date: 2025-01-23 14:28:33
 * @LastEditors: zhangxm
 * @LastEditTime: 2025-01-23 14:56:29
 * @Description: file content
 * @FilePath: /cdn_index/src/main.js
 */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'; // 如果使用 Vue Router

// 创建并挂载应用
createApp(App).use(router).mount('#app');
