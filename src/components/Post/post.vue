<template>
   <b-card-group deck>
    <b-card
          
        title=""
        img-src="https://melimelek.com.tr/214-home_default/melimelek-mor-ajanda.jpg"
        img-alt="Image"
        img-top
      >
      
       <b-card-text >
          {{post.title}} <br />
          <b style="position:relative;left:60px;">{{post.price}} 
            <b-img src="https://www.eniyiandroid.com/wp-content/uploads/2018/03/tl-simgesi.jpg" style="height:10px" ></b-img></b>
        </b-card-text> 
        <div class="overlay">
    <div style="position:relative;
left:10px;top:220px;">
        <b-button-toolbar >
      <b-button-group >
        <b-button  variant="secondary" style="border-color:black;" >
        <b-icon icon="minecart-loaded" aria-hidden="true"></b-icon>
         
        </b-button>
        <b-button variant="light" style="border-color:black;">
           <NuxtLink to="/product">  <b-icon style="color:black" icon="filter-left" aria-hidden="true"></b-icon>  </NuxtLink> 
        </b-button>
        <b-button variant="light" style="border-color:black;">
          <b-icon icon="heart" aria-hidden="true"></b-icon>
        </b-button>
        <b-button variant="light" style="border-color:black;">
         <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
       
        </b-button>
      </b-button-group>
        </b-button-toolbar>
    </div>
  </div>
 
      </b-card>
   </b-card-group>
</template>

<script>
export default {
props:{
  post:{
    required : true,
    type :Boolean
  }
}
}
</script>

<style>

</style>