import { http } from './config'
let clientes = 'clientes/'
let cliente = 'cliente_01/'
let lojas = 'lojas/'
let format = '/?format=json'
let categorias = 'categorias/'
let produtos = 'produtos/'
let pesquisaP  ='?ids='
export default {
    listarLojas: () => {
        return http.get(clientes + cliente + format)
    },
    dadosDaLoja: (slug_da_loja) => {
        return http.get(lojas + slug_da_loja + format)
    },
    listarCategorias: (slug_da_loja) => {
        return http.get(categorias + slug_da_loja  + format)
    },
    getProduto: (slug_da_loja, id) => {
        return http.get(produtos + slug_da_loja + '/' + pesquisaP + id + format)
    }
}