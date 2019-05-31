<template>
	<div class="content-wrapper">
		<aside class="aside__menu">
			<p class="filter__header">Фильтры:</p>

		</aside>
		<ul class="items__list">
			<li v-for="item in items" :key="item.code">
				<router-link :to="{name: 'item', params: {code: item.id}}">
					<div class="listItem__card">
						<div class="listItem__photo" :style="{ backgroundImage: 'url(' + item.main_photo + ')'}"></div>
						
						<div class="listItem__text">
							<p class="listItem__name">{{ item.name }}</p>
							<p class="listItem__price">Цена: {{ item.price }} руб.</p>
							
							<router-link to="/" class="listItem__addToCard"><i class="material-icons md-48">add_shopping_cart</i></router-link>
						
						</div>					
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	//import axios from 'axios'
	import { db } from '../main'

	export default {
		name: "ItemsList",
		data() {
			return {
				baseURL: process.env.BASE_URL,
				items: []
			}
		},
		methods: {
			// fetchData() {
			// 	axios.get(this.baseURL + 'data.json').then(response => {
			// 		console.log(response);
			// 		this.broshes = response.data.broshes;
			// 	});
			//}
		},
		firestore() {
			return {
				items: db.collection('items')
			}
		},
		mounted: function() {
			//this.fetchData();
		}
	}
</script>

<style lang="scss">
	.content-wrapper {
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-auto-rows: auto;
		grid-template-areas:
			"aside content"
			;
	}
	.aside__menu {
		grid-area: aside;
		padding: 20px;
		height: 100vw;
	}
	.filter__header {
		font-size: 1.3em;
		color: #2a2a2a;
	}
	.items__list {
		list-style: none;
		grid-area: content;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

		grid-gap: 30px;
		padding: 30px;
		
		.listItem__card {			
			display: block;
			box-shadow: 0 0 10px rgba(0,0,0,0.4);
			transition: all 0.4s;
			position: relative;
			&:hover {
				transform: scale(1.02);
			}
		}
		
	}
	.listItem__text {
		padding: 10px;
	}
	.listItem__name {
		font-size: 1.3em;
		font-weight: bold;
		margin: 5px 0;
	}
	.listItem__price {
		font-size: 1.2em;
	}
	.listItem__photo {
		width: 100%;
		height: 250px;
		background-size: cover;
		background-position: center;
	}
	.listItem__addToCard {
		display: block;
		position: absolute;
		right: 15px;
		bottom: 15px;
		padding: 10px 10px 8px 10px;
		border: 3px solid #ccc;
		border-radius: 50%;

		&:hover {
			background: #ccc;
		}
	}
</style>