<template>
 	<div class="home">
	    <slider></slider>
	    <div class="services">
					<div class="services__item">
						<img src="../assets/web.png" alt="">
						<h4>Web Design</h4>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing, corporis.</p>
					</div>
				<div class="services__item">
					<img src="../assets/photo.png" alt="">
					<h4>Photography</h4>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing, quibusdam!</p>
				</div>
				<div class="services__item">
					<img src="../assets/video.png" alt="">
					<h4>Video</h4>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing, quibusdam!</p>
				</div>
				<div class="services__item">
					<img src="../assets/graphic.png" alt="">
					<h4>Graphic Design</h4>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing, quibusdam!</p>
				</div>
				<div class="services__item">
					<img src="../assets/ecommerce.png" alt="">
					<h4>E-Commerce</h4>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing, quibusdam!</p>
				</div>
				<div class="services__item">
					<img src="../assets/programming.png" alt="">
					<h4>Programming</h4>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing, quibusdam!</p>
				</div>
				</div>
	    
	</div>
</template>

<script>
import Slider from '../components/Slider.vue'

export default {
  name: 'app',
  components: {
    Slider
  }
}
</script>


<style>
.services {
	display: flex;
	justify-content: center;
	margin-top: 30px;
}

service:not(:last-child) {
	border-right: 1px solid #a3a3a3;
}
.services__item {
	text-align: center;
	padding: 15px;
	padding-bottom: 0;
	
}
.services__item:not(:last-child) {
	border-right: 1px solid #a3a3a3;
}
.services__item h4 {
	font-family: 'Titillium Web', sans-serif;
  font-weight: 300;
	font-size: 18px;
}
.services__item p {
	text-align: justify;
	font-family: 'Tahoma', sans-serif;
	font-size: 12px;
	line-height: 18px;
}
@media screen and (max-width: 700px){
	.services {
		flex-direction: column;
	}
	.services__item {
		border-right: none;
	}
}
</style>
