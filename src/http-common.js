import axios from 'axios';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
//Define a URL base da origem para consumo do servico
export default axios.create({
  //baseURL: 'http://localhost:3000/',
  baseURL: 'https://module4-grades-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
