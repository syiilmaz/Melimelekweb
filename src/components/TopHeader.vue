<template>
<div > 
  <b-navbar style="font-family:sans-serif;color: #999999;" >
   
       <b-nav-form>
        <b-form-input placeholder="Katalogda arama yapın">
        </b-form-input>
            <b-input-group-prepend is-text >
             <b-icon icon="search"></b-icon>
       </b-input-group-prepend >
       </b-nav-form>

      
          <b-navbar-nav class="ml-auto">
              <b-input-group-prepend >
             <b-icon   style="position:relative;
top:11px;" icon="person-fill"></b-icon>
       </b-input-group-prepend >
         
        <b-nav-item-dropdown  text="Hesabım"  right>
          <b-dropdown-item >Oturum Aç</b-dropdown-item>
          <b-dropdown-item href="#">Hesabım </b-dropdown-item>
          <b-dropdown-item href="#">Ödeme </b-dropdown-item>
          <b-dropdown-item href="#">Takip Listesi</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
          
             <b-icon icon="gear"></b-icon>
      
            <em>Ayarlar</em>
          </template>
          <b-dropdown-item href="#">Dil</b-dropdown-item>
          <b-dropdown-item href="#">Para Birimi</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav>
                 <b-input-group-prepend >
             <b-icon style="position:relative;
top:11px;" icon="cart-fill"></b-icon>
       </b-input-group-prepend >
        <b-nav-item href="#">Sepetim</b-nav-item>
         <b-input-group-prepend >
          <b-icon style="position:relative;
top:11px;" icon="square"></b-icon>
           </b-input-group-prepend >
        </b-navbar-nav>
</b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
export default {


}
</script>

<style>

</style>