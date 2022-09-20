<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
	/* 注意这里是全局样式，不用scoped */
	@import '@/assets/reset.scss'; //引入全局样式重置库

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		// background-color: #ccc;
	}
</style>
