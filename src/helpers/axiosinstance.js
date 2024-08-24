import axios from 'axios';
import { COINGECKO_API_URL } from './constants';

const axiosinstance = axios.create( {
    baseurl: COINGECKO_API_URL
})

export default axiosinstance;