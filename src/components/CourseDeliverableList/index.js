import React, {useState} from "react";
import {Button, Divider, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {SearchBox} from "../SearchBox";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {connect} from "react-redux";
import {setActiveCourse} from "../../state/actions/professorCourses";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.professorCourses
});

const mapDispatchToProps = {setActiveCourse};

export const CourseDeliverablesList = connect(mapStateToProps, mapDispatchToProps)(CourseDeliverablesListComponent);

export function CourseDeliverablesListComponent({activeCourse, setActiveCourse}) {
    const {container, searchContainer, titleBarContainer} = useStyles();
    const [searchKeyword, setSearchKeyword] = useState("");
    const onAllCoursesClick = () => {
        setActiveCourse(null);
    }

    return (
        <Grid container className={container} direction="column" alignItems="stretch" justify="flex">
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

            <Grid item className={searchContainer}>
                <SearchBox
                    placeholder="Search deliverables"
                    searchKeyword={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                />
            </Grid>

            <Divider/>

        </Grid>
    )
}