<template>
	<div>
		<el-carousel :interval="4000" type="card" height="350px">
			<el-carousel-item v-for="item in slideshow" :key="item.id">
				<img
					:src="'http://101.132.181.9:3000/' + item.imgPath"
					alt=""
					style="width: 100%; height: 100%"
				/>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	import { carousel, login, shoppingCart } from '@/api/api.js';
	export default {
		data() {
			return {
				slideshow: [],
			};
		},
		created() {
			// this.getdata();
			carousel().then((res) => {
				// console.log(res, '我是本地');
				this.slideshow = res.data.carousel;
			});
		},
	};
</script>

<style scoped>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel {
		width: 90%;
		margin: auto;
	}
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}
</style>
