//stores/users.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import { http } from './services/config'
let clientes = 'clientes/'
let cliente = 'cliente_01/'

let format = '?format=json'


export const useUserStore = defineStore("user", {
    state: () => ({
        lojas: [],
        banner:{

        }
    }),
    getters: {
      getLojas(state){
          return state.lojas
        }
    },
    actions: {
      async fetchLojas() {
        try {
          const data = await http.get(clientes+cliente+format)
            this.lojas = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})