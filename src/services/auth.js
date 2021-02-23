import {makeAxios, dataFromResponse} from "./axios";

export function signIn(email, password) {
    return makeAxios().post("/auth/sign-in/", {email, password})
        .then(dataFromResponse);
}

export function fetchProfile() {
    return makeAxios().get("/profile")
        .then(dataFromResponse);
}
