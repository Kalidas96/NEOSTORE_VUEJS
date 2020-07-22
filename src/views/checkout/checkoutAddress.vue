<template>
  <div>
    <Header></Header>
    <loading :active.sync="isLoading" 
        :can-cancel="true" 
    :is-full-page="fullPage"></loading>
    <!-- Main Content -->
    <div class="container" style="margin-bottom:18%">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Select delivery address</h3>
          <hr />
        </div>
        <div class="panel-body">
          <div class="panel-body" v-for="add in addresses" :key="add.address_id">
            <div class="panel panel-default">
              <div class="panel-body">
                <p>{{add.address}}</p>
                <p>{{add.city}}-{{add.pincode}}</p>
                <p>{{add.state}}</p>
                <p>{{add.country}}</p>
              </div>
              <div class="panel-footer">
                <input type="radio" name="address" /> Select
                <a
                  v-on:click="editAddress(add.address_id)"
                  type="button"
                  class="btn-default"
                >
                  <i class="fa fa-pencil"></i> Edit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-footer">
          <hr />
          <a v-on:click="nextToPayment(true)" type="button" class="btn btn-default btn-lg">
            Next
            <i class="fa fa-angle-double-right"></i>
          </a>
          <a v-on:click="addNewAddress(true)" type="button" class="btn btn-default btn-lg">
            Add New
            <i class="fa fa-plus"></i>
          </a>
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
  name: "CheckoutAddress",
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
  methods: {
    nextToPayment() {
      this.$router.push("/payment");
    },
    addNewAddress() {
      this.$router.push("/add-new-address");
    },
        getAddress(){
          this.isLoading = true;
          this.appservice
            .getAddress()
            .then(response => {
              console.log("getCustAddress", response);
              this.isLoading = false;
                if (response.success) {    
                  this.addresses=response.customer_address    
                 
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
  components: {
    Header,
    Footer,
    Loading
  }
};
</script>

<style>
/* @import '../assets/css/navbar.css';
@import '../assets/css/login.css'; */
</style>