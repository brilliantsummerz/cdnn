<template>
	<div>
		<header class="del-header">
			<div class="del-header-title">AWS Service Delivery Program</div>
			<div class="del-overlay"></div>
		</header>
		<div class="del-box-1">
			<img src="../public/73.png" class="del-img-1" />
			<div class="del-text-1">Introduction to AWS Service Delivery Program</div>
			<div class="del-text-2">
				The AWS Service Delivery Program is designed to recognize AWS Partners
				who demonstrate deep technical knowledge, experience, and proven success
				in delivering specific AWS services to customers. From assisting
				customers in running serverless code using AWS Lambda to deploying
				secure, reliable, and high-performance managed Windows solutions on
				Amazon EC2 Windows, AWS Service Delivery Partners adhere to best
				practices to support customers' unique use cases.
			</div>

			<div class="del-text-1">
				Regarding service delivery capabilities, there are the following two
				items:
			</div>
			<img src="../public/74.png" class="del-img-2" />

			<div class="del-text-1">1、AWS EC2 for Windows Delivery Program</div>
			<div class="del-text-2">
				AWS Partners in the Amazon EC2 for Windows Delivery Program are cloud
				migration and modernization experts who can assist you in planning,
				implementing, and managing Windows-based solutions. These Partners
				specialize in implementing and migrating Microsoft workloads, helping
				you maximize agility, security, and cost efficiency.
			</div>

			<div class="del-text-3">Case Overview</div>
			<div class="del-text-2">
				This case involves a local footwear and apparel manufacturing company in
				Xiamen with thousands of stores across China. The dealer system used in
				these retail stores is deployed in the Ningxia Region of Amazon Web
				Services (AWS). The entire dealer system adopts a deployment method that
				combines traditional B/S (Browser/Server) and C/S (Client/Server)
				architectures. The server-side applications are developed based on the
				.NET language platform, thus the business system runs on the Windows
				Server 2016 operating system platform. The backend employs a relational
				SQL Server 2016 database, and the web server is implemented using
				Microsoft IIS.
			</div>

			<div class="del-text-3">Main AWS Services Utilized</div>
			<div class="del-text-2">
				In this case, the primary AWS services utilized include EC2, self-built
				SQL Server on EC2, Auto Scaling, CloudTrail, Systems Manager, KMS (Key
				Management Service), S3, and others.
			</div>

			<div class="del-text-3">AWS Architecture for the Case</div>
			<img src="../public/75.png" class="del-img-2" />

			<div class="del-text-3">AWS Project Capabilities</div>
			<div class="del-text-2">
				To accomplish the migration in this case, our company possesses AWS
				Migration capabilities, as well as expertise in Microsoft Windows
				migration, SQL Server database administration, Microsoft Active
				Directory (AD) management, and .NET development. These capabilities
				allowed us to assist the client in swiftly migrating to AWS. The entire
				migration process was exceptionally smooth, with a downtime of just 15
				minutes.
			</div>

			<img src="../public/76.png" class="del-img-2" />
			<div class="del-text-1">2、AWS EC2 for Windows Delivery Program</div>
			<div class="del-text-2">
				The Amazon EC2 Delivery Program for Microsoft Windows Server is an AWS
				partnership program designed to assist you in planning, implementing,
				and managing cloud migrations and modernization efforts for
				Windows-based solutions. These AWS Partners specialize in implementing
				and migrating Microsoft workloads, helping you maximize agility,
				security, and cost efficiency.
			</div>
			<div class="del-text-3">Case Overview</div>
			<div class="del-text-2">
				This case involves a local footwear and apparel manufacturing company in
				Xiamen, China, with thousands of stores across the country. The dealer
				system used in these retail stores is deployed in the Ningxia Region of
				Amazon Web Services (AWS). The entire dealer system adopts a deployment
				method that combines traditional B/S (Browser/Server) and C/S
				(Client/Server) architectures. The server-side applications are
				developed based on the .NET language platform, meaning the business
				system operates on the Windows Server 2016 operating system platform.
				The backend utilizes a relational SQL Server 2016 database, while the
				web server is implemented using Microsoft IIS.
			</div>
			<div class="del-text-3">Main AWS Services Utilized</div>
			<div class="del-text-2">
				In this case, the primary AWS services utilized include EC2,
				self-managed SQL Server on EC2, Auto Scaling (note: corrected spelling
				from "Autoscallig"), CloudTrail, Systems Manager, KMS (Key Management
				Service), and S3.
			</div>
			<div class="del-text-3">AWS Architecture for the Case</div>

			<img src="../public/77.png" style="width: 1000px" class="del-img-2" />
			<div class="del-text-3">AWS Project Capabilities</div>
			<div class="del-text-2">
				This case represents a highly challenging migration project, as the APP
				in question is already in production. The client is particularly
				concerned about user churn rates and migration downtime, which was
				limited to just 5 minutes. For this project, the team needed to possess
				AWS Migration capabilities, as well as expertise in MySQL database
				migration, Codis migration, MongoDB migration, DynamoDB development, and
				big data-related code development.
			</div>
		</div>
	</div>
</template>
<style>
.del-header {
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

.del-overlay {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: #00020f;
	opacity: 0.55;
}

.del-header-title {
	color: #fff;
	font-size: 3rem;
	z-index: 1;
	text-align: center;
	letter-spacing: 10px;
}

.del-box-1 {
	width: 1200px;
	margin: 0 auto;
}
.del-text-1 {
	font-size: 1.5rem;
	margin-bottom: 20px;
}

.del-text-2 {
	font-size: 1rem;
	margin-bottom: 20px;
	line-height: 1.5rem;
	color: rgb(99, 99, 99);
}

.del-img-1 {
	width: 100%;
	height: auto;
}

.del-img-2 {
	display: block;
	width: 400px;
	height: auto;
	margin: 0 auto;
	margin-bottom: 30px;
}

.del-text-3 {
	font-size: 1.2rem;
	margin-bottom: 20px;
}
</style>