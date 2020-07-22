<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand"  v-on:click="goToHome(true)">
            <i class="fa fa-shopping-bag fa-lg" aria-hidden="true">
              <strong>NeoSTORE</strong>
            </i>
          </a>
        </div>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="nav navbar-nav">
            <li>
              <a  v-on:click="goToHome(true)">HOME</a>
            </li>
             <li v-if="!$store.state.login">
               <a v-on:click="goToLogin(true)">
                 Login
                </a>
             </li>
          </ul>

          <form autocomplete="off" class="pull-left">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="input-group search-bar">
                    <input name="search" class="form-control" />
                    <span class="input-group-btn">
                      <button type="submit" class="btn btn-default">
                        <i class="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <!-- <button class="btn btn-primary"  v-on:click="goToLogin(true)">Login</button> -->
          <!-- <ul class="nav navbar-nav navbar-right" v-if="!$store.state.login">
                   <a v-on:click="goToLogin(true)">
                 Login
                </a>
          </ul> -->
          <ul class="nav navbar-nav navbar-right" v-if="$store.state.login">
            <b-nav-item-dropdown text="Profile" right>
              <!-- <li>
                <label>{{$store.state.user.first_name}}</label>
              </li> -->
              <li>
                <a v-on:click="goToProfile(true)">
                  <i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Profile
                </a>
              </li>
              <li>
                <a v-on:click="goToOrders(true)">
                  <i class="fa fa-list-alt fa-fw" aria-hidden="true"></i>&nbsp; Orders
                </a>
              </li>
              <li>
                <a v-on:click="goToAddress(true)">
                  <i class="fa fa-address-card-o fa-fw" aria-hidden="true"></i>&nbsp; Addresses
                </a>
              </li>
              <li >
                <a v-on:click="goToLogout">
                  <i class="fa fa-sign-out fa-fw" aria-hidden="true"></i>&nbsp; Logout
                </a>
              </li>
            </b-nav-item-dropdown>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
            <a class="text-primary" v-on:click="goToCart" >
                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>Cart
                <span class="badge">{{$store.state.cartCount}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>   
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      message: "",
      error: ""
    };
  },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
    goToOrders() {
      this.$router.push("/order");
    },
    goToAddress() {
      this.$router.push("/address");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToRegister() {
      this.$router.push("/registration");
    },
     goToCart() {
      this.$router.push("/cart");
    },
    goToLogout(){
       this.$router.push("/home");
       this.$store.commit('login', false);  
       localStorage.clear();
       this.$store.commit('clearState');
    },
    goToHome(){
       this.$router.push("/home");
    }
  },
  component: {}
};
</script>

<style>
@import "../assets/css/navbar.css";
@import "../assets/css/login.css";
.navbar-default {
  background-color: #fe3f3f !important;
  border-color: #c0392b !important;
}

.navbar-default .navbar-brand {
  color: #ecf0f1 !important;
}

.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #ffbbbc !important;
}

.navbar-default .navbar-text {
  color: #ecf0f1 !important;
}

.navbar-default .navbar-nav > li > a {
  color: #ecf0f1 !important;
}

.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #ffbbbc !important;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #ffbbbc !important;
  background-color: #c0392b !important;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #ffbbbc !important;
  background-color: #c0392b !important;
}

.navbar-default .navbar-toggle {
  border-color: #c0392b !important;
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #c0392b !important;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #ecf0f1 !important;
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #ecf0f1 !important;
}

.navbar-default .navbar-link {
  color: #ecf0f1 !important;
}

.navbar-default .navbar-link:hover {
  color: #ffbbbc !important;
}

@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #ecf0f1 !important;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #ffbbbc !important;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #ffbbbc !important;
    background-color: #c0392b !important;
  }
}

.search-bar {
  max-width: 400px !important;
  padding-top: 8px !important;
}
</style>