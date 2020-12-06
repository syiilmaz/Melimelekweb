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
         <b-img  center  src="https://melimelek.com.tr/img/melimelek-logo-1576920469.jpg"  fluid alt="Responsive image"></b-img> 
         </div>
          <hr style="width:100%;text-align:left;margin-left:0">
              <Navbar/>
           <hr style="width:100%;text-align:left;margin-left:0">
          <Cart/>

        </b-col>
         <div style="position:relative;top:100px"
        ><Footer/></div>
        
      </b-container>
        </div>
         
  </div>

  
</template>
<script>

import Cart from "/home/sena/melek/src/components/Cart.vue"
import TopHeader from "/home/sena/melek/src/components/TopHeader.vue"
import Navbar from "/home/sena/melek/src/components/Navbar.vue"
import Footer from "/home/sena/melek/src/components/Footer.vue"

export default {
components:
{
    Cart,
    TopHeader,
    Navbar,
    Footer
}
    
}
</script>