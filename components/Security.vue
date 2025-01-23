<template>
	<div>
		<img src="../public/82.png" class="sec-img-1" />
		<div class="sec-box-1">
			<div class="sec-box-2">
				<div class="sec-item-1">
					Defend against today’s most sophisticated attacks
				</div>
				<div class="sec-item-2">
					Businesses today face the constant threat of sophisticated and
					well-orchestrated DDoS attacks. Akamai’s DDoS protection, built on
					dedicated infrastructure, protects your internet-facing applications
					and systems while maintaining fast, highly secure, and
					always-available DNS.
				</div>
			</div>
			<div class="sec-text-3">
				Stronger application and API security with less effort
			</div>
			<div class="sec-box-3">
				<div class="sec-item-3">
					<div class="sec-text-4">Tailor defenses to the latest threats</div>
					<div class="sec-text-5">
						Dynamically adapt protections to evolving attacks — including those
						targeting the OWASP lists & sophisticated DDoS attacks.
					</div>
				</div>
				<div class="sec-item-3">
					<div class="sec-text-4">
						Automate updates and self-tune to simplify security
					</div>
					<div class="sec-text-5">
						Minimize application security and development effort with
						Akamai-managed updates and machine learning–powered self-tuning.
					</div>
				</div>
				<div class="sec-item-3">
					<div class="sec-text-4">Empower developers and security teams</div>
					<div class="sec-text-5">
						Operationalize application security with a choice of popular DevOps
						tools and deploy within a CI/CD pipeline.
					</div>
				</div>
			</div>
			<div class="sec-text-3">How App & API Protector works</div>
			<div class="sec-box-3">
				<div class="sec-flip-container">
					<div class="sec-flip-box">
						<div class="sec-flip-box-side sec-front">
							<img src="../public/83.png" class="sec-img-4" />
						</div>
						<div class="sec-flip-box-side sec-back">
							<div class="sec-text-4">Route</div>
							<div class="sec-text-5">
								Minimize application security and development effort with
								Akamai-managed updates and machine learning–powered self-tuning.
							</div>
						</div>
					</div>
				</div>

				<div class="sec-flip-container">
					<div class="sec-flip-box">
						<div class="sec-flip-box-side sec-front">
							<img src="../public/84.png" class="sec-img-4" />
						</div>
						<div class="sec-flip-box-side sec-back">
							<div class="sec-text-4">Defend</div>
							<div class="sec-text-5">
								Every request is inspected in real time to defend against DDoS,
								web application and API attacks, and malicious bots.
							</div>
						</div>
					</div>
				</div>

				<div class="sec-flip-container">
					<div class="sec-flip-box">
						<div class="sec-flip-box-side sec-front">
							<img src="../public/84.png" class="sec-img-4" />
						</div>
						<div class="sec-flip-box-side sec-back">
							<div class="sec-text-4">Adapt</div>
							<div class="sec-text-5">
								Adapt Automated defense from the Behavioral DDoS Engine protects
								your org from sophisticated volumetric attacks.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img src="../public/87.png" style="margin-top: 60px" class="sec-img-1" />
	</div>
</template>
<style>
.sec-flip-container {
	perspective: 1000px;
	margin: 2rem auto;
	width: 300px;
	height: 200px;
}

.sec-flip-box {
	position: relative;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: transform 0.6s;
}

.sec-flip-container:hover .sec-flip-box {
	transform: rotateY(180deg);
}

.sec-flip-box-side {
	position: absolute;
	width: 100%;
	height: 300px;
	backface-visibility: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: white;
	padding: 30px;
	box-sizing: border-box;
}

.sec-front {
	background-color: rgba(255, 0, 0, 0.4);
}

.sec-back {
	background-color: rgba(255, 0, 0, 0.8);
	transform: rotateY(180deg);
	display: flex;
	flex-direction: column;
}

.sec-img-1 {
	width: 100%;
}
.sec-box-1 {
	width: 1200px;
	margin: 0 auto;
}

.sec-box-2 {
	display: flex;
	padding: 100px 0;
}

.sec-item-1 {
	width: 700px;
	font-size: 1.5rem;
	font-weight: bold;
}

.sec-item-2 {
	font-size: 1.2rem;
	line-height: 1.5rem;
	margin-left: 50px;
}

.sec-text-3 {
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	margin-bottom: 60px;
}

.sec-box-3 {
	display: flex;
	justify-content: space-around;
	margin-bottom: 60px;
}

.sec-item-3 {
	border-top: 5px solid rgb(255, 0, 0);
	width: 30%;
	height: 300px;
	background: #f4f5f4;
	box-sizing: border-box;
	padding: 30px;
}

.sec-text-4 {
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 20px;
}

.sec-text-5 {
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 100;
}

.sec-img-4 {
	width: 300px;
	height: 300px;
	object-fit: cover;
}
</style>