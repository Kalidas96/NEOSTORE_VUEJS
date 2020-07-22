<template>
<div>
  <Header></Header>
  <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
   <div class="container" style="margin-bottom: 18%;">
    <div class="container">
        <div class="row">
            <div class="col-xs-6 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Payment Details</h3>
                    </div>
                    <form novalidate>
                        <div class="panel-body">
                            <div class="form-group">
                                <label for="cardNumber">CARD NUMBER</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="cardNumber" placeholder="Valid Card Number" />
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                                </div>
                                <small class="text-danger">Please enter valid card number</small>
                            </div>
                            <div class="row">
                                <div class="col-xs-7 col-md-7">
                                    <label for="expiryMonth">EXPIRY DATE</label>
                                    <div class="form-group">
                                        <div class="col-xs-6 col-lg-6 pl-ziro">
                                            <input type="number" class="form-control" id="expiryMonth" placeholder="MM" />
                                            <small class="text-danger">Please enter valid month</small>
                                        </div>
                                        <div class="col-xs-6 col-lg-6 pl-ziro">
                                            <input type="number" class="form-control" id="expityYear" placeholder="YY" />
                                            <small class="text-danger">Please enter valid year</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-5 col-md-5 pull-right">
                                    <div class="form-group">
                                        <label for="cvCode">CV CODE</label>
                                        <input type="password" class="form-control" id="cvCode" placeholder="CV" />
                                        <small class="text-danger">Please enter valid cvc</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <br/>
                            <button type="submit" class="btn btn-success btn-lg btn-block" value="Submit Payment">Pay</button>
                            <div class="text-center" >
                                <h4>Please do not refresh or press back before completing process</h4>
                                <div id="floatingCirclesG">
                                    <div class="f_circleG" id="frotateG_01"></div>
                                    <div class="f_circleG" id="frotateG_02"></div>
                                    <div class="f_circleG" id="frotateG_03"></div>
                                    <div class="f_circleG" id="frotateG_04"></div>
                                    <div class="f_circleG" id="frotateG_05"></div>
                                    <div class="f_circleG" id="frotateG_06"></div>
                                    <div class="f_circleG" id="frotateG_07"></div>
                                    <div class="f_circleG" id="frotateG_08"></div>
                                </div>
                            </div>
                            
                        </div>
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
import Header from '../header.vue'
import Footer from '../footer.vue'
import appService from "../../services/appService.js"; 
  import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'Payment',
    data(){
        return{
            isLoading: false,
            fullPage: true,
            message:"",
            success:"",
            appservice: new appService(),
        }
    },
    methods:{
   
    },
    components:{
        Header,
        Footer,
        Loading
    }
}
</script>

<style>
 /* @import '../assets/css/navbar.css';
@import '../assets/css/login.css'; */
</style>