import Axios from 'axios';

export const LOCALSTORAGE_TOKEN_KEY = "token";
export const BASE_URL = "http://localhost:8000";
export const dataFromResponse = response => response.data;

export const makeAxios = () => Axios.create({
    baseURL: BASE_URL,
    headers: localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) ? {
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)}`
    } : {}
});
