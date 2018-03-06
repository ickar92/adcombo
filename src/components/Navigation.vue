<template>
  <div class="navigation">
			<ul class="menu">
				<li><router-link to="home">Home</router-link></li>
				<li><router-link to="about">About</router-link></li>
				<li><router-link to="portfolio">Portfolio</router-link></li>
				<li><router-link to="news">News</router-link></li>
				<li><router-link to="contact">Contact</router-link></li>
			</ul>
			<div class="search">
				<input type="text">
			</div>
		</div>
</template>

<style>
.navigation {
	background: linear-gradient(to top, #c9c9c9, #ffffff);
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 8px 6px -6px #a1a1a1;
	margin-top: 25px;
}

.menu {
	flex: 2;
	display: flex;
}

.menu li {
	border-right: 1px solid #a1a1a1;
}

.menu li:last-child {
	border-right: none;
}

.menu a {
	display: block;
	padding: 10px 20px;
	text-decoration: none;
	color: inherit;
}

.navigation .search {
	margin-right: 25px;
	
}
input[type="text"] {

  background-color : #bdbdbd; 
	background-image: url(../assets/search.png);
  background-position: 147px -3px;
  background-repeat: no-repeat;

}
</style>
