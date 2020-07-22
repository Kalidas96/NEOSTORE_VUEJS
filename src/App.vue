<template>
<router-view></router-view>
</template>
  
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
 
}
</script>
<style>
@import './assets/css/style.css';
@import './assets/css/navbar.css';
@import './assets/css/login.css';
@import './assets/css/footer.css';
@import './assets/css/cart.css';
@import './assets/css/checkout-header.css';
@import './assets/css/panel.css';
@import './assets/css/payment.css';
@import './assets/css/product-details.css';
@import './assets/css/register.css';
@import './assets/css/user.css';


/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
