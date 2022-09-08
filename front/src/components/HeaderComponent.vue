<template>
  <div id="header">
    <header id="container">
      <div id="logo">
        <h1 id="loja">Lojinha</h1>
      </div>
      <input
        placeholder="Busque aqui seu produto"
        type="text"
        name="barra de pesquisa"
        id="barraPesquisa"
      />
      <button id="botao">+ Novo produto</button>
      <img src="../assets/online-shopping-1.png" alt="Itens selecionados" />
    </header>
    <div id="container2">
      <nav id="nav1">
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
  <!-- <div> -->
  <!-- <input type="text" v-model="name" placeholder="Coloque seu nome">
      <p>{{this.name}}</p> -->
  <!-- </div> -->
</template>

// <script>
// export default {
//   data() {
//     return {
//       name: "",
//     }
//   }
// }
//
</script>

<style scoped>
* {
  margin: 0;
}

#container {
  width: 100%;
  height: 120px;
  background-color: #8546f0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
#loja {
  font-weight: 700;
  font-size: 40px;
  color: white;
}

#logo {
}
#barraPesquisa {
  width: 460px;
  height: 42px;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: none;
}

#botao {
  width: 160px;
  height: 42px;
  background-color: #f4f4f4;
  border-radius: 12px;
  border: none;
}

#container2 {
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
  justify-content: space-evenly;
  gap: 85px;
}

.itens {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  list-style: none;
  color: #ffffff;
}
</style>
