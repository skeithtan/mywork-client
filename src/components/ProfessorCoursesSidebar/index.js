import React from "react";
import {CircularProgress, Grid, Paper} from "@material-ui/core";
import {ErrorView} from "../ErrorView";
import {connect} from "react-redux";
import {useStyles} from "./styles";
import {ProfessorCoursesList} from "../ProfessorCoursesList";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.professorCourses
});

export const ProfessorCoursesSidebar = connect(mapStateToProps, null)(ProfessorCoursesSidebarComponent);

function ProfessorCoursesSidebarComponent({isLoading, errorMessage, courses, getCourses}) {
    const {container} = useStyles();

    return (
        <Paper square className={container}>
            <Grid container className={container} alignItems="center" justify="center">
                {isLoading && (
                    <Grid item>
                        <CircularProgress size={100}/>
                    </Grid>
                )}

                {errorMessage && (
                    <Grid item>
                        <ErrorView
                            errorMessage={errorMessage}
                            onRetryClick={getCourses}
                        />
                    </Grid>
                )}

                {courses && (
                    <ProfessorCoursesList/>
                )}

            </Grid>
        </Paper>
    )
}