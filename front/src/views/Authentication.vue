<template>
  <div>
    <Header />
    <div
      class="container d-flex align-items-center justify-content-center mt-3 mb-3"
    >
      <div class="container-autenticacao col col-10 col-md-5 m-2">
        <form class="form-cadastro p-4 d-flex flex-column">
          <h1 class="fw-bold">Faça login para concluir a compra</h1>

          <div
            class="w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <div class="input-group mt-3 w-75">
              <label>E-mail</label>
              <input
                type="text"
                class="input-text ps-3"
                required="required"
                v-model="email"
              />
            </div>

            <div class="input-group mt-3 w-75">
              <label>Senha</label>
              <input
                type="password"
                class="input-text ps-3"
                required="required"
                v-model="password"
              />
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <router-link to="/login">
              <button class="botao-salvar pt-1 px-5 mt-4" @click="login">
                Finalizar compra
              </button>
            </router-link>
          </div>
          <router-link to="/cadastrar-cliente" class="text-center">
            <a class="text-center my-2">Cadastrar novo usuário</a>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import $ from "jquery";

export default {
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      password: "",
      products: [],
      token: {},
    };
  },
  methods: {
    login() {
      this.products = JSON.parse(localStorage.getItem("allProductsBag"));
      axios
        .post("https://ecommerce-progweb-server.herokuapp.com/sessions", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", JSON.stringify(response.data));
          this.token = JSON.parse(localStorage.getItem("token"));
          this.checkout();
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.message);
        });
    },
    checkout() {
      axios
        .post(
          "https://ecommerce-progweb-server.herokuapp.com/products/checkout/" +
            this.token.user.id,
          {
            products: this.products,
          }
        )
        .then((response) => {
          console.log(response);
          alert("Compra efetuada com sucesso, " + this.token.user.name + "!");
          localStorage.clear();
        })
        .catch((error) => {
          console.log(error);
          this.$router.push("/sacola-de-compras");
          alert(error.response.data.message);
        });
    },
  },
};
</script>
