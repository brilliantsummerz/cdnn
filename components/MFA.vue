<template>
	<div>
		<img src="../public/88.png" class="mfa-img-1" />
		<div class="mfa-box-1">
			<div class="mfa-item-1">
				Secure workforce logins across your applications
			</div>
			<div class="mfa-item-2">
				Akamai MFA secures workforce logins for your cloud, web-based,
				on-premises, SaaS, and IaaS applications by leveraging the FIDO2
				standard for authentication security. It delivers a user-friendly mobile
				push experience, eliminating the need for expensive hardware security
				keys. Akamai MFA seamlessly integrates with Akamai Enterprise
				Application Access to provide a complete Zero Trust Network Access
				(ZTNA) solution.
			</div>
		</div>
		<img src="../public/89.png" class="mfa-img-1" />
		<div class="mfa-text-1">How Akamai MFA works</div>
		<div class="mfa-box-3">
			<div class="mfa-flip-container">
				<div class="mfa-flip-box">
					<div class="mfa-flip-box-side mfa-front">
						<img src="../public/90.png" class="mfa-img-4" />
					</div>
					<div class="mfa-flip-box-side mfa-back">
						<div class="mfa-text-4">Push</div>
						<div class="mfa-text-5">
							A mobile app turns the smartphone into a roaming FIDO2
							authenticator to verify the user’s identity.
						</div>
					</div>
				</div>
			</div>

			<div class="mfa-flip-container">
				<div class="mfa-flip-box">
					<div class="mfa-flip-box-side mfa-front">
						<img src="../public/91.png" class="mfa-img-4" />
					</div>
					<div class="mfa-flip-box-side mfa-back">
						<div class="mfa-text-4">Authenticate</div>
						<div class="mfa-text-5">
							Akamai MFA combines the strong authentication security of FIDO2
							with the simple end-user experience of a push notification.
						</div>
					</div>
				</div>
			</div>

			<div class="mfa-flip-container">
				<div class="mfa-flip-box">
					<div class="mfa-flip-box-side mfa-front">
						<img src="../public/92.png" class="mfa-img-4" />
					</div>
					<div class="mfa-flip-box-side mfa-back">
						<div class="mfa-text-4">Enforce</div>
						<div class="mfa-text-5">
							FIDO2 shares no secrets with the server side, making it impervious
							to multi-factor authentication exploits.
						</div>
					</div>
				</div>
			</div>

			<div class="mfa-flip-container">
				<div class="mfa-flip-box">
					<div class="mfa-flip-box-side mfa-front">
						<img src="../public/93.png" class="mfa-img-4" />
					</div>
					<div class="mfa-flip-box-side mfa-back">
						<div class="mfa-text-4">Integrate</div>
						<div class="mfa-text-5">
							Create a seamless service by integrating with market-leading IdP
							and identity solutions like Microsoft AD, Okta, and Ping Identity.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
	<style>
.mfa-text-5 {
	margin-top: 15px;
	font-size: 1rem;
	color: #fff;
	text-align: center;
}
.mfa-img-4 {
	width: 254px;
	height: 240px;
	object-fit: cover;
}
.mfa-box-3 {
	display: flex;
	justify-content: space-around;
	margin-bottom: 60px;
}
.mfa-flip-container {
	perspective: 1000px;
	margin: 2rem auto;
	width: 254px;
	height: 240px;
}

.mfa-flip-box {
	position: relative;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: transform 0.6s;
}

.mfa-flip-container:hover .mfa-flip-box {
	transform: rotateY(180deg);
}

.mfa-flip-box-side {
	position: absolute;
	width: 100%;
	height: 240px;
	backface-visibility: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: white;
	padding: 30px;
	box-sizing: border-box;
	border-radius: 10px;
}

.mfa-front {
	background-color: rgba(255, 0, 0, 0.4);
}

.mfa-back {
	background-color: rgba(255, 0, 0, 0.8);
	transform: rotateY(180deg);
	display: flex;
	flex-direction: column;
}
.mfa-text-1 {
	font-size: 2rem;
	color: #333;
	text-align: center;
	margin-top: 60px;
}
.mfa-img-1 {
	width: 100%;
	height: auto;
}
.mfa-box-1 {
	display: flex;
	box-sizing: border-box;
	padding: 60px 0;
}

.mfa-item-1 {
	width: 50%;
	font-size: 1.5rem;
	color: #333;
	text-align: center;
	margin-top: 30px;
	position: relative;
}

.mfa-item-2 {
	width: 50%;
	font-size: 1rem;
	color: #333;
	text-align: center;
	line-height: 1.5rem;
}
</style>