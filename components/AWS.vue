<template>
	<div class="aws-container">
		<header class="aws-header">
			<div class="aws-header-title">AWS</div>
			<div class="aws-overlay"></div>
		</header>
		<section class="aws-section-main">
			<section class="aws-section">
				<div class="aws-section-title">AWS Cloud Computing</div>
				<div class="aws-section-content">
					Amazon Web Services (AWS) is the most comprehensive and widely used
					cloud platform globally, offering over 175 fully-featured services
					from data centers worldwide. Millions of customers, including the
					fastest-growing startups, large-scale enterprises, and major
					governmental organizations, are leveraging AWS to reduce costs,
					enhance agility, and accelerate innovation.
				</div>
			</section>

			<section class="aws-section">
				<div class="aws-section-title">
					The leadership position in cloud computing
				</div>
				<div class="aws-section-content">
					In the newly released "Magic Quadrant for Global Cloud Infrastructure
					as a Service (IaaS)", Gartner Research positions AWS in the "Leaders
					Quadrant". Cloud IaaS, in the context of this Magic Quadrant, is
					defined as "standardized, highly automated offerings owned by service
					providers and provisioned on-demand to consumers, where computing
					resources are complemented by storage and networking capabilities."
				</div>
			</section>
			<img src="../public/1.png" class="aws-img-1" />
			<section class="aws-title-1">The leading cloud platform</section>
			<section class="aws-content-1">
				<div class="aws-content-2">
					<div class="aws-title-2">1、The most functionalities</div>
					<div class="aws-content-4">
						From infrastructure technologies such as compute, storage, and
						databases, to emerging technologies like machine learning,
						artificial intelligence, data lakes and analytics, and the Internet
						of Things, AWS offers far more services and functionalities than any
						other cloud service provider. This makes migrating existing
						applications to the cloud and building virtually anything you can
						imagine faster, easier, and more cost-effective. AWS's services also
						boast the most diverse and sophisticated functionalities. For
						instance, AWS provides a wide array of databases that are
						specifically built for different types of applications, allowing you
						to choose the right tool for the job to optimize cost and
						performance.
					</div>
				</div>
				<div class="aws-content-3">
					<img src="../public/2.png" class="aws-img-2" />
				</div>
			</section>

			<section class="aws-content-1">
				<div class="aws-content-3">
					<img src="../public/3.png" class="img-2" />
				</div>
				<div class="aws-content-2">
					<div class="aws-title-2">
						2、A vibrant community of customers and partners
					</div>
					<div class="aws-content-4">
						AWS boasts the largest and most vibrant community, with millions of
						active customers and thousands of partners worldwide. Customers
						across nearly all industries and sizes, including startups,
						enterprises, and public sector organizations, run a wide range of
						possible use cases on AWS. The AWS Partner Network (APN) comprises
						thousands of system integrators specializing in AWS services and
						tens of thousands of Independent Software Vendors (ISVs) bringing
						their technologies to AWS.
					</div>
				</div>
			</section>

			<section class="aws-content-1">
				<div class="aws-content-2">
					<div class="aws-title-2">3、Secure</div>
					<div class="aws-content-4">
						AWS aims to be the most flexible and secure cloud computing
						environment in today's market. Our core infrastructure is built to
						meet the security requirements of military, global banking, and
						other highly sensitive organizations. This is supported by a suite
						of deep cloud security tools, which includes 230 security,
						compliance, and governance services and features. AWS supports 90
						security standards and compliance certifications, and all 117 AWS
						services that store customer data have the capability to encrypt
						that data.
					</div>
				</div>
				<div class="aws-content-3">
					<img src="../public/4.png" class="aws-img-2" />
				</div>
			</section>

			<section class="aws-content-1">
				<div class="aws-content-2">
					<div class="aws-title-2">4、The fastest innovation speed</div>
					<div class="aws-content-4">
						With AWS, you can leverage the latest technologies to experiment and
						innovate faster. We are constantly accelerating the pace of
						innovation to invent entirely new technologies that you can use to
						transform your business. For example, in 2014, AWS pioneered the
						field of serverless computing with the launch of AWS Lambda, a
						platform that enables developers to run their code without
						provisioning or managing servers. AWS built Amazon SageMaker, a
						fully managed machine learning service that empowers everyday
						developers and data scientists to use machine learning without any
						prior experience.
					</div>
				</div>
				<div class="aws-content-3">
					<img src="../public/5.png" class="aws-img-2" />
				</div>
			</section>

			<section class="aws-content-1">
				<div class="aws-content-3">
					<img src="../public/6.png" class="aws-img-2" />
				</div>
				<div class="aws-content-2">
					<div class="aws-title-2">
						5、The most mature operational expertise and professionalism
					</div>
					<div class="aws-content-4">
						AWS offers unparalleled experience, maturity, reliability, security,
						and performance that you can trust for your most critical
						applications. For over 13 years, AWS has been providing cloud
						services to millions of customers worldwide running a diverse range
						of use cases. Among all cloud service providers, AWS boasts the most
						extensive operational experience at scale.
					</div>
				</div>
			</section>
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
.aws-container {
	width: 100%;
}

.aws-header {
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

.aws-overlay {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: #00020f;
	opacity: 0.55;
}

.aws-header-title {
	color: #fff;
	font-size: 4rem;
	z-index: 1;
	text-align: center;
	letter-spacing: 10px;
}

.aws-section-main {
	margin: 0 auto;
	max-width: 1200px;
}

.aws-section {
	margin-bottom: 40px;
}

.aws-section-title {
	color: #000;
	font-size: 1.5rem;
	margin-bottom: 30px;
}

.aws-section-content {
	color: rgba(0, 0, 0, 0.6);
	font-size: 1.2rem;
	text-indent: 25px;
	line-height: 1.5rem;
}

.aws-img-1 {
	display: block;
	width: 600px;
	height: auto;
	margin: 0 auto;
	margin-bottom: 40px;
}

.aws-title-1 {
	color: #000;
	font-size: 1.5rem;
	margin-bottom: 30px;
}

.aws-content-1 {
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
	align-items: center;
}

.aws-content-2 {
}

.aws-title-2 {
	margin-bottom: 30px;
}

.aws-content-4 {
	box-sizing: border-box;
	padding-left: 30px;
	font-size: 1.1rem;
	line-height: 1.2rem;
}

.aws-img-2 {
	display: block;
	width: 400px;
	height: auto;
}
</style>
