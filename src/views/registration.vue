<template>
<div>
  <Header></Header>
    <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
        <label for=","></label>
<div class="container" style="margin-bottom: 18%;">
    <div class="container-register">
      <div class="col-md-5">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="text-center text-muted">Register to NeoSTORE</h2>
          </div>
          <div class="panel-body">
            <p class="text-muted text-center">EASILY USING</p>
            <button class="btn btn-default btn-lg">
              <i class="fa fa-facebook fa-lg  text-primary" ></i>
              Facebook
            </button>
            <button class="btn btn-default btn-lg pull-right">
              <i class="fa fa-google fa-lg text-danger"></i>
              Google
            </button>

            <p class="text-muted text-center">--OR USING--</p>

            <form class="form-custom" @submit.prevent="registrationSubmit" novalidate>
              <div class="form-group">
                <input type="text" class="form-control" v-model="registration.first_name" placeholder="Enter first name">
                <div v-if="submitted && !$v.registration.first_name.required" class="invalid-feedback text-danger">First Name is required</div>

                <input type="text" class="form-control" v-model="registration.last_name" placeholder="Enter last name">
               <div v-if="submitted && !$v.registration.last_name.required" class="invalid-feedback text-danger">Last Name is required</div>


                <input type="email" class="form-control" v-model="registration.email"  placeholder="Your Email Address">
                <div v-if="submitted && $v.registration.email.$error" class="invalid-feedback">
                  <span v-if="!$v.registration.email.required">Email is required</span>
                  <span v-if="!$v.registration.email.email">Email is invalid</span>
              </div>
                <input type="password" class="form-control"  v-model="registration.pass" placeholder="Choose Password">
                <div v-if="submitted && !$v.registration.pass.required" class="invalid-feedback text-danger">Password is required</div>


                <input type="password" class="form-control" v-model="registration.confirmPass " placeholder="Confirm Password">
                <div v-if="submitted && !$v.registration.confirmPass.required" class="invalid-feedback text-danger">Confirm Password</div>


                <input type="number" class="form-control" v-model="registration.phone_no" placeholder="Enter Phone Number">
               <div v-if="submitted && !$v.registration.phone_no.required" class="invalid-feedback text-danger">Phone Number is required</div>

                <legend class="gender-legend">I'm</legend>
                <div class="checkbox">
                  <label><input type="radio" v-model="registration.gender" value="male" name="gender"> <strong>Male</strong> </label>
                  <label><input type="radio" v-model="registration.gender" value="female" name="gender"> <strong>Female</strong> </label>
                </div>
                 <div v-if="submitted && !$v.registration.gender.required" class="invalid-feedback text-danger">Gender is required</div>


                <button  class="btn btn-lg btn-primary btn-block">Register</button>
              </div>
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
import Vue from 'vue';
import Header from '../views/header'
import Footer from '../views/footer'
import appService from "../services/appService.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { required, email } from 'vuelidate/lib/validators';
 import VueToast from 'vue-toast-notification';
// Import one of available themes
 Vue.use(VueToast,{ position: 'top'});
 import 'vue-toast-notification/dist/theme-default.css';

export default {
name:'Registration',
data(){
  return{
      registration:{
      first_name : "",
      last_name : "",
      email : "",
      pass :"",
      confirmPass :"",
      phone_no:"",
      gender :""
    },
    message:"",
    isLoading: false,
    submitted: false,
    appservice: new appService(),
  }
},
   validations: {
      registration:{
        first_name :  {required},
        last_name : {required},
        email :  {required, email},
        pass : {required},
        confirmPass : {required},
        phone_no: {required},
        gender : {required},
      },
    },
methods:{
      registrationSubmit() {
     // debugger;
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }
      this.isLoading = true;
        this.appservice
        .registration("register", this.registration)
        .then(response => {
            this.isLoading = false;
           if (response.success) {
               Vue.$toast.success(response.message)
               this.$router.push("/login");
           }else {
              console.log(response.message);
               Vue.$toast.error(response.message)
            }
          console.log("register", response);
        })
        .catch(e => {
           this.isLoading = false;
          console.log(e);
           Vue.$toast.error(external.message)
        });
      }
      
},
 components:{
        Loading,
        Header,
        Footer,
     
    }

}
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/navbar.css';
@import '../assets/css/login.css';
@import '../assets/css/footer.css';
@import '../assets/css/cart.css';
@import '../assets/css/checkout-header.css';
@import '../assets/css/panel.css';
@import '../assets/css/payment.css';
@import '../assets/css/product-details.css';
@import '../assets/css/register.css';
@import '../assets/css/user.css';
</style>