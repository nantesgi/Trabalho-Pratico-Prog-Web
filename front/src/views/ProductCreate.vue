<template>
  <div>
    <Header />
    <div class="container d-flex flex-lg-row flex-column mt-3 mb-3">
      <div class="container-product-image m-2 d-flex flex-column p-3">
        <div class="image-preview" id="imagePreview">
          <img src="" alt="Image Preview" class="image-preview__image" />
          <div
            class="image-preview__default-text d-flex flex-column align-items-center"
          >
            <far
              class="pe-3"
              style="width: 30px; height: 30px; opacity: 70%"
              icon="image"
            />
            Adicionar imagem
          </div>
        </div>
        <input
          type="file"
          name="file"
          class="form-control form-control-sm text-center"
          ref="file"
          id="inpFile"
          @change="handleFileUpload()"
        />
      </div>
      <div class="container-product-infos m-2">
        <form class="form-cadastro p-4 d-flex flex-column">
          <label>Categoria</label>
          <select
            class="form-select"
            id="select-categorias"
            required="required"
          >
            <option selected disabled>Selecione</option>
            <option value="Livros" @click="showBooksForm = !showBooksForm">
              Livros
            </option>
            <option
              value="Notebooks"
              @click="showNotebooksForm = !showNotebooksForm"
            >
              Notebooks
            </option>
            <option value="Jogos" @click="showGamesForm = !showGamesForm">
              Jogos
            </option>
            <option
              value="Eletrodomésticos"
              @click="showHomeApplForm = !showHomeApplForm"
            >
              Eletrodomésticos
            </option>
          </select>

          <div class="input-group mt-3">
            <label>Nome do produto</label>
            <input
              type="text"
              class="input-text ps-3"
              required="required"
              v-model="product.name"
            />
          </div>

          <div class="input-group mt-3">
            <label>Descrição</label>
            <textarea
              class="input-text ps-3 pt-2"
              required="required"
              v-model="product.description"
            ></textarea>
          </div>

          <div class="d-flex flex-row">
            <div class="input-group w-50 mt-3 me-4">
              <label>Preço unitário</label>
              <input
                type="text"
                class="ps-3"
                required="required"
                v-model.lazy="priceBR"
                v-money="configMoney"
              />
            </div>

            <div class="input-group w-50 mt-3">
              <label>Quantidade em estoque</label>
              <input
                type="number"
                min="0"
                class="ps-3"
                required="required"
                v-model="product.stock"
              />
            </div>
          </div>

          <!-- div categoria "Livros" -->
          <div id="form-livros" style="display: none">
            <label class="mt-3">Gênero</label>
            <select
              class="form-select"
              id="select-genero"
              required="required"
              v-model="genre"
            >
              <option selected>Selecione</option>
              <option value="Ciência">Ciência</option>
              <option value="Computação">Computação</option>
              <option value="Economia e Investimentos">
                Economia e Investimentos
              </option>
              <option value="HQs">HQs</option>
              <option value="Infantil">Infantil</option>
              <option value="Mangás">Mangás</option>
              <option value="Política">Política</option>
              <option value="Romance">Romance</option>
            </select>

            <label class="mt-3">Idioma</label>
            <select
              class="form-select"
              id="select-idioma"
              required="required"
              v-model="language"
            >
              <option selected>Selecione</option>
              <option value="Espanhol">Espanhol</option>
              <option value="Inglês">Inglês</option>
              <option value="Português">Português</option>
            </select>

            <div class="input-group mt-3">
              <label>Autor</label>
              <input
                type="text"
                class="input-text ps-3"
                required="required"
                v-model="author"
              />
            </div>
          </div>

          <!-- div categoria "Notebooks" -->
          <div id="form-notebooks" style="display: none">
            <div class="input-group mt-3">
              <label>Marca</label>
              <input
                type="text"
                class="input-text ps-3"
                required="required"
                v-model="brand"
              />
            </div>

            <div class="input-group mt-3">
              <label>Processador</label>
              <input
                type="text"
                class="input-text ps-3"
                required="required"
                v-model="processor"
              />
            </div>

            <!-- <label class="mt-3">Memória RAM</label>
            <select class="form-select" id="select-ram" required="required">
              <option selected>Selecione</option>
              <option value="4GB">4GB</option>
              <option value="8GB">8GB</option>
              <option value="16GB">16GB</option>
              <option value="32GB">32GB</option>
            </select> -->

            <label class="mt-3">Sistema operacional</label>
            <select
              class="form-select"
              id="select-opSys"
              required="required"
              v-model="operationalSystem"
            >
              <option selected>Selecione</option>
              <option value="Chrome OS">Chrome OS</option>
              <option value="Linux">Linux</option>
              <option value="Windows">Windows</option>
            </select>

            <label class="mt-3">Sistema de armazenamento</label>
            <select
              class="form-select"
              id="select-armazenamento"
              required="required"
              v-model="storageSystem"
            >
              <option selected>Selecione</option>
              <option value="HD">HD</option>
              <option value="SSD">SSD</option>
            </select>

            <!-- div sistema "HD" -->
            <div id="form-armazenamento-hd" class="mt-3" style="display: none">
              <label>Capacidade de armazenamento HD</label>
              <select
                class="form-select"
                id="select-hd"
                required="required"
                v-model="storageCapacity"
              >
                <option selected>Selecione</option>
                <option value="500GB">500GB</option>
                <option value="1TB">1TB</option>
              </select>
            </div>

            <!-- div sistema "SSD" -->
            <div id="form-armazenamento-ssd" class="mt-3" style="display: none">
              <label>Capacidade de armazenamento SSD</label>
              <select
                class="form-select"
                id="select-ssd"
                required="required"
                v-model="storageCapacity"
              >
                <option selected>Selecione</option>
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option>
                <option value="1TB">1TB</option>
              </select>
            </div>
          </div>

          <!-- div categoria "Jogos" -->
          <div id="form-jogos" style="display: none">
            <div class="input-group mt-3">
              <label>Marca</label>
              <input
                type="text"
                class="input-text ps-3"
                required="required"
                v-model="brand"
              />
            </div>

            <label class="mt-3">Plataforma</label>
            <select
              class="form-select"
              id="select-genero"
              required="required"
              v-model="format"
            >
              <option selected>Selecione</option>
              <option value="Playstation">Playstation</option>
              <option value="Xbox">Xbox</option>
              <option value="Nintendo Switch">Nintendo Switch</option>
              <option value="PC">PC</option>
            </select>
          </div>

          <!-- div departamento "Eletrodomésticos" -->
          <div id="form-eletrodomesticos" style="display: none">
            <label class="mt-3">Categoria de eletrodoméstico</label>
            <select
              class="form-select"
              id="select-eletrodomesticos"
              required="required"
            >
              <option selected>Selecione</option>
              <option value="Geladeiras">Geladeiras</option>
              <option value="Máquinas de lavar">Máquinas de lavar</option>
              <option value="Micro-ondas">Micro-ondas</option>
            </select>

            <div class="input-group mt-3">
              <label>Marca</label>
              <input
                type="text"
                class="input-text ps-3"
                required="required"
                v-model="brand"
              />
            </div>

            <label class="mt-3">Cor do produto</label>
            <select
              class="form-select"
              id="select-cor"
              required="required"
              v-model="color"
            >
              <option selected>Selecione</option>
              <option value="Branca">Branca</option>
              <option value="Inox">Inox</option>
              <option value="Cinza">Cinza</option>
              <option value="Outra">Outra</option>
            </select>

            <div class="d-flex flex-row">
              <div class="input-group w-50 mt-3 me-4">
                <label>Voltagem</label>
                <input
                  type="number"
                  class="input-text ps-3"
                  required="required"
                  v-model="voltage"
                />
              </div>

              <div class="input-group w-50 mt-3">
                <label>Capacidade</label>
                <input
                  type="text"
                  class="input-text ps-3"
                  required="required"
                  v-model="capacity"
                />
              </div>
            </div>

            <!-- div categoria "Geladeiras" -->
            <div id="form-geladeiras" class="mt-3" style="display: none">
              <label>Tipo de abertura</label>
              <select
                class="form-select"
                id="select-abertura"
                required="required"
                v-model="doorType"
              >
                <option selected>Selecione</option>
                <option value="French Door">French Door</option>
                <option value="Duplex">Duplex</option>
                <option value="Duplex Inverse">Duplex Inverse</option>
                <option value="1 porta">1 porta</option>
              </select>

              <label class="mt-3">Tipo de degelo</label>
              <select
                class="form-select"
                id="select-degelo"
                required="required"
                v-model="snowBreakType"
              >
                <option selected>Selecione</option>
                <option value="Frost Free">Frost Free</option>
                <option value="Cycle Defrost">Cycle Defrost</option>
                <option value="Seco">Seco</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              type="submit"
              class="botao-salvar py-1 px-5 m-4"
              @click="createProduct()"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import { VMoney } from "v-money";
import $ from "jquery";

export default {
  components: {
    Header,
  },
  data() {
    return {
      priceBR: "",
      configMoney: {
        decimal: ",",
        thousands: ".",
        precision: 2,
      },
      showBooksForm: false,
      showNotebooksForm: false,
      showGamesForm: false,
      showHomeApplForm: false,
      product: {
        photo: "",
        name: "",
        description: "",
        stock: null,
        unitPrice: null,
      },
      author: "",
      genre: "",
      language: "",
      brand: "",
      format: "",
      color: "",
      voltage: 0,
      capacity: "",
      doorType: "",
      snowBreakType: "",
      operationalSystem: "",
      processor: "",
      storageCapacity: "",
      storageSystem: "",
    };
  },
  directives: { money: VMoney },
  mounted() {
    // INPUT'S CATEGORIES RENDERING
    let dropdownCategorias = document.querySelector("#select-categorias");
    let dropdownEletrodomesticos = document.querySelector(
      "#select-eletrodomesticos"
    );
    let dropdownArmazenamentos = document.querySelector(
      "#select-armazenamento"
    );
    var formLivros = document.getElementById("form-livros");
    var formJogos = document.getElementById("form-jogos");
    var formEletrodomesticos = document.getElementById("form-eletrodomesticos");
    var formGeladeiras = document.getElementById("form-geladeiras");
    var formNotebooks = document.getElementById("form-notebooks");
    var formArmazenamentoHd = document.getElementById("form-armazenamento-hd");
    var formArmazenamentoSsd = document.getElementById(
      "form-armazenamento-ssd"
    );
    if (dropdownCategorias) {
      dropdownCategorias.addEventListener("change", function (event) {
        var selected = event.target.value;
        if (selected == "Livros") {
          formLivros.style.display = "block";
        } else {
          formLivros.style.display = "none";
        }
        if (selected == "Jogos") {
          formJogos.style.display = "block";
        } else {
          formJogos.style.display = "none";
        }
        if (selected == "Eletrodomésticos") {
          formEletrodomesticos.style.display = "block";
          if (dropdownEletrodomesticos) {
            dropdownEletrodomesticos.addEventListener(
              "change",
              function (event) {
                var selected = event.target.value;
                if (selected == "Geladeiras") {
                  formGeladeiras.style.display = "block";
                } else {
                  formGeladeiras.style.display = "none";
                }
              }
            );
          }
        } else {
          formEletrodomesticos.style.display = "none";
        }
        if (selected == "Notebooks") {
          formNotebooks.style.display = "block";
          if (dropdownArmazenamentos) {
            dropdownArmazenamentos.addEventListener("change", function (event) {
              var selected = event.target.value;
              if (selected == "HD") {
                formArmazenamentoHd.style.display = "block";
              } else {
                formArmazenamentoHd.style.display = "none";
              }
              if (selected == "SSD") {
                formArmazenamentoSsd.style.display = "block";
              } else {
                formArmazenamentoSsd.style.display = "none";
              }
            });
          }
        } else {
          formNotebooks.style.display = "none";
        }
      });
    }

    // IMAGE UPLOAD
    const inpFile = document.getElementById("inpFile");
    const previewContainer = document.getElementById("imagePreview");
    const previewImage = previewContainer.querySelector(
      ".image-preview__image"
    );
    const previewDefaultText = previewContainer.querySelector(
      ".image-preview__default-text"
    );
    inpFile.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        previewDefaultText.style.display = "none";
        previewDefaultText.classList.remove("d-flex");
        previewImage.style.display = "block";
        reader.addEventListener("load", function () {
          previewImage.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
      } else {
        previewDefaultText.style.display = null;
        previewImage.display = null;
        previewImage.setAttribute("src", "");
      }
    });
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    async createProduct() {
      let formData = new FormData();
      formData.append("file", this.file);
      console.log(this.product.photo);
      console.log(this.file);
      await axios
        .post(
          "https://ecommerce-progweb-server.herokuapp.com/products/import-photo",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          this.product.photo = response.data.photo;
          console.log(this.product.photo);
        });

      let dropdownCategorias = document.querySelector("#select-categorias");
      let dropdownEletrodomesticos = document.querySelector(
        "#select-eletrodomesticos"
      );

      if (dropdownCategorias.value == "Livros") {
        axios
          .post("https://ecommerce-progweb-server.herokuapp.com/books", {
            product: {
              photo: this.product.photo,
              name: this.product.name,
              department: {
                name: "Livros",
              },
              description: this.product.description,
              stock: this.product.stock,
              unitPrice: parseFloat(
                this.priceBR.toString().replace(".", "").replace(",", ".")
              ),
            },
            author: this.author,
            genre: this.genre,
            language: this.language,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (dropdownCategorias.value == "Jogos") {
        axios
          .post("https://ecommerce-progweb-server.herokuapp.com/games", {
            product: {
              photo: this.product.photo,
              name: this.product.name,
              department: {
                name: "Jogos",
              },
              description: this.product.description,
              stock: this.product.stock,
              unitPrice: parseFloat(
                this.priceBR.toString().replace(".", "").replace(",", ".")
              ),
            },
            brand: this.brand,
            format: this.format,
          })
          .then((response) => {})
          .catch((error) => {
            console.log(error);
            console.log(error.config.data);
          });
      }
      if (dropdownEletrodomesticos.value == "Micro-ondas") {
        axios
          .post("https://ecommerce-progweb-server.herokuapp.com/micro-waves", {
            product: {
              photo: this.product.photo,
              name: this.product.name,
              department: {
                name: "Eletrodomésticos",
              },
              description: this.product.description,
              stock: this.product.stock,
              unitPrice: parseFloat(
                this.priceBR.toString().replace(".", "").replace(",", ".")
              ),
            },
            color: this.color,
            brand: this.brand,
            voltage: this.voltage,
            capacity: this.capacity,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.config.data);
          });
      }
      if (dropdownEletrodomesticos.value == "Geladeiras") {
        axios
          .post(
            "https://ecommerce-progweb-server.herokuapp.com/refrigerators",
            {
              product: {
                photo: this.product.photo,
                name: this.product.name,
                department: {
                  name: "Eletrodomésticos",
                },
                description: this.product.description,
                stock: this.product.stock,
                unitPrice: parseFloat(
                  this.priceBR.toString().replace(".", "").replace(",", ".")
                ),
              },
              color: this.color,
              doorType: this.doorType,
              brand: this.brand,
              voltage: this.voltage,
              capacity: this.capacity,
              snowBreakType: this.snowBreakType,
            }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.config.data);
          });
      }
      if (dropdownEletrodomesticos.value == "Máquinas de lavar") {
        axios
          .post(
            "https://ecommerce-progweb-server.herokuapp.com/washing-machines",
            {
              product: {
                photo: this.product.photo,
                name: this.product.name,
                department: {
                  name: "Eletrodomésticos",
                },
                description: this.product.description,
                stock: this.product.stock,
                unitPrice: parseFloat(
                  this.priceBR.toString().replace(".", "").replace(",", ".")
                ),
              },
              color: this.color,
              brand: this.brand,
              voltage: this.voltage,
              capacity: this.capacity,
            }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.config.data);
          });
      }
      if (dropdownCategorias.value == "Notebooks") {
        axios
          .post("https://ecommerce-progweb-server.herokuapp.com/laptops", {
            product: {
              photo: this.product.photo,
              name: this.product.name,
              department: {
                name: "Eletrônicos",
              },
              description: this.product.description,
              stock: this.product.stock,
              unitPrice: parseFloat(
                this.priceBR.toString().replace(".", "").replace(",", ".")
              ),
            },
            brand: this.brand,
            processor: this.processor,
            operationalSystem: this.operationalSystem,
            storageSystem: this.storageSystem,
            storageCapacity: this.storageCapacity,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.config.data);
          });
      }
    },
  },
};
</script>
