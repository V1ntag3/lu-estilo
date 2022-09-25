import {http} from './config'

export default {
    listar: () => {
        return http.get('cliente_01/?format=json')
    } 
}