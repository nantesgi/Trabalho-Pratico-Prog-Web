<template>
  <div id="header">
    <header
      id="nav-container-cima"
      class="d-flex flex-lg-row flex-column align-items-center py-4"
    >
      <div id="logo" class="col-3 d-flex justify-content-center mt-2">
        <router-link to="/"
          ><button id="nome-loja" class="ms-lg-0 ms-xl-0 float-left">
            LOJINHA
          </button></router-link
        >
      </div>

      <div
        class="col-10 col-lg-5 barra-pesquisa d-flex flex-row align-items-center justify-content-center text-center my-1"
      >
        <div class="w-75">
          <input
            placeholder="Busque aqui seu produto"
            class="barra-pesquisa-input"
            v-model="busca"
          />
        </div>
        <div>
          <router-link :to="'/buscar/' + busca"
            ><far
              class="ms-2 botao-pesquisa"
              style="color: white"
              icon="search"
              @click="$emit('search')"
          /></router-link>
        </div>
      </div>

      <div class="col-10 col-lg-2 novo-produto text-center py-2 py-lg-0">
        <router-link to="/cadastrar-produto"
          ><button id="botao-novo-produto" class="m-0 px-3">
            + Novo produto
          </button></router-link
        >
      </div>

      <div class="col-10 col-lg-2 text-center">
        <router-link to="/sacola-de-compras">
          <button id="botao-novo-produto" class="m-0 px-3">
            <far class="sacola-compras m-0 me-1" icon="cart-shopping" />Sacola
            de compras
          </button></router-link
        >
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data: () => ({
    busca: "",
  }),
};
</script>

<style scoped>
* {
  margin: 0;
}

#nav-container-cima {
  width: 100%;
  background-color: #8546f0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#nome-loja {
  font-weight: 700;
  font-size: 32px;
  color: white;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.barra-pesquisa-input {
  width: 100%;
  height: 42px;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: none;
  padding-left: 15px;
}

.barra-pesquisa-input:focus {
  outline: none;
}

#botao-novo-produto {
  background-color: #f4f4f4;
  border-radius: 10px;
  height: 42px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #9f9e9e;
}

#botao-novo-produto:hover {
  color: #7227f5;
  font-weight: 700;
}

.sacola-compras:hover,
.botao-pesquisa:hover {
  opacity: 80%;
}

#nav-container-lista {
  height: 40px;
  width: 100%;
  background-color: #8546f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#lista {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  list-style: none;
  color: #ffffff;
  cursor: pointer;
}

#lista li:hover {
  opacity: 80%;
}
</style>
