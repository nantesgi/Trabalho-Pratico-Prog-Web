<template>
  <div>
    <HeaderComponent />
    <div class="container m-0 p-0 d-flex flex-row">
      <div class="container-filtros p-4 ps-5">
        <div class="container-filtros-categoria">
          <h2>Categoria</h2>
          <hr />
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Refrigeradores
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Micro-ondas
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Lavadoras
            </label>
          </div>
        </div>

        <div class="container-filtros-marca mt-4">
          <h2>Marca</h2>
          <hr />
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Brastemp
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Consul
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Electrolux
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Samsung
            </label>
          </div>
        </div>

        <div class="container-filtros-marca mt-4">
          <h2>Cor</h2>
          <hr />
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Branca
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Inox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Cinza
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="">
            <label class="form-check-label">
              Outras
            </label>
          </div>
        </div>

        <div class="container-filtros-preco mt-4">
          <h2>Preço</h2>
          <hr />
          <div class="range-slider">
            <input type="range" min="0" max="180" step="1" v-model="sliderMin">
            <input type="number" min="0" max="180" step="1" v-model="sliderMin">
            <input type="range" min="0" max="180" step="1" v-model="sliderMax">
            <input type="number" min="0" max="180" step="1" v-model="sliderMax">
          </div>
        </div>

      </div>

      <div class="container-listagem d-flex flex-row flex-wrap">
        <div v-for="slide in 12" :key="slide" class="product-item mx-3 my-3">
          <div class="product-img">
            <img src="@/assets/images/products/product-1.jpg" alt="" class="img-fluid d-block mx-auto">
            <span class="heart-icon">
              <far :icon="['far', 'heart']" />
            </span>
            <div class="row btns w-100 mx-auto text-center">
              <button type="button" class="py-2">
                <far :icon="['fas', 'basket-shopping']" style="color: white;" />
                <p class="d-inline ms-2">Adicionar ao carrinho</p>
              </button>
            </div>
          </div>

          <div class="product-info py-3 px-2 text-start ps-3">
            <span class="product-type">Electronics & Accessories</span>
            <a href="#" class="d-block text-dark text-decoration-none py-2 product-name">Apple - Apple Watch Series 3
              White Sports Band</a>
            <span class="product-price fw-bold">R$ 100,50</span>
            <span class="d-block product-installments">2x de 29,95 sem juros</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent,
  }, 
  data: () => ({
    minAngle: 10,
    maxAngle: 30
  }),
  computed: {
    sliderMin: {
      get: function () {
        var val = parseInt(this.minAngle);
        return val;
      },
      set: function (val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
      }
    },
    sliderMax: {
      get: function () {
        var val = parseInt(this.maxAngle);
        return val;
      },
      set: function (val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  min-width: 100vw;
}

.container-listagem {
  width: 100%;
  height: auto;
}

.container-filtros {
  width: 30%;
  height: auto;
}

.container-filtros label {
  font-size: 14px;
}

body {
  font-family: 'Inter';
  background-color: #F4F4F4;
}

p {
  font-size: 12px;
}

h2 {
  font-size: 18px;
  font-weight: bolder !important;
}

hr {
  margin-top: 5px;
  margin-bottom: 10px;
  width: 80%;
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

.btns button:hover {
  color: #8546F0;
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

.range-slider {
  width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
  height: 6em;
}

.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=number] {
  text-align: center;
  font-size: 13px;
  border: none;
  background-color: transparent;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #CCCCCC;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  border: 1px solid #8546F0;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #fafcff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
</style>