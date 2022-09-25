import { http } from './config'
let clientes = 'clientes/'
let cliente = 'cliente_01/'
let lojas = 'lojas/'
let format = '?format=json'
let categoria = 'categorias/'
export default {
    listarLojas: () => {
        return http.get(clientes+cliente+format)
    },
    dadosDaLoja: (slug_da_loja) => {
        return http.get(lojas +slug_da_loja + '/' + format ) 
    },
    listarCategorias: (slug_da_loja) => {
    return http.get(categoria + slug_da_loja + '/' +format)
    }
}