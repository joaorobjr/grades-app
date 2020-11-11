import axios from 'axios';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
  },
});
