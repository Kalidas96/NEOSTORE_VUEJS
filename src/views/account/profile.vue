<template>
<div>
  <Header></Header>
    <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
  <div class="container" style="margin-bottom: 18%;">
    <div class="container-fluid">
      <div class="col-md-12">
        <h4> My Account </h4>
        <hr>
      </div>

      <div class="col-md-3">
        <img src="http://soeasyloansonline.com.au/img/testimonial/noimg.png" 
             class="img-responsive img-circle profile" alt="profile_pic" 
             style="height: 200px; width: 200px !important;">
    
        <div class="text-center">
          <br>
          <div class="text-danger"><strong>Test User</strong></div>
        </div>
        <br>
        <ul class="nav">
            <li><a v-on:click="goToOrder"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Orders</a></li>
              <li><a v-on:click="goToProfile" ><i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Profile</a></li>
              <li><a v-on:click="goToAddress" ><i class="fa fa-address-book fa-fw" aria-hidden="true"></i>&nbsp; Address</a></li>
         </ul>
      </div>

      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2>Profile</h2>
            <hr>
          </div>
          <div class="panel-body">
            <table class="table">
              <tbody>
                <tr>
                  <th>First Name</th>
                  <td>{{profile.first_name}}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>{{profile.last_name}}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{{profile.gender}}</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>{{profile.dob}}</td>
                </tr>
                <tr>
                  <th>Mobile Number</th>
                  <td>{{profile.phone_no}}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{{profile.email}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="panel-footer">
            <hr>
            <a v-on:click="editProfile" type="button" class="btn btn-default btn-lg">Edit</a>
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
import Footer from '../footer.vue'
import Header from '../header.vue'
import appService from "../../services/appService.js"; 
// import appService from "../services/appService.js";
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast,{ position: 'top'});
export default {
  name: "Profile",
  data() {
    return {
       profile: {
            first_name : "",
            last_name :"",   
            email :"",
            dob :"",
            phone_no :"",
            gender :"",
        },
         isLoading: false,
          fullPage: true,
          message:"",
          success:"",
          submitted: false,
          appservice: new appService(),
    }
  },
  methods:{
    editProfile(){
      this.$router.push("/editProfile");
    },
     goToOrder(){
      this.$router.push("/order");
    },
     goToAddress(){
      this.$router.push("/address");
    },
     goToProfile(){
       this.$router.push("/profile");
    },
     getCustProfile(){
          this.isLoading = true;
          this.appservice
            .getCustProfile()
            .then(response => {
              console.log("getCustProfile", response);
              this.profile=response.customer_proile;
              this.isLoading = false;     
            })
            .catch(e => {
              console.log(e);
              Vue.$toast.error(e.message)
            });
    }
  },
  beforeMount(){
    this.getCustProfile();
  },
   components: {
        Header,
        Footer,   
        // Loading  
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>


