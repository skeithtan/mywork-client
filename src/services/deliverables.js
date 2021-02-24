import {dataFromResponse, makeAxios} from "./axios";

export function fetchDeliverables() {
    return makeAxios()
        .get("/deliverables/submissions/")
        .then(dataFromResponse);
}
