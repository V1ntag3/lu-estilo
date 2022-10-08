<template>

  <router-view></router-view>





</template>

<style>
@font-face {
  font-family: Poppins;
  src: url(../src/assets/Poppins-Regular.ttf);
}

* {
  margin: 0px;
  padding: 0px;
  font-family: "Poppins";
  font-style: normal;
  background: transparent;
}

body {
  background: linear-gradient(226.95deg, #606C88 0%, #3F4C6B 100%);
  text-align: center;

}

input {
  font-family: "Poppins";
  font-style: normal;
  background: #FFFFFF;
}

#app {
  height: 1vh;
}

.container-titulo-cadas {
  text-align: left;
  margin-left: 20px;
  margin-top: 60px;
}

.formulario-cadas {
  margin: 20px;
}

.formulario-cadas {
  text-align: left;
  margin-bottom: 100px;
}

.formulario-cadas form input {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.0075em;
  color: #6e7191;
  width: 96%;
  height: 48px;
  margin: 0px auto;
  margin-top: 5px;
  margin-bottom: 10px;
  display: block;
  border-radius: 4px;
  padding-left: 20px;
  border: none;
}

.formulario-cadas form input[type="submit"] {
  margin-top: 40px;
  background: #e74845;
  color: #ffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.0075em;
  color: #ffffff;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 1;
}

.formulario-cadas label {
  margin: 0px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.0075em;
  color: #ffffff;
}

.titulo-cadas {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 5px;
}

.subtitulo-cadas {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0075em;
  color: #ffffff;
  margin-bottom: 10px;
}

.titulo-form-cadas {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: -10px;
}

.separador {
  background: #343435;
  height: 1px;
  margin: 20px auto;
  width: 96%;

}

.letra-700-24-32-001 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
}

.letra-700-32-36-001 {
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0.01em;
}

.letra-600-14-24-00075 {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.0075em;
}

.letra-400-14-24-00075 {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.0075em;
}

.letra-400-16-28-00075 {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.0075em;
}

.letra-600-16-28-00075 {
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.0075em;
}

.letra-600-20-32-00075 {
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.0075em;
}

.letra-400-12-18-00075 {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.0075em;
}

.pop-up-true {
  width: 100%;
  top: 20px;
  position: absolute;
  left: calc(50% - 164px);
}

input {
  outline: 0;
}

@media (min-width: 600px) {
  form input {
    margin-left: 0px;
  }
}
</style>
