<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <HeaderComponent class="w-100" />
    <div class="container flex-column d-flex align-items-start mt-4">

      <h2 class="ms-3">Os mais vendidos da semana</h2>

      <Carousel class="w-100 mt-2" :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
        <Slide v-for="slide in 10" :key="slide">
          <div class="product-item carousel__item mx-1">
            <div class="product-img m-2">
              <img src="@/assets/images/products/product-1.jpg" alt="" class="img-fluid d-block mx-auto">
              <span class="heart-icon">
                <far :icon="['far', 'heart']"/>
              </span>
              <div class="row btns w-100 mx-auto text-center">
                <button type="button" class="py-2">
                  <far :icon="['fas', 'basket-shopping']" style="color: white;"/>
                  <p class="d-inline ms-2">Adicionar ao carrinho</p>
                </button>
              </div>
            </div>

            <div class="product-info py-3 px-2 text-start ps-3">
              <span class="product-type">Eletrônicos</span>
              <a href="#" class="d-block text-dark text-decoration-none py-2 product-name">Apple - Apple Watch Series 3
                White Sports Band</a>
              <span class="product-price fw-bold">R$ 100,50</span>
              <span class="d-block product-installments">2x de 29,95 sem juros</span>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <div class="container flex-column d-flex align-items-start my-5">

      <h2 class="ms-3">Os melhores livros</h2>

      <Carousel class="w-100 mt-2" :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
        <Slide v-for="slide in 10" :key="slide">
          <div class="product-item mx-1">
            <div class="product-img m-2">
              <img src="@/assets/images/products/product-11.png" alt="" class="img-fluid d-block mx-auto">
              <span class="heart-icon cursor-pointer">
                <far :icon="['far', 'heart']"/>
              </span>
              <div class="row btns w-100 mx-auto text-center">
                <button type="button" class="py-2">
                  <far :icon="['fas', 'basket-shopping']" style="color: white;"/>
                  <p class="d-inline ms-2">Adicionar ao carrinho</p>
                </button>
              </div>
            </div>

            <div class="product-info py-3 px-2 text-start ps-3">
              <span class="product-type">Livros</span>
              <a href="#" class="d-block text-dark text-decoration-none py-2 product-name">O Colecionador</a>
              <span class="product-price fw-bold">R$ 100,50</span>
              <span class="d-block product-installments">2x de 29,95 sem juros</span>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    HeaderComponent,
    Carousel,
    Slide,
    Navigation
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Inter');

body {
  font-family: 'Inter';
  background-color: #F4F4F4;
}

p {
  font-size: 12px;
}

h2 {
  font-size: 25px;
  font-weight: bolder !important;
}

.container {
  min-width: 90%;
}

.product-item {
  background-color: #FAFAFA;
  border-radius: 15px;
}

.product-img {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}

.btns {
  position: absolute;
  left: 0;
  bottom: -100%;
  font-size: 15px;
  font-weight: 300;
  transition: all 0.3s ease-in-out;
}

.btns button {
  border: none;
  background-color: rgb(39, 39, 39);
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.product-img:hover .btns {
  bottom: 0;
}

.heart-icon {
  position: absolute;
  top: 16px;
  right: 15px;
  font-size: 18px;
}

.product-type {
  font-size: 12px;
  opacity: 0.8;
}

.product-name {
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  font-size: 14px;
}

.product-name:hover {
  color: #8546F0 !important;
}

.product-price {
  color: #2d2d2d;
  font-size: 15px;
}

.product-installments {
  font-size: 11px;
}

.product-item {
  width: 220px;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	background-color: white!important;
	box-sizing: content-box;
}

</style>