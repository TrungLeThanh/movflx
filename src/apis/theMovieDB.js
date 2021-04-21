import axios from 'axios';

// const API_KEY = 'e4c74354ea589d45cce2ba3047a613c6';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})