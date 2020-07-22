<template>
  <div style="text-align: center;padding-top: 10%;">    
	<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			 <button v-on:click="goToDasboard" class="btn btn-primary">Go TO Dashboard</button>
		</div>
	</div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  name: "PageNotFound",
  data() {
    return {
    
    };
  },    
  methods: {
      goToDasboard(){
          this.$router.push("/home");
      }
  }
};
</script>

<style scoped>
/* #login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
} */
</style>