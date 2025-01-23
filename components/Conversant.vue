<!--
 * @Author: zhangxm
 * @Date: 2025-01-23 22:57:19
 * @LastEditors: zhangxm
 * @LastEditTime: 2025-01-23 23:55:38
 * @Description: file content
 * @FilePath: /cdn_index/components/Conversant.vue
-->
<template>
	<div>
		<img src="../public/49.png" class="conv-img-1" />
		<div class="conv-box-1">
			<div class="conv-text-1">Designed specifically for speed</div>
			<div class="conv-box-2">
				<img src="../public/50.png" class="conv-img-2" />
				<div class="conv-text-2">Intelligent caching</div>
				<div class="conv-text-3">
					Unique advanced transparent caching technology accelerates content
					delivery.
				</div>
			</div>

			<div class="conv-box-3">
				<img src="../public/51.png" class="conv-img-2" />
				<div class="conv-text-2">Three-Tier Traffic Management</div>
				<div class="conv-text-3">
					Fully automated load balancing, extending from the network to CDN
					nodes and then to CDN devices.
				</div>
			</div>
		</div>
		<div class="conv-box-1">
			<div class="conv-text-1">
				Also efficiently supports live streaming media.
			</div>
			<div class="conv-box-4">
				<img src="../public/52.png" class="conv-img-2" />
				<div class="conv-text-2">
					Low-latency streaming media transmission network
				</div>
				<div class="conv-text-3">
					Also known as "LSDN" technology, it is designed to meet the unique
					needs of both interactive and non-interactive live streaming media.
				</div>
			</div>
		</div>

		<div class="conv-box-1">
			<div class="conv-text-1">Enhanced protection</div>
			<div class="conv-box-2">
				<img src="../public/53.png" class="conv-img-2" />
				<div class="conv-text-2">DDoS Defense</div>
				<div class="conv-text-3">
					Leveraging the advantages of multiple host servers to ensure
					availability during attacks.
				</div>
			</div>

			<div class="conv-box-3">
				<img src="../public/54.png" class="conv-img-2" />
				<div class="conv-text-2">Web Application Firewall (WAF)</div>
				<div class="conv-text-3">
					Protects internet applications by blocking suspicious traffic.
					Optional additional feature.
				</div>
			</div>
		</div>

		<div class="conv-box-1">
			<div class="conv-text-1">
				Real-time Traffic <br />Visualization and Analysis
			</div>
			<div class="conv-box-5">
				<div class="conv-box-6">
					<img src="../public/55.png" class="conv-img-2" />
					<div class="conv-text-2">SwiftFederation Platform</div>
					<div class="conv-text-3">
						A unified platform that integrates across CDN alliances to provide
						comprehensive real-time visibility into traffic. Built-in analytics
						and metrics to aid in decision-making.
					</div>
				</div>
				<img src="../public/56.png" class="conv-img-3" />
			</div>
		</div>
		<img src="../public/57.png" style="margin-top: 100px" class="conv-img-1" />
		<img src="../public/58.png" style="margin-top: 100px" class="conv-img-1" />
		<div class="conv-box-7">
			<div class="conv-text-4">Media Services</div>
			<div class="conv-text-5">
				Seamless media streaming from start to finish
			</div>
			<div class="conv-box-8">
				<div class="conv-item-1">
					<img src="../public/59.png" class="conv-img-2" />
					<div class="conv-text-2">SwiftFederation Platform</div>
					<div class="conv-text-3">
						A unified platform that integrates across CDN alliances to provide
						comprehensive real-time visibility into traffic. Built-in analytics
						and metrics to aid in decision-making.
					</div>
				</div>

				<div class="conv-item-1">
					<img src="../public/60.png" class="conv-img-2" />
					<div class="conv-text-2">Media and File Storage</div>
					<div class="conv-text-3">
						Storing and accessing content through cloud storage
					</div>
				</div>

				<div class="conv-item-1">
					<img src="../public/61.png" class="conv-img-2" />
					<div class="conv-text-2">Digital Rights Management (DRM)</div>
					<div class="conv-text-3">
						Enforcing distribution rules to prevent unauthorized access
					</div>
				</div>

				<div class="conv-item-1">
					<img src="../public/62.png" class="conv-img-2" />
					<div class="conv-text-2">Content Management System (CMS)</div>
					<div class="conv-text-3">
						A centralized content management platform suitable for large-scale
						catalog management
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style>
.conv-img-1 {
	width: 100%;
}
.conv-box-1 {
	margin-top: 80px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.conv-text-1 {
	font-size: 1.5rem;
	font-weight: bold;
	color: #333;
}

.conv-box-2 {
	padding: 20px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	width: 30%;
	box-sizing: border-box;
}

.conv-box-3 {
	width: 35%;
	box-sizing: border-box;
	padding: 20px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

.conv-box-4 {
	width: 50%;
	box-sizing: border-box;
	padding: 20px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

.conv-img-2 {
	width: 60px;
	margin-bottom: 20px;
}

.conv-text-2 {
	font-size: 1.2rem;
	color: #333;
	margin-bottom: 15px;
}

.conv-text-3 {
	font-size: 1rem;
	color: #666;
}

.conv-box-5 {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70%;
	box-sizing: border-box;
	padding: 20px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
}

.conv-box-6 {
}
.conv-img-3 {
	width: 200px;
}

.conv-box-7 {
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.conv-text-4 {
	font-size: 1rem;
	color: #ff0000;
}

.conv-text-5 {
	font-size: 2.5rem;
	font-weight: bold;
	color: #333;
}

.conv-item-1 {
	width: 23%;
	box-sizing: border-box;
	padding: 20px;
	border-radius: 10px;
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 250px;
}

.conv-box-8 {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin-top: 30px;
}
</style>