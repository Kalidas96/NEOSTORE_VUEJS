<template>
<div>
  <Header></Header>    
    <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
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
            <!-- <li><a href="./orders.html" ><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Orders</a></li>
            <li><a href="./profile.html" ><i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Profile</a></li>
            <li><a href="./address.html" ><i class="fa fa-address-book fa-fw" aria-hidden="true"></i>&nbsp; Address</a></li> -->
               <li><a v-on:click="goToOrder"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Orders</a></li>
              <li><a v-on:click="goToProfile" ><i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Profile</a></li>
              <li><a v-on:click="goToAddress" ><i class="fa fa-address-book fa-fw" aria-hidden="true"></i>&nbsp; Address</a></li>
        
          </ul>
        </div>

        <div class="col-md-9">
          <div class="panel panel-default">
            <div class="panel-body">
              <h4><strong>Edit Profile</strong></h4>
              <hr>

            <form class="form-custom" @submit.prevent="updateProfile" novalidate>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="firstName">First Name</label>
                      <input type="text" class="form-control" value="Test" v-model="profile.first_name"
                       required :class="{ 'is-invalid': submitted && $v.profile.first_name.$error}">
                       <div v-if="submitted && !$v.profile.first_name.required" class="invalid-feedback text-danger">Address is required</div>

                    </div>
                      </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="lastName">Last Name</label>
                      <input type="text" class="form-control" value="User" v-model="profile.last_name"
                       required :class="{ 'is-invalid': submitted && $v.profile.last_name.$error}"
                       >
                          <div v-if="submitted && !$v.profile.last_name.required" class="invalid-feedback text-danger">Last name is required</div>

                    </div>
                      </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="gender">Gender</label>
                      <div class="checkbox">
                        <label><input type="radio" value="male" name="gender" checked> <strong>Male</strong> </label>
                        <label><input type="radio" value="female" name="gender"> <strong>Female</strong> </label>
                        <div v-if="submitted && !$v.profile.gender.required" class="invalid-feedback text-danger">Gender is required</div>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="dateOfBirth">Date of Birth</label>
                      <input type="date" class="form-control" value="1993-03-15"  v-model="profile.dob"
                      required :class="{ 'is-invalid': submitted && $v.profile.dob.$error}">
                      <div v-if="submitted && !$v.profile.dob.required" class="invalid-feedback text-danger">Date of Birth is required</div>

                    </div>
                    </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="mobile">Mobile</label>
                      <input type="number" class="form-control" value="1234567890"  v-model="profile.phone_no"
                      required :class="{ 'is-invalid': submitted && $v.profile.phone_no.$error}">
                       <div v-if="submitted && !$v.profile.phone_no.required" class="invalid-feedback text-danger">phone no is required</div>

                    </div>
                    </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" value="test.user@neosofttech.com"  v-model="profile.email"
                      required :class="{ 'is-invalid': submitted && $v.profile.email.$error}">
                       <div v-if="submitted && !$v.profile.email.required" class="invalid-feedback text-danger">
                         Email is required</div>

                    </div>  </div>
                </div>

                <hr>
                <button type="submit" class="btn btn-default btn-lg"><i class="fa fa-floppy-o"></i>Save</button>
                <a href="./profile.html" type="button" class="btn btn-default btn-lg"><i class="fa fa-remove"></i>Cancel</a>
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
import Footer from '../footer.vue'
import Header from '../header.vue'
import { required, email } from "vuelidate/lib/validators";
import appService from "../../services/appService.js"; 
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast,{ position: 'top'});
export default {
  name: "EditProfile",
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
   
    validations: {
        profile: {
            first_name : { required },
            last_name : { required },   
            email :{required, email},
            dob :{required},
            phone_no :{required},
            gender :{required},
        }
    }, 
  methods: {
    
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
         this.isLoading = false;     
        Vue.$toast.error(e.message)
      });
  },

  updateProfile() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }
      this.isLoading = true;
        let data={ first_name :this.profile.first_name,last_name :this.profile.last_name,   
            email :this.profile.email, dob :this.profile.dob, phone_no :this.profile.phone_no, 
            gender :this.profile.gender
        }
      this.appservice.updateProfile(data)
        .then(response => {
          console.log("profile", response);
           this.isLoading = false;
            if (response.success) {           
             
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
    }
  },
   beforeMount(){
    this.getCustProfile();
  },
  components: {
        Header,
        Footer,
        Loading
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


