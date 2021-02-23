import Axios from 'axios';

export const LOCALSTORAGE_TOKEN_KEY = "token";
export const BASE_URL = "http://2778de042437.ngrok.io";
export const dataFromResponse = response => response.data;

export const makeAxios = () => Axios.create({
    baseURL: "http://2778de042437.ngrok.io",
    headers: localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) ? {
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)}`
    } : {}
});
