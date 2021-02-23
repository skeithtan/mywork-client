export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const setActivePage = newActivePage => ({
    type: SET_ACTIVE_PAGE,
    payload: {newActivePage}
});

export const signIn = ({token, profile}) => ({
    type: SIGN_IN,
    payload: {token, profile}
});

export const signOut = () => ({
    type: SIGN_OUT
});
