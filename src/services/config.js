import axios from 'axios'

//local onde e configurado url de api
export const http =axios.create({
    baseURL:'https://produtos-apirest.herokuapp.com/api/'
})