import axios from 'axios'

const getApi = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000
})

export { getApi }
