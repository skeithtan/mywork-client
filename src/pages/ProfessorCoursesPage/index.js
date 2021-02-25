import React, {useEffect} from "react";
import {setCourses, setErrorMessage, setIsLoading} from "../../state/actions/professorCourses";
import {connect} from "react-redux";
import {fetchCourses} from "../../services/courses";
import {Grid} from "@material-ui/core";
import {ProfessorCoursesSidebar} from "../../components/ProfessorCoursesSidebar";
import {useStyles} from "./styles";
import {CourseDeliverableDetail} from "../../components/CourseDeliverableDetail";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.professorCourses
});

const mapDispatchToProps = {setCourses, setErrorMessage, setIsLoading};

export const ProfessorCoursesPage = connect(mapStateToProps, mapDispatchToProps)(ProfessorCoursesPageComponent);

export function ProfessorCoursesPageComponent(props) {
    const {container, sidebarContainer, detailContainer} = useStyles();
    const {courses, setCourses, isLoading, setIsLoading, setErrorMessage} = props;

    const getCourses = () => {
        setIsLoading();
        fetchCourses()
            .then(courses => {
                setCourses(courses);
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    }

    useEffect(() => {
        if (!isLoading && !courses) {
            getCourses()
        }
    }, []);

    return (
        <Grid container className={container} direction="row" alignItems="stretch">
            <Grid item className={sidebarContainer}>
                <ProfessorCoursesSidebar getCourses={getCourses}/>
            </Grid>
            <Grid item xs className={detailContainer}>
                <CourseDeliverableDetail/>
            </Grid>
        </Grid>
    )
}