<template>
  <div id="app">
    <div class="alert alert-info" role="alert">
     <p  class="text-center">AÇILIŞA ÖZEL 100 TL ÜZERİ ALIŞVERİŞLERDE:<b> KARGO</b> | BEDAVA FIRSATI | <a href="#">DETAYLARI İNCELE</a></p>
    </div>
    <div id="nav">
      <b-container>
        <b-col></b-col>
        <b-col cols="12">
        <TopHeader/>
         <div >
          <NuxtLink style="color:black"  to="/"> <b-img  center  src="https://melimelek.com.tr/img/melimelek-logo-1576920469.jpg"  fluid alt="Responsive image"></b-img> </NuxtLink>   
         </div>
          <hr style="width:100%;text-align:left;margin-left:0">
              <Navbar/>
           <hr style="width:100%;text-align:left;margin-left:0">
           <Carousel/>

           <div>
             <Cards/>
            
           </div>
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
            <PostList :posts="fetchedPosts"/>
          <div style="position:relative;top:100px"
        ><Footer/></div>
        
          
        </b-col>
    
        <b-col></b-col>
         
      </b-container>
    </div>

  </div>
</template>

<script>
import PostList from "/home/sena/melek/src/components/Post/PostList.vue"
import TopHeader from "/home/sena/melek/src/components/TopHeader.vue"
import Navbar from "/home/sena/melek/src/components/Navbar.vue"
import Carousel from "/home/sena/melek/src/components/Carousel.vue"
import Cards from "/home/sena/melek/src/components/Cards.vue"
import Footer from "/home/sena/melek/src/components/Footer.vue"
import {mapState} from "vuex"
import {mapGetters} from "vuex"

export default {
  components : {
   TopHeader,
    Navbar,
    Carousel,
    Footer,
    Cards,
    PostList
   
  
  },

//   created () {
    
    
//   },

//  computed : {
//          fetchedPosts(){
//           return this.$store.getters.getPosts
//  },
//   }
}
</script>