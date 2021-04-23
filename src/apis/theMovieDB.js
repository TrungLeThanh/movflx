import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    // params:{
    //     api_key: API_KEY,
    //      query: 'superman',
    //     page: 3
    // }
})