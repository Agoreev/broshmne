<template>
	<div class="content-wrapper">
		<aside class="aside__menu">
			<ul>
				<li v-for="brosh in broshes" v-bind:key="brosh.code">
					<router-link :to="{name: 'brosh', params: {code: brosh.id}}">{{ brosh.name }}</router-link>
				</li>
			</ul>
		</aside>
		<router-view></router-view>
	</div>
</template>

<script>
	//import axios from 'axios'
	import { db } from '../main'

	export default {
		name: "BroshesList",
		data() {
			return {
				baseURL: process.env.BASE_URL,
				broshes: []
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
				broshes: db.collection('broshes')
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
		grid-template-rows: auto;
		grid-template-areas:
			"aside content"
			;
	}
	.aside__menu {
		grid-area: aside;
		background-color: rgba(0,0,0,0.3);
		box-shadow: 2px 0 2px rgba(0,0,0,0.8);
		padding: 20px;
		height: 100vw;
	}
</style>