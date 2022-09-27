//stores/users.js
import{toRaw} from 'vue'
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import { http } from './services/config'
let clientes = 'clientes/'
let cliente = 'cliente_01/'
let lojas = 'lojas/'
let format = '?format=json'
let categoria = 'categorias/'
let produtos = 'produtos/'
let pesquisaP  ='&ids='

export const useUserStore = defineStore("user", {
  state: () => ({
    slug: {
      Type:String
    },
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
      }, getCurrentProduto(state) {
        return state.currentProduto
      },
      getSlug(state) {
        return state.slug
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
        if (slug_da_loja!=null) {
           try {
    
          const data = await http.get(lojas+slug_da_loja +'/'+format)
          this.currentLoja = data.data
          this.slug = slug_da_loja
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
        } else {
           try {
    
             
    
          const data = await http.get(lojas+this.slug +'/'+format)
          this.currentLoja =toRaw( data.data)
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
        }
       
      }, async fetchCategorias(slug_da_loja) {
           if (slug_da_loja!=null) {
           try {
          const data = await http.get(categoria + slug_da_loja + '/' + format)
            this.categorias = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
        } else {
           try {
          const data = await http.get(categoria + this.slug +'/'+format)
         this.categorias  =toRaw( data.data)
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
        }
      }, async fetchCurrentProduto(id) {
        try {
          const data = await http.get(produtos + format + pesquisaP + id)
          this.currentProduto = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
        }
    },
      updadeCartProducts(produto) {
        this.cartProducts.push(produto)
      },
      deleteCartProducts() {
        this.cartProducts.pop()
      }
    },
})