<template>
	<div class="contact contact-container">
		<div class="contact-form">
			<p>Feel free to drop a line to work with us or just to say "hi"</p>
			<contact-form></contact-form>
		</div>
		<div class="other-contacts">
			<div class="other-contacts__item">
				<img src="../assets/adress.png" alt="">
				<p>Lorem Avenue Ipsum Street 11/21</p>
			</div>
			<div class="other-contacts__item">
				<img src="../assets/phone.png" alt="">
				<p>555 - 444 33 22</p>
			</div>
			<div class="other-contacts__item">
				<img src="../assets/mail.png" alt="">
				<p>contact@locusadvertising.com</p>
			</div>
			<img class="tw" src="../assets/twitter.png" alt="">
			<div class="socials">
				<img src="../assets/facebook.png" alt="">
				<img src="../assets/last.png" alt="">
				<img src="../assets/deviantart.png" alt="">
				<img src="../assets/tumbler.png" alt="">
				<img src="../assets/stumble.png" alt="">
				<img src="../assets/friend.png" alt="">
				<img src="../assets/delicious.png" alt="">
				<img src="../assets/flickr.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
export default {
  components: {
    ContactForm
  }
}
</script>


<style>
.contact-container {
	display: flex;
  background: #f1f1f0;
  padding: 20px;
  font-family: 'Tahoma', sans-serif;
  font-size: 14px;
}

.contact-form, .other-contacts {
	flex: 1;
}
.tw {
  max-width: 100%;
  margin-top: 35px;
}
.other-contacts__item {
	display: flex;
  margin-top: 10px;
}
.other-contacts__item img {
  margin-right: 10px;
}
.socials {
	display: flex;
  margin-top: 30px;
}
.socials img {
	margin-right: 15px;
}
@media screen and (max-width: 830px){
  .contact-container {
    flex-direction: column;
    align-items: center;
  }
  .other-contacts {
    margin-top: 30px;
  }
  .tw {
    margin-top: 10px;
  }
}
</style>