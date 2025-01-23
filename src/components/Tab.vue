<!--
 * @Author: zhangxm
 * @Date: 2025-01-24 05:32:48
 * @LastEditors: zhangxm
 * @LastEditTime: 2025-01-24 05:35:39
 * @Description: file content
 * @FilePath: /cdn_index/src/components/Tab.vue
-->
<template>
	<div class="tabs">
		<!-- Tab headers -->
		<div class="tab-headers">
			<button
				v-for="(tab, index) in tabs"
				:key="index"
				:class="{ active: activeTab === index }"
				@click="selectTab(index)"
			>
				{{ tab.label }}
			</button>
		</div>

		<!-- Tab content -->
		<div class="tab-content">
			<div v-for="(tab, index) in tabs" :key="index">
				<div v-if="activeTab === index">
					<slot :name="tab.slot"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
  
  <script>
export default {
	props: {
		tabs: {
			type: Array,
			required: true // An array of objects with 'label' and 'slot' properties
		}
	},
	data() {
		return {
			activeTab: 0 // Index of the currently active tab
		};
	},
	methods: {
		selectTab(index) {
			this.activeTab = index; // Set the active tab index
		}
	}
};
</script>
  
  <style scoped>
.tabs {
	border: 1px solid #ddd;
	border-radius: 5px;
}

.tab-headers {
	display: flex;
	background-color: #f4f4f4;
	border-bottom: 1px solid #ddd;
}

.tab-headers button {
	flex: 1;
	padding: 1rem;
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	transition: background-color 0.3s;
}

.tab-headers button:hover {
	background-color: #e4e4e4;
}

.tab-headers button.active {
	background-color: white;
	border-bottom: 2px solid rgb(255, 0, 0);
}

.tab-content {
	padding: 1rem;
}
</style>
  