<template>
    <div>
      <h1>Carrito de compras</h1>
      <ul>
        <li v-for="product in cartProducts" :key="product.id">
          {{ product.name }} - {{ product.price }}
          <button @click="removeProduct(product)">Eliminar</button>
        </li>
      </ul>
      <p>Total: {{ totalPrice }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartProducts: [
          { id: 1, name: 'Producto 1', price: 10 },
          { id: 2, name: 'Producto 2', price: 20 },
          { id: 2, name: 'Producto 2', price: 20 },
          { id: 2, name: 'Producto 2', price: 20 },
          { id: 2, name: 'Producto 2', price: 20 },
          { id: 2, name: 'Producto 2', price: 20 },
          { id: 2, name: 'Producto 2', price: 20 },
          { id: 2, name: 'Producto 2', price: 20 },
        ],
        totalPrice: 0,
      };
    },
    watch: {
      cartProducts: {
        handler() {
          this.calculateTotalPrice();
        },
        deep: true,
      },
    },
    methods: {
      removeProduct(product) {
        const index = this.cartProducts.indexOf(product);
        if (index !== -1) {
          this.cartProducts.splice(index, 1);
        }
      },
      calculateTotalPrice() {
        this.totalPrice = this.cartProducts.reduce((total, product) => total + product.price, 0);
      },
    },
  };
  </script>
  