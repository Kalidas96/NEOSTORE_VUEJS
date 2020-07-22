<template>
  <div>
    <Header></Header>
<div class="container" style="margin-bottom: 18%;">
   <h3 class="text-center">Popular Products 
     <small><a v-on:click="goToProductList(true)" >--view all</a></small></h3> 
    <div class="row">
      <div class="col-md-4"  v-for="item in defaultProducts" :key="item._id">
        <div class="thumbnail" >
          <div class="img-thumb"  style="width:240px;height: 180px;">
            <img   style="max-width:100%;max-height:100%"  v-bind:src="imageUrl+item.DashboardProducts[0].product_image" class="img img-responsive">
          </div>
          <div class="caption">
            <h4 class="text-center"><a v-on:click="toGetProductDetails(item.DashboardProducts[0].product_id)"> {{item.DashboardProducts[0].product_name}}</a></h4>
            <h4 class="text-center"> {{item.DashboardProducts[0].product_cost}} &#x20B9;</h4>
            <div class="text-center">
              <i class="fa fa-lg fa-star"></i>
              <i class="fa fa-lg fa-star"></i>
              <i class="fa fa-lg fa-star"></i>
              <i class="fa fa-lg fa-star-o"></i>
              <i class="fa fa-lg fa-star-o"></i>
            </div>
          </div>
        </div>
      </div> 
    </div>
</div>

    <Footer></Footer>
  </div>
</template>


<script>
import Header from "../views/header";
import Footer from "../views/footer";
import appService from "../services/appService.js";
// import Loading from 'vue-loading-overlay';
// Import stylesheet
//   import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "Home",
  data() {
    return {
       imageUrl:"https://9b5663d02d4c.ngrok.io/",
      isLoading: false,
      fullPage: true,
      message: "",
      success: "",
      carouselImges: [],
      defaultProducts: [],
      appservice: new appService()
    };
  },
  methods: {
    goToProductList(){
         this.$router.push("/productList");
    },
    topRatingProduct() {
      this.isLoading = true;
      this.appservice
        .defaultTopRatingProduct("defaultTopRatingProduct")
        .then(response => {
          console.log("defaultTopRatingProduct", response);
          this.isLoading = false;
          if (response.success) {
            this.defaultProducts = response.product_details;
            // this.$router.push("/dashboard");
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

    getAllCategories() {
      this.appservice
        .getAllCategories("getAllCategories")
        .then(response => {
          console.log("category_details", response);
          this.isLoading = false;
          if (response.success) {
            this.carouselImges = response.category_details;
          } else {
            console.log(response.message);
            // Vue.$toast.error(response.message)
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  beforeMount() {
    this.topRatingProduct();
    this.getAllCategories();
  },
  components: {
    Header,
    Footer
    //  Loading
  }
};
</script>

<style scoped>
</style>
