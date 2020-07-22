<template>
<div>
  <Header></Header>
  <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
  <div class="container" style="margin-bottom: 18%;">
    <div class="row">

      <!-- Sidebar -->
      <div class="col-md-3">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-danger">
            <div class="panel-heading" role="tab" id="headingOne">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#categories">
                  <i class="fa fa-lg fa-angle-double-down"></i> Categories
                </a>
              </h4>
            </div>
            <div id="categories" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div class="list-group">
                <li class="list-group-item" v-for="category in productCategories" :key="category._id">
                  <a v-on:click="toGetProductByCategory(category.category_id, category.category_name)"><i class="fa fa-dot-circle-o"></i> {{category.category_name}}</a>
                </li>
              </div>
            </div>
          </div>

          <div class="panel panel-danger">
            <div class="panel-heading" role="tab" id="headingOne">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#colors">
                  <i class="fa fa-lg fa-angle-double-down"></i> Colors
                </a>
              </h4>
            </div>
            <div id="colors" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div class="list-group-item">
                <ul class="list-inline">
                  <!-- color_code -->
                  <li  v-for="color in productColors" :key="color._id">
                    <button type="button" v-on:click="toGetProductByColor(color.color_id, color.color_name)" data-toggle="tooltip" data-placement="top" title="color" class="color-box"  v-bind:style="{background: color.color_code}"></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product list -->
      <div class="col-md-9 vertical-line">
        <div class="row padding-row">
          <h4 class="pull-left"><b>{{tempProductTitle}}</b></h4>
          <div class="pull-right">
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item active">
                <a v-on:click="sortByHightestRating()" class="nav-link" href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </a>
              </li>
              <li class="nav-item">
                <a v-on:click="productListAsc()" class="nav-link" href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">
                    <i class="fa fa-inr" aria-hidden="true"></i>
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
              </li>
              <li class="nav-item">
                <a v-on:click="productListDesc()" class="nav-link" href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">
                    <i class="fa fa-inr" aria-hidden="true"></i>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <h5 class="pull-right">Sort By : </h5>
        </div>

        <br>
        <div v-if="products.length">
        <div class="col-md-4" v-for="item in products" :key="item._id">
          <div class="thumbnail">
            <div class="img-thumb" style="width:240px;height: 180px;">
              <img class="img-reposive"  style="max-width:100%;max-height:100%" v-bind:src="imageUrl+item.product_image" alt="product_image">
            </div>
            <div class="caption">
              <p class="elipse-product">
                <a v-on:click="toGetProductDetails(item.product_id)">{{item.product_name}}</a>
              </p>
              <button class="pull-right btn btn-danger btn-xs" v-on:click="addToCart(item)">Add To Cart</button>
              <p><strong>{{item.product_cost}} &#x20B9;</strong></p>
              <fieldset class="rating">
                <div class="text-warning text-center">
                  <i class="fa fa-lg fa-star"></i>
                  <i class="fa fa-lg fa-star"></i>
                  <i class="fa fa-lg fa-star"></i>
                  <i class="fa fa-lg fa-star-o"></i>
                  <i class="fa fa-lg fa-star-o"></i>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        </div>
        <div v-else>
          <h2>Item not Found</h2>
          <a v-on:click="toGetProductDetails(1)">link</a>
        </div>
        <!-- <div class="col-md-4">
          <div class="thumbnail">
            <div class="img-thumb">
              <img class="img-reposive" src="http://via.placeholder.com/350x250" alt="product_image">
            </div>
            <div class="caption">
              <p class="elipse-product"><a href="./product-details.html">de Finibus Bonorum</a></p>
              <button class="pull-right btn btn-danger btn-xs">Add To Cart</button>
              <p><strong>20000 $</strong></p>
              <fieldset class="rating">
                <div class="text-warning text-center">
                  <i class="fa fa-lg fa-star"></i>
                  <i class="fa fa-lg fa-star"></i>
                  <i class="fa fa-lg fa-star"></i>
                  <i class="fa fa-lg fa-star-o"></i>
                  <i class="fa fa-lg fa-star-o"></i>
                </div>
              </fieldset>
            </div>
          </div>
        </div> -->
       
     
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>

</template>

<script>
import Header from '../header'
import Footer from '../footer'
import appService from '../../services/appService.js'; 
import Loading from 'vue-loading-overlay';
  //   // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name:'ProductList',
    data(){
        return{
            tempProductTitle:"All Products",
            isLoading: false,
            fullPage: true,
            message:"",
            success:"",
            products:[],
            imageUrl:"https://9b5663d02d4c.ngrok.io/",
            appservice: new appService(),
            productColors:[],
            productCategories:[],
        }    
    },
    methods:{
      getProductList(){
          this.isLoading = true;
         this.appservice
        .getAllProduct("getAllProducts")
        .then(response => {
          console.log("getAllProducts", response);
           this.isLoading = false;
            if (response.success) {
              this.products= response.product_details;
            } else {
              console.log(response.message);
            }
        })
        .catch(e => {
          console.log(e);
        });
      },
      productListAsc(){
        this.tempProductTitle="All Products";
         this.isLoading = true;
         this.appservice
        .getAllProductAsc("getAllProductsInAscending")
        .then(response => {
          console.log("getProductsASC", response);
           this.isLoading = false;
            if (response.success) {               
              this.products= response.product_details;
            } else {
              console.log(response.message);
             //  Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
        });
      },
      productListDesc(){
         this.tempProductTitle="All Products";
         this.isLoading = true;
         this.appservice
        .getAllProductDesc("getAllProductsInDescending")
        .then(response => {
          console.log("getProductsDESC", response);
           this.isLoading = false;
            if (response.success) {
               
              this.products= response.product_details;
              // this.$router.push("dashboard");
           //  Vue.$toast.success(response.message)
            } else {
              console.log(response.message);
             //  Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
        });
      },
      sortByHightestRating(){
     // getAllProductsInHighestRating
        this.isLoading = true;
         this.appservice
        .getAllProductRating("getAllProductsInHighestRating")
        .then(response => {
          console.log("getProductsDESC", response);
           this.isLoading = false;
            if (response.success) {
               
              this.products= response.product_details;
              // this.$router.push("dashboard");
           //  Vue.$toast.success(response.message)
            } else {
              console.log(response.message);
             //  Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
        });
      },
      toGetProductDetails(id){
         this.$router.push("/productDetails/"+id);
      },
      toGetProductCategories(){
          this.isLoading = true;
         this.appservice
        .getAllCategory("getAllCategories")
        .then(response => {
          console.log("getAllCategories", response);
           this.isLoading = false;
            if (response.success) {
               
              this.productCategories= response.category_details;
              // this.$router.push("dashboard");
           //  Vue.$toast.success(response.message)
            } else {
              console.log(response.message);
             //  Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
        });
      },
      toGetProductByCategory(id, name){
        this.tempProductTitle=name;
         this.isLoading = true;
        this.appservice
        .getProductByCategoryId("getProductByCateg/"+id)
        .then(response => {
          console.log("getProductByCategoryId", response);
           this.isLoading = false;
            if (response.success) {               
               this.products= response.product_details;
              // this.$router.push("dashboard");
           //  Vue.$toast.success(response.message)
            } else {
             this.products=[];
             console.log(response.message);
               this.message="Product is not available";
             //  Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
        });
      },
      toGetProductByColor(id, name){
      this.tempProductTitle=name;
      this.isLoading = true;
      this.message="";
      this.appservice
        .getProductByCategoryId("getProductBycolor/"+id)
        .then(response => {
          console.log("getProductByColorId", response);
           this.isLoading = false;
            if (response.success) {               
               this.products= response.product_details;
              // this.$router.push("dashboard");
           //  Vue.$toast.success(response.message)
            } else {
               this.products=[];
              console.log(response.message);
               this.message="Product is not available";
             //  Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
        });
      },
       addToCart(item){   
        this.$store.commit('addToCart', item);          
      },    
      toGetAllColors(){
          this.appservice
        .getAllColors("getAllColors")
        .then(response => {
          console.log("getAllColors", response);
           this.isLoading = false;
            if (response.success) {
               
              this.productColors= response.color_details;
              // this.$router.push("dashboard");
           //  Vue.$toast.success(response.message)
            } else {
              console.log(response.message);
             //  Vue.$toast.error(response.message)
            }
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
    beforeMount(){
        this.getProductList();
        this.toGetProductCategories();
        this.toGetAllColors();
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