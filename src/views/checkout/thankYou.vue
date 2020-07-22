<template>
<div>
  <Header></Header>
  <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
   <div class="container" style="margin-bottom: 18%;">
 <div class="container">Thank YOU</div>
  </div>
  <Footer></Footer>
</div>

</template>

<script>
import Header from '../header'
import Footer from '../footer'
// import appService from "../services/appService.js"; 
//   import Loading from 'vue-loading-overlay';
    // Import stylesheet
    // import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'ThankYou',
    data(){
        return{
        
         
            message:"",
            success:"",
          //  appservice: new appService(),
        }
    },
    methods:{
     
    },
    components:{
        Header,
        Footer,
       // Loading
    }
}
</script>

<style>
 /* @import '../assets/css/navbar.css';
@import '../assets/css/login.css'; */


</style>