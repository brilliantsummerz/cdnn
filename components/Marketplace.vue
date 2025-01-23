<template>
	<div class="market-container">
		<header class="market-header">
			<div class="market-header-title">Marketplace</div>
			<div class="market-overlay"></div>
		</header>
		<section class="market-section-main">
			<div class="market-text-1">AWS Marketplace Solutions</div>
			<section class="market-section">
				<div class="market-section-title">About AWS Marketplace</div>
				<div class="market-section-content">
					AWS Marketplace is a curated digital catalog that enables
					organizations to easily discover, procure, license, provision, and
					manage third-party software. You can find thousands of software
					listings across popular categories such as Security, Business
					Applications, and Data & Analytics, as well as specific industries
					like Healthcare, Financial Services, and Public Sector. You can also
					explore and purchase professional services to configure, deploy, and
					manage your third-party software. With AWS Marketplace, you can
					shorten procurement times, implement the control measures needed for
					confident operations, and enable your organization to unleash
					innovation.
				</div>
			</section>

			<section class="market-section">
				<div class="market-section-title">1、CentOS AMI Image</div>
			</section>
			<img src="../public/39.png" class="market-img-1" />
			<div class="market-section-content">
				The official CentOS has already released AMI images specifically for the
				AWS platform, with a detailed URL at:
				https://www.centos.org/download/aws-images/. We are merely the carriers
				and collectors of CentOS AMI images, archiving every CentOS version's
				AMI image to provide convenience and access for users who need to
				utilize older official versions.
			</div>
			<img src="../public/40.png" class="market-img-1" />
			<section class="market-section">
				<div class="market-section-title">2、Starlink SD-WAN</div>
				<div class="market-section-content">
					Starlink SD-WAN is a cloud-native solution developed by Hanwei,
					primarily targeted at users with connectivity needs to the AWS cloud,
					enhancing their networking experience and improving network quality.
					As a service for network connectivity, it provides various WAN
					connectivity solutions based on AWS cloud and on-premises IDC data
					centers, branches, and remote users. Leveraging AWS's global
					infrastructure, it improves the networking experience for users
					worldwide. SD-WAN is a multi-tenant solution specifically designed to
					provide reliable, secure, and highly available networking solutions
					for enterprises and users. This solution is a cloud-native,
					multi-service networking platform that seamlessly integrates with AWS
					VPC to enable interconnection between on-premises and cloud
					environments.
				</div>
			</section>
			<img src="../public/41.png" class="market-img-2" />
			<img src="../public/42.png" class="market-img-2" />
		</section>
	</div>
</template>
<script>
export default {
	name: "AWS",
	data() {
		return {
			// data
		};
	},
	methods: {
		// methods
	}
};
</script>
<style>
.market-container {
	width: 100%;
}

.market-header {
	background-color: #f4f4f4;
	text-align: center;
	width: 100%;
	height: 240px;
	position: relative;
	background-size: cover;
	background-position: center;
	display: flex;
	align-content: center;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 80px;
	background-image: url(https://www.hanweie.com/wp-content/uploads/2019/08/2019082008554541.jpg);
}

.market-overlay {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: #00020f;
	opacity: 0.55;
}

.market-header-title {
	color: #fff;
	font-size: 4rem;
	z-index: 1;
	text-align: center;
	letter-spacing: 10px;
}

.market-section-main {
	margin: 0 auto;
	max-width: 1200px;
}

.market-text-1 {
	text-align: center;
	font-size: 1.8rem;
}

.market-section {
	margin-bottom: 40px;
}

.market-section-title {
	color: #464646;
	font-size: 1.2rem;
	margin-bottom: 30px;
}

.market-section-content {
	color: rgba(0, 0, 0, 0.6);
	font-size: 1.2rem;
	text-indent: 25px;
	line-height: 1.5rem;
}

.market-img-1 {
	display: block;
	width: 500px;
	height: auto;
	margin: 0 auto;
	margin-bottom: 40px;
}

.market-title-1 {
	color: #000;
	font-size: 1.5rem;
	margin-bottom: 30px;
}

.market-content-1 {
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
	align-items: center;
}

.market-title-2 {
	margin-bottom: 30px;
}

.market-content-4 {
	box-sizing: border-box;
	padding-left: 30px;
	font-size: 1.1rem;
	line-height: 1.2rem;
}

.market-img-2 {
	display: block;
	width: 1000px;
	height: auto;
	margin: 0 auto;
}
</style>
