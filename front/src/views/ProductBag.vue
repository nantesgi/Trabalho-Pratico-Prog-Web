<template>
  <Header />
  <div class="container mt-4 w-100">
    <div class="pb-4">
      <h2 class="fw-bolder">Sacola de compras</h2>
    </div>
    <div class="row">
      <div class="col-md-8 m-0 p-0 pb-3">
        <div class="row d-none d-md-flex">
          <div class="col-9">
            <h3 class="fw-bolder m-0 ms-2 mb-2">Produto</h3>
          </div>
          <div class="col-3">
            <h3 class="text-center fw-bolder m-0">Preço</h3>
          </div>
        </div>
        <div
          v-for="produto in produtos"
          :key="produto.id"
          class="container-branco p-3 mb-3"
        >
          <div class="row">
            <div class="col-2 p-0 mb-4 mb-lg-0">
              <img
                :src="`https://ecommerce-progweb-server.herokuapp.com/images/${produto.photo}`"
                class="w-100 p-1"
              />
            </div>
            <div id="product-name" class="col-10 col-md-7">
              <p class="fw-bolder">{{ produto.name }}</p>
            </div>
            <div class="col-6 col-md-3 d-flexalign-items-center">
              <h3 class="text-center fw-bolder">
                {{
                  produto.unitPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 ms-auto p-3 container-branco position-relative">
        <div class="">
          <h2 class="fw-bolder m-0">Resumo do pedido</h2>
        </div>

        <div class="pt-4">
          <div v-for="produto in produtos" :key="produto.id" class="row">
            <div class="col-1">
              <p class="fw-bold">{{ produto.quantity }}x</p>
            </div>
            <div class="col-6">
              <p class="ms-1">{{ produto.name }}</p>
            </div>
            <div class="col-5">
              <p>
                {{
                  (produto.unitPrice * produto.quantity).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )
                }}
              </p>
            </div>
          </div>
        </div>

        <hr class="m-0 p-0" />

        <div class="pt-2">
          <div class="row">
            <div class="col-7">
              <p class="fw-bolder">Total</p>
            </div>
            <div class="col-5">
              <p class="fw-bolder" id="total">
                {{
                  valorTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}
              </p>
            </div>
          </div>
        </div>

        <div class="pt-5 mt-3">
          <div class="d-flex justify-content-center">
            <button
              type="submit"
              class="botao-comprar py-1 px-5 m-2"
              @click="buy()"
            >
              Comprar
            </button>
          </div>

          <div class="pt-1">
            <p class="text-center">
              Vendido e entregue por <span class="fw-bolder">Lojinha</span>
            </p>
          </div>
        </div>
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
      name: "",
      unitPrice: 0,
      quantidade: 1,
      produtos: [],
      produtosHome: [],
      produtosDetails: [],
      produtosList: [],
      valorTotal: 0,
    };
  },
  created() {
    this.produtosHome = JSON.parse(localStorage.getItem("productsBagHome"));
    this.produtosDetails = JSON.parse(
      localStorage.getItem("productsBagDetails")
    );
    this.produtosList = JSON.parse(localStorage.getItem("productsBagList"));
    this.produtos = [
      ...this.produtosHome,
      ...this.produtosDetails,
      ...this.produtosList,
    ];

    for (var i = 0; i < this.produtos.length; i++) {
      var valor = this.produtos[i].unitPrice * this.produtos[i].quantity;
      this.valorTotal = this.valorTotal + valor;
    }
  },
  mounted() {
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
    buy() {
      axios
        .post(
          "https://ecommerce-progweb-server.herokuapp.com/products/checkout",
          this.produtos
        )
        .then((response) => {
          console.log("to no then");
          console.log(response);
        })
        .catch((error) => {
          console.log("caiu no catch");
        });
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
  width: 300px;
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
  max-width: 80px;
}

.qnt-container .qnt-btn-menos,
.qnt-container .qnt-btn-mais {
  border: 1px solid #8546f0;
  border-radius: 10px;
  font-size: 15px;
  height: 30px;
  width: 30px;
  transition: 0.3s;
}
</style>
