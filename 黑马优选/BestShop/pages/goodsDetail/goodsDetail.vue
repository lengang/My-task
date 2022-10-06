<template>
	<view>
		<u-swiper height="400" :list="list.pics" name="pics_mid_url"></u-swiper>
		<view class="price">
			￥ {{list.goods_price}}
		</view>
		<view class="title">
			<view>
				{{list.goods_name}}
			</view>
			<view>
				<u-icon name="star"></u-icon> 收藏
			</view>
		</view>
		<u-parse :html="list.goods_introduce"></u-parse>
		<view class="footer">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script lang="ts">
	import {
		getDetails
	} from '@/api/api.ts'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				list: {
					cat_id: 0,
					pics: [],
					goods_introduce: '',
					goods_price: 0,
					goods_name: '',
					goods_big_logo: ''
				},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 0,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				],
				goods: []
			})
			// 跳转购物车
			const onClick = () => {
				uni.switchTab({
					url: '/pages/carView/carView'
				})
			}
			const GetStorage = () => {
				uni.getStorage({
					key: 'goods',
					success: (res) => {
						data.goods = JSON.parse(res.data)
						let num = 0
						data.goods.forEach(item => {
							num += item.number
						})
						data.options[2].info = num 
					}
				})
			}
			// 加入购物车
			const buttonClick = () => {
				const obj = {
					id: data.list.cat_id,
					name: data.list.goods_name,
					price: data.list.goods_price,
					url: data.list.goods_big_logo,
					status: false,
					number: 1
				}
				const Item = data.goods.find(item => item.id == obj.id)
				if (Item) {
					Item.number++
					uni.showToast({
						title: '商品已存在 + 1'
					})
				} else {
					data.goods.push(obj)
					uni.showToast({
						title: '加入成功'
					})
				}
				uni.setStorage({
					key: 'goods',
					data: JSON.stringify(data.goods)
				})
				GetStorage()
			}
			return {
				...toRefs(data),
				onClick,
				buttonClick
			}
		},
		onLoad(options) {
			getDetails(options.id).then(res => {
				this.list = res.message
			})
		},
		onShow() {
			uni.getStorage({
				key: 'goods',
				success: (res) => {
					this.goods = JSON.parse(res.data)
					let num = 0
					this.goods.forEach(item => {
						num += item.number 
					})
					this.options[2].info = num 
				}
			})
		}
	}
</script>

<style lang="scss">
	.price {
		color: #c00;
		font-size: 30rpx;
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #ccc;
		padding: 10rpx;

		view:nth-child(1) {
			width: 80%;
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
