import React, {Fragment, useState} from "react";
import {Divider, Fab, Grid, List, ListItem, ListSubheader} from "@material-ui/core";
import {SearchBox} from "../SearchBox";
import {useStyles} from "./styles";
import {setActiveCourseDeliverable} from "../../state/actions/courseDeliverables";
import {connect} from "react-redux";
import {isSearchMatch} from "../../utils";
import moment from "moment";
import {DeliverableListItem} from "../DeliverableListItem";
import AddIcon from "@material-ui/icons/Add";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.activeCourseDeliverables
});

const mapDispatchToProps = {setActiveCourseDeliverable};

export const CourseDeliverablesList = connect(mapStateToProps, mapDispatchToProps)(CourseDeliverablesListComponent);

function DeliverableItem({deliverable, onClick, selected}) {
    return (
        <Fragment>
            <ListItem button onClick={onClick} selected={selected}>
                <DeliverableListItem deliverable={deliverable}/>
            </ListItem>
            <Divider/>
        </Fragment>
    )
}

export function CourseDeliverablesListComponent({
                                                    courseDeliverables,
                                                    setActiveCourseDeliverable,
                                                    activeCourseDeliverable
                                                }) {
    const {container, searchContainer, listSection, ul, fab} = useStyles();
    const [searchKeyword, setSearchKeyword] = useState("");

    const query = searchKeyword.trim();
    let displayDeliverables = query.length === 0 ? courseDeliverables :
        courseDeliverables.filter(deliverable => isSearchMatch(query, deliverable.name));

    displayDeliverables = displayDeliverables.sort((a, b) => (
        a.deadline.unix() - b.deadline.unix()
    ));

    const closedSubmissions = displayDeliverables.filter(deliverable => deliverable.deadline.isBefore(moment()));
    const openSubmissions = displayDeliverables.filter(deliverable => deliverable.deadline.isSameOrAfter(moment()));

    const onDeliverableClick = deliverable => () => {
        setActiveCourseDeliverable(deliverable);
    };

    return (
        <Grid container className={container} direction="column">
            <Grid item className={searchContainer}>
                <SearchBox
                    placeholder="Search deliverables"
                    searchKeyword={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                />
            </Grid>
            <Divider/>

            <List subheader={<li/>}>
                {openSubmissions.length > 0 && (
                    <li className={listSection}>
                        <ul className={ul}>
                            <ListSubheader>OPEN SUBMISSIONS</ListSubheader>
                            {openSubmissions.map(deliverable => (
                                <DeliverableItem
                                    key={deliverable.id}
                                    deliverable={deliverable}
                                    onClick={onDeliverableClick(deliverable)}
                                    selected={activeCourseDeliverable === deliverable}
                                />
                            ))}
                        </ul>
                    </li>
                )}

                {closedSubmissions.length > 0 && (
                    <li className={listSection}>
                        <ul className={ul}>
                            <ListSubheader>CLOSED SUBMISSIONS</ListSubheader>
                            {closedSubmissions.map(deliverable => (
                                <DeliverableItem
                                    key={deliverable.id}
                                    deliverable={deliverable}
                                    onClick={onDeliverableClick(deliverable)}
                                    selected={activeCourseDeliverable === deliverable}
                                />
                            ))}
                        </ul>
                    </li>
                )}
            </List>

            {courseDeliverables && (
                <Fab color="primary" className={fab}>
                    <AddIcon/>
                </Fab>
            )}
        </Grid>
    )
}