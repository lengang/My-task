<template>
	<view class="List-box">
		<view class="my_min" v-for="item in My_data.splice(0,7)" :key="item.id" :id='item.id'>
			{{item.name}}
		</view>
		<view class="my_min">
			全部分类
		</view>
	</view>
</template>

<script>
	import {
		list
	} from '@/unils/api.js'
	import {
		onMounted,
		reactive,
		toRefs
	} from "vue"
	export default {
		setup(props, context) {
			const My_List = reactive({
				My_data: []
			})
			onMounted(() => {
				list().then(res => {
					My_List.My_data = res.data.data
				})
			})
			return {
				...toRefs(My_List)
			}
		},
	}
</script>

<style>
	.List-box {
		/* background-color: red; */
		width: 100%;
		height: 200rpx;
		margin-bottom: 24px;
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template:
			"a1 a1 a1 a1"
			"a1 a1 a1 a1"
		;
	}

	.my_min {
		text-align: center;
		width: 150rpx;
		height: 80rpx;
		border-radius: 15rpx;
		background-color: #f8f9fb;
		line-height: 80rpx;

	}
</style>
