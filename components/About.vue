<template>
	<div class="abo-box-1">
		<div class="abo-text-1">Company Profile</div>
		<div class="abo-text-2">
			Our company is a professional IT data consulting and service provider
			dedicated to offering users high-quality information products, consulting,
			and services. Established in Shanghai in 2015, Jinmu Information has set
			up branches in Beijing, Shenzhen, and Guangzhou.
		</div>
		<div class="abo-text-2">
			Jinmu Information is a core partner of MongoDB in North Asia and a key
			partner of Akamai, Zendesk, Vonage, and Splunk in China, providing clients
			with professional technical services, consulting, and application
			development.
		</div>
		<div class="abo-text-2">
			We serve over 80 top-tier clients in industries such as finance,
			insurance, securities, gaming, and e-commerce, with sales operations
			covering mainland China and Hong Kong. In 2020, we developed our own
			products and initiated external corporate technical training.
		</div>
		<div class="abo-box-2">
			<div class="abo-item-1">
				<div class="abo-box-4">
					<img src="../public/94.png" class="abo-img-1" />
				</div>
				<div class="abo-box-3">
					<div class="abo-text-3">Our products are reliable.</div>
					<div class="abo-text-2">
						Jinmu Information is a core partner of Akamai, MongoDB, Zendesk,
						Vonage, and Splunk, offering clients professional technical
						services, consulting, and application development with reliable
						products.
					</div>
				</div>
			</div>

			<div class="abo-item-1">
				<div class="abo-box-4">
					<img src="../public/95.png" class="abo-img-1" />
				</div>
				<div class="abo-box-3">
					<div class="abo-text-3">Empowering Teams</div>
					<div class="abo-text-2">
						We possess a professional technical team that can provide clients
						with technical services, consulting, and application development.
					</div>
				</div>
			</div>

			<div class="abo-item-1">
				<div class="abo-box-4">
					<img src="../public/96.png" class="abo-img-1" />
				</div>
				<div class="abo-box-3">
					<div class="abo-text-3">Standardization and Normalization</div>
					<div class="abo-text-2">
						Jinmu Information developed its own products in 2020 and conducted
						external technical training for enterprises.
					</div>
				</div>
			</div>

			<div class="abo-item-1">
				<div class="abo-box-4">
					<img src="../public/97.png" class="abo-img-1" />
				</div>
				<div class="abo-box-3">
					<div class="abo-text-3">Comprehensive Support</div>
					<div class="abo-text-2">
						We integrate management thinking, business models, and IT technology
						to provide IT consulting and services.
					</div>
				</div>
			</div>

			<div class="abo-item-1">
				<div class="abo-box-4">
					<img src="../public/98.png" class="abo-img-1" />
				</div>
				<div class="abo-box-3">
					<div class="abo-text-3">
						Serving Over 80 Leading Clients in Various Industries
					</div>
					<div class="abo-text-2">
						Jinmu Information serves over 80 leading clients in industries such
						as finance, insurance, securities, gaming, e-commerce, and more.
					</div>
				</div>
			</div>

			<div class="abo-item-1">
				<div class="abo-box-4">
					<img src="../public/99.png" class="abo-img-1" />
				</div>
				<div class="abo-box-3">
					<div class="abo-text-3">Extensive Sales Coverage</div>
					<div class="abo-text-2">Covering mainland China and Hong Kong.</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.abo-box-1 {
	margin: 0 auto;
	width: 1200px;
}
.abo-text-1 {
	position: relative;
	margin: 30px 0;
	font-size: 1.5rem;
	color: #000;
	text-align: center;
}

.abo-text-1::after {
	content: "";
	position: absolute;
	bottom: -10px;
	left: 50%;
	transform: translateX(-50%);
	width: 50px;
	height: 2px;
	background-color: #000;
}

.abo-text-2 {
	margin-bottom: 30px;
	font-size: 1rem;
	color: #000;
	line-height: 1.5rem;
}

.abo-box-2 {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.abo-item-1 {
	width: 48%;
	display: flex;
}

.abo-box-4 {
	width: 50px;
	height: auto;
	margin-right: 30px;
}

.abo-img-1 {
	width: 50px;
	height: auto;
}

.abo-box-3 {
	width: 60%;
}

.abo-text-3 {
	font-size: 1.2rem;
	color: #000;
	margin-bottom: 10px;
}
</style>