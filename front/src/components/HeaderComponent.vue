<template>
  <div id="header">
    <header id="nav-container-cima" class="d-flex flex-lg-row flex-column align-items-center">
      <div id="logo" class="d-flex justify-content-center mt-2">
        <router-link to="/"><button id="nome-loja" class="ms-lg-0 ms-xl-0 float-left">LOJINHA</button></router-link>
      </div>

      <div class="barra-pesquisa d-flex flex-row align-items-center my-1">
        <div class="w-100">
          <input placeholder="Busque aqui seu produto" class="barra-pesquisa-input"/>
        </div>
        <div>
          <router-link to="/buscar"><far class="ms-2 botao-search" style="color:white" icon="search"/></router-link>
        </div>
      </div>
      
      <div class="novo-produto d-none d-lg-block d-xl-block">
        <router-link to="/cadastrar-produto"><button id="botao-novo-produto" class="">+ Novo produto</button></router-link> 
      </div>
      
      <div class="sacola d-none d-lg-block d-xl-block">
        <img src="../assets/images/icons/basket3.svg" class="sacola-compras" alt="Sacola de compras" />
      </div>
    </header>
    <div id="nav-container-lista">
      <nav id="nav1" class="ms-2 me-4">
        <ul id="lista">
          <li class="itens">Livros</li>
          <li class="itens">Notebooks</li>
          <li class="itens">Jogos</li>
          <li class="itens">Eletrodomésticos</li>
          <li class="itens">Televisões</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
}

#nav-container-cima {
  width: 100%;
  height: 100px;
  background-color: #8546f0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#logo {
  width: 40%;
}

#nome-loja {
  font-weight: 700;
  font-size: 32px;
  color: white;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.barra-pesquisa {
  width: 60%;
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

.novo-produto {
  width: 15%;
  margin-left: 100px;
}

#botao-novo-produto {
  width: 160px;
  height: 42px;
  background-color: #f4f4f4;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color:#9F9E9E;
}

#botao-novo-produto:hover {
  color: #7227f5;
  font-weight: 700;
}

.sacola {
  width: 10%;
  margin-right: 60px;
}

.sacola-compras {
  width: 30px;
  cursor: pointer;
  float: right;
}

.sacola-compras:hover {
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
