import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://kake-api-maquina-do-bem.herokuapp.com',
})