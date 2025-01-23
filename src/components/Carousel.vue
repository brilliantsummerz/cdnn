<!--
 * @Author: zhangxm
 * @Date: 2025-01-24 05:24:20
 * @LastEditors: zhangxm
 * @LastEditTime: 2025-01-24 05:30:39
 * @Description: file content
 * @FilePath: /cdn_index/src/components/Carousel.vue
-->
<template>
	<div class="carousel">
		<div
			class="carousel-images"
			:style="{ transform: `translateX(-${currentIndex * 100}%)` }"
		>
			<img
				v-for="(image, index) in images"
				:key="index"
				:src="image"
				:alt="`Slide ${index + 1}`"
			/>
		</div>
		<div class="carousel-buttons">
			<button @click="showPrevImage">&#10094;</button>
			<button @click="showNextImage">&#10095;</button>
		</div>
	</div>
</template>
  
  <script>
export default {
	props: {
		images: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			currentIndex: 0
		};
	},
	methods: {
		showNextImage() {
			this.currentIndex = (this.currentIndex + 1) % this.images.length;
		},
		showPrevImage() {
			this.currentIndex =
				(this.currentIndex - 1 + this.images.length) % this.images.length;
		}
	},
	mounted() {
		setInterval(this.showNextImage, 3000); // Auto-slide every 3 seconds
	}
};
</script>
  
  <style scoped>
.carousel {
	position: relative;
	width: 100%;
	margin: auto;
	overflow: hidden;
}

.carousel-images {
	display: flex;
	transition: transform 0.5s ease-in-out;
}

.carousel-images img {
	width: 100%;
	height: 400px;
	flex-shrink: 0;
	object-fit: cover;
}

.carousel-buttons {
	position: absolute;
	top: 50%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	transform: translateY(-50%);
}

.carousel-buttons button {
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	height: 400px;
	width: 30px;
	cursor: pointer;
}

.carousel-buttons button:hover {
	background-color: rgba(0, 0, 0, 0.7);
}
</style>
  