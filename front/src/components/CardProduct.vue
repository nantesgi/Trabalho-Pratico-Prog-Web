<template>
  <div class="product-item carousel__item mx-1">
    <div class="product-img m-2">
      <img
        src="@/assets/images/products/product-1.jpg"
        alt=""
        class="img-fluid d-block mx-auto"
      />
      <div class="row btns w-100 mx-auto text-center">
        <button type="button" class="py-2">
          <far :icon="['fas', 'basket-shopping']" style="color: white" />
          <p class="d-inline ms-2">Adicionar à sacola</p>
        </button>
      </div>
    </div>

    <div class="product-info py-3 px-2 text-start ps-3">
      <span class="product-type">Eletrônicos</span>
      <router-link to="/visualizar-produto"
        ><a class="d-block text-dark text-decoration-none py-2 product-name"
          >Apple - Apple Watch Series 3 White Sports Band</a
        ></router-link
      >
      <span class="product-price fw-bold">R$ 100,50</span>
      <span class="d-block product-installments">2x de 29,95 sem juros</span>
    </div>
  </div>
</template>

<style scoped>
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
