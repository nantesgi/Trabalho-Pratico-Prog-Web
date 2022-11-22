<template>
  <div>
    <Header @search="searchProducts" />
    <div class="container p-5 d-flex">
      <!-- TO DO - Filtragem avançada -->
      <!-- <div
        class="container-filtros col-2 container-branco d-none d-md-block p-4 pe-5"
      > -->
      <!-- <div class="container-filtros-categoria">
          <h2>Categoria</h2>
          <hr />
          <div class="form-check">
            <input
              id="refrigerator-category"
              class="form-check-input"
              type="checkbox"
            />
            <label class="form-check-label"> Refrigeradores</label>
          </div>
          <div class="form-check">
            <input
              id="micro-wave-category"
              class="form-check-input"
              type="checkbox"
            />
            <label class="form-check-label"> Micro-ondas</label>
          </div>
          <div class="form-check">
            <input
              id="washing-machine-category"
              class="form-check-input"
              type="checkbox"
            />
            <label class="form-check-label"> Lavadoras</label>
          </div>
          <div class="form-check">
            <input
              id="notebook-category"
              class="form-check-input"
              type="checkbox"
            />
            <label class="form-check-label"> Notebooks</label>
          </div>
        </div>
        <div class="form-check">
          <input id="boook-category" class="form-check-input" type="checkbox" />
          <label class="form-check-label"> Livros</label>
        </div>
        <div class="form-check">
          <input id="game-category" class="form-check-input" type="checkbox" />
          <label class="form-check-label"> Jogos</label>
        </div>

        <div class="container-filtros-marca mt-4">
          <h2>Preço</h2>
          <hr />
          <div class="row">
            <div class="input-group mt-3">
              <label>De:</label>
              <input type="text" class="ps-3" />
            </div>
            <div class="input-group mt-3">
              <label>a:</label>
              <input type="text" class="ps-3" />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="botao-buscar py-1 px-5 m-2">
            Buscar
          </button>
        </div>
      </div> -->
      <div>
        <h2 class="ps-4">
          {{
            this.$route.params.search
              ? "Exibindo resultados para '" + this.$route.params.search + "'"
              : ""
          }}
        </h2>

        <div class="container-listagem d-flex flex-row flex-wrap">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-item mx-3 my-3"
          >
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
              <span class="product-type">{{ product.department.name }} </span>
              <router-link
                :to="{
                  name: 'ProductDetails',
                  params: {
                    id: product.id,
                  },
                }"
              >
                <a
                  class="d-block text-dark text-decoration-none py-2 product-name"
                  >{{ product.name }}</a
                ></router-link
              >
              <span class="product-price fw-bold">{{ product.basePrice }}</span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";

export default {
  components: {
    Header,
  },
  data: () => ({
    productName: "",
    products: [],
    productsBagList: [],
  }),
  mounted() {
    this.searchProducts();
  },
  updated() {
    this.searchProducts();
  },
  methods: {
    searchProducts() {
      axios
        .get(
          `https://ecommerce-progweb-server.herokuapp.com/products/${this.$route.params.search}`
        )
        .then((response) => {
          this.products = response.data;
          console.log(this.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    AddCarrinho(id, name, quantity, unitPrice, photo) {
      this.productsBagList.push({ id, name, quantity, unitPrice, photo });
      localStorage.setItem(
        "productsBagList",
        JSON.stringify(this.productsBagList)
      );
      alert("Produto adicionado à sacola");
    },
  },
};
</script>

<style scoped>
.botao-buscar {
  background-color: #05f739;
  border: none;
  border-radius: 5px;
  color: white;
}

* {
  margin: 0;
  padding: 0;
}

.container {
  min-width: 100%;
}

.container-listagem {
  height: auto;
}

.container-filtros label {
  font-size: 14px;
}

body {
  font-family: "Inter";
  background-color: #f4f4f4;
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
  background-color: #fafafa;
  border-radius: 15px;
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
</style>
