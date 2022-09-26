<template>
	<p class='top'>
		<view class="left">
			<h3 style='margin-left: 16px;'>
				近期上新
			</h3>
			<div class="xhz">
				HOT
			</div>
		</view>
		<view class="right" style="margin-right: 10px;">
			全部>
		</view>
	</p>
	<scroll-view scroll-x="true" class="box">
		<view class="center">
			<div class="content" v-for="item in My_data" :key="item.id">
				<img class='date_img' :src="item.mainImage" alt="">
				<!-- 右侧文字 -->
				<div class="center_right">
					<h3 style='font-size: 10px;'>
						{{item.title}}
					</h3>
					<p style='display: flex; color: #ccc; margin-top: 10px; margin-bottom: 4px; font-size: 8px;'>
					<div class='iconfont'>
						&#xe62b
					</div>
					{{item.nickName}}
					</p>
					<div class="bom" style='display: flex; font-size: 10px; '>
						<div style='display: flex; margin-right: 14px; font-size: 8px;color: #f68285; '>
							<div class='iconfont'>
								&#xe697
							</div>
							{{item.priceDiscount}}
						</div>
						<div>
							{{item.commTotal}}人在学
						</div>
					</div>

				</div>

			</div>
		</view>
	</scroll-view>

</template>

<script>
	import {search} from '../../../unils/api.js'
	import {reactive,toRefs,onMounted}from"vue"
	export default {
		setup(propx, context) {
			const My_dt = reactive({
				My_data: []
			})
			onMounted(() => {
				search().then(res => {
					// console.log(res);
					My_dt.My_data = res.data.data.records
				})
			})
			return {
				...toRefs(My_dt)
			}
		}
	}
</script>

<style>
	.box {
		margin-bottom: 30px;
	}

	.center {
		display: flex;
	}

	.content {
		margin-top: 10px;
		margin-right: 8px;
		border-radius: 10px;
		border-bottom: 1px solid #ccc;
		border-right: solid 1px #ccc;
		padding: 5px;
	}

	.content:nth-of-type(1) {
		margin-left: 12px;
	}

	.date_img {
		width: 126px;
		height: 70px;
		border-radius: 5px;
	}

	.top {
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
	}

	.top .left {
		display: flex;
	}

	.xhz {
		width: 40px;
		height: 18px;
		border-radius: 20rpx 20rpx 20rpx 0;
		text-align: center;
		font-size: 10px;
		color: #fff;
		background-color: orangered;
		margin-left: 10rpx;
	}

	.right {
		color: #ccc;
	}
</style>
