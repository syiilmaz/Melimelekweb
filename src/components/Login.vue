<template>
<b-container>
    <b-col></b-col>
    <p style="    font-family:Work Sans, sans-serif;
    font-weight: 300;
    line-height: normal;
    font-size: 20px;
    line-height: 1.5;
    color: #999999" >Hesabınızda oturum açın</p>
    <b-col cols="8">
  <div>
    <div>
      <b-card style=" box-shadow: 10px 10px 5px whitesmoke;  font-family: sans-serif; color :#999999" >
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="E-posta"
        label-for="input-horizontal"
      >
        <b-form-input style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" id="input-horizontal"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Parola"
        label-for="input-horizontal"
      >
        <b-input-group>
          <b-form-input style="background: #ebebeb;
    color: #acaaa6;
    border: none;
    padding: 8px 16px;" type="password"  id="myInput" min="0.00"></b-form-input>

    <b-input-group-append>
       <b-button variant="secondary">Göster</b-button>
    </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <div>
        <b-link style=" font-family: sans-serif;position:relative;left:300px; font-size: 15px;
    color: #878787;" href="#foo">Parolanızı mı unuttunuz? </b-link>
      </div>
        <b-button  style="position:relative;left:340px; border-radius: 2px;border-color: #ff3333;background-color: #ff3333;">OTURUM AÇ</b-button>
       
      <hr style="width:100%;text-align:left;margin-left:0" />
      <div>
        <NuxtLink style="  font-family: sans-serif;position:relative;left:220px; font-size: 16px;
    color: #878787;"  to="/acc">Hesabınız yok mu?Bir tane oluşturun </NuxtLink>
      </div>
      </b-card>
    </div>
  </div>
    </b-col>
    <b-col></b-col>
</b-container>
       
</template>
<script>
export default {
 
};
</script>
