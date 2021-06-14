import axios from 'axios'

const buildClient = ({ req }) => {
  return axios.create({
    baseURL: 'http://anuncios-app-backend-chart-backend-service',
    headers: req.headers,
    withCredentials: true
  })
}

export default buildClient
