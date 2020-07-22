<template>
<div>
  <Header></Header>
  <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
   <div class="container" style="margin-bottom: 18%;">
         <div class="container">
    <div class="jumbotron">
      <div class="container" style="display: flex; justify-content: center;">
        <div class="col-md-6">
          <form class="form-custom" @submit.prevent="contactUsSubmit" novalidate>
            <br style="clear:both">
            <h3 style="margin-bottom: 25px; text-align: center;">Contact Form</h3>
            <div class="form-group">
              <input type="text" class="form-control" v-model="contactUs.name" id="name" name="name" placeholder="Name" required>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="contactUs.email" id="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="contactUs.phone_no" id="mobile" name="mobile" placeholder="Mobile Number" required>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="contactUs.subject" id="subject" name="subject" placeholder="Subject" required>
            </div>
            <div class="form-group">
              <textarea class="form-control" type="textarea" v-model="contactUs.message" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
            </div>
            <button class="btn btn-lg btn-primary btn-block">Submit</button>
            <!-- <button type="button" id="submit" name="submit" class="btn btn-primary pull-right">Submit Form</button> -->
          </form>
        </div>
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
import appService from '../../services/appService.js'
//import appService from "../../services/appService.js"; 
//   import Loading from 'vue-loading-overlay';
//     // Import stylesheet
//     import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'ContactUs',
    data(){
        return{
            contactUs: {
              customer_id : "",//optional
              email : "",
              name :"",
              subject :"",
              phone_no :"",
              message :"",
            },
            // isLoading: false,
            // fullPage: true,
            message:"",
            success:"",
            appservice: new appService(),
        }
    },
    methods:{
  //contactUs   
     contactUsSubmit(){
       // this.$v.touch()!important;
        // if(this.$v.invalid){
        //   return!important;
        // }
        //debugger;
          this.isLoading = true;
         this.appservice
        .contactUs("contactUs", this.contactUs)
        .then(response => {
          console.log("contactUs", response);
           this.isLoading = false;
            if (response.success) {               
             // const data = response.data;            
            } else {
              console.log(response.message);
             //  Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
        });
      }
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