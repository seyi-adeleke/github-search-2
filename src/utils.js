import axios from 'axios'

const BASE_URL = (query, pageNumber = 1, limit = 4) => {
    return `https://api.github.com/search/users?q=${query}&page=${pageNumber}&per_page=${limit}`
}

const fetchData = async (url) => {
    return axios.get(url);
};

export {
    BASE_URL,
    fetchData,
} 