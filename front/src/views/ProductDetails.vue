<template>
  <Header />
  <div class="container mt-4 w-100">
    <div class="row">
      <div class="col-lg-8 container-branco p-3">
        <h3 class="fw-bolder text-center mt-2">
          {{ product.name }}
        </h3>
        <div class="p-4 d-flex justify-content-center align-items-center">
          <img
            :src="`https://ecommerce-progweb-server.herokuapp.com/images/${product.photo}`"
            style="width: 40%; max-height: 50%"
          />
        </div>
      </div>

      <div class="col-lg-3 ms-auto p-3 container-branco position-relative">
        <h1 class="fw-bolder m-0">
          {{
            product.unitPrice?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </h1>
        <p>
          Ou 8x de
          {{
            (product.unitPrice / 10).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </p>

        <div class="p-lg-4">
          <p class="m-1 text-center fw-bolder">Quantidade:</p>
          <div class="qnt-container">
            <button class="qnt-btn-menos btn-primary" type="button">-</button>
            <input
              type="text"
              name="qnt"
              value="1"
              class="input-qnt fw-bolder"
              v-model="quantity"
            />
            <button class="qnt-btn-mais btn-primary" type="button">+</button>
          </div>
        </div>

        <div class="pt-lg-5 mt-3 w-100">
          <div class="d-flex justify-content-center w-100">
            <router-link to="/sacola-de-compras"
              ><button
                type="submit"
                class="botao-comprar py-1 px-5"
                @click="
                  AddCarrinho(
                    product.id,
                    product.name,
                    product.unitPrice,
                    product.photo
                  )
                "
              >
                Comprar
              </button></router-link
            >
          </div>

          <div class="pt-1">
            <p class="text-center">
              Vendido e entregue por <span class="fw-bolder">Lojinha</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 container-branco p-4 my-3 w-100">
        <h2 class="fw-bolder">Descrição do produto</h2>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import $ from "jquery";
import axios from "axios";

export default {
  components: {
    Header,
  },
  data() {
    return {
      photo: "",
      name: "",
      unitPrice: 0,
      description: "",
      product: [],
      quantity: 1,
      products: [],
      productsBagDetails: [],
    };
  },
  mounted() {
    this.viewProduct();
    var buttonPlus = $(".qnt-btn-mais");
    var buttonMinus = $(".qnt-btn-menos");

    var incrementPlus = buttonPlus.click(function () {
      var $n = $(this).parent(".qnt-container").find(".input-qnt");
      $n.val(Number($n.val()) + 1);
    });

    var incrementMinus = buttonMinus.click(function () {
      var $n = $(this).parent(".qnt-container").find(".input-qnt");
      var amount = Number($n.val());
      if (amount > 0) {
        $n.val(amount - 1);
      }
    });
  },
  methods: {
    viewProduct() {
      axios
        .get(
          "https://ecommerce-progweb-server.herokuapp.com/products?id=" +
            this.$route.params.id
        )
        .then((response) => {
          this.product = response.data[0];
        });
    },
    AddCarrinho(id, name, unitPrice, photo) {
      let quantity = document.getElementsByClassName("input-qnt")[0].value;
      this.productsBagDetails.push({ id, name, quantity, unitPrice, photo });
      localStorage.setItem(
        "productsBagDetails",
        JSON.stringify(this.productsBagDetails)
      );
      alert("Produto adicionado ao carrinho");
    },
  },
};
</script>

<style scoped>
button:focus,
input:focus {
  outline: none;
  box-shadow: none;
}

a,
a:hover {
  text-decoration: none;
}

.botao-comprar {
  background-color: #05f739;
  border: none;
  border-radius: 5px;
  color: white;
  width: 95%;
}

.botao-comprar:hover {
  background-color: #05d633;
}

/*--------------------------*/
.qnt-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.qnt-container .input-qnt {
  text-align: center;
  padding: 6px 10px;
  width: 80px;
}

.qnt-container .qnt-btn-menos,
.qnt-container .qnt-btn-mais {
  border: 1px solid #8546f0;
  border-radius: 10px;
  font-size: 25px;
  height: 38px;
  width: 38px;
  transition: 0.3s;
}
</style>
