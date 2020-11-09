<template>
<b-container>
  <b-cols></b-cols>

  <div>
    <p class="text-left" style="font-family: sans-serif;
    font-weight: 300;
    line-height: normal;
    color: #333333;
        font-size: 20px;"
        >Benzer Ürünler</p>
    <p class="text-left" style="color: #999999;
">
      <small>(There are 16 other products in the same category) </small>
    </p>
    <b-icon  style="position:relative;
left:-550px;top : 10px;color: #999999;" icon="three-dots"></b-icon>
    <div  style="position:relative;
left:500px;" >
      <b-button title="previous" variant="outline-secondary" class="right">
        <b-icon icon="arrow-bar-left" aria-hidden="true"></b-icon>
      </b-button>
      <b-button title="Next" variant="outline-secondary">
        <b-icon icon="arrow-bar-right" aria-hidden="true"></b-icon>
      </b-button>
    </div>

    <b-card-group deck>
      
      <b-card
          
        title=""
        img-src="https://melimelek.com.tr/214-home_default/melimelek-mor-ajanda.jpg"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Melimelek 2020 Ajanda <br />
          <b>34.90 TL</b>
        </b-card-text>
        <div class="overlay">
    <div style="position:relative;
left:10px;top:300px">
        <b-button-toolbar>
      <b-button-group >
        <b-button   >
          <b-icon icon="minecart-loaded" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="filter-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="heart" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
        </b-button-toolbar>
    </div>
  </div>
 
      </b-card>
    
    
      <b-card
        title=""
        img-src="https://melimelek.com.tr/210-home_default/melimelek-turkuaz-ajanda.jpg"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Melimelek Turkuaz Ajanda <br />
          <b>24.90 TL</b>
        </b-card-text>
       <div class="overlay">
    <div style="position:relative;
left:10px;top:300px">
        <b-button-toolbar>
      <b-button-group >
        <b-button >
          <b-icon icon="minecart-loaded" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="filter-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="heart" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
        </b-button-toolbar>
    </div>
  </div>
      </b-card>
      <b-card
        title=""
        img-src="https://melimelek.com.tr/212-home_default/melimelek-sari-ajanda.jpg"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Melimelek Sarı Ajanda <br />
          <b>24.90 TL</b>
        </b-card-text>
         <div class="overlay">
    <div style="position:relative;
left:10px;top:300px">
        <b-button-toolbar>
      <b-button-group >
        <b-button >
          <b-icon icon="minecart-loaded" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="filter-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="heart" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
        </b-button-toolbar>
    </div>
  </div>
      </b-card>
      <b-card
        title=""
        img-src="https://melimelek.com.tr/218-home_default/melimelek-kirmizi-ajanda.jpg"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Melimelek Sarı Ajanda <br />
          <b>24.90 TL</b>
        </b-card-text>
         <div class="overlay">
    <div style="position:relative;
left:10px;top:300px">
        <b-button-toolbar>
      <b-button-group >
        <b-button >
          <b-icon icon="minecart-loaded" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="filter-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="heart" aria-hidden="true"></b-icon>
        </b-button>
        <b-button >
          <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
        </b-button-toolbar>
    </div>
  </div>
      </b-card>
    </b-card-group>
  
  </div>
  <b-cols></b-cols>
</b-container>
</template>

<script>

</script>

<style>

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
 
}
.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

</style>