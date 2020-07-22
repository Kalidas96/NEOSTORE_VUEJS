<template>
<div>
  <Header></Header>
<div class="container" style="margin-bottom: 18%;">
    <div class="container">
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
            <div class="panel-heading text-muted">
              <span class="text-warning"><strong>TRANSIT</strong></span>
              <span>Order No: 5sd4a442341ds</span>
              <div>
                <small>Placed on 15/09/2017 / </small>
                <small class="text-success"><strong>2000$</strong></small>
              </div>
              <hr>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3">
                  <div class="thumbnail">
                    <img src="http://via.placeholder.com/150x100" alt="product_image" class="img-rounded">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="thumbnail">
                    <img src="http://via.placeholder.com/150x100" alt="product_image" class="img-rounded">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="thumbnail">
                    <img src="http://via.placeholder.com/150x100" alt="product_image" class="img-rounded">
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-footer">
              <button type="button" class="btn btn-success">Download invoice as PDF</button>
            </div>
          </div>
          <div class="panel panel-default">
              <div class="panel-heading text-muted">
                <span class="text-warning"><strong>TRANSIT</strong></span>
                <span>Order No: 5sd4a442341ds</span>
                <div>
                  <small>Placed on 15/09/2017 / </small>
                  <small class="text-success"><strong>2000$</strong></small>
                </div>
                <hr>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-3">
                    <div class="thumbnail">
                      <img src="http://via.placeholder.com/150x100" alt="product_image" class="img-rounded">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="thumbnail">
                      <img src="http://via.placeholder.com/150x100" alt="product_image" class="img-rounded">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="thumbnail">
                      <img src="http://via.placeholder.com/150x100" alt="product_image" class="img-rounded">
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <button type="button" class="btn btn-success">Download invoice as PDF</button>
              </div>
            </div>

          <hr>
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
//import Header from '../../views/header.vue';\
import Header from '../header.vue'
//import appService from "../../services/appService.js"; 
// import axios from "axios";
// import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
//import appService from "../services/appService";
  // Import component
    // import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast,{ position: 'top'});
export default {
  name: "Order",
  data() {
    return {
        message:"",
    }
  },
  methods:{
 goToOrder(){
      this.$router.push("/order");
    },
     goToAddress(){
      this.$router.push("/address");
    },
     goToProfile(){
       this.$router.push("/profile");
    }
  },
   components: {
        Header,
        Footer
  }
//       validations: {
//         admin: {
//             username: { required },
//             email: { required, email },   
//             profileImage:{required}       
//         }
//     }, 
//       components:{
//     Loading
//   },
//   methods: {
//     previewFiles(event) {
//       console.log(event.target.files);
//       this.admin.profileImage = event.target.files;
//     },
//     login(){
//       this.$router.push("/");
//     },
//     registrationSubmit(e) {
//       debugger;
//       this.submitted = true;
//       // stop here if form is invalid
//       this.$v.$touch();
//       if (this.$v.$invalid) {
//           return;
//       }
//         this.isLoading = true;
//       const fd2 = new FormData();
//       fd2.append("user_name", this.admin.username); 
//       fd2.append("user_email", this.admin.email);
//       fd2.append("profile_image", this.admin.profileImage);
//       debugger;
//       axios
//         .post("http://180.149.241.208:3000/registration", fd2)
//         .then(response => {
//           this.isLoading = false;
//             if (response.data.success == "true") {
//             console.log(response.data.message);
//               Vue.$toast.success(response.data.message)
//             }else{
//               Vue.$toast.error(response.data.message)
//             }      
//     })
//         .catch(error => {
//             this.isLoading = false;
//           Vue.$toast.error(response.data.message)
//         });
//     }
//   }
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


