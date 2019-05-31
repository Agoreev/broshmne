<template>
  <div id="app">
	<nav class="top-nav">
		<div class="logo">тута лого</div>
		<router-link to="/items" class="nav__link"><span>Каталог</span></router-link>
		<router-link to="/" class="nav__link"><span>Условия оплаты и доставки</span></router-link>
	</nav>
	<router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
*, *::after, *::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
a {
	text-decoration: none;
	color: #2a2a2a;
}

.top-nav {
	display: flex;
	border-bottom: 1px solid #ccc;
	box-shadow: 10px 0 10px rgba(0,0,0,0.4);
	height: 80px;
	align-items: center;
	padding: 0 20px;
	
	.logo {
		margin-right: 40px;
	}

	.nav__link {
		text-decoration: none;
		color: #2a2a2a;
		font-size: 1.2em;
		padding: 0 10px;
		display: flex;
		align-self: stretch;

		span {
			align-self: center;
		}

		&:hover {
			color: #e00;
			box-shadow: 0 0 4px rgba(0,0,0,0.4) inset;
		}
	}
}
</style>
