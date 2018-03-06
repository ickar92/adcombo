<template>
  <div class="home">
    <div class="wrapper">
		
		
		<section class="slider">
			<div class="swiper-container">
    		    <div class="swiper-wrapper">
			        <div class="swiper-slide">Slide 1</div>
			    	<div class="swiper-slide">Slide 2</div>
			    	<div class="swiper-slide">Slide 3</div>
			    	<div class="swiper-slide">Slide 4</div>
			    	<div class="swiper-slide">Slide 5</div>
			    	<div class="swiper-slide">Slide 6</div>
    			</div>
   			    
 				<div class="swiper-button-prev"></div>
    			<div class="swiper-button-next"></div>
			</div>
			<div class="swiper-pagination"></div>
		</section>
		<section class="services">
			<div class="services__item">
				<img src="../assets/web.png" alt="">
				<h4>Web Design</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem excepturi iusto accusantium.</p>
			</div>
			<div class="services__item">
				<img src="../assets/photo.png" alt="">
				<h4>Photography</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam velit sed?</p>
			</div>
			<div class="services__item">
				<img src="../assets/video.png" alt="">
				<h4>Video</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque architecto cupiditate non.</p>
			</div>
			<div class="services__item">
				<img src="../assets/graphic.png" alt="">
				<h4>Graphic Design</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quia, fugit reprehenderit.</p>
			</div>
			<div class="services__item">
				<img src="../assets/ecommerce.png" alt="">
				<h4>E-Commerce</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, sint. Vitae, in.</p>
			</div>
			<div class="services__item">
				<img src="../assets/programming.png" alt="">
				<h4>Programming</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, enim perspiciatis ratione.</p>
			</div>
		</section>
	</div>
  </div>
</template>

<script>
export default {
	
}
</script>


<style>


.slider {
	max-width: 1200px;
	height: 350px;
	margin-top: 30px;
	display: flex;
	background: #fff;
	padding: 20px;
	position: relative;
}
.swiper-pagination {
	position: absolute;
	bottom: -15px;
	right: 44%;
	background: #fff;
	padding-left: 10px;
	padding-right: 10px;
	padding-bottom: 5px;
	padding-top: 0;
}
.swiper-pagination-bullet {
	margin-right: 5px;
	width: 10px;
	height: 10px;
	background: #ccc;
	opacity: 1;
}
.swiper-pagination-bullet-active {
	background: #eee;
	border: 1px solid black;
}
.swiper-pagination-bullet:last-child {
	margin-right: 0px;
}
.swiper-container {
      width: 100%;
      height: 100%;
      
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ddd;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

/* Services style*/

.services {
	display: flex;
	justify-content: center;
	margin-top: 25px;
}
.services__item {
	text-align: center;
	
}
.services__item:not(:last-child) {
	border-right: 1px solid #a3a3a3;
}
</style>
