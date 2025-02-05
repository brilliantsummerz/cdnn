<!--
 * @Author: zhangxm
 * @Date: 2025-01-23 14:29:42
 * @LastEditors: zhangxm
 * @LastEditTime: 2025-01-24 06:29:08
 * @Description: file content
 * @FilePath: /cdn_index/src/App.vue
-->
<template>
	<div>
		<div class="navbar">
			<div class="navbar-logo" @click="goHome" display="none">
			</div>
			<div class="navbar-menu">
				<div
					class="dropdown"
					:class="{ active: isActive(item.name) }"
					v-for="item in menuItems"
					:key="item.name"
					@click="navigate(item.name)"
				>
					<a :href="item.path" class="dropdown-link">{{ item.name }}</a>
					<div class="dropdown-menu" v-if="item.submenu">
						<div class="dropdown-menu-content">
							<div
								class="dropdown-menu-item"
								v-for="sub in item.submenu"
								:key="sub.title"
							>
								<a
									class="dropdown-menu-item-title"
									:href="sub.path"
									@click="navigate(sub.title)"
									>{{ sub.title }}</a
								>
								<div class="line"></div>
								<div v-if="sub.list">
									<a
										v-for="subItem in sub.list"
										:key="subItem.label"
										:href="subItem.path"
										@click="navigate(subItem.label)"
										>{{ subItem.label }}</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Router View -->
		<router-view></router-view>
		<footer class="footer">
			<p>© CopyRight 2025, WWW.NETSPEED.CLOUD, Inc.All Rights Reserved.</p> <p>&nbsp;TEL:281-8573650&nbsp;Email:Riking218@outlook.com</p>
		</footer>
	</div>
</template>
<script>
export default {
	data() {
		return {
			menuItems: [
				{ name: "Home", submenu: null, path: "/#/" },
				{
					name: "Products",
					submenu: [
						{
							title: "Cloud Computing",
							list: [
								{ label: "AWS", path: "/#/aws" },
								{ label: "Linode", path: "/#/linode" }
							],
							path: "/#/aws"
						},
						{
							title: "Content Delivery Network",
							list: [
								{ label: "Akamai", path: "/#/akamai" },
								{ label: "Conversant", path: "/#/conversant" }
							],
							path: "/#/akamai"
						},
						{
							title: "Cloud Security",
							list: [
								{ label: "APP and API security", path: "/#/security" },
								{ label: "MFA", path: "/#/mfa" }
							],
							path: "/#/security"
						}
					],
					path: "/#/aws"
				},
				{
					name: "Solutions",
					submenu: [
						{ title: "AWS Marketlace", list: null, path: "/#/marketlace" },
						{ title: "DDoS Protection", list: null, path: "/#/ddos" },
						{ title: "Media Streaming", list: null, path: "/#/streaming" }
					],
					path: "/#/marketlace"
				},
				{
					name: "Services",
					submenu: [
						{ title: "Akamai", list: null, path: "/#/akamaiservices" },
						{ title: "AWS Delivery", list: null, path: "/#/delivery" },
						{ title: "Managed", list: null, path: "/#/managed" }
					],
					path: "/#/akamaiservices"
				},
				{ name: "About Us", submenu: null, path: "/#/about" }
			],
			activeMenu: "Home" // Track the active menu
		};
	},
	methods: {
		navigate(item) {
			this.activeMenu = item; // Set the clicked menu as active
			console.log(`Navigating to ${item}`);
		},
		goHome() {
			alert("Going to Home Page");
		},
		isActive(item) {
			return this.activeMenu === item; // Check if the menu is active
		}
	},
	watch: {
		$route(to) {
			this.currentPath = to.path;
			let _path = to.path;
			if (_path === "/") {
				this.activeMenu = "Home";
			} else if (
				_path === "/aws" ||
				_path === "/linode" ||
				_path === "/akamai" ||
				_path === "/cloudflare" ||
				_path === "/conversant" ||
				_path === "/security" ||
				_path === "/mfa"
			) {
				this.activeMenu = "Products";
			} else if (
				_path === "/marketlace" ||
				_path === "/ddos" ||
				_path === "/streaming"
			) {
				this.activeMenu = "Solutions";
			} else if (
				_path === "/akamaiservices" ||
				_path === "/delivery" ||
				_path === "/managed"
			) {
				this.activeMenu = "Services";
			} else if (_path === "/about") {
				this.activeMenu = "About Us";
			}
		}
	},
	mounted() {
		console.log("Current route path:", this.$route.path);
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: Arial, sans-serif;
}

.logo {
	height: 40px;
}

.line {
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
	height: 1px;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	padding: 0 50px;
	color: black;
	height: 80px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
	font-size: 1.5rem;
	font-weight: bold;
	cursor: pointer;
}

.navbar-menu {
	flex: 1;
	display: flex;
	position: relative;
	margin-left: 300px;
}

.navbar-menu a {
	color: black;
	text-decoration: none;
	font-size: 1rem;
	padding: 5px 10px;
	transition: background-color 0.3s, color 0.3s;
}

.dropdown {
	position: relative;
	height: 80px;
	display: flex;
	align-items: center;
	width: 100px;

	justify-content: center;
}

.dropdown.active {
	background-color: rgba(255, 0, 0, 0.3);
}

.dropdown.active .dropdown-link {
	color: rgb(255, 0, 0);
	position: relative;
}

.dropdown.active::after {
	content: "";
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 5px;
	background: rgb(255, 0, 0);
}

.dropdown-menu {
	display: none;
	position: fixed;
	top: 80px;
	left: 50%;
	transform: translateX(-50%);
	min-width: 1200px;
	min-height: 300px;
	background-color: white;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	z-index: 1000;
}

.dropdown-menu a {
	display: block;
	padding: 10px;
	white-space: nowrap;
}

.dropdown:hover .dropdown-menu {
	display: block;
}

.dropdown-menu-content {
	display: flex;
	justify-content: space-between;
}

.dropdown-menu-item {
	width: 30%;
}

.dropdown-menu-item-title {
	color: rgb(255, 0, 0);
}

.dropdown-link {
	font-weight: bolder;
}

.navbar-toggle {
	display: none;
	flex-direction: column;
	gap: 5px;
	cursor: pointer;
}

.navbar-toggle div {
	width: 25px;
	height: 3px;
	background-color: black;
}

.footer {
	height: 100px;
	background: rgba(255, 0, 0, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>