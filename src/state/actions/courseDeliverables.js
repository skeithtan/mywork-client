export const SET_ACTIVE_COURSE_DELIVERABLE = "SET_ACTIVE_COURSE_DELIVERABLE";
export const SET_COURSE_DELIVERABLES = "SET_COURSE_DELIVERABLES";
export const SET_IS_LOADING = "SET_COURSE_DELIVERABLES_IS_LOADING";
export const SET_ERROR_MESSAGE = "SET_COURSE_DELIVERABLES_ERROR_MESSAGE";

export const setActiveCourseDeliverable = newActiveCourseDeliverable => ({
    type: SET_ACTIVE_COURSE_DELIVERABLE,
    payload: {newActiveCourseDeliverable}
});

export const setCourseDeliverables = newCourseDeliverables => ({
    type: SET_COURSE_DELIVERABLES,
    payload: {newCourseDeliverables}
});

export const setIsLoading = () => ({
    type: SET_IS_LOADING
});

export const setErrorMessage = errorMessage => ({
    type: SET_ERROR_MESSAGE,
    payload: {errorMessage}
});