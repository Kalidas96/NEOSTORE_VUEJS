<template>
<div>
  <Header></Header>
<div><h2>Missing Cart items? </h2>
<p>
    Login to see the items you added previously
     <button v-on:click="goToLogin" class="btn btn-primary">Login</button>
</p>
</div>
  <Footer></Footer>
</div>

</template>

<script>
import Header from '../views/header'
import Footer from '../views/footer'


export default {
    name:'RedirectScreen',
    data(){
        return{
         
            isLoading: false,
            fullPage: true,
            message:"",
            success:"",
          
        }
    },
    methods:{
  goToLogin(){
       this.$router.push("/login");
        }
    },
    components:{
        Header,
        Footer,
      //  Loading
    }
}
</script>
<style scoped>

</style>