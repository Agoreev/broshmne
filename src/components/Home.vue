<template>
	<div class="home-wrapper">
		<div class="home__form">
			<h1 class="home__form__header">У нас вы можете заказать брошь любой сложности, по готовому проекту или по индивидуальному дизайну.</h1>
			<router-link to="/broshes">Перейти в каталог</router-link>	
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Home'
	}
</script>
<style lang="scss">
	.home-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.home__form {
		background: rgba(0,0,0,0.3);
		padding: 50px;
	}
</style>