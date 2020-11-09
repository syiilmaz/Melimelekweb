<template>
  <div id="app">
    <div class="alert alert-info" role="alert">
     <p  class="text-center">AÇILIŞA ÖZEL 100 TL ÜZERİ ALIŞVERİŞLERDE:<b> KARGO</b> | BEDAVA FIRSATI | <a href="#">DETAYLARI İNCELE</a></p>
    </div>
    <div id="nav">
      <b-container>
        <b-col></b-col>
        <b-col cols="12">
           <top-header></top-header>
           <div>
         <b-img src="https://melimelek.com.tr/img/melimelek-logo-1576920469.jpg"  fluid alt="Responsive image"></b-img> 
          </div>
          <hr style="width:100%;text-align:left;margin-left:0">
          <navbar></navbar>
           <hr style="width:100%;text-align:left;margin-left:0">
         
        </b-col>
        <b-col></b-col>
          <ftr></ftr>
      </b-container>
    </div>
    <router-view />
  </div>
</template>
<script> 
  import TopHeader from "@/components/TopHeader.vue"
  import Navbar from "@/components/Navbar.vue"

 
export default {
  components : {
    'top-header': TopHeader,
    'navbar' : Navbar ,
  
  }
};

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
