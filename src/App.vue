
<template>
  <router-view />
</template>

<script>

</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Poppins";
  font-style: normal;
  text-align: center;
  background: linear-gradient(226.95deg, #606C88 0%, #3F4C6B 100%);
}

@font-face {
  font-family: Poppins;
  src: url(../src/assets/Poppins-Regular.ttf);
}

#app {
  font-family: "Poppins";
  font-style: normal;
  height: 1vh;
}

#container-titulo-cadas {
  text-align: left;
  margin-left: 20px;
  margin-top: 60px;
}


#formulario-cad form {

  margin: 20px;

}

#formulario-cad {
  text-align: left;
  margin-bottom: 100px;
}

#formulario-cad form input {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.0075em;

  /* text / labels */

  color: #6e7191;
  width: 382px;
  height: 48px;
  margin: 0px auto;
  margin-top: 5px;
  margin-bottom: 10px;
  display: block;
  border-radius: 4px;
  padding-left: 20px;
  border: none;
}

#formulario-cad form input[type="submit"] {

  margin-top: 40px;
  background: #e74845;
  color: #ffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.0075em;
  color: #ffffff;
  width: 405px;
  flex: none;
  order: 0;
  flex-grow: 1;
}

#formulario-cad label {
  margin: 0px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.0075em;
  color: #ffffff;
}

#titulo-cadas {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 5px;
}

#subtitulo-cadas {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0075em;
  color: #ffffff;
  margin-bottom: 10px;
}

#titulo-form-cadas {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: -10px;
}

@media (min-width: 600px) {
  form input {
    margin-left: 0px;
  }
}
</style>
