export const SET_ACTIVE_DELIVERABLE_SUBMISSION = "SET_ACTIVE_DELIVERABLE";
export const SET_DELIVERABLE_SUBMISSIONS = "SET_DELIVERABLES";
export const SET_SEARCH_KEYWORD = "SET_DELIVERABLES";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const setActiveDeliverable = newActiveDeliverable => ({
    type: SET_ACTIVE_DELIVERABLE_SUBMISSION,
    payload: {newActiveDeliverable}
});

export const setDeliverables = newDeliverableSubmissions => ({
    type: SET_DELIVERABLE_SUBMISSIONS,
    payload: {newDeliverableSubmissions}
});

export const setSearchKeyword = newSearchKeyword => ({
    type: SET_SEARCH_KEYWORD,
    payload: {newSearchKeyword}
});

export const setIsLoading = () => ({
    type: SET_IS_LOADING
});

export const setErrorMessage = errorMessage => ({
    type: SET_ERROR_MESSAGE,
    payload: {errorMessage}
});
