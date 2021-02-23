import {DeliverablePage} from "./DeliverablePage";
import {SignInPage} from "./SignInPage";
import {SignUpPage} from "./SignUpPage";
import {StudentCoursesPage} from "./StudentCoursesPage";

const DELIVERABLES = {
    name: "Deliverables",
    component: DeliverablePage
};

const SIGN_UP = {
    name: "Sign up",
    component: SignUpPage
};

const SIGN_IN = {
    name: "Sign in",
    component: SignInPage
};

const STUDENT_COURSES = {
    name: "Courses",
    component: StudentCoursesPage
};

export const STUDENT_PAGES = [DELIVERABLES, STUDENT_COURSES];

// TODO: Actual professor pages
export const PROFESSOR_PAGES = [STUDENT_COURSES];

export const getPagesForProfile = profile => profile.user_type === "ST" ? STUDENT_PAGES: PROFESSOR_PAGES;

export const PAGES = {
    DELIVERABLES,
    SIGN_UP,
    SIGN_IN,
    STUDENT_COURSES
};
