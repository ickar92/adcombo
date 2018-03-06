<template>
	<div class="slider">
		<swiper :options="swiperOption">
	        <swiper-slide></swiper-slide>
	        <swiper-slide></swiper-slide>
	        <swiper-slide></swiper-slide>
	        <swiper-slide></swiper-slide>
	        <swiper-slide></swiper-slide>
	        <swiper-slide></swiper-slide>
	        <div class="swiper-button-prev" slot="button-prev"></div>
	        <div class="swiper-button-next" slot="button-next"></div>
  		</swiper>
		<div class="swiper-pagination" slot="pagination"></div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style>
.slider {
	max-width: 960px;
	height: 350px;
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
	background: #4c4c4c;
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
  background: #999999;
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
.swiper-button-prev {
  background-image: url(../assets/prev.png)
}
.swiper-button-next {
  background-image: url(../assets/next.png)
}

</style>