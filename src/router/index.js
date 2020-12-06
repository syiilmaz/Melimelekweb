import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue"
import Cards from "../components/Cards.vue"
import Account from "../components/Account.vue"
import Product from "../components/Product.vue"
import Cart from "../components/Cart.vue"

import Modal from "../components/Modal.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  
  {
    path:"/login",
    name : "Login",
    component : Login
  },
  {
    path :"/cards",
    name : "Cards",
    component : Cards
    },

    {
      path :"/account",
      name : "Account",
      component : Account
      },
      {
        path :"/product",
        name : "Product",
        component : Product
        },
        {
          path :"/cart",
          name : "Cart",
          component : Cart
          },
        
            {
              path :"/modal",
              name : "Modal",
              component : Modal
              },
             
           
        

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
