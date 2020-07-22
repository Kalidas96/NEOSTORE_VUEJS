<template>
    <footer class="footer">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-4">
          <h3>About Company</h3>
          <div>
            <p>NeoSOFT Technologies is here at your quick and easy service for shooping .</p>
            <h6>Contact information</h6>
            <p>Email: contact@neosofttech.com</p>
            <p>Phone: +91 0000000000</p>
            <p>MUMBAI, INDIA</p>
          </div>
        </div>

        <div class="col-md-4">
          <h3>Information</h3>
          <ul class="list-unstyled">
            <li><a v-on:click="goToTermsCondition(true)">Terms &amp; Conditions</a></li>
            <li><a v-on:click="goToReturnPolicy(true)">Guarantee &amp; Return Policy</a></li>
            <li><a v-on:click="goToContactUS(true)">Contact us</a></li>
            <li><a v-on:click="goToPrivacyPolicy(true)">Privacy Policy</a></li>
            <li><a v-on:click="goToLocateUs(true)">Locate Us</a></li>
          </ul>
        </div>

        <div class="col-md-4">
          <h3>Newsletter</h3>
          <form>
            <div>
              <p>Sign up to get exclusive offers from our favorite brands and to be well up in the news.</p>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="your email..." />
              </div>
              <button type="button" tooltip="Coming Soon" class="btn btn-default">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

    </div>

    <div class="container">
      <p class="copywrite text-center">Copyright © 2017 NeoSOFT Technologies All rights reserved | Design by <a href="http://www.neosofttech.com/">NeoSOFT Technologies</a></p>
    </div>
  </footer>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
            message:"",
        }
    },
    methods:{
        goToTermsCondition() {
          this.$router.push("/termsCondition");
        },
        goToReturnPolicy() {
          this.$router.push("/returnPolicy");
        },
        goToContactUS() {
          this.$router.push("/contactUs");
        },
        goToPrivacyPolicy() {
          this.$router.push("/policy");
        },
        goToLocateUs() {
          this.$router.push("/locateUs");
        },
    },
    component:{

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