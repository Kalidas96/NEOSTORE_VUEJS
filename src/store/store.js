import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
let login = window.localStorage.getItem('login');
//let user=window.localStorage.getItem('user');
// let GST =window.localStorage.getItem('GST');
// let grandTotal =window.localStorage.getItem('grandTotal');
 
export default new Vuex.Store({
 
        state: {
            cart: cart ? JSON.parse(cart) : [],
            cartCount: cartCount ? parseInt(cartCount) : 0,
            login:login,
           //  user: user ? JSON.parse(user) : {},
            // grandTotal:grandTotal ?  parseFloat(grandTotal) : 0,
        },
    
        mutations: {
            saveCart(state) {
                window.localStorage.setItem('cart', JSON.stringify(state.cart));
                window.localStorage.setItem('cartCount', state.cartCount);
                // window.localStorage.setItem('GST', JSON.stringify(state.cart));
                // window.localStorage.setItem('grandTotal', state.cartCount);
            },
            addToCart(state, item) {
                let found = state.cart.find(product => product.product_id == item.product_id);

                if (found) {
                    found.quantity ++;
                    found.totalPrice = found.quantity * found.product_cost;
                    state.GST=found.totalPrice*0.05;
                    state.grandTotal=found.totalPrice+state.GST;
                } else {
                    state.cart.push(item);
                    Vue.set(item, 'quantity', 1);
                    Vue.set(item, 'totalPrice', item.product_cost);
                    state.GST=item.product_cost*0.05;
                    state.grandTotal=item.product_cost+state.GST;
                }

                state.cartCount++;
            },
            minusToCart(state, item){
                let found = state.cart.find(product => product.product_id == item.product_id);
                found.quantity --;
               // let tempFoundPrice=found.quantity * found.product_cost;
                found.totalPrice = found.totalPrice-found.product_cost;

                state.GST=found.totalPrice*0.05;
                state.grandTotal=found.totalPrice+state.GST;
                state.cartCount--;

            },
            removeFromCart(state, item) {
                let index = state.cart.indexOf(item);
            
                if (index > -1) {
                    let product = state.cart[index];
                    state.cartCount -= product.quantity;
            
                    state.cart.splice(index, 1);
                    if(state.cartCount==0){
                        state.GST=0;
                        state.grandTotal=0;
                    }
                   
                }
            },
            login(state, flag){
                state.login=flag;
                window.localStorage.setItem('login', flag);
            },
            user(state, data){
                state.user=data;
                localStorage.setItem("user", btoa(JSON.stringify(data)));
            },

            clearState(state){
                state.cart= [];
                state.cartCount= 0;
                state.login=false;
            }
        }
    
  
})