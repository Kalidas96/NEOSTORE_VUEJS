<template>
<div>
  <Header></Header>
  <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
   <div class="container" style="margin-bottom: 18%;">
   <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Privacy Policy</div>
      <div class="panel-body">
        <p>We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer
          information privacy. Please read the following statement to learn about our information gathering and dissemination
          practices.
        </p>
        <ol>
          <li>
            Collection of Personally Identifiable Information and other Information
            <p>When you use our Website, we collect and store your personal information which is provided by you from time to
              time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This
              allows us to provide services and features that most likely meet your needs, and to customize our Website to
              make your experience safer and easier. More importantly, while doing so we collect personal information from
              you that we consider necessary for achieving this purpose.</p>
          </li>
          <li>
            Use of Demographic / Profile Data / Your Information
            <p>We use personal information to provide the services you request. To the extent we use your personal information
              to market to you, we will provide you the ability to opt-out of such uses. We use your personal information
              to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest
              in our products and services, inform you about online and offline offers, products, services, and updates;
              customize your experience; detect and protect us against error, fraud and other criminal activity; enforce
              our terms and conditions; and as otherwise described to you at the time of collection.</p>
          </li>
          <li>
            Sharing of personal information
            <p>We may share personal information with our other corporate entities and affiliates. These entities and affiliates
              may market to you as a result of such sharing unless you explicitly opt-out.</p>
          </li>
          <li>
            Links to Other Sites
            <p>Our Website links to other websites that may collect personally identifiable information about you. NeoStore
              is not responsible for the privacy practices or the content of those linked websites.</p>
          </li>
          <li>
            Security Precautions
            <p>Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information
              under our control. Whenever you change or access your account information, we offer the use of a secure server.
              Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized
              access.
            </p>
          </li>
          <li>
            Choice/Opt-Out
            <p>We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related)
              communications from us on behalf of our partners, and from us in general, after setting up an account.</p>
          </li>
          <li>
            Advertisements on NeoStore
            <p>We use third-party advertising companies to serve ads when you visit our Website. These companies may use information
              (not including your name, address, email address, or telephone number) about your visits to this and other
              websites in order to provide advertisements about goods and services of interest to you.</p>
          </li>
          <li>
            Your Consent
            <p>By using the Website and/ or by providing your information, you consent to the collection and use of the information
              you disclose on the Website in accordance with this Privacy Policy, including but not limited to Your consent
              for sharing your information as per this privacy policy.</p>
          </li>
        </ol>
      </div>
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
//   import Loading from 'vue-loading-overlay';
//     // Import stylesheet
//     import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'Policy',
    data(){
        return{
            isLoading: false,
            fullPage: true,
            message:"",
            success:"",
          //  appservice: new appService(),
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
</style>