<template>
  <div>
    <Header />
    <div class="container d-flex flex-lg-row flex-column mt-3 mb-3">
      <div class="container-product-infos m-2">
        <form class="form-cadastro p-4 d-flex flex-column">
          <h1 class="fw-bold">Dados pessoais</h1>

          <div class="input-group mt-3">
            <label>Nome completo</label>
            <input
              type="text"
              class="input-text ps-3"
              required="required"
              v-model="name"
            />
          </div>

          <div class="input-group mt-3">
            <label>CPF</label>
            <input
              type="text"
              class="input-text input-cpf ps-3"
              required="required"
              maxlength="14"
              v-model="cpf"
            />
          </div>

          <div class="input-group mt-3">
            <label>E-mail</label>
            <input
              type="email"
              class="input-text ps-3"
              required="required"
              v-model="email"
            />
          </div>

          <div class="input-group mt-3">
            <label>Definir senha</label>
            <input
              id="password-field"
              type="password"
              class="input-text ps-3 position-relative"
              required="required"
              v-model="password"
            />
            <span
              toggle="#password-field"
              class="field-icon toggle-password position-absolute bottom-10 end-0"
              >Mostrar senha</span
            >
          </div>
        </form>
      </div>
      <div class="container-product-infos m-2">
        <form class="form-cadastro p-4 d-flex flex-column">
          <h1 class="fw-bold">Pagamento</h1>

          <div class="input-group mt-3">
            <label>Nome no cartão</label>
            <input
              type="text"
              class="input-text ps-3"
              required="required"
              v-model="payment.name"
            />
          </div>

          <label class="mt-3">Forma de pagamento</label>
          <select id="select-cartoes" class="form-select" required="required">
            <option selected disabled>Selecione</option>
            <option value="Crédito">Cartão de crédito</option>
            <option value="Débito">Cartão de débito</option>
          </select>

          <div class="input-group mt-3">
            <label>CPF no cartão</label>
            <input
              type="text"
              class="input-text input-cpf-pagamento ps-3"
              required="required"
              maxlength="14"
              v-model="payment.cpf"
            />
          </div>

          <div class="input-group mt-3">
            <label>Número do cartão</label>
            <input
              type="text"
              class="input-text input-cartao ps-3"
              required="required"
              maxlength="19"
              v-model="payment.card_number"
            />
          </div>

          <div class="d-flex flex-row">
            <div class="input-group w-50 mt-3 me-4">
              <label>Validade</label>
              <input
                type="month"
                class="input-text ps-3"
                required="required"
                v-model="payment.expiresAt"
              />
            </div>

            <div class="input-group w-50 mt-3">
              <label>CVV</label>
              <input
                type="text"
                class="input-text ps-3"
                required="required"
                maxlength="3"
                v-model="payment.cvv"
              />
            </div>
          </div>

          <div id="form-parcelas" style="display: none">
            <label class="mt-3">Número de parcelas</label>
            <select
              class="form-select"
              id="select-categorias"
              required="required"
            >
              <option selected disabled>Selecione</option>
              <option value="1">1x</option>
              <option value="2">2x</option>
              <option value="3">3x</option>
              <option value="4">4x</option>
              <option value="5">5x</option>
              <option value="6">6x</option>
              <option value="7">7x</option>
              <option value="8">8x</option>
              <option value="9">9x</option>
              <option value="10">10x</option>
            </select>
          </div>

          <div class="d-flex justify-content-center">
            <router-link to="/login"
              ><button
                type="submit"
                class="botao-salvar py-1 px-5 m-4"
                @click="createClient()"
              >
                Continuar compra
              </button></router-link
            >
          </div>
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
      name: "",
      cpf: "",
      email: "",
      password: "",
      payment: {
        name: "",
        cpf: "",
        card_number: "",
        expiresAt: "",
        cvv: "",
      },
    };
  },
  mounted() {
    // CPF
    const input = document.querySelector(".input-cpf");
    input.addEventListener("keypress", () => {
      let inputLength = input.value.length;
      if (inputLength == 3 || inputLength == 7) {
        input.value += ".";
      } else if (inputLength == 11) {
        input.value += "-";
      }
    });

    const inputPagamento = document.querySelector(".input-cpf-pagamento");
    inputPagamento.addEventListener("keypress", () => {
      let inputLength = inputPagamento.value.length;
      if (inputLength == 3 || inputLength == 7) {
        inputPagamento.value += ".";
      } else if (inputLength == 11) {
        inputPagamento.value += "-";
      }
    });

    // CARTÃO
    const inputCartao = document.querySelector(".input-cartao");
    inputCartao.addEventListener("keypress", () => {
      let inputLength = inputCartao.value.length;
      if (inputLength == 4 || inputLength == 9 || inputLength == 14) {
        inputCartao.value += " ";
      }
    });

    let dropdownCartoes = document.querySelector("#select-cartoes");
    var formParcelas = document.getElementById("form-parcelas");

    if (dropdownCartoes) {
      dropdownCartoes.addEventListener("change", function (event) {
        var selected = event.target.value;
        if (selected == "Crédito") {
          formParcelas.style.display = "block";
        } else {
          formParcelas.style.display = "none";
        }
      });
    }

    $(".toggle-password").click(function () {
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
        $(this).html("Esconder senha");
      } else {
        input.attr("type", "password");
        $(this).html("Mostrar senha");
      }
    });
  },
  methods: {
    createClient() {
      axios
        .post("https://ecommerce-progweb-server.herokuapp.com/users", {
          name: this.name,
          cpf: this.cpf.toString().replaceAll(".", "").replaceAll("-", ""),
          email: this.email,
          password: this.password,
          payment: {
            name: this.payment.name,
            cpf: this.payment.cpf
              .toString()
              .replaceAll(".", "")
              .replace("-", ""),
            card_number: this.payment.card_number
              .toString()
              .replaceAll(" ", ""),
            expiresAt: this.payment.expiresAt.toString(),
            cvv: parseInt(this.payment.cvv),
          },
        })
        .then((response) => {
          console.log(response.data);
          alert(
            "Usuário cadastrado com sucesso! Agora, faça login para finalizar a compra."
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
