import {makeAxios, dataFromResponse} from "./axios";

export function signIn(email, password) {
    return makeAxios()
        .post("/auth/sign-in/", {email, password})
        .then(dataFromResponse);
}

export function fetchProfile() {
    return makeAxios()
        .get("/profile/")
        .then(dataFromResponse);
}

export function createProfile({email, password, name, user_type, program}) {
    return makeAxios()
        .post("/auth/sign-up/", {
            email,
            password,
            name,
            user_type,
            program
        })
        .then(dataFromResponse);
}
