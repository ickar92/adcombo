<template>
  <div id="app" class="wrapper">
    <h1><span>locus</span> advertising</h1>
    <navigation></navigation>
    <main>
      <router-view></router-view>
    </main>
  </div>
    
  
</template>

<script>
import Navigation from './components/Navigation.vue'


export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	background: #ddd;
	color: #4c4c4c;
}

ul {
	list-style: none;
}

.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}

h1 {
	text-transform: uppercase;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 300;
  margin-top: 25px;
}

h1 span {
	color: black;
  font-weight: 600;
}
</style>
