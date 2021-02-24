import React, {useState, Fragment} from "react";
import {Divider, Grid, List, ListItem, ListSubheader} from "@material-ui/core";
import {SearchBox} from "../SearchBox";
import {useStyles} from "./styles";
import {setActiveDeliverable} from "../../state/actions/deliverables";
import {connect} from "react-redux";
import {DeliverableListItem} from "../DeliverableListItem";
import moment from "moment";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.deliverables
});

const mapDispatchToProps = {setActiveDeliverable};

export const DeliverableList = connect(mapStateToProps, mapDispatchToProps)(DeliverableListComponent);

const isSearchMatch = (keyword, candidate) =>
    candidate.toLowerCase().includes(keyword.trim().toLowerCase());

const submissionIsOverdue = submission => !submission.date_submitted && submission.deliverable.deadline.isBefore(moment());
const submissionIsToSubmit = submission => !submission.date_submitted && !submissionIsOverdue(submission);
const submissionIsSubmitted = submission => Boolean(submission.date_submitted);

function SubmissionItem({submission, onClick, selected}) {
    return (
        <Fragment>
            <ListItem button onClick={onClick}
                      selected={selected}>
                <DeliverableListItem submission={submission}/>
            </ListItem>
            <Divider/>
        </Fragment>
    )
}

function DeliverableListComponent({deliverableSubmissions, setActiveDeliverable, activeDeliverableSubmission}) {
    const {container, searchContainer, ul, listSection} = useStyles();
    const [searchKeyword, setSearchKeyword] = useState("");

    const query = searchKeyword.trim();
    let displayDeliverables = query.length === 0 ? deliverableSubmissions :
        deliverableSubmissions.filter(({deliverable}) => isSearchMatch(query, deliverable.name));

    displayDeliverables = displayDeliverables.sort((a, b) => (
        a.deliverable.deadline.unix() - b.deliverable.deadline.unix()
    ));

    const overdue = displayDeliverables.filter(submissionIsOverdue);
    const toSubmit = displayDeliverables.filter(submissionIsToSubmit);
    const submitted = displayDeliverables.filter(submissionIsSubmitted);
    const isActive = submission => submission === activeDeliverableSubmission;

    const onSubmissionClick = submission => () => {
        setActiveDeliverable(submission);
    };

    return (
        <Grid container className={container} direction="column" alignItems="stretch" justify="flex-start">
            <Grid item className={searchContainer}>
                <SearchBox
                    placeholder="Search deliverables"
                    searchKeyword={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                />
            </Grid>
            <Divider/>
            <Grid item xs>
                <List subheader={<li/>}>
                    {overdue.length > 0 && (
                        <li className={listSection}>
                            <ul className={ul}>
                                <ListSubheader>OVERDUE</ListSubheader>
                                {overdue.map(submission =>
                                    <SubmissionItem
                                        key={submission.id}
                                        submission={submission}
                                        onClick={onSubmissionClick(submission)}
                                        selected={isActive(submission)}
                                    />
                                )}
                            </ul>
                        </li>
                    )}


                    <li className={listSection}>
                        <ul className={ul}>
                            <ListSubheader>TO SUBMIT</ListSubheader>
                            {toSubmit.map(submission => (
                                <SubmissionItem
                                    key={submission.id}
                                    submission={submission}
                                    onClick={onSubmissionClick(submission)}
                                    selected={isActive(submission)}
                                />
                            ))}
                        </ul>
                    </li>

                    <li className={listSection}>
                        <ul className={ul}>
                            <ListSubheader>SUBMITTED</ListSubheader>
                            {submitted.map(submission => (
                                <SubmissionItem
                                    key={submission.id}
                                    submission={submission}
                                    onClick={onSubmissionClick(submission)}
                                    selected={isActive(submission)}
                                />
                            ))}
                        </ul>
                    </li>

                </List>


            </Grid>
        </Grid>
    )
}
