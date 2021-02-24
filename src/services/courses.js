import {dataFromResponse, makeAxios} from "./axios";

export function fetchCourses() {
    return makeAxios()
        .get("/courses/")
        .then(dataFromResponse);
}