import axios from 'axios'


const LIMIT = 4;
const PAGE_NUMBER = 1;

const BASE_URL = (query, pageNumber = PAGE_NUMBER, limit = LIMIT) => {
    return `https://api.github.com/search/users?q=${query}&page=${pageNumber}&per_page=${limit}`
}

const fetchData = async (url) => {
    return axios.get(url);
};

export {
    BASE_URL,
    fetchData,
    LIMIT,
} 