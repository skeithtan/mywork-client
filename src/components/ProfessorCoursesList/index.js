import React, {useState, Fragment} from "react";
import {setActiveCourse} from "../../state/actions/professorCourses";
import {connect} from "react-redux";
import {Divider, Fab, Grid, List, ListItem, ListItemText} from "@material-ui/core";
import {SearchBox} from "../SearchBox";
import {isSearchMatch} from "../../utils";
import {useStyles} from "./styles";
import AddIcon from '@material-ui/icons/Add';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.professorCourses
});

const mapDispatchToProps = {setActiveCourse};

export const ProfessorCoursesList = connect(mapStateToProps, mapDispatchToProps)(ProfessorCoursesListComponent);

function CourseItem({course, onClick, selected}) {
    return (
        <Fragment>
            <ListItem button onClick={onClick} selected={selected}>
                <ListItemText
                    primary={course.name}
                    secondary={course.semester_name}
                />
            </ListItem>
            <Divider/>
        </Fragment>
    )
}

export function ProfessorCoursesListComponent({courses, setActiveCourse, activeCourse}) {
    const {container, searchContainer, fab} = useStyles();

    const [searchKeyword, setSearchKeyword] = useState("");
    const query = searchKeyword.trim();

    const displayCourses = query.length === 0 ? courses :
        courses.filter(course => isSearchMatch(query, course.name));

    const isActive = course => course === activeCourse;

    const onCourseClick = course => () => {
        setActiveCourse(course);
    };

    return (
        <Grid container className={container} direction="column" alignItems="stretch" justify="flex-start">
            <Grid item className={searchContainer}>
                <SearchBox
                    placeholder="Search courses"
                    searchKeyword={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                />
            </Grid>
            <Divider/>
            <Grid item xs>
                <List>
                    {displayCourses.length > 0 && displayCourses.map(course => (
                        <CourseItem
                            key={course.id}
                            course={course}
                            onClick={onCourseClick(course)}
                            selected={isActive(course)}
                        />
                    ))}
                </List>
            </Grid>

            <Fab color="primary" className={fab}>
                <AddIcon />
            </Fab>
        </Grid>
    )
}