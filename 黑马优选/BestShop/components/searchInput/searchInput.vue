<template>
	<view>
		<input type="text" placeholder="搜索" :value="modelValue" @input="input" />
	</view>
</template>

<script>
	export default {
		props: ['modelValue'],
		setup(props, ctx) {
			const input = (e) => {
				console.log(e);
				ctx.emit("update:modelValue",e.detail.value)
			}
			return {
				input
			}
		}
	}
</script>

<style>
	input {
		width: 96%;
		margin-left: 2%;
		height: 60rpx;
		height: 60rpx;
		border-radius: 10rpx;
		background-color: white;
		text-align: center;

	}
</style>
