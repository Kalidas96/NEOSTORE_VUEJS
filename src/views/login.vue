<template>
<div>
  <Header></Header>
  <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
   <div class="container" style="margin-bottom: 18%;">
    <div class="container-login">
      <div class="col-md-5">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="text-center text-muted">Login to NeoSTORE</h2>
          </div>
          <div class="panel-body">
            <p class="text-muted text-center">EASILY USING</p>
            <button class="btn btn-default btn-lg"><i class="fa fa-facebook fa-lg  text-primary" ></i>Facebook</button>
            <button class="btn btn-default btn-lg pull-right"><i class="fa fa-google fa-lg text-danger"></i>Google</button>

            <p class="text-muted text-center">--OR USING--</p>

            <form class="form-custom" @submit.prevent="loginSubmit" novalidate>
              <div class="form-group">
                <input type="email" v-model="login.email " class="form-control" placeholder="Email Address"
                  required :class="{ 'is-invalid': submitted && $v.login.email.$error }">
                <!-- <div class="valid-feedback">Valid.</div> -->
                  <div v-if="submitted && $v.login.email.$error" class="invalid-feedback text-danger">
                  <span v-if="!$v.login.email.required">Email is required</span>
                  <span v-if="!$v.login.email.email">Email is invalid</span>
              </div>
                <input type="password" v-model="login.pass" class="form-control" placeholder="Password"
                 required :class="{ 'is-invalid': submitted && $v.login.pass.$error}">
                  <!-- <div class="valid-feedback">Valid.</div> -->
                 <div v-if="submitted && !$v.login.pass.required" class="invalid-feedback text-danger">Password is required</div>

                <!-- <small class="text-danger" >Please enter valid password</small> -->
              </div>
              <div class="form-group">
                <button class="btn btn-lg btn-primary btn-block">Login</button>
              </div>
            </form>
               <a style="cursor: pointer; text-decoration: underline" v-on:click="registration">Registration</a>
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
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import { required, email } from 'vuelidate/lib/validators';
 import VueToast from 'vue-toast-notification';
// Import one of available themes
 Vue.use(VueToast,{ position: 'top'});
 import 'vue-toast-notification/dist/theme-default.css';

export default {
    name:'Login',
    data(){
        return{
           login: {
              email : "",
              pass: ""
            },
            isLoading: false,
            fullPage: true,
            message:"",
            success:"",
            submitted: false,
            appservice: new appService(),
        }
    },
    validations: {
      login:{
           //   email: { required, email},
              pass: {required},
              email:{required, email}
      }  
    },
    methods:{
    loginSubmit(){
       this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }
      this.isLoading = true;
      this.appservice
        .login("login", this.login)
        .then(response => {
          console.log("login", response);
           this.isLoading = false;
            if (response.success) {
              this.$router.push("/home");
              const token = response.token;
              localStorage.setItem("user-token",btoa(token));
              //axios.defaults.headers.common["Authorization"] = token;
             // localStorage.setItem("user-data", btoa(JSON.stringify(response.customer_details)));
              this.$store.commit('user', response.customer_details)
              this.$store.commit('login', true);  
              // this.$router.push("dashboard");
             Vue.$toast.success(response.message)
            } else {
              console.log(response.message);
               Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
            this.isLoading = false;
           Vue.$toast.error(e.message)
        });
      },
      registration(){
          this.$router.push("/registration");
      }
    },
    components:{
        Header,
        Footer,
        Loading
    }
}
</script>

<style>
 @import '../assets/css/navbar.css';
@import '../assets/css/login.css';

.form-custom .form-custom-heading,
.form-custom .checkbox {
  margin-bottom: 10px!important;
}

.form-custom .checkbox {
  font-weight: normal!important;
}

.form-custom .form-control {
  position: relative!important;
  height: 50px!important;
  -webkit-box-sizing: border-box!important;
  -moz-box-sizing: border-box!important;
  box-sizing: border-box!important;
  padding: 10px!important;
  font-size: 16px!important;
}

.form-custom .form-control:focus {
  z-index: 2!important;
}

.form-custom input[type="email"] {
  margin-bottom: -1px!important;
  border-bottom-right-radius: 0!important;
  border-bottom-left-radius: 0!important;
}

.form-custom input[type="password"] {
  margin-bottom: 10px!important;
  border-top-left-radius: 0!important;
  border-top-right-radius: 0!important;
}

.panel-default>.panel-heading {
  background-color: #fff!important;
  border-color: #fff!important;
}

.panel {
  box-shadow: 0px 0px 19px 2px rgba(119, 119, 119, 0.4)!important;
  border: 0px solid transparent!important;
}

.container-login {
  display: flex!important;
  justify-content: center!important;
}


.error {
    border: solid 1px red!important;
    background-color: #ffe6e6
}

.panel {
    box-shadow: 0 0 4px rgba(40, 44, 63, 0.08)!important;
    border: 1px solid #eaeaec!important;
  }
  
  .panel-default>.panel-heading {
    background-color: #fff!important;
    border-color: #fff!important;
  }
  
  .panel-default>.panel-footer {
    background-color: #fff!important;
    border-color: #fff!important;
  }
   

</style>