import axios from 'axios'

const getApi = axios.create({
  baseURL: 'https://bongradio.herokuapp.com',
  timeout: 1000
})

export { getApi }
