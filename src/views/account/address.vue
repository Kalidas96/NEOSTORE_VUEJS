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
              <li><a v-on:click="goToOrder"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Orders</a></li>
              <li><a v-on:click="goToProfile" ><i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Profile</a></li>
              <li><a v-on:click="goToAddress" ><i class="fa fa-address-book fa-fw" aria-hidden="true"></i>&nbsp; Address</a></li>
            </ul>
        </div>

        <div class="col-md-9">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3>Addresses</h3>
              <hr>
            </div>
            <div class="panel-body" v-for="add in addresses" :key="add.address_id">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <p>{{add.address}}</p>
                        <p>{{add.city}}-{{add.pincode}}</p>
                        <p>{{add.state}}</p>
                        <p>{{add.country}}</p>
                    </div>
                    <div class="panel-footer">
                        <input type="radio" name="address"> Select
                        <a v-on:click="editAddress(add.address_id)" type="button" class=" btn-default"><i class="fa fa-pencil"></i> Edit</a>
                    </div>
                </div>
            </div>            
            <div class="panel-footer">
              <hr>
              <a v-on:click="addNewAddress" type="button" class="btn btn-default btn-lg">Add new</a>
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
import Footer from '../footer.vue';
import Header from '../header.vue';
import appService from "../../services/appService.js"; 
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast,{ position: 'top'});
export default {
  name: "Address",
  data() {
    return {
         isLoading: false,
          fullPage: true,
          message:"",
          success:"",
          submitted: false,
          addresses:[],
          appservice: new appService(),
        } 
    },
    methods:{
    editAddress(id){
      this.$router.push("/editAddress/"+id);
    },
    addNewAddress(){
      this.$router.push("/add-new-address");
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
      getAddress(){
          this.isLoading = true;
          this.appservice
            .getAddress()
            .then(response => {
              console.log("getCustAddress", response);
              this.isLoading = false;
                if (response.success) {    
                  this.addresses=response.customer_address;
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
    }, 
    beforeMount(){
      this.getAddress();
    },  
    components:{
      Loading,
      Header,
      Footer
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


