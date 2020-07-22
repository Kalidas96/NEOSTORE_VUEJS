import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)


import LoginComponent from '../views/login.vue'
import RegistrationComponent from '../views/registration.vue'
import HomeComponent from '../views/home.vue'
import EditProfileComponent from '../views/account/editProfile.vue'
import ProfileComponent from '../views/account/profile.vue'
import EditAddressComponent from '../views/account/editAddress.vue'
import AddressComponent from '../views/account/address.vue'
import OrderComponent from '../views/account/order.vue'
import AddNewAddress from '../views/account/addNewAddress.vue'

//checkout
import CheckoutAddressComponent from '../views/checkout/checkoutAddress.vue'
import CartComponent from '../views/checkout/cart.vue'
import PaymentComponent from '../views/checkout/payment.vue'
import ThankYouComponent from '../views/checkout/thankYou.vue'


//info
import ContactUsComponent from '../views/info/contactUs.vue'
import LocateUsComponent from '../views/info/locateUs.vue'
import PolicyComponent from '../views/info/policy.vue'
import ReturnPolicyComponent from '../views/info/returnPolicy.vue'
import TermsCondition from '../views/info/termsConditions.vue'

//product 
import ProductListComponent from '../views/product/productList.vue'
 import ProductDetailsComponent from '../views/product/productDetails.vue'




export default [
 //home
    { path:'/' ,component:HomeComponent }, 
    { path:'/home', component:HomeComponent }, 
    { path:'/login', component: LoginComponent },
    { path:'/registration', component:RegistrationComponent},
// //Account
    { path:'/profile', component:ProfileComponent},
    { path:'/editProfile', component:EditProfileComponent},
    { path:'/address', component:AddressComponent},
    { path:'/editAddress/:id', component:EditAddressComponent},
    { path:'/order', component:OrderComponent},
    { path:'/add-new-address', component:AddNewAddress},
//checkout
    { path:'/checkout-address', component:CheckoutAddressComponent},
    { path:'/cart', component:CartComponent},
    { path:'/payment', component:PaymentComponent},
    { path:'/thankYou', component:ThankYouComponent},
//Info   
    { path:'/contactUs', component:ContactUsComponent},
    { path:'/locateUs', component:LocateUsComponent},
    { path:'/policy', component:PolicyComponent},
    { path:'/returnPolicy', component:ReturnPolicyComponent},
    { path:'/termsCondition', component:TermsCondition},
// //product
    { path:'/productList', component:ProductListComponent},
    { path:'/productDetails/:id', component:ProductDetailsComponent},
]