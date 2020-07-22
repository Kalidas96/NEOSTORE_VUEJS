import Axios from 'axios'

//let baseUrl="http://180.149.241.208:3022/";
let baseUrl="https://9b5663d02d4c.ngrok.io/"

const token = atob(localStorage.getItem('user-token'));   
let _token='bearer'+' '+token;   
let _headers = {
    'Content-Type': 'application/json',
    'Authorization':_token
};

export default class appService {
    registration(url,data) {
        return Axios.post(baseUrl+url, data)
        .then(response => {
            return response.data;
        })
    }

    login(url, data) {
        return Axios.post(baseUrl+url, data)
        .then(response => {
            return response.data;
        })
    }
    contactUs(url, data){
        return Axios.post(baseUrl+url, data)
        .then(response => {
            return response.data;
        })
    }

    //listing top rated product..display product...home
    defaultTopRatingProduct(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }


    //getAllCategories carsole image ...home
    getAllCategories(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }
    getAllProduct(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getAllProductAsc(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getAllProductDesc(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getAllProductRating(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getAllCategory(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getAllCategoryById(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getProductByCategoryId(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getAllColors(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    
    // getColorById(url){
    //     return Axios.get(baseUrl+url)
    //     .then(response => {
    //         return response.data;
    //     })
    // }

    getProductByColorId(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getProductByProdId(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    getColorById(url){
        return Axios.get(baseUrl+url)
        .then(response => {
            return response.data;
        })
    }

    addToCart(url, data){
        return Axios.post(baseUrl+url, data)
        .then(response => {
            return response.data;
        })
    }

    addAddress(data){    
        return Axios.post(baseUrl+"address", data, {headers:_headers})
        .then(response => {
            return response.data;
        })
    }

    getAddress(){
        return Axios.get(baseUrl+'getCustAddress', {headers:_headers})
        .then(response => {
            return response.data;
        })
    }

    updateAddress(data){
        return Axios.put(baseUrl+'updateAddress', data, {headers:_headers})
        .then(response => {
            return response.data;
        })
    }
   
    getCustProfile(){
        return Axios.get(baseUrl+'getCustProfile', {headers:_headers})
        .then(response => {
            return response.data;
        })
    }
    updateProfile(data){
        return Axios.put(baseUrl+'profile', data, {headers:_headers})
        .then(response => {
            return response.data;
        })
    }

    //cart post
    //addDataToCart...product_id..quantity
    //addProductToCartCheckout..product_id..quantity
    //addProductToCartLogout....product_id..quantity

    //get cart data
    //getCartData
    //getCustCartData...customer_id...get product list by..cust id
    //getAllCartData ..for admin




}