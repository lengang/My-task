<template>
	<view>
		<Slideshow />
		<List />
		<Search datum='热门推荐' />
		<Update />
		<Search datum='免费精选' />
		<Search datum='付费精选' style='margin-top: 30px;' />
	</view>
</template>
<script>
	import Slideshow from '../../package/slideshow.vue'
	import List from './children/list.vue'
	import Search from './children/search.vue'
	import Update from './children/update.vue'
	export default {
		components: {
			Search,
			Slideshow,
			List,
			Update
		},
		setup() {

		}
	}
</script>

<style>

</style>
