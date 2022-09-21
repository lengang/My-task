<template>
	<view>
		<Slideshow />
		<List />

	</view>
</template>
<script>
	import Slideshow from '../../package/slideshow.vue'
	import List from './children/list.vue'
	export default {
		components: {
			Slideshow,
			List
		},
		setup() {

		}
	}
</script>

<style>

</style>
