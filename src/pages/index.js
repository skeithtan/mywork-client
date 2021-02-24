import {DeliverablePage} from "./DeliverablePage";
import {SignInPage} from "./SignInPage";
import {SignUpPage} from "./SignUpPage";
import {StudentCoursesPage} from "./StudentCoursesPage";
import {ProfessorCoursesPage} from "./ProfessorCoursesPage";

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

const PROFESSOR_COURSES = {
    name: "Courses",
    component: ProfessorCoursesPage
};

export const STUDENT_PAGES = [DELIVERABLES, STUDENT_COURSES];

export const PROFESSOR_PAGES = [PROFESSOR_COURSES];

export const getPagesForProfile = profile => profile.user_type === "ST" ? STUDENT_PAGES : PROFESSOR_PAGES;

export function getDefaultAuthenticatedPage(profile) {
    switch (profile.user_type) {
        case "PR":
            return PROFESSOR_COURSES;
        case "ST":
        default:
            return DELIVERABLES;
    }
}

export const PAGES = {
    DELIVERABLES,
    SIGN_UP,
    SIGN_IN,
    STUDENT_COURSES
};
