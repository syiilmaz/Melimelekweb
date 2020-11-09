<template>
<b-container>
    <b-col></b-col>
    <b-col cols="12">
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
        <b-form-input id="input-horizontal"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Parola"
        label-for="input-horizontal"
      >
        <b-input-group>
          <b-form-input type="password" min="0.00"></b-form-input>

    <b-input-group-append>
       <b-button variant="secondary">Göster</b-button>
    </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <div>
        <b-link style=" font-family: sans-serif; color :#999999" href="#foo">Parolanızı mı unuttunuz? </b-link>
      </div>
      <b-button variant="danger">OTURUM AÇ</b-button>
       
      <hr style="width:100%;text-align:left;margin-left:0" />
      <div>
        <b-link href="#foo" style=" font-family: sans-serif; color :#999999">Hesabınız yok mu?Bir tane oluşturun </b-link>
      </div>
      </b-card>
    </div>
  </div>
    </b-col>
    <b-col></b-col>
</b-container>
       
</template>
<script>
export default {};
</script>
