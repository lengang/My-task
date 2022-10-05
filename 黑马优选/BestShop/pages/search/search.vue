<template>
	<view class="search_box">
		<view class="header">
			<input type="text" class="ipt" placeholder="请输入内容" v-model="data.searchVal" @input="searchOk" />
			<button class="btn" v-show="data.searchList.length > 0" @click="reset">取消</button>
		</view>
		<view class="content">
			<view class="item" v-for="item in data.searchList" :key="item.goods_id" @click="toDetails(item.goods_id)">
				{{item.goods_name}}
			</view>
			<view class="item" v-show="data.searchList.length <= 0 && data.searchVal != ''">暂无数据</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		reactive
	} from 'vue'
	import {
		getSearchGoods
	} from '@/api/api'
	import * as TS from '@/api/define'
	const data = reactive({
		searchVal: '',
		searchList: [],
		timer: null
	})
	// 搜索
	const searchOk = () => {
		if(data.searchVal == '') {
			return data.searchList = []
		}
		clearTimeout(data.timer)
		data.timer = setTimeout(() => {
			getSearchGoods(data.searchVal).then(res => {
				console.log(res);
				
					data.searchList = res.message
				
			})
		}, 500)
	}
	// 重制
	const reset = () => {
		data.searchVal = ''
		data.searchList = []
	}
	// 跳转详情页
	const toDetails = (id) => {
		uni.navigateTo({
			url: `/pages/goodsDetail/goodsDetail?id=${id}`
		})
		reset()
	}
</script>

<style lang="scss">
	.search_box {
		background-color: #eee;
		height: 100vh;
		padding: 20rpx;

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.ipt {
				background-color: #fff;
				height: 60rpx;
				flex: 2;
			}

			.btn {
				height: 60rpx;
				line-height: 60rpx;
				font-size: 20rpx;
			}
		}
		.content {
			margin-top: 20rpx;
			.item {
				padding: 20rpx;
				border-bottom: 2px solid #eee;
				background-color: #fff;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
		}
	}
</style>
