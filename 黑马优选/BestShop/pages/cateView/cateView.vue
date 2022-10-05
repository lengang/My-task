<template>
	<view>
		<view class="top">
			<searchInput></searchInput>
		</view>

		<view class="cate-container">
			<!-- 左边分类 -->
			<scroll-view scroll-y="true" class="left-box">
				<view :class="{'left-item':true,active:data.currentIndex==index}" v-for="item,index, in data.cateList" :key="index"
					@click="changeId(index)">
					{{item.cat_name}}
				</view>

			</scroll-view>
			<!-- 右边分类 -->
			<scroll-view scroll-y="true" class="right-box">

				<view class="right-item" v-for="item in data.cateList[data.currentIndex].children" :key="item.cat_id">
					<text class="top-txt">/{{item.cat_name}}/</text>
					<view class="goods-box">
						<view class="goods-item" v-for="child,index in item.children" :key="index">
							<image :src="child.cat_icon" mode=""></image>
							<text>{{child.cat_name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>

		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		getGoodsCateList
	} from '@/api/api'
	import * as TS from '@/api/define'
	import {
		reactive
	} from 'vue'

	const data: any = reactive({
		currentIndex: 0,
		cateList:[] //左侧 
	})
	const changeId = (index) => {
		data.currentIndex = index
	}

	getGoodsCateList().then(res => {
		console.log(res);
		if(res.meta.status==200){
			data.cateList=res.message
		}
	})
</script>

<style lang="scss" scoped>
	.cate-container {
		width: 100%;
		display: flex;

		.active {
			color: #d75255;
			position: relative;
		}

		.active::before {
			position: absolute;
			content: '';
			width: 6rpx;
			height: 80rpx;
			background-color: #d75255;
			top: 0;
			left: 4rpx;
		}

		.left-box {
			width: 30%;
			height: 100vh;

			.left-item {
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
			}
		}

		.right-box {
			flex: 1;
			height: 100vh;

			.right-item {
				width: 100%;
				text-align: center;
				margin: 4% 0;

				.top-txt {
					font-size: 36rpx;
				}

				.goods-box {
					width: 100%;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					margin: 6% 0;

					.goods-item {
						width: 33%;
						display: flex;
						flex-direction: column;
						align-items: center;

						image {
							width: 60%;
							height: 100rpx;
							margin: 6% 0;
						}
					}
				}
			}
		}
	}

	.top {
		width: 100%;
		height: 80rpx;
		background-color: #d75255;
	}
</style>
