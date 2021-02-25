import React from "react";
import {connect} from "react-redux";
import {Button, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {DeliverableDescriptionCard} from "../DeliverableDescriptionCard";
import {SubmissionsList} from "../SubmissionsList";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.professorCourses,
    ...state.activeCourseDeliverables
});

export const CourseDeliverableDetail = connect(mapStateToProps, null)(CourseDeliverableDetailComponent);

export function CourseDeliverableDetailComponent(props) {
    const {cardsContainer, container} = useStyles();
    const {activeCourse, activeCourseDeliverable} = props;

    return (
        <div className={container}>

            {activeCourseDeliverable && (
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    className={cardsContainer}
                    justify="flex-start"
                    alignItems="stretch"
                    wrap="nowrap"
                >
                    <Grid item>
                        <DeliverableDescriptionCard
                            user="professor"
                            deliverable={activeCourseDeliverable}
                            actions={(
                                <Button variant="outlined" color="primary">
                                    Modify deliverable details
                                </Button>
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <SubmissionsList activeCourseDeliverable={activeCourseDeliverable}/>
                    </Grid>
                </Grid>
            )}


            {!activeCourse && (
                <Typography variant="h5" component="h1" color="textSecondary">
                    Select a course to view its deliverables
                </Typography>
            )}

            {activeCourse && !activeCourseDeliverable && (
                <Typography variant="h5" component="h1" color="textSecondary">
                    Select a deliverable to view its details
                </Typography>
            )}

        </div>
    )
}