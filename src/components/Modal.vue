<template>
  <div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">SEPETE EKLE</b-button>

  <b-modal id="bv-modal-example" hide-footer>
   
    <div class="d-block text-center" style="background-color: #8abf44;" >
      <h4 style="color:white;font-family:sans-serif;"> 
       Mor Ajanda bu ürünler sepete eklendi.</h4>
    </div>
    
  </b-modal>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>