<template>
	<view>
		<view class="title">
			购物车
		</view>
		<view class="car_box">
			<view class="car_item" v-for="(item,index) in goods" :key="index">
				<view class="left">
					<checkbox :value="item.status" />
				</view>
				<view class="img">
					<image :src="item.url" mode=""></image>
				</view>
				<view class="right">
					<view class="name">{{item.name}}</view>
					<view class="price">￥{{item.price}}</view>
					<view><u-number-box v-model="item.number" :min="1" @change.prevent="valChange(index)"></u-number-box></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue"
	export default {
		setup() {
			const data = reactive({
				goods: []
			})
			const valChange = (index: number) => {
				data.goods[index].number ++
				uni.setStorage({
					key: 'goods',
					data: JSON.stringify(data.goods)
				})
			}
			
			return {
				...toRefs(data),
				valChange
			}
		},
		onShow() {
			uni.getStorage({
				key: 'goods',
				success: (res) => {
					this.goods = JSON.parse(res.data)
				}
			})
		}
	}
</script>

<style lang="scss">
	.car_box {
		padding: 20rpx;
		box-sizing: border-box;
		.car_item {
			display: flex;
			justify-content: space-between;
			height: 180rpx;
			align-items: center;
			margin: 20rpx 0;
			.left {
				width: 10%;
			}
			.img {
				width: 30%;
				height: 100%;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.right {
				width: 55%;
				.name {
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.price {
					color: #c00;
					margin: 10rpx 0;
				}
			}
		}
	}
.title {
	height: 80rpx;
	line-height: 80rpx;
	font-weight: 600;
	border: 1px solid #ccc;
}
</style>
