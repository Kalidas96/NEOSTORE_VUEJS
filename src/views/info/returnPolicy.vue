<template>
<div>
  <Header></Header>
  <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
   <div class="container" style="margin-bottom: 18%;">
    <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Returns Policy</div>
      <div class="panel-body">
        <p>Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of replacement
          and/ or refund is offered by the respective sellers to you. All products listed under a particular category may
          not have the same returns policy. Kindly check the respective item's applicable return policy on the product page
          for any exceptions to the table below.</p>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Category</th>
            <th>Period</th>
            <th>Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lifestyle: Clothing (excluding Lingerie, Innerwear, Socks and Freebies), Footwear, Eyewear, Fashion Accessories</td>
            <td>30 days</td>
            <td>You may request for a refund /replacement within 30 days of delivery, as long as it is unworn, unwashed, without
              stains, undamaged and with all original tags & packaging intact.</td>
          </tr>
          <tr>
            <td>Lifestyle: Lingerie (top-wear), Sport & Fitness Equipment, Watches, Baby Care, Precious & Non-Precious Jewellery,
              Footwear Accessories, Travel Accessories Home: Home Decor, Home Furnishing, Home Improvement Tools, Household
              Items and Pet Supply; Automotive: Auto Accessories, Bike Accessories, Car Accessories, Car and Bike Breakdown
              Equipment, Car and Bike Care, Car and Bike Lighting, Car and Bike Styling, Car AV Electronics and Accessories,
              Helmets and Riding Gear, Spare and Performance Parts, Tyres and Alloys Books & More: Books, Music Instruments,
              Office Supply, School Supply and Toys</td>
            <td>10 days</td>
            <td>You may request for a refund / replacement within 10 days of delivery, For Lingerie (top-wear), it should be
              unworn, unwashed, without stains, undamaged and with all original tags & packaging intact.</td>
          </tr>
          <tr>
            <td>Electronics: Tablets (except Apple), Laptops (except Apple), Cameras, Consumer Electronics, Entertainment Small,
              Gaming Hardware, Small Home Appliances, Personal Care Appliances, Personal Care, Health Care Appliances, Small
              Appliances, Computer Accessories, Mobile Accessories, Camera Accessories, Other Accessories, Computer Peripherals,
              Smart Home Appliances, Office Equipment, Game and Smart Wearables (except Apple) Home: Furniture</td>
            <td>10 days</td>
            <td>You may request for a replacement within 10 days of delivery/ installation (as applicable). In certain cases
              where the seller is unable to process a replacement, the seller will offer a refund to you. We will help you
              troubleshoot any issues you may have, either through online tools, over the phone, and/or through an in-person
              technical visit. In the case of tablets, you may also be required to install an application to aid with troubleshooting.
              For products where installation is provided by Flipkart's service partners, please do not open the product
              packaging by yourself. Flipkart authorised personnel shall help in unboxing and installation of the product.
              In this case, the replacement period commences from the date of installation. For Furniture, any product related
              issues will be checked by an authorised service personnel (free of cost) and attempted to be resolved by replacing
              the faulty/ defective part of the product. Full replacement will be provided only in cases where the service
              personnel opines that replacing the faulty/ defective part will not resolve the issue.</td>
          </tr>
          <tr>
            <td>Electronics: Mobiles (except Apple, Google) Large Appliances: Air Conditioners, Chimneys, Water Geysers, Microwave
              Ovens, Televisions, Refrigerators, Dishwashers, Washing Machines, Dryers and OTG</td>
            <td>10 days</td>
            <td>You may request for a replacement within 10 days of delivery/installation (as applicable). In certain cases where
              the seller is unable to process a replacement, the seller will offer a refund to you. Assistance shall be provided
              to troubleshoot any issues that you may face, either through online tools, over the phone, and/or through an
              in-person technical visit. In the case of smartphones, you may also be required to install an application on
              the mobile to aid with troubleshooting. If a defect is determined within the 10-day period following delivery/installation,
              a replacement of the same model will be provided at no additional cost. If no defect is confirmed, the issue
              is not diagnosed within 10 days of delivery, a troubleshooting step cannot be performed, or if one replacement
              has already been provided, you will be directed to a brand service centre to resolve any subsequent issues.</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
  </div>
  <Footer></Footer>
</div>

</template>

<script>
import Header from '../header'
import Footer from '../footer'
// import appService from "../../services/appService.js"; 
  // import Loading from 'vue-loading-overlay';
  //   // Import stylesheet
  //   import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'ReturnPolicy',
    data(){
        return{         
            // isLoading: false,
            // fullPage: true,
            message:"",
            success:"",
            // appservice: new appService(),
        }
    },
    methods:{
     
    },
    components:{
        Header,
        Footer,
       // Loading
    }
}
</script>

<style>
 /* @import '../assets/css/navbar.css';
 @import '../assets/css/login.css'; */
</style>