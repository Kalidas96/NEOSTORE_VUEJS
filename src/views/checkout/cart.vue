
<template>
<div>
  <Header></Header>
  <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
     <!-- Main Content -->
    <div class="container" style="margin-bottom:18%">
        <div class="row">
            <hr>
            <div class="col-md-8">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th class="text-center">Quantity</th> 
                            <th class="text-center">Price</th>
                            <th class="text-center">Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in $store.state.cart" :key="index">
                            <td class="col-sm-8 col-md-6">
                                <div class="media">
                                    <div class="media-left">
                                        <a><img class="media-object cover" v-bind:src="imageUrl+item.product_image"></a>
                                    </div>

                                    <div class="media-body">
                                        <h4 class="media-heading" v-on:click="toGetProductDetails(item.product_id)"><a>{{item.product_name}}</a></h4>
                                        <h5 class="media-heading"> by <a><small>{{item.product_producer}}</small></a></h5>
                                        <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                                    </div>
                                </div>
                            </td>
                            <td class="col-sm-1 col-md-2 text-center">
                                <i class="fa fa-minus-circle" v-on:click="quantityMinus(item, index)" ></i>
                                <input type="number" v-model="item.quantity" disabled class="text-center quantity">
                                <i class="fa fa-plus-circle" v-on:click="quantityPlus(item)" ></i>
                            </td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>{{item.product_cost}} &#x20B9;</strong></td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>{{item.quantity * item.product_cost}} &#x20B9;</strong></td>
                            <td class="col-sm-1 col-md-1">
                                <button type="button" class="btn btn-sm btn-danger"  @click="removeFromCart(item)"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                        <!-- <tr>
                            <td class="col-sm-8 col-md-6">
                                <div class="media">
                                    <div class="media-left">
                                        <a><img class="media-object cover" src="http://via.placeholder.com/72x72"></a>
                                    </div>

                                    <div class="media-body">
                                        <h4 class="media-heading"><a>Voluptatem</a></h4>
                                        <h5 class="media-heading"> by <a><small>Laudantium</small></a></h5>
                                        <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                                    </div>
                                </div>
                            </td>
                            <td class="col-sm-1 col-md-2 text-center">
                                <i class="fa fa-minus-circle"></i>
                                <input type="number" value="2" disabled class="text-center quantity">
                                <i class="fa fa-plus-circle"></i>
                            </td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>2000$</strong></td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>4000$</strong></td>
                            <td class="col-sm-1 col-md-1">
                                <button type="button" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-sm-8 col-md-6">
                                <div class="media">
                                    <div class="media-left">
                                        <a><img class="media-object cover" src="http://via.placeholder.com/72x72"></a>
                                    </div>

                                    <div class="media-body">
                                        <h4 class="media-heading"><a>Voluptatem</a></h4>
                                        <h5 class="media-heading"> by <a><small>Laudantium</small></a></h5>
                                        <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                                    </div>
                                </div>
                            </td>
                            <td class="col-sm-1 col-md-2 text-center">
                                <i class="fa fa-minus-circle"></i>
                                <input type="number" value="2" disabled class="text-center quantity">
                                <i class="fa fa-plus-circle"></i>
                            </td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>2000$</strong></td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>4000$</strong></td>
                            <td class="col-sm-1 col-md-1">
                                <button type="button" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr> -->
                    </tbody>
                </table>
            </div>


            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading text-center panel-heading-custom">
                        <h4>Review Order</h4>
                    </div>
                    <div class="panel-body">
                        <div class="col-md-12">
                            <strong>Subtotal (# {{$store.state.cartCount}})</strong>
                            <div class="pull-right"><span> Total: ${{ totalPrice }}</span></div>
                            <hr>
                        </div>
                        <div class="col-md-12">
                            <strong>GST(5%)</strong>
                            <div class="pull-right"><span>{{getGST}} &#x20B9;</span></div>
                            <hr>
                        </div>
                        <div class="col-md-12">
                            <strong>Order Total</strong>
                            <div class="pull-right"><span>{{getGrandTotal}} &#x20B9;</span></div>
                            <hr>
                        </div>            
                    </div>
                    <div class="panel-footer">
                        <a type="button" class="btn btn-primary btn-lg btn-block"  v-on:click="checkOut(true)">Checkout</a>
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
  // import Loading from 'vue-loading-overlay';
    // Import stylesheet
    // import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'Cart',
    data(){
        return{       
            message:"",
            success:"",
          appservice: new appService(),
            imageUrl:"https://9b5663d02d4c.ngrok.io/",
        }
    },
    methods:{
        removeFromCart(item) {
            this.$store.commit('removeFromCart', item);
        },
        checkOut(){
            let data = {
                cart: JSON.stringify(this.$store.state.cart)

            }
            this.$store.commit('saveCart');
            console.log(data);
            if(this.$store.state.login){
                this.$router.push("/checkout-address");
            }else{
                this.$router.push("/login");
            }
          
        // this.appservice
        // .addToCart("addDataToCart", {product_id:id, quantity:qty})
        // .then(response => {
        //   console.log("addDataToCart", response);
        //    this.isLoading = false;
        //     if (response.success) {               
              
        //       // this.$router.push("/dashboard");
        //    //  Vue.$toast.success(response.message)
        //     } else {
        //       console.log(response.message);
        //      //  Vue.$toast.error(response.message)
        //     }
        // })
        // .catch(e => {
        //   console.log(e);
        // });
        },
        toGetProductDetails(id){
         this.$router.push("/productDetails/"+id);
        },
        quantityMinus(item, i){
            if(this.$store.state.cart[i].quantity>1){
                this.$store.commit('minusToCart', item)
            }
           
            // if(flag>0){
            //   flag--;
            //   this.$store.state.cart[i].quantity = flag;
            // }
         console.log(item);
        },
        quantityPlus(item){    
           this.$store.commit('addToCart', item);   
          // this.$store.state.cart[i].quantity = flag;
        }
    },
    components:{
        Header,
        Footer,
        //Loading
    },
    computed: {
        totalPrice() {
            let total = 0;

            for (let item of this.$store.state.cart) {
                total += item.totalPrice;
            }

            return total.toFixed(2);
        },
        getGST(){
            let totalGST = 0;
            let total = 0;

            for (let item of this.$store.state.cart) {
                total += item.totalPrice;
            }

            totalGST=total*0.05;
            return totalGST.toFixed(2);
        },
        getGrandTotal(){
            let totalGST = 0;
            let total = 0;
            let getGrandTotal=0;

            for (let item of this.$store.state.cart) {
                total += item.totalPrice;
            }

            totalGST=total*0.05;           
            getGrandTotal=totalGST+total;
            return getGrandTotal.toFixed(2);
        }

    }
}
</script>

<style>
 /* @import '../assets/css/navbar.css';
@import '../assets/css/login.css'; */

</style>