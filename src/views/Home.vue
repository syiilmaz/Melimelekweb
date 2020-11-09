<template>
  <div class="home">
  <b-container>
    <b-col></b-col>
    <b-col cols="12">
      
    <carousel></carousel>
   <p class="text-left"></p> 
  <b-container >
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="https://melimelek.com.tr/themes/leo_cool_stuff/assets/img/modules/appagebuilder/images/8681719622008_2.jpg" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://melimelek.com.tr/themes/leo_cool_stuff/assets/img/modules/appagebuilder/images/2020.png" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://melimelek.com.tr/themes/leo_cool_stuff/assets/img/modules/appagebuilder/images/ssss.png" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>

  <ftr></ftr>

    </b-col> 
 
    <b-col></b-col>
  </b-container>
     
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import VueAgile from 'vue-agile'
Vue.use(VueAgile)
import Carousel from "@/components/Carousel.vue"
import Footer from "@/components/Footer.vue"




export default {
  name: "Home",
  components: {
    'carousel' : Carousel,
    'ftr' : Footer

   
    
  }
  

};
</script>
