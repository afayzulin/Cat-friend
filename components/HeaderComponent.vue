<template>
	<header>
		<div @click="goToPage($store.state.links.homeLink)" id="cat_friend__logo"></div>
		<nav>
			<ul>
				<li>
					<a :href="$store.state.links.homeLink">
						Главная
					</a>
				</li>
				<li>
					<a href="/">
						Статьи
					</a>
				</li>
				<li>
					<a href="/">
						Смешные фото
					</a>
				</li>
				<li>
					<a href="/">
						Здоровье
					</a>
				</li>
				<li>
					<a href="/">
						Контакты
					</a>
				</li>
			</ul>
			<form id="search-form" @submit.prevent>
				<input type="text" name="search">
				<input value="" type="submit">
			</form>
			<div id="cat_friend__cat-jump"></div>
		</nav>
	</header>
</template>

<script>
	export default {
		data () {
			return {}
		},
		methods: {
			goToPage(page) {
				window.location = page;
			},
		},
	}
</script>

<style>
	header {
		padding-top: 15px;
	}

	#cat_friend__logo {
		width: 70px;
		height: 70px;
		display: inline-block;
		background: url(~assets/img/header/logo.png) no-repeat;
		background-size: contain;
		vertical-align: middle;
		cursor: pointer;
	}

	nav {
		margin-left: 25px;
		display: inline-block;
		font-size: 18px;
		width: calc(100% - 100px);
		background: #2f2f2f;
		border-radius: 20px;
		color: #fff;
		position: relative;
	}

	nav ul li {
		padding-left: 25px;
		display: inline-block;
	}

	nav ul li:hover {
		opacity: 0.7;
	}

	nav ul {
		display: inline-block;
	}

	#cat_friend__cat-jump {
		background: url(~assets/img/header/cat-jump.png) no-repeat;;
	    background-size: cover;
	    width: 82px;
	    height: 38px;
	    display: inline-block;
	    position: absolute;
	    top: 5px;
	    right: 211px;
	}

	#search-form {
		display: inline-block;
		float: right;
		padding-top: 14px;
		margin-right: 10px;
		position: relative;
	}

	#search-form input[type='submit'] {
		width: 25px;
		height: 25px;
		background: url(~assets/img/header/search.png);
		background-size: cover;
		outline: none;
		border: none;
		position: absolute;
		right: 5px;
		top: 15px;
	}

	#search-form input[type='text'] {
		height: 25px;
		border-radius: 10px;
		width: 160px;
		border: none;
		padding: 1px 30px 1px 10px;
	}
</style>