<template>
	<div class="contact-form">
		<form v-on:submit.prevent>
	    	<ul class="form-wrap">
		      <li>
		        <label for="name">Name:</label>
		        <input type="text" id="name">
		      </li>
		      <li>
		        <label for="email">E-mail:</label>
		        <input type="text" id="email">
		      </li>
		      <li>
		        <label for="message">Message:</label>
		        <textarea rows="6" id="message"></textarea>
		      </li>
		      <li>
		        <button type="submit">Send</button>
		      </li>
	    	</ul>
		</form>
	</div>
</template>

<style>
.form-wrap {
	list-style: none;
	padding: 0;
  margin-top: 25px;
  margin-right: 100px;
}

@media screen and (max-width: 880px){
  .form-wrap {
	  margin-right: 50px;
  }
}
@media screen and (max-width: 860px){
  .form-wrap {
	  margin-right: 20px;
  }
}

.form-wrap li {
 	display: flex;
}

.form-wrap li:not(:last-child) {
	margin-bottom: 20px;
}

.form-wrap li label {
	padding: 6px;
	flex: 1;
	/* margin-right: 10px; */
	max-width: 80px;
}

.form-wrap li input,
.form-wrap li textarea {
	min-width: 300px;
  border: 1px solid #d5d5d5;
}
.form-wrap li textarea {
  height: 180px;
}

.form-wrap li button {
	padding: 8px 16px;
	border: none;
	background: #bdbdbd;
	color: #4c4c4c;
  margin-left: 75px;
}
</style>