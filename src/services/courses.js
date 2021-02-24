import {dataFromResponse, makeAxios} from "./axios";

export function fetchCourses() {
    return makeAxios()
        .get("/courses/")
        .then(dataFromResponse);
}

export function fetchCourseDeliverables(courseId) {
    return makeAxios()
        .get(`/courses/${courseId}/deliverables/`)
        .then(dataFromResponse);
}