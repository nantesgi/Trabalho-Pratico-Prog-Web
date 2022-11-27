<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Inter");

* {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}

html body {
  background-color: #f4f4f4;
}

h1 {
  font-size: 25px !important;
}

h2 {
  font-size: 20px !important;
}

h3 {
  font-size: 17px !important;
}

p {
  font-size: 15px !important;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #d7b1d7;
  background-color: #d7b1d7;
}

.container-branco {
  border-radius: 10px;
  background-color: white;
}

.container-product-image {
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 600px;
  border-radius: 10px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.container-product-infos {
  background-color: white;
  height: auto;
  border-radius: 10px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

input[type="text"],
input[type="number"],
select,
textarea {
  background-color: #f4f4f4;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 40px;
}

textarea {
  height: 100px;
}

input[type="text"],
input[type="number"],
textarea:focus {
  outline: none;
}

.botao-salvar {
  background-color: #05f739;
  border: none;
  border-radius: 5px;
  color: white;
}

.botao-salvar:hover {
  background-color: #05d633;
}

.image-preview {
  min-width: 100%;
  min-height: 500px;
  max-width: 100%;
  border: 2px solid #dddddd;
  border-radius: 10px;
  border-style: dashed;
  margin-top: 15px;
  padding: 3px;

  /* Default text */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cccccc;
}

.image-preview__image {
  display: none;
  max-width: 100%;
  width: 500px;
  height: 500px;
}

input[type="file"] {
  margin: 15px;
  max-width: 60%;
}
</style>
