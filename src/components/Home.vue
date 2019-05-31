<template>
	<main>
		<video autoplay muted loop id="videoBack" src="back.mov">
			
		</video>
		<div class="home-wrapper">
			<div class="home__form">
				<h1 class="home__form__header">У нас вы можете заказать брошь любой сложности, по готовому проекту или по индивидуальному дизайну.</h1>
				<router-link to="/items" class="btn">Перейти в каталог</router-link>	
			</div>
		</div>
	</main>
</template>
<script>
	export default {
		name: 'Home'
	}
</script>
<style lang="scss">
	body {
		font-size: 18px;
		color: #2A2A2A;
		font-family: 'Philosopher', sans-serif;
	}
	.home-wrapper {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background: rgba(255,255,255,0.4)
	}
	.home__form__header {
		font-weight: 500;
	}
	.home__form {
		background: rgba(255,255,255,0.7);
		width: 800px;
		min-height: 350px;
		padding: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: space-around;
	}
	.btn {
		display: block;
		width: 300px;
		padding: 15px 0;
		text-align: center;
		text-decoration: none;
		transition: 0.3s;
		border: 1px solid #28a745;
		font-size:1.4em;
		background: #28a745;
		color: white;

		&:hover {
			box-shadow: 0 0 10px rgba(0,0,0,0.5);

		}
	}
	#videoBack{
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%; 
		min-height: 100%;
	}

</style>