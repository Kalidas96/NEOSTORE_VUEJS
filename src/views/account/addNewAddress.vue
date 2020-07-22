<template>
  <div>
    <Header></Header>
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>
    <div class="container" style="margin-bottom: 18%;">
      <div class="container-fluid">
        <div class="col-md-12">
          <h4>My Account</h4>
          <hr />
        </div>

        <div class="col-md-3">
          <img
            src="http://soeasyloansonline.com.au/img/testimonial/noimg.png"
            class="img-responsive img-circle profile"
            alt="profile_pic"
            style="height: 200px; width: 200px !important;"
          />

          <div class="text-center">
            <br />
            <div class="text-danger">
              <strong>Test User</strong>
            </div>
          </div>
          <br />
          <ul class="nav">
            <li>
              <a v-on:click="goToOrder">
                <i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Orders
              </a>
            </li>
            <li>
              <a v-on:click="goToProfile">
                <i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Profile
              </a>
            </li>
            <li>
              <a v-on:click="goToAddress">
                <i class="fa fa-address-book fa-fw" aria-hidden="true"></i>&nbsp; Address
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-9">
          <div class="panel panel-default">
            <div class="panel-body">
              <h4>
                <strong>Add new address</strong>
              </h4>
              <hr />

              <button type="button" class="btn btn-default">
                <i class="fa fa-map-marker"></i> Set Current Location
              </button>
              <br />
              <br />
              <form class="form-custom" @submit.prevent="addUpdateAddress" novalidate>
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                      <label for="fulladdress">Address</label>
                      <textarea
                        type="text"
                        class="form-control"
                        v-model="address.address"
                        required
                        :class="{ 'is-invalid': submitted && $v.address.address.$error}"
                      ></textarea>
                      <div
                        v-if="submitted && !$v.address.address.required"
                        class="invalid-feedback text-danger"
                      >Address is required</div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="pincode">Pincode</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="address.pincode"
                        required
                        :class="{ 'is-invalid': submitted && $v.address.pincode.$error}"
                      />
                      <div
                        v-if="submitted && !$v.address.pincode.required"
                        class="invalid-feedback text-danger"
                      >Pin code is required</div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="city">City</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="address.city"
                        required
                        :class="{ 'is-invalid': submitted && $v.address.city.$error}"
                      />
                      <div
                        v-if="submitted && !$v.address.city.required"
                        class="invalid-feedback text-danger"
                      >City is required</div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="state">State</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="address.state"
                        required
                        :class="{ 'is-invalid': submitted && $v.address.state.$error}"
                      />
                      <div
                        v-if="submitted && !$v.address.state.required"
                        class="invalid-feedback text-danger"
                      >State is required</div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="country">Country</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="address.country"
                        required
                        :class="{ 'is-invalid': submitted && $v.address.country.$error}"
                      />
                      <div
                        v-if="submitted && !$v.address.country.required"
                        class="invalid-feedback text-danger"
                      >Country is required</div>
                    </div>
                  </div>
                </div>

                <hr />
                <button type="submit" class="btn btn-default btn-lg">
                  <i class="fa fa-floppy-o"></i>Save
                </button>
                <a href="./address.html" type="button" class="btn btn-default btn-lg">
                  <i class="fa fa-remove"></i>Cancel
                </a>
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
import Vue from "vue";
import Footer from "../footer.vue";
import Header from "../header.vue";
import { required} from "vuelidate/lib/validators";
import appService from "../../services/appService.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import VueToast from "vue-toast-notification";
// Import one of available themes
import "vue-toast-notification/dist/theme-default.css";
Vue.use(VueToast, { position: "top" });
export default {
  name: "AddNewAddress",
  data() {
    return {
      address: {
        //  address_id: "",
        address: "",
        pincode: "",
        city: "",
        state: "",
        country: ""
      },
      isLoading: false,
      fullPage: true,
      message: "",
      success: "",
      submitted: false,
      appservice: new appService()
    };
  },
  validations: {
    address: {
      address: { required },
      pincode: { required },
      city: { required },
      state: { required },
      country: { required }
    }
  },
  components: {
    Loading,
    Header,
    Footer
  },
  methods: {
    editAddress() {
      this.$router.push("/editAddress");
    },
    goToOrder() {
      this.$router.push("/order");
    },
    goToAddress() {
      this.$router.push("/address");
    },
    goToProfile() {
      this.$router.push("/profile");
    },
    addUpdateAddress() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.isLoading = true;
      // let data={ first_name :this.profile.first_name,last_name :this.profile.last_name,
      //     email :this.profile.email, dob :this.profile.dob, phone_no :this.profile.phone_no,
      //     gender :this.profile.gender
      // }
      this.appservice
        .addAddress(this.address)
        .then(response => {
          console.log("addAddress", response);
          this.isLoading = false;
          if (response.success) {
            Vue.$toast.success(response.message);
          } else {
            console.log(response.message);
            Vue.$toast.error(response.message);
          }
        })
        .catch(e => {
          console.log(e);
          this.isLoading = false;
          Vue.$toast.error(e.message);
        });
    }
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>


