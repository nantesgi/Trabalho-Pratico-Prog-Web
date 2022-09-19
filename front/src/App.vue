<template>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Inter');

* {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

html body {
  background-color: #F4F4F4;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #D7B1D7;
  background-color: #D7B1D7;
}
</style>
