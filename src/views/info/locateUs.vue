<template>
<div>
  <Header></Header>
  <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
   <div class="container" style="margin-bottom: 18%;">
     <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Locate Us</div>
      <div class="panel-body">
          <img class="img-responsive" width="930" src="https://maps.googleapis.com/maps/api/staticmap?center=It+Sigma+park&zoom=17&scale=1&size=900x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CIt+Sigma+park" alt="Google Map of It Sigma park">
      </div>
    </div>
  </div>
  </div>
  <Footer></Footer>
</div>

</template>

<script>
import Header from '../header'
import Footer from '../footer'
// import appService from "../../services/appService.js"; 
  // import Loading from 'vue-loading-overlay';
    // Import stylesheet
    // import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'LocateUs',
    data(){
        return{
            isLoading: false,
            fullPage: true,
            message:"",
            success:"",
            // appservice: new appService(),
        }
    },
    methods:{
   
    },
    components:{
        Header,
        Footer,
      //  Loading
    }
}
</script>

<style>
</style>