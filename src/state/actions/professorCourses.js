export const SET_ACTIVE_COURSE = "SET_ACTIVE_COURSE";
export const SET_COURSES = "SET_COURSES";
export const SET_IS_LOADING = "SET_PROFESSOR_COURSES_IS_LOADING";
export const SET_ERROR_MESSAGE = "SET_PROFESSOR_COURSES_ERROR_MESSAGE";

export const setActiveCourse = newActiveCourse => ({
    type: SET_ACTIVE_COURSE,
    payload: {newActiveCourse}
});

export const setCourses = newCourses => ({
    type: SET_COURSES,
    payload: {newCourses}
});

export const setIsLoading = () => ({
    type: SET_IS_LOADING
});

export const setErrorMessage = errorMessage => ({
    type: SET_ERROR_MESSAGE,
    payload: {errorMessage}
});
