import React, {useEffect, useState, Fragment} from "react";
import {Button, CircularProgress, Divider, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {SearchBox} from "../SearchBox";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {connect} from "react-redux";
import {setActiveCourse} from "../../state/actions/professorCourses";
import {setCourseDeliverables, setErrorMessage, setIsLoading} from "../../state/actions/courseDeliverables";
import {fetchCourseDeliverables} from "../../services/courses";
import {ErrorView} from "../ErrorView";
import {CourseDeliverablesList} from "../CourseDeliverablesList";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.professorCourses,
    ...state.activeCourseDeliverables
});

const mapDispatchToProps = {setActiveCourse, setCourseDeliverables, setErrorMessage, setIsLoading};

export const CourseDeliverablesSidebar = connect(mapStateToProps, mapDispatchToProps)(CourseDeliverablesSidebarComponent);

export function CourseDeliverablesSidebarComponent(props) {
    const {
        activeCourse,
        setActiveCourse,
        courseDeliverables,
        setErrorMessage,
        setIsLoading,
        isLoading,
        errorMessage,
        setCourseDeliverables
    } = props;
    const {container, titleBarContainer} = useStyles();
    const onAllCoursesClick = () => {
        setActiveCourse(null);
    }

    const getCourseDeliverables = () => {
        setIsLoading();
        fetchCourseDeliverables(activeCourse.id)
            .then(deliverables => {
                setCourseDeliverables(deliverables);
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    useEffect(() => {
        getCourseDeliverables();
    }, []);

    return (
        <Grid container className={container} direction="column" alignItems="stretch" justify="flex-start" wrap="nowrap">
            <Grid item container className={titleBarContainer} spacing={2}>
                <Grid item container justify="space-between">
                    <Grid item>
                        <Button color="primary" size="small" onClick={onAllCoursesClick}>
                            <ArrowBackIosIcon/>
                            All courses
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary" size="small">
                            Manage students
                        </Button>
                    </Grid>
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="h1">
                        {activeCourse.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {activeCourse.semester_name}
                    </Typography>
                </Grid>
            </Grid>

            <Divider/>

            {courseDeliverables && (
                <Grid item xs>
                    <CourseDeliverablesList/>
                </Grid>
            )}

            {isLoading && (
                <Grid container item xs alignItems="center" justify="center">
                    <Grid item>
                        <CircularProgress size={100}/>
                    </Grid>
                </Grid>
            )}

            {errorMessage && (
                <Grid item xs>
                    <ErrorView
                        errorMessage={errorMessage}
                        onRetryClick={getCourseDeliverables}
                    />
                </Grid>
            )}
        </Grid>
    )
}