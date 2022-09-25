import { http } from './config'
let cliente = 'cliente_01/'

export default {
    listarLojas: () => {
        return http.get(cliente)
    },
    dadosDaLoja: (slug_da_loja) => {
        return http.get(cliente + slug_da_loja)
    }
}