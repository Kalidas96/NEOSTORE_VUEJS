<template>
<div>
  <Header></Header>
  <!-- <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading> -->
  <div class="container" style="margin-bottom:18%">
    <div class="card">
      <div class="row">
        <div class="wrapper">
          <div class="col-md-6">
            <div class="preview">
              <div class="preview-pic tab-content">
                <div class="my-img active">
                   <zoom-on-hover :scale="2.2" :img-normal="imageUrl+product_details.product_image"></zoom-on-hover>
                  <!-- <img class="actual-img" v-bind:src="imageUrl+product_details.product_image"> -->
                  
                </div>
              </div>
              <ul class="preview-thumbnail nav nav-tabs">
                <li v-for="(subImage, index) in product_details.subImages_id.product_subImages" :key="subImage.subImage">
                  <div class="my-img-thumb">
                       <a class="clickimg" @click="changeIndex(index)">
                    <img v-bind:src="imageUrl+subImage">
                       </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="details">
              <h3 class="text-danger">{{product_details.product_name}} </h3>
               <starrating
                :show-rating="showRating"
                :star-size="20"
                :rating="product_details.product_rating"
                :read-only="true"
                :increment="0.01">
                </starrating>
              <hr>
              <h4>Price: <span class="text-success">{{product_details.product_cost}} &#x20B9;</span></h4>
              <h4>Color:
                <span class="color" v-bind:style="{background: product_details.color_id.color_code}"></span>
              </h4>

              <div class="action">
                <h4>Share on
                  <i class="fa fa-share-alt fa-lg"></i>
                </h4>
                <div class="share-container">
                  <button class="btn btn-primary space-right"><i class="fa fa-lg fa-facebook"></i></button>&nbsp;
                  <button class="btn btn-danger space-right"><i class="fa fa-lg fa-google"></i></button>&nbsp;
                  <button class="btn btn-info space-right"><i class="fa fa-lg fa-twitter"></i></button>&nbsp;
                  <button class="btn btn-primary space-right"><i class="fa fa-lg fa-linkedin"></i></button>&nbsp;
                  <button class="btn btn-success"><i class="fa fa-lg fa-whatsapp"></i></button>
                </div>
              </div>

              <div class="action">
                <button class="btn btn-primary space-right" v-on:click="addToCart(product_details)">ADD TO CART</button>
                <button
                  type="button"
                  class="btn btn-warning ml5"
                  data-toggle="modal"
                  data-target=".bs-example-modal-sm"
                >RATE PRODUCT</button>
                <div
                  class="modal fade bs-example-modal-sm"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="mySmallModalLabel"
                >
                  <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                      <!-- <p>{{successmsg}}</p> -->
                      <form method="post">
                        <div class="modal-body">
                          <div class="modalImage">
                            <img :src="imageUrl+product_details.product_image" class="styleimg" />
                            <h4>{{product_details.product_name}}</h4>
                          </div>
                          <div class="text-warning text-center">
                            <input type="hidden" v-model="product_details.product_id" />
                            <starrating
                              :show-rating="showRating"
                              :star-size="20"
                              :rating="product_details.product_rating"
                              :increment="0.01"
                            ></starrating>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">CLOSE</button>
                          <button
                            type="button"
                            data-dismiss="modal"
                            target="_blank"
                            class="btn btn-primary"
                            @click="rateProduct(product_details.product_id, product_details.product_rating)"
                          >RATE IT</button>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
               
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="wrapper">
          <div class="col-md-12">
            <div class="preview">
              <div>
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">Description</a></li>
                  <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">Feature</a></li>
                  <!-- <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">Tab 3</a></li> -->
                </ul>
                <br>
                <!-- Tab panes -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane active" id="tab1">{{product_details.product_desc}}</div>
                  <div role="tabpanel" class="tab-pane" id="tab2">{{product_details.product_material}} </div>
                  <!-- <div role="tabpanel" class="tab-pane" id="tab3">making it over 2000 years old. Richard McClintock, a Latin </div> -->
                </div>

              </div>
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
import Header from '../header.vue'
import Footer from '../footer.vue'
import appService from '../../services/appService.js'; 
import StarRating from "vue-star-rating";

// const demoDetails={
// "_id":"5cfe3fcfb4db0f338946eabf",
// "subImages_id":"5cfe3a8c7b35112d9faa2f6b",
// "category_id":"5cfe3c5aea821930af69281e",
// "color_id":"5cfe23d6de89f8148fbd013e",
// "product_id":"5cfe3fcfb4db0f338946eabf",
// "product_name":"Apollo Sectional Sofa green",
// "product_image":"2019-06-24T11-27-40.003ZApollo_Infinite_FNSF51APOL3S000SAAAA_slide_03.jpg",
// "product_desc":"While we do a Quality Check at our end for colour matching, a 5-10% variation in colour may appear in a batch depending upon conditions of production. As an industry standard, we allow for a maximum of a 10% variation.",
// "product_rating":"4.50",
// "product_producer":"Urban ladder",
// "product_cost":50000,
// "product_stock":151,
// "product_dimension":"84 * 28",
// "product_material":"Wood, Metal",
// "createdAt":"2019-06-10T11:32:31.885Z",
// "__v":0
// }

export default {
    name:'ProductDetails',
    data(){
        return{
            showRating: false,
            imgindex: 0,
            message:"",
            success:"",        
            id:0,   
            product_details:{},
            appservice: new appService(),
            imageUrl:"https://9b5663d02d4c.ngrok.io/",
        }
    },
     created(){
      this.id = this.$route.params.id;
    },
    methods:{
      changeIndex(index) {
        return (this.imgindex = index);
      }, 
    rateProduct(product_id, product_rating) {
      console.log(product_id, product_rating);
      // console.log(product_id)
      // console.log(product_rating)
      // let rateparam = {
      //   rating: product_rating,
      //   product_id: product_id
      // };
      alert();
    },
     getProductDetails(){     
        this.appservice
        .getProductByProdId("getProductByProdId/"+this.id)
        .then(response => {
          console.log("getProductByProdId", response);
           this.isLoading = false;
            if (response.success) {               
              this.product_details= response.product_details[0];
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
      addToCart(item){   
        this.$store.commit('addToCart', item);          
      }     
    },   
    beforeMount(){
        this.getProductDetails();      
    },  
    components:{
        Header,
        Footer,     
        starrating: StarRating   
    }
}
</script>

<style>
.styleimg {
  width: 100%;
  height: auto;
}
.modal {
  text-align: center;
  padding: 0 !important;
}

.modal:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -4px;
}

.modal-dialog {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}
.ml5 {
  margin-left: 5px;
}
.my-img {
  margin-bottom: 4%;
}
.my-img:hover{
  cursor:crosshair;
}
.preview-thumbnail.nav-tabs li {
  margin-bottom: 3%;
}
.my-img-thumb {
  border: 1px solid brown;
  padding: 5px 5px;
}
.clickimg {
  cursor: pointer;
}
span {
    outline: none;
}
.sectionwrapper{
  display: flex;
}
.zoom-on-hover .normal[data-v-52b6b210] {
    height: 250px;
}
</style>