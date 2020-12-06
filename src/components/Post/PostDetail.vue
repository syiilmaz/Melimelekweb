<template>
  <b-container class="bv-example-row">
    <b-row>
  
      <b-col>
          <div class="container">
   
     <div class="item"><img src="http://melimelek.com.tr/213-large_default/melimelek-mor-ajanda.jpg" class="img-thumbnail"></div>
    <div class="row">
	    <div class="col-sm-4">
	        <div class="item"><img src="http://melimelek.com.tr/213-large_default/melimelek-mor-ajanda.jpg" class="img-thumbnail"></div>
		    
	    </div>
	    <div class="col-sm-4">
		    <div class="item"><img src="https://melimelek.com.tr/214-home_default/melimelek-mor-ajanda.jpg" class="img-thumbnail"></div>
	    </div>
	    <div class="col-sm-4">
		    <div class="item"><img src="https://melimelek.com.tr/227-home_default/melimelek-mor-ajanda.jpg" class="img-thumbnail"></div>
	    </div>
    </div>
          </div>

      </b-col>
      <b-col
        ><h2 class='text-left'>
          Melimelek Mor Ajanda
        </h2>
        <p class="text-left" style="font-family:sans-serif; color: #999999;"> Paylaş</p> 
         <p class="text-left" style="color:#8abf44;font-size: 33px;     font-family: sans-serif;"> <b>24,90 TL</b></p>
             <p class="text-left" style="font-family:sans-serif; color: #999999;"> Vergi hariç</p> 
              <p class="text-left" style="font-family:sans-serif; color: #333333;    font-weight: 300;"> Kapak: 270 gr. özel dokulu renkli kağıt, 3 renk varak baskı, terzi dikiş, soft kapak. İç Sayfalar: 48 sayfa 110 gr 1. hamur kağıt, 4 renk baskı, özel tasarım renkli planlayıcı.</p> 
                 <hr style="width:100%;text-align:left;margin-left:0">
              <p class="text-left" style="font-family:sans-serif; color: #999999;"> Adet</p> 
              <div style="position:relative;left:200px;top:-50px">
                <b-form-spinbutton id="sb-inline" v-model="value" inline> 
    </b-form-spinbutton>


              </div>
              <div>
   <b-button  v-b-modal="'my-modal'" style="position:relative;

" squared >Sepete Ekle</b-button>
 <b-modal>
  
       Mor Ajanda bu ürünler sepete eklendi.
    
    
  </b-modal>
              </div>
 <div style="font-size: 3rem;position:relative;left:200px;top:-50px"
>
    <b-icon icon="suit-heart-fill" class="border rounded p-2"></b-icon>
    <b-icon icon="arrow-repeat" class="border rounded p-2"></b-icon>
    <b-icon icon="slash-circle" variant="warning"></b-icon>
 </div>   
 
        <div style=" box-shadow: 10px 10px 5px whitesmoke;">
          <b-card >
                       <p class="text-left">   <b-icon icon="shield-fill-check"></b-icon> 256 Bit Güvenli Alışveriş</p>
                </b-card>
                <b-card>
                     <p class="text-left">   <b-icon icon="minecart-loaded"></b-icon>Hızlı Teslimat</p>
                </b-card>
                <b-card>
                     <p class="text-left">   <b-icon icon="arrow-left-right"></b-icon>Değişim ve İade Seçeneği</p>
                </b-card>
        </div>
              
        </b-col
      >
    </b-row>
  </b-container>
</template>

<script>

export default {
     data() {
      return {
        value: 1,
        modalShow: false
        
      }
    
      },
     
}

</script>


<style>

		.item{
			left: 0;
			top: 0;
			position: relative;
			overflow: hidden;
			margin-top:50px;
			
		}
		.item img{
			-webkit-transition: 0.6s ease;
  			transition: 0.6s ease;
  			
		}
		.item img:hover{
			-webkit-transform: scale(1.2);
  			transform: scale(1.2);

		}
		.img-thumbnail{
		    border:0px;
		    border-radius:0px;
		}
</style>