import axios from 'axios';

const AxiosClient = axios.create({
    baseURL : 'https://rickandmortyapi.com/api'
});

export default AxiosClient;