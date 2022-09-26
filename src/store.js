//stores/users.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import { http } from './services/config'
let clientes = 'clientes/'
let cliente = 'cliente_01/'
let lojas = 'lojas/'
let format = '?format=json'
let categoria = 'categorias/'


export const useUserStore = defineStore("user", {
    state: () => ({
    lojas: [],
    banner: {},
    currentLoja: [],
    currentProduto: [],
    cartProducts: [],
    categorias:[]
    }),
    getters: {
      getLojas(state){
        return state.lojas
      },
      getBanner(state) {
        return state.banner
      },
      getCurrentLoja(state) {
        return state.currentLoja
      },
      getCategorias(state) {
        return state.categorias
      }
    },
    actions: {
      async fetchLojas() {
        try {
          const data = await http.get(clientes+cliente+format)
          this.lojas = data.data.stores
          this.banner = data.data.banner
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
    }, async fetchDadosDaLoja(slug_da_loja) {
        try {
          
          const data = await http.get(lojas+slug_da_loja +'/'+format)
          this.currentLoja = data.data
  
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
    },async fetchCategorias(slug_da_loja) {
        try {

          const data = await http.get(categoria + slug_da_loja + '/' + format)
          this.categorias = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
    },
      updateCurrentLoja(loja) {
        this.currentLoja = loja
      },
      updadeCurrentProduto(produto) {
        this.currentProdudo = produto
      },
      updadeCartProducts(produto) {
        this.cartProducts.push(produto)
      },
      deleteCartProducts() {
        this.cartProducts.pop()
      }
    },
})