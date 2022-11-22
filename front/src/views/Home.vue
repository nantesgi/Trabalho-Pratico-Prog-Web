<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <Header class="w-100" />
    <div class="container flex-column d-flex align-items-start mt-4">
      <h2 class="ms-3 fw-bolder">Os mais populares</h2>

      <Carousel
        v-if="products.length !== 0"
        class="w-100 mt-2"
        :settings="settings"
        :breakpoints="breakpoints"
        :wrap-around="true"
      >
        <Slide v-for="product in products" :key="product.id">
          <div class="product-item carousel__item mx-1">
            <div class="product-img m-2">
              <img
                :src="`https://ecommerce-progweb-server.herokuapp.com/images/${product.photo}`"
                class="img-fluid d-block mx-auto"
              />
              <div class="row btns w-100 mx-auto text-center">
                <button
                  type="button"
                  class="py-2"
                  @click="
                    AddCarrinho(
                      product.id,
                      product.name,
                      1,
                      product.unitPrice,
                      product.photo
                    )
                  "
                >
                  <far
                    :icon="['fas', 'basket-shopping']"
                    style="color: white"
                  />
                  <p class="d-inline ms-2">Adicionar à sacola</p>
                </button>
              </div>
            </div>

            <div class="product-info py-3 px-2 text-start ps-3">
              <span class="product-type">{{ product.department.name }}</span>
              <router-link
                :to="{
                  name: 'ProductDetails',
                  params: {
                    id: product.id,
                  },
                }"
                ><a
                  class="d-block text-dark text-decoration-none py-2 product-name"
                  >{{ product.name }}</a
                ></router-link
              >
              <span class="product-price fw-bold">
                {{
                  product.unitPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}</span
              >
              <span class="d-block product-installments"
                >10x de
                {{
                  (product.unitPrice / 10).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}
                sem juros</span
              >
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <div class="container flex-column d-flex align-items-start mt-4">
      <h2 class="ms-3 fw-bolder">Para você</h2>

      <Carousel
        v-if="products.length !== 0"
        class="w-100 mt-2"
        :settings="settings"
        :breakpoints="breakpoints"
        :wrap-around="true"
      >
        <Slide v-for="product in products" :key="product.id">
          <div class="product-item carousel__item mx-1">
            <div class="product-img m-2">
              <img
                :src="`https://ecommerce-progweb-server.herokuapp.com/images/${product.photo}`"
                class="img-fluid d-block mx-auto"
              />
              <div class="row btns w-100 mx-auto text-center">
                <button
                  type="button"
                  class="py-2"
                  @click="
                    AddCarrinho(
                      product.id,
                      product.name,
                      1,
                      product.unitPrice,
                      product.photo
                    )
                  "
                >
                  <far
                    :icon="['fas', 'basket-shopping']"
                    style="color: white"
                  />
                  <p class="d-inline ms-2">Adicionar à sacola</p>
                </button>
              </div>
            </div>

            <div class="product-info py-3 px-2 text-start ps-3">
              <span class="product-type">{{ product.department.name }}</span>
              <router-link
                :to="{
                  name: 'ProductDetails',
                  params: {
                    id: product.id,
                  },
                }"
                ><a
                  class="d-block text-dark text-decoration-none py-2 product-name"
                  >{{ product.name }}</a
                ></router-link
              >
              <span class="product-price fw-bold">
                {{
                  product.unitPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}</span
              >
              <span class="d-block product-installments"
                >10x de
                {{
                  (product.unitPrice / 10).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}
                sem juros</span
              >
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
import Header from "@/components/Header.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";

export default {
  components: {
    Header,
    Carousel,
    Slide,
    Navigation,
  },
  mounted() {
    this.getProducts();
  },
  data: () => ({
    settings: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    breakpoints: {
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
    products: [],
    productsBagHome: [],
  }),
  methods: {
    getProducts() {
      axios
        .get("https://ecommerce-progweb-server.herokuapp.com/products")
        .then((response) => {
          this.products = response.data;
        });
    },
    AddCarrinho(id, name, quantity, unitPrice, photo) {
      this.productsBagHome.push({ id, name, quantity, unitPrice, photo });
      localStorage.setItem(
        "productsBagHome",
        JSON.stringify(this.productsBagHome)
      );
      alert("Produto adicionado à sacola");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Inter");

body {
  font-family: "Inter";
  background-color: #f4f4f4;
}

.container {
  min-width: 90%;
}

.product-item {
  background-color: #fafafa;
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

.product-type {
  font-size: 12px;
  opacity: 0.8;
}

.product-name {
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  font-size: 14px;
  max-width: 50ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-name:hover {
  color: #8546f0 !important;
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
  background-color: white !important;
  box-sizing: content-box;
}
</style>
