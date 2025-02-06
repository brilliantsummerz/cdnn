<!--
 * @Author: zhangxm
 * @Date: 2025-02-06 01:06:51
 * @LastEditors: zhangxm
 * @LastEditTime: 2025-02-06 13:39:13
 * @Description: file content
 * @FilePath: /cdnn/components/Baishan.vue
-->
<template>
	<div>
		<img src="../public/100.png" class="bai-img" />
		<section class="bai-section-1">
			<div class="bai-text-1">Product Advantages</div>
			<div class="bai-content-1">
				<div class="bai-item-1">
					<img src="../public/101.png" class="bai-img-2" />
					<div class="bai-text-2">Intelligent Acceleration</div>
					<div class="bai-text-3">
						Adopt dynamic and static hybrid intelligent separation technology,
						automatically identify static resources, combined with efficient
						caching and intelligent compression to achieve rapid distribution of
						static resources, coupled with global intelligent routing by
						selecting the optimal route through routing decisions to ensure a
						rapid response to dynamic requests. Access Security
					</div>
				</div>

				<div class="bai-item-1">
					<img src="../public/102.png" class="bai-img-2" />
					<div class="bai-text-2">Access Security</div>
					<div class="bai-text-3">
						With neutral and reliable security protection capabilities, and edge
						security capabilities such as anti-DDoS, full-link SSL, and SM, it
						provides rich access control policies and anti-hijacking and
						anti-tampering solutions to protect the security needs of
						enterprises. Stable and Highly Available
					</div>
				</div>

				<div class="bai-item-1">
					<img src="../public/103.png" class="bai-img-2" />
					<div class="bai-text-2">Stable and Highly Available</div>
					<div class="bai-text-3">
						Provide end-to-end service assurance solutions such as load
						balancing, traffic control, second-level origin switching, and
						offline mode to ensure high availability and stability of the
						service.
					</div>
				</div>

				<div class="bai-item-1">
					<img src="../public/104.png" class="bai-img-2" />
					<div class="bai-text-2">
						Dedicated Butler Service Around the Clock
					</div>
					<div class="bai-text-3">
						Baishan offers 7*24 hours technical support, supporting a
						comprehensive operation guarantee system, and butler-style 1 on 1
						service, avoiding work order type mechanical service, making
						business management efficient and effective.
					</div>
				</div>
			</div>
		</section>

		<section class="bai-section-2">
			<div class="bai-text-1">Product Feature</div>
			<div class="bai-content-1">
				<div class="bai-item-2">
					<img src="../public/105.png" class="bai-img-3" />
					<div class="bai-content-2">
						<div class="bai-text-2">
							A stable, low-latency global acceleration network
						</div>
						<div class="bai-text-3">
							The Baishan edge network has 1700+ nodes worldwide, with a
							bandwidth redundancy of 80Tbps+, supports high concurrency, and
							provides stable acceleration services. Adopting dynamic and static
							separation; the optimal path for back-to-origin is selected
							through intelligent routing technology, which is suitable for
							dynamic and static hybrid model and purely dynamic site content
							distribution acceleration services; Coupled with the protocol
							optimization, network optimization and other technologies,
							combined with requests merging, data compression, page redundancy
							optimization, and other solutions to improve transmission
							efficiency in all aspects Robust Security Features.
						</div>
					</div>
				</div>

				<div class="bai-item-2">
					<img src="../public/106.png" class="bai-img-3" />
					<div class="bai-content-2">
						<div class="bai-text-2">Robust Security Features</div>
						<div class="bai-text-3">
							Construct a full-link HTTPS encrypted secure transmission from the
							user to the node to the origin, effectively preventing the risks
							of eavesdropping, tampering, impersonation, and hijacking in HTTP
							plaintext transmission; support the SM algorithm encryption
							mechanism, and provide more secure SM HTTPS functions; support md5
							algorithm to ensure the integrity of file data; supports multiple
							certificate formats, two-way authentication, HTTP/2, and provides
							a variety of flexible access control strategies to meet the
							service needs of anti-hotlinking, anti-hijacking, and
							anti-tampering
						</div>
					</div>
				</div>

				<div class="bai-item-2">
					<img src="../public/107.png" class="bai-img-3" />
					<div class="bai-content-2">
						<div class="bai-text-2">Origin Protection</div>
						<div class="bai-text-3">
							Hiding the origin site, showing Baishan edge node’s IP externally
							to prevent the attack traffic from directly reaching the origin
							site to enhance the security of the site. Offload the pressure on
							the origin site and use multi-origin load balancing methods such
							as active backup, round robin, and weighting, as well as
							strategies such as file preheating, traffic control, and offline
							mode, to significantly reduce back-to-origin traffic, while
							ensuring service availability and stability and reducing origin
							traffic to lower the costs.
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bai-section-3">
			<div class="bai-text-1">Application Scenarios</div>
			<div class="bai-item-3">
				<div class="bai-text-2">E-commerce industry</div>
				<div class="bai-text-3" @click="toggleContent1">
					A website combined with static and dynamic content; business includes
					website user registration, login, product browsing, promotion,
					payment, etc. In this scenario, Baishan DCDN improves the loading
					speed of e-commerce pages through high-quality node coverage and
					intelligent routing throughout the network. Through multi-origin load
					balancing methods such as active backup, round robin, and weighting,
					as well as strategies such as file preheating, traffic control, and
					offline mode, the pressure on the origin site is offloaded, and it is
					easy to deal with e-commerce traffic bursts. Support user distribution
					and behavior data analysis to help the platform implement data-driven
					operation strategies. The platform's security is effectively
					guaranteed through full-link HTTPS encryption, anti-hotlinking,
					anti-hijacking, anti-algorithm, and other technologies
				</div>
				<div
					ref="content1"
					:class="{ expanded: isExpanded1 }"
					class="bai-content-3"
				>
					<img src="../public/108.png" class="bai-img-4" />
				</div>
			</div>

			<div class="bai-item-3">
				<div class="bai-text-2">Gaming industry</div>
				<div class="bai-text-3" @click="toggleContent2">
					support intelligent routing and transmission protocol optimization,
					effectively reduce the transmission delay of dynamic gaming commands
					and interactive information, support traffic control, second-level
					origin change, and offline mode, effectively deal with business
					emergencies and other problems, and guarantee the player experience
					process without perception; provide API caching and intelligent
					caching strategies to effectively respond to the traffic surge caused
					by customer game promotion, assist in a second-level push for the
					latest game version for the whole network, support full-link
					anti-hijacking solutions to solve the game DNS and content hijacking
					problem
				</div>
				<div
					ref="content2"
					:class="{ expanded: isExpanded2 }"
					class="bai-content-3"
				>
					<img src="../public/109.png" class="bai-img-4" />
				</div>
			</div>

			<div class="bai-item-3">
				<div class="bai-text-2">Financial industry</div>
				<div class="bai-text-3" @click="toggleContent3">
					By providing stable and reliable dynamic and static distribution
					services, it not only improves the user's access experience but also
					reduces the consumption of customer origin. By providing full-link
					HTTPS encryption, anti-hotlinking, anti-hijacking, anti-tampering, and
					other solutions to avoid malicious ticket swiping, information
					leakage, server abnormalities, and other problems to meet the vital
					security needs of the financial industry
				</div>
				<div
					ref="content3"
					:class="{ expanded: isExpanded3 }"
					class="bai-content-3"
				>
					<img src="../public/110.png" class="bai-img-4" />
				</div>
			</div>

			<div class="bai-item-3">
				<div class="bai-text-2">Enterprise portals</div>
				<div class="bai-text-3" @click="toggleContent4">
					Forum blogs, interactive news websites, education industry, and
					enterprise portals have rich content and diverse user behaviors. Many
					users will visit the same news hotspot and API call simultaneously,
					which may easily cause the website to open slowly or even crash. This
					makes the stability of website access and the speed of content
					updating face more significant challenges
				</div>
				<div
					ref="content4"
					:class="{ expanded: isExpanded4 }"
					class="bai-content-3"
				>
					<img src="../public/111.png" class="bai-img-4" />
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: "Baishan",
	data() {
		return {
			isExpanded1: false,
			isExpanded2: false,
			isExpanded3: false,
			isExpanded4: false
		};
	},
	methods: {
		toggleContent1() {
			const content = this.$refs.content1;

			if (this.isExpanded1) {
				// 施加收起动画
				content.style.height = content.scrollHeight + "px"; // 先设置当前高度
				setTimeout(() => {
					content.style.transition = "height 0.5s ease-in-out";
					content.style.height = "0px"; // 再收起
				}, 10);
			} else {
				// 施加展开动画
				content.style.height = "auto"; // 先让浏览器计算真实高度
				let height = content.scrollHeight + "px"; // 读取实际高度
				content.style.height = "0px"; // 先缩小
				setTimeout(() => {
					content.style.transition = "height 0.5s ease-in-out";
					content.style.height = height; // 再展开
				}, 10);
			}

			this.isExpanded1 = !this.isExpanded1;
		},
		toggleContent2() {
			const content = this.$refs.content2;

			if (this.isExpanded2) {
				// 施加收起动画
				content.style.height = content.scrollHeight + "px"; // 先设置当前高度
				setTimeout(() => {
					content.style.transition = "height 0.5s ease-in-out";
					content.style.height = "0px"; // 再收起
				}, 10);
			} else {
				// 施加展开动画
				content.style.height = "auto"; // 先让浏览器计算真实高度
				let height = content.scrollHeight + "px"; // 读取实际高度
				content.style.height = "0px"; // 先缩小
				setTimeout(() => {
					content.style.transition = "height 0.5s ease-in-out";
					content.style.height = height; // 再展开
				}, 10);
			}

			this.isExpanded2 = !this.isExpanded2;
		},
		toggleContent3() {
			const content = this.$refs.content3;

			if (this.isExpanded3) {
				// 施加收起动画
				content.style.height = content.scrollHeight + "px"; // 先设置当前高度
				setTimeout(() => {
					content.style.transition = "height 0.5s ease-in-out";
					content.style.height = "0px"; // 再收起
				}, 10);
			} else {
				// 施加展开动画
				content.style.height = "auto"; // 先让浏览器计算真实高度
				let height = content.scrollHeight + "px"; // 读取实际高度
				content.style.height = "0px"; // 先缩小
				setTimeout(() => {
					content.style.transition = "height 0.5s ease-in-out";
					content.style.height = height; // 再展开
				}, 10);
			}

			this.isExpanded3 = !this.isExpanded3;
		},
		toggleContent4() {
			const content = this.$refs.content4;

			if (this.isExpanded1) {
				// 施加收起动画
				content.style.height = content.scrollHeight + "px"; // 先设置当前高度
				setTimeout(() => {
					content.style.transition = "height 0.5s ease-in-out";
					content.style.height = "0px"; // 再收起
				}, 10);
			} else {
				// 施加展开动画
				content.style.height = "auto"; // 先让浏览器计算真实高度
				let height = content.scrollHeight + "px"; // 读取实际高度
				content.style.height = "0px"; // 先缩小
				setTimeout(() => {
					content.style.transition = "height 0.5s ease-in-out";
					content.style.height = height; // 再展开
				}, 10);
			}

			this.isExpanded4 = !this.isExpanded4;
		}
	}
};
</script>
<style>
/* 过渡动画 */
.slide-enter-active,
.slide-leave-active {
	transition: max-height 0.5s ease-in-out, padding 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
	max-height: 0;
	padding: 0;
	overflow: hidden;
}

.bai-img {
	width: 100%;
	height: auto;
	display: block;
}

.bai-section-1 {
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 0;
}

.bai-text-1 {
	text-align: center;
	font-size: 2rem;
	margin: 0 0 80px 0;
}

.bai-content-1 {
	display: flex;
	flex-wrap: wrap;
	padding: 0 10%;
	box-sizing: border-box;
}

.bai-item-1 {
	height: 600px;
	width: 25%;
	display: flex;
	flex-direction: column;
	padding: 60px 30px 0 30px;
	border-radius: 10px;
}

.bai-item-2 {
	height: 600px;
	width: 50%;
	display: flex;
	padding: 60px;
	border-radius: 10px;
	box-sizing: border-box;
}

.bai-img-2 {
	width: 42px;
	display: block;
}

.bai-text-2 {
	font-size: 1.5rem;
	margin: 15px 0;
}

.bai-text-3 {
	font-size: 1rem;
	line-height: 1.5rem;
	color: #6b7586;
}

.bai-item-1:hover {
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

.bai-item-2:hover {
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

.bai-section-2 {
	background: #f9fafa;
	padding: 80px 0;
}

.bai-img-3 {
	width: 60px;
	display: block;
	height: 60px;
	margin-right: 30px;
}

.bai-content-2 {
	display: flex;
	flex-direction: column;
}

.bai-section-3 {
	background: #fff;
	padding: 80px 10%;
}

.bai-item-3 {
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
	padding: 30px;
	border-radius: 10px;
	margin-bottom: 15px;
}

.bai-content-3 {
	background: #f9fafa;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
	overflow: hidden;
	height: 0;
	transition: height 0.5s ease-in-out;
}

.bai-img-4 {
	width: 800px;
	height: auto;
}
</style>