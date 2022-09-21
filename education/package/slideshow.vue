<template>
	<view class="box">
		<swiper style="width: 94%;" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in may" :key="item.id">
				<view class="swiper-item" ooo>
					<image class="banner-img" :src="item.imageUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		connter
	} from "../unils/api.js"
	import {
		onMounted,
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup(props, context) {
			const bant = reactive({
				may: []
			});
			onMounted(() => {
				connter().then(res => {
					bant.may = res.data.data
				})
			})
			return {
				...toRefs(bant)
			}
		}
	}
</script>

<style>
	swiper-item {
		border-radius: 20rpx;
	}

	.uni-margin-wrap {
		background-color: aqua;
	}

	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 30rpx;
		width: 100%;
		height: 440rpx;
		background: linear-gradient(to bottom, blue, #fff);
	}
</style>
