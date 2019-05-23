<template>
	<div class="item-wrapper">
		<p>brosh name - {{ broshItem.name }}</p>
	</div>
</template>
<script>
	import { db }  from '../main'

	export default {
		name: 'BroshItem',
		data() {
			return {
				broshItem: null
			}
		},
		created() {
			
		},
		firestore() {
			console.log('assign broshItem value')
			return {
				broshItem: db.collection('broshes').doc(this.$route.params.code)
			}

		}		
	}
</script>
<style>
	.item-wrapper {
		grid-area: content;
		padding: 30px;
	}
</style>