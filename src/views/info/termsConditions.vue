<template>
<div>
  <Header></Header>
  <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
 <div class="container"  style="margin-bottom: 18%;">
    <div class="panel panel-default">
      <div class="panel-heading">Introduction</div>
      <div class="panel-body">
        <p>These terms and conditions apply between you, the User of this Website (including any sub-domains, unless expressly
          excluded by their own terms and conditions), and NeoStore, the owner and operator of this Website. Please read
          these terms and conditions carefully, as they affect your legal rights. Your agreement to comply with and be bound
          by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree to be
          bound by these terms and conditions, you should stop using the Website immediately.</p>
        <p>In these terms and conditions, User or Users means any third party that accesses the Website and is not either (i)
          employed by NeoStore and acting in the course of their employment or (ii) engaged as a consultant or otherwise
          providing services to NeoStore and accessing the Website in connection with the provision of such services.</p>
        <p>You must be at least 18 years of age to use this Website. By using the Website and agreeing to these terms and conditions,
          you represent and warrant that you are at least 18 years of age.</p>
      </div>

      <div class="panel-heading">Intellectual property and acceptable use</div>
      <div class="panel-body">
        <ul>
          <li>All Content included on the Website, unless uploaded by Users, or amended versions of Users Upload uploaded by
            NeoStore As a part of the Service delivery to User, is the property of NeoStore, our affiliates or other relevant
            third parties. In these terms and conditions, Content means any text, graphics, images, audio, video, software,
            data compilations, page layout, underlying code and software and any other form of information capable of being
            stored in a computer that appears on or forms part of this Website, including any such content uploaded by Users.
            By continuing to use the Website you acknowledge that such Content is protected by copyright, trademarks, database
            rights and other intellectual property rights. Nothing on this site shall be construed as granting, by implication,
            estoppel, or otherwise, any license or right to use any trademark, logo or service mark displayed on the site
            without the owner's prior written permission
          </li>
          <li>
            You may, for your own personal, non-commercial use only, do the following:
            <ul>
              <li>retrieve, display and view the Content on a computer screen</li>
              <li>download and store the Content in electronic form on a disk (but not on any server or other storage device
                connected to a network)</li>
              <li>print one copy of the Content</li>
            </ul>
          </li>
          <li>You must not otherwise reproduce, modify, copy, distribute or use for commercial purposes any Content without the
            written permission of NeoStore.</li>
          <li>You acknowledge that you are responsible for any Content you may submit via the Website, including the legality,
            reliability, appropriateness, originality and copyright of any such Content. You may not upload to, distribute
            or otherwise publish through the Website any Content that (i),false, fraudulent, libellous, defamatory, obscene,
            threatening, invasive of privacy or publicity rights, infringing on intellectual property rights, abusive, illegal
            or otherwise objectionable; (ii) may constitute or encourage a criminal offence, violate the rights of any party
            or otherwise give rise to liability or violate any law; or (iii) may contain software viruses, chain letters,
            mass mailings, or any form of "spam." You may not use a false email address or other identifying information,
            impersonate any person or entity or otherwise mislead as to the origin of any content. </li>
          <li>You represent and warrant that you own or otherwise control all the rights to the Content you post; that the Content
            is accurate; that use of the Content you supply does not violate any provision of these terms and conditions
            and will not cause injury to any person; and that you will indemnify NeoStore for all claims resulting from Content
            you supply.
          </li>
        </ul>


      </div>

      <div class="panel-heading">Prohibited use</div>
      <div class="panel-body">
        <ul>
          <li>
            You may not use the Website for any of the following purposes:
            <ul>
              <li>in any way which causes, or may cause, damage to the Website or interferes with any other person's use or enjoyment
                of the Website;</li>
              <li>in any way which is harmful, unlawful, illegal, abusive, harassing, threatening or otherwise objectionable
                or in breach of any applicable law, regulation, governmental order;</li>
              <li>making, transmitting or storing electronic copies of Content protected by copyright without the permission
                of the owner.</li>
            </ul>
          </li>
        </ul>
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
    name:'TermsCondition',
    data(){
        return{
            isLoading: false,
            fullPage: true,
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