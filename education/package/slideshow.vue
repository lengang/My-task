<template>
	<view class="box0" id="box">
		<view class="uni-margin-wrap" style="width: 94%;">
			<swiper class="swiper" @change="log" circular :indicator-dots="true" :autoplay="true" :interval="3000"
				:duration="1000">
				<swiper-item v-for="item in bant.may" :key="item.id">
					<view class="swiper-item uni-bg-red">
						<img :src="item.imageUrl" style='width: 100%; height: 100%;' class='My_img' alt="">
					</view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script setup>
	import {connter} from "../unils/api.js"
	import {onMounted,reactive,toRefs} from 'vue'
	const bant = reactive({
		may: []
	});
	onMounted(() => {
		connter().then(res => {
			bant.may = res.data.data
		})
	})
	let log = (e) => {
		let div = document.querySelector('#box')
		div.className = 'box' + e.detail.current
	}
</script>

<style>
	swiper-item {
		border-radius: 20rpx;
	}

	.uni-margin-wrap {
		background-color: aqua;
	}

	.box0 {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		width: 100%;
		height: 334rpx;
	}

	.box1 {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		width: 100%;
		height: 334rpx;
		background: linear-gradient(to bottom, red, #fff);
	}

	.box2 {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		width: 100%;
		height: 334rpx;
		background: linear-gradient(to bottom, pink, #fff);
	}
</style>
