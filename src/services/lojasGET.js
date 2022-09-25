import { http } from './config'
let clientes = 'clientes/'
let cliente = 'cliente_01/'
let lojas = 'lojas/'
let format = '?format=json'
export default {
    listarLojas: () => {
        return http.get(clientes+cliente)
    },
    dadosDaLoja: (slug_da_loja) => {
        return http.get(lojas +slug_da_loja + '/' + format ) 
    }
}