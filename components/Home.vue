<template>
	<div>
		<Carousel :images="carouselImages" />
		<Tab :tabs="tabs">
			<template #tab1>
				<p>
					Cloud computing is a computing model based on the Internet. It
					provides computing resources (such as servers, storage, networks,
					software, etc.) as services to users, enabling them to obtain and use
					these resources flexibly according to their needs, without having to
					build and maintain complex hardware and software infrastructure by
					themselves. The following is a detailed description of cloud computing
					in English:
				</p>
				<h2 style="margin: 30px 0">Characteristics of Cloud Computing</h2>
				<p>
					On-demand self-service: Users can obtain and configure computing
					resources such as servers and storage at any time according to their
					own needs, without the need for manual interaction with service
					providers. Broad network access: Cloud computing resources can be
					accessed via the Internet on various devices, including computers,
					mobile phones, tablets, etc. Users are not limited by geographical
					location or device type. Resource pooling: Cloud computing providers
					integrate a large number of computing resources into a resource pool
					and then dynamically allocate and share these resources according to
					user needs. Multiple users can share the resources in the same
					resource pool. Rapid elasticity: Cloud computing can quickly and
					flexibly scale computing resources up or down to adapt to changes in
					business needs. When the business volume increases, resources can be
					quickly added; when the business volume decreases, resources can be
					released in a timely manner. Measured service: Cloud computing service
					providers can accurately measure and monitor the resources used by
					users and charge users according to the actual amount of resources
					used, enabling users to clearly understand their resource usage and
					cost expenditure.
				</p>
				<h2 style="margin: 30px 0">Service Models of Cloud Computing</h2>
				<p>
					Infrastructure as a Service (IaaS): It provides basic computing,
					storage and network resources. Users can deploy their own operating
					systems, application programs, etc. on these resources. For example,
					Amazon's EC2 and Alibaba Cloud's Elastic Compute Service. Users can
					rent server instances on demand and choose different CPU, memory,
					storage and other configurations according to their actual needs.
					Platform as a Service (PaaS): Based on IaaS, it provides a platform
					including operating systems, databases, middleware, etc. Users can
					develop, test and deploy application programs on this platform without
					worrying about the maintenance of the underlying infrastructure. Such
					as Google App Engine and Microsoft Azure. Developers can focus on
					application development without worrying about server configuration
					and management. Software as a Service (SaaS): Directly provides
					software application programs. Users can use them through Internet
					browsers without installing software locally. Common SaaS applications
					include office software (such as Tencent Docs) and customer
					relationship management systems (such as Salesforce). Users only need
					to subscribe to the service on demand to use the corresponding
					software functions.
				</p>
				<h2 style="margin: 30px 0">Application Scenarios of Cloud Computing</h2>
				<p>
					Enterprise applications: Enterprises can deploy their business systems
					in the cloud and use the elasticity and scalability of cloud computing
					to quickly respond to market changes and reduce IT costs. For example,
					during promotional activities, some e-commerce enterprises can quickly
					expand server resources through cloud computing to cope with traffic
					peaks. Big data processing: Cloud computing provides powerful
					computing power and storage resources for the storage, processing and
					analysis of big data. Big data processing frameworks such as Hadoop
					and Spark can run on cloud computing platforms to achieve efficient
					processing of massive data. Artificial intelligence and machine
					learning: Artificial intelligence and machine learning require a large
					amount of computing resources for model training and reasoning. Cloud
					computing provides powerful GPU computing power to meet these needs.
					Platforms such as Baidu's PaddlePaddle and Alibaba Cloud's PAI provide
					convenient development and training environments for artificial
					intelligence developers. Game development and operation: Game
					developers can use the elastic resources of cloud computing to quickly
					deploy servers in the early stage of game launch and dynamically
					expand resources as the number of users increases. At the same time,
					cloud computing can also provide game cloud storage, cloud rendering
					and other services to enhance players' gaming experience.
				</p>
			</template>
			<template #tab2>
				<p>
					Content delivery network (CDN) is a geographically distributed network
					of servers that work together to provide fast and reliable delivery of
					content to users. The following is a detailed description in English:
				</p>
				<h2 style="margin: 30px 0">Definition and Basic Principle</h2>
				<p>
					A CDN is designed to reduce the latency and improve the performance of
					content delivery by caching content at multiple edge servers located
					close to the end-users. When a user requests a certain piece of
					content, such as a web page, image, video, or script, the CDN system
					determines the user's location and directs the request to the nearest
					server that has a cached copy of the requested content. This way, the
					content can be delivered to the user more quickly, as it doesn't have
					to travel a long distance from the origin server.
				</p>
				<h2 style="margin: 30px 0">Key Components and Their Functions</h2>
				<p>
					Edge Servers: These are the servers distributed across different
					geographical locations. Their main function is to cache and store
					copies of frequently requested content. When a user's request arrives,
					the edge server checks if it has the requested content in its cache.
					If so, it immediately sends the content to the user. If not, it will
					request the content from the origin server and then cache it for
					future requests. Content Delivery Mechanism: The CDN uses various
					techniques to ensure efficient content delivery. One of the key
					techniques is content caching. The CDN caches content based on factors
					like popularity and user demand. Popular content is more likely to be
					cached at multiple edge servers to reduce the load on the origin
					server and improve delivery speed. Another important mechanism is load
					balancing. The CDN distributes the incoming requests evenly among
					multiple servers to avoid overloading any single server and to ensure
					optimal performance. DNS (Domain Name System): The DNS plays a crucial
					role in the CDN operation. It is used to direct user requests to the
					appropriate edge server. When a user enters a domain name in their
					browser, the DNS resolves the domain name to the IP address of the
					closest edge server that can serve the content. This process is
					transparent to the user and allows the CDN to efficiently route
					requests based on the user's location and the availability of content
					at different servers.
				</p>
				<h2 style="margin: 30px 0">Advantages of CDN</h2>
				<p>
					Improved Performance: By delivering content from servers close to the
					users, CDNs significantly reduce the time it takes for content to
					reach the users. This leads to faster website loading times, smoother
					video playback, and overall better user experience. For example, an
					e-commerce website using a CDN can ensure that product images and
					descriptions load quickly, reducing the likelihood of users abandoning
					the site due to slow loading. Reduced Bandwidth Costs: Since the
					content is cached at edge servers, there is less traffic going back
					and forth between the origin server and the users. This helps to
					reduce the bandwidth usage of the origin server, which in turn can
					lead to significant cost savings for the content provider. Increased
					Reliability and Scalability: CDNs have multiple servers distributed
					across different locations. If one server fails or experiences high
					traffic, the CDN can automatically route the requests to other
					available servers. This ensures that the content is always available
					to the users and provides a high level of reliability. Additionally,
					CDNs can easily scale up or down to handle varying levels of traffic.
					During peak periods, such as holidays or special events, the CDN can
					allocate more resources to handle the increased demand.
				</p>
				<h2 style="margin: 30px 0">Application Scenarios of CDN</h2>
				<p>
					Websites and Web Applications: CDNs are widely used to accelerate the
					delivery of static and dynamic web content. They can cache images, CSS
					files, JavaScript files, and even entire web pages. This helps
					websites to load faster, improve user engagement, and enhance search
					engine rankings, as search engines often consider page load speed as a
					ranking factor. Video Streaming: For video streaming platforms, CDNs
					play a vital role in ensuring smooth playback. They cache video
					segments at edge servers, allowing users to stream videos without
					buffering or interruptions. This is especially important for live
					video streaming events, where real-time delivery and high quality are
					crucial. Software and Media Downloads: When users download software
					applications, games, or large media files, CDNs can speed up the
					download process by distributing the files across multiple servers.
					Users can download the files from the nearest server, reducing the
					download time and improving the overall user experience.
				</p>
			</template>
			<template #tab3>
				<p>
					Cloud security refers to a set of technologies, policies, and
					procedures designed to protect cloud computing environments, data, and
					applications from various threats and ensure the confidentiality,
					integrity, and availability of cloud-based resources. The following is
					a detailed description in English:
				</p>
				<h2 style="margin: 30px 0">Components of Cloud Security</h2>
				<p>
					Data Security: This is a core aspect of cloud security. It involves
					protecting data stored in the cloud from unauthorized access,
					disclosure, modification, and deletion. Techniques such as encryption
					are used to scramble data so that only authorized users with the
					correct decryption keys can access and understand it. For example,
					data at rest (such as files stored in cloud storage) and data in
					transit (when being transferred between different cloud servers or
					between the user and the cloud) can be encrypted to ensure its
					security. Identity and Access Management (IAM): IAM is crucial for
					controlling who can access cloud resources and what actions they can
					perform. It includes user authentication (verifying the identity of
					users), authorization (granting appropriate permissions to users based
					on their roles and responsibilities), and access control (limiting
					access to specific resources). For instance, a cloud service may use
					multi-factor authentication, such as requiring a password and a
					one-time verification code sent to a user's mobile phone, to enhance
					the security of user logins. Network Security: This focuses on
					protecting the network infrastructure of the cloud environment. It
					involves measures like firewalls, which monitor and control incoming
					and outgoing network traffic based on predefined security rules.
					Intrusion detection and prevention systems are also part of network
					security, constantly scanning for malicious activities and attempting
					to block or mitigate potential threats. For example, if a suspicious
					network connection is detected, the intrusion prevention system can
					automatically block the IP address associated with the threat.
					Application Security: With the increasing number of applications
					running in the cloud, application security becomes essential. It
					includes securing the code of applications, protecting against common
					web application vulnerabilities like SQL injection and cross-site
					scripting (XSS), and ensuring the secure deployment and operation of
					applications. For example, code reviews and security testing tools can
					be used to identify and fix security flaws in application code before
					it is deployed to the cloud.
				</p>
				<h2 style="margin: 30px 0">Security Challenges in Cloud Computing</h2>
				<p>
					Data Ownership and Jurisdiction: In a cloud environment, data is often
					stored on servers located in different geographical regions or even
					countries. Determining data ownership and understanding which laws and
					regulations apply in case of a data breach or legal issue can be
					complex. For example, if a company based in the United States stores
					its data in a cloud server in Europe, it needs to comply with both US
					and EU data protection laws. Multi-tenancy: Cloud computing typically
					involves multiple tenants (users or organizations) sharing the same
					physical infrastructure. This raises the risk of data leakage between
					different tenants. Ensuring that each tenant's data is isolated and
					protected from others is a significant challenge. For instance, a
					security flaw in the cloud infrastructure could potentially allow one
					tenant to access another tenant's data. Lack of Visibility and
					Control: Users of cloud services often have limited visibility into
					the underlying infrastructure and security measures implemented by the
					cloud service provider. They may not have full control over how their
					data is stored, processed, and protected. This makes it difficult for
					them to assess and manage security risks effectively.
				</p>
				<h2 style="margin: 30px 0">Cloud Security Best Practices</h2>
				<p>
					Choose a Reputable Cloud Service Provider: Selecting a cloud provider
					with a proven track record in security, transparent security policies,
					and strong security certifications is crucial. Providers should offer
					features like regular security audits, data backup and recovery, and
					24/7 security monitoring. Implement a Defense-in-Depth Strategy: This
					involves using multiple layers of security controls, such as combining
					network security measures with data encryption and IAM. For example,
					in addition to having a firewall at the network perimeter, encrypting
					data stored in the cloud and implementing strict access controls for
					users. Regularly Update and Patch: Keep all software, applications,
					and operating systems in the cloud environment up to date with the
					latest security patches. This helps to fix known vulnerabilities and
					protect against emerging threats.
				</p>
			</template>
		</Tab>
	</div>
</template>
<script>
import Carousel from "../src/components/Carousel.vue";
import Tab from "../src/components/Tab.vue";

export default {
	components: {
		Carousel,
		Tab
	},
	data() {
		return {
			tabs: [
				{ label: "Cloud Computing", slot: "tab1" },
				{ label: "CDN", slot: "tab2" },
				{ label: "Cloud Security", slot: "tab3" }
			],
			carouselImages: [
				"../public/banner/1.jpg",
				"../public/banner/2.jpg",
				"../public/banner/3.jpg"
			]
		};
	}
};
</script>