export const SET_SUBMISSIONS = "SET_SUBMISSIONS";
export const SET_IS_LOADING = "SET_PD_IS_LOADING";
export const SET_ERROR_MESSAGE = "SET_PD_ERROR_MESSAGE";

export const setSubmissions = newSubmissions => ({
    type: SET_SUBMISSIONS,
    payload: {newSubmissions}
});

export const setIsLoading = () => ({
    type: SET_IS_LOADING
});

export const setErrorMessage = errorMessage => ({
    type: SET_ERROR_MESSAGE,
    payload: {errorMessage}
});