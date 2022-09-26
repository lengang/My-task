<template>
	<view class="box">
		<p class='top'>
			<view class="left">
				<h3 style='margin-left: 4px;'>
					{{datum}}
				</h3>
				<div class="xhz">
					HOT
				</div>
			</view>
			<view class="right">
				全部>
			</view>
		</p>
		<div class="center" v-for="item in My_search.splice(0,5)" :key="item.id">
			<!-- 左侧时间以及图片 -->
			<img :src="item.mainImage" alt="">
			<span>
				{{item.totalTime}}
			</span>
			<!-- 右侧文字 -->
			<div class="center_right">
				<h3>
					{{item.title}}
				</h3>
				<p style='color: #ccc; margin-top: 18px;'>
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
</template>

<script>
	import {
		onMounted,
		reactive,
		toRefs
	} from 'vue'
	import {
		search
	} from '@/unils/api.js'
	export default {
		props: [
			'datum',
		],
		setup(props, context) {
			const My_data = reactive({
				My_search: []
			})
			onMounted(() => {
				search().then(res => {
					My_data.My_search = res.data.data.records
				})
			})
			return {
				...toRefs(My_data)
			}
		}
	}
</script>

<style>
	.center_right {
		margin-left: 10px;
	}

	.center_right p {
		display: flex;
		font-size: 10px;
	}

	.center_right h3 {
		font-size: 12px;
	}

	.box {
		padding: 0 20rpx;
	}

	.top {
		display: flex;
		justify-content: space-between;

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

	img {
		width: 126px;
		height: 70px;
		border-radius: 5px;
	}

	.center:nth-of-type(1) {
		margin: 12px 0 0 0;
	}

	.center {
		display: flex;
		margin-top: 8px;
		position: relative;
		border-bottom: solid 1px #ccc;
		padding-bottom: 5px;
	}

	.center span {
		position: absolute;
		bottom: 10px;
		color: #fff;
		border-radius: 5px;
		right: 236px;
		width: 48px;
		height: 14px;
		line-height: 14px;
		font-size: 8px;
		background-color: rgba(0, 0, 0, .3);
	}
</style>
