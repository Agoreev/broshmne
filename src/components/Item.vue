<template>
	<div class="item-wrapper" v-if="item">
		<div class="swiper">
			<carousel
				:images="item.photos"
			></carousel>
		</div>
		<div class="item__info">
			<p class="item__name">{{ item.name }}</p>
			<div>
				<p class="item__description">{{ item.description }}</p>
				<p class="item__size">Размер: {{ item.size }}</p>
			</div>
			<p class="item__price">Цена: {{ item.price }}</p>
			<router-link to="/card" class="btn btn-card">Добавить в корзину</router-link>	
		</div>
	</div>
</template>
<script>
	import { db }  from '../main'
	import Carousel from './Carousel.vue'

	export default {
		name: 'Item',
		components: {
			Carousel
		},
		data() {
			return {
				item: null
			}
		},
		created() {
			
		},
		firestore() {
			
			return {
				item: db.collection('items').doc(this.$route.params.code)
			}
		}		
	}
</script>
<style lang="scss">
	.item-wrapper {
		padding: 30px;
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-template-areas: 
		"swiper info"
		;
	}
	.swiper {
		max-height: 800px;
		overflow: hidden;
		grid-area: swiper;
		padding: 0 40px;
	}
	.item__info {
		grid-area: info;
	}
	.item__name {
		font-size: 1.6em;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.item__description {
		font-size: 1.3em;
		margin-bottom: 20px;
	}
	.item__size {
		font-size: 1.3em;
		margin-bottom: 20px;
	}
	.item__price {
		font-size: 1.3em;
		margin-bottom: 20px;
	}
</style>