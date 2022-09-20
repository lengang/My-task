<template>
	<div class="box">
		<div class="logo">
			<p>手机</p>
			<ul>
				<li v-for="item in mobile" :key="item.id">
					<img
						:src="'http://101.132.181.9:3000/' + item.product_picture"
						alt=""
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { carousel, login, shoppingCart } from '../../api/api';
	export default {
		data() {
			return {
				mobile: [],
			};
		},
		created() {
			// product/getPromoProduct().then((res) => {
			// 	console.log(res, '我是数据');
			// });
			this.getdata();
		},
		methods: {
			getdata() {
				this.$axios
					.post('product/getPromoProduct', { categoryName: '手机' })
					.then((res) => {
						console.log(res, '我是手机数据');
						this.mobile = res.data.Product;
					});
			},
		},
	};
</script>

<style scoped>
	.box {
		width: 100%;
		display: flex;
		background-color: rgb(240, 239, 239);
		flex-direction: column;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
	}
	.logo {
		display: flex;
		flex-direction: column;
	}
	p {
		font-size: 20px;
	}
	li {
		text-align: center;
		width: 240px;
		height: 300px;
		background-color: red;
		margin: 0 10px;
	}
	img {
		margin-top: 42px;
	}
</style>
