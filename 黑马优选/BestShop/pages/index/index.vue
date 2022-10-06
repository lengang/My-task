<template>
	<view>
		<!-- 搜索框 -->
		<view class="ipt-box">
			<input class="ipt" type="text" placeholder="搜索" disabled  @click="toSearch">
		</view>
		<!-- 轮播图 -->
		<view class="wrap">
			<u-swiper :list="data.banner" height="340" name="image_src"></u-swiper>
		</view>
		<!-- 分类导航 -->
		<u-grid :col="4" :border="false">
			<u-grid-item v-for="item,index in data.navList" :key="index">
				<image class="pic" :src="item.image_src" mode=""></image>
			</u-grid-item>
		</u-grid>
		<!-- 楼层 -->
		<view class="wrap" v-for="item,i in data.floorList" :key="i">
		<image class="top-pic" :src="item.floor_title.image_src" mode="widthFix"></image>
			<u-row gutter="12">
				<u-col span="4">
					<u-grid :col="1" :border="false">
						<u-grid-item>
							<image class="left-pic" :src="item.product_list[0].image_src" mode="" ></image>
						</u-grid-item>
					</u-grid>
					
				</u-col>
				<u-col span="8">
						<u-grid :col="2" :border="false">
							<u-grid-item v-for="child,index in item.product_list" :key="index"  v-show="child.image_width!=='232'" >
								<image class="pic-in" :src="child.image_src" mode="" style="width: 230rpx;height: 180rpx;"></image>
							</u-grid-item>
						</u-grid>
				</u-col>
			</u-row>
		</view>
	</view>
</template>
<script lang="ts" setup>
	import {
		getSwiper,
		gerNavList,
		getFloorData
	} from '@/api/api.ts'
	import * as TS from '@/api/define.ts'
	import {
		reactive
	} from 'vue'

	const data: any = reactive({
		banner: [], // 轮播图
		navList: [], //分类导航
		floorList:[] //楼层数据
	})
	// 获取轮播图数据
	getSwiper().then(res => {
		if (res.meta.status == 200) {
			data.banner = res.message
		}
	})

	// 获取导航栏数据
	gerNavList().then(res => {
		// console.log(res);
		if (res.meta.status == 200) {
			data.navList = res.message
		}
	})
	
	// 获取楼层数据
	getFloorData().then(res =>{
		console.log(res);
		if(res.meta.status==200){
			data.floorList=res.message
		}
	})
	
	const toSearch=()=>{
		uni.navigateTo({
			url:"/pages/search/search"
		})
	}
</script>

<style lang="scss" scoped>
	.ipt{
		width: 96%;
		margin-left: 2%;
		height: 60rpx;
		height: 60rpx;
		border-radius: 10rpx;
		background-color: white;
		text-align: center;
	}
	.u-row[data-v-57280228] {
		margin: 0;
	}
	.u-grid-item-box[data-v-691f72d1] {
		padding: 0;
	}
	
	.top-pic{
		width: 800rpx;
		height: 100rpx;
		.pic-in{
			width: 244rpx;
			height: 268rpx;
		}
	}
	.left-pic{
		width: 240rpx;
		height: 420rpx;
	}
	.u-row {
		margin: 40rpx 0;
	}
	.demo-layout {
		height: 80rpx;
		border-radius: 8rpx;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.pic {
		width: 128rpx;
		height: 140rpx;
	}
	.ipt-box {
		width: 100%;
		background-color: #d75255;
		height: 70rpx;
		line-height: 70rpx;
	}
</style>
