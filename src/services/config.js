import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://159.89.176.78:8001/'
})