import React, {useState, Fragment} from "react";
import {Divider, Grid, List, ListItem, ListSubheader} from "@material-ui/core";
import {SearchBox} from "../SearchBox";
import {useStyles} from "./styles";
import {setActiveDeliverable, setDeliverables} from "../../state/actions/deliverables";
import {connect} from "react-redux";
import {DeliverableListItem} from "../DeliverableListItem";
import {DeliverableDescriptionCard} from "../DeliverableDescriptionCard";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.deliverables
});

const mapDispatchToProps = {setActiveDeliverable}

export const DeliverableList = connect(mapStateToProps, mapDispatchToProps)(DeliverableListComponent);

const isSearchMatch = (keyword, candidate) =>
    candidate.toLowerCase().includes(keyword.trim().toLowerCase());

function DeliverableListComponent({deliverableSubmissions, setActiveDeliverable}) {
    const {container, searchContainer, ul, listSection} = useStyles();
    const [searchKeyword, setSearchKeyword] = useState("");

    const query = searchKeyword.trim();
    let displayDeliverables = query.length === 0 ? deliverableSubmissions :
        deliverableSubmissions.filter(({deliverable}) => isSearchMatch(query, deliverable.name));

    displayDeliverables = displayDeliverables.sort((a, b) => {
        return b.deliverable.deadline.unix() - a.deliverable.deadline.unix();
    });

    const onSelectDeliverable = submission => () => {
        setActiveDeliverable(submission);
    }

    const submitted = displayDeliverables.filter(submission => Boolean(submission.date_submitted));
    const toSubmit = displayDeliverables.filter(submission => submission.date_submitted === null);

    console.log("Data", submitted, toSubmit);
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
                    <li className={listSection}>
                        <ul className={ul}>
                            <ListSubheader>TO SUBMIT</ListSubheader>
                            {toSubmit.map(submission => (
                                <Fragment key={submission.id}>
                                    <ListItem button onClick={onSelectDeliverable(submission)}>
                                        <DeliverableListItem submission={submission}/>
                                    </ListItem>
                                    <Divider/>
                                </Fragment>
                            ))}
                        </ul>
                    </li>

                    <li className={listSection}>
                        <ul className={ul}>
                            <ListSubheader>SUBMITTED</ListSubheader>
                            {submitted.map(submission => (
                                <Fragment key={submission.id}>
                                    <ListItem button onClick={onSelectDeliverable(submission)}>
                                        <DeliverableListItem submission={submission}/>
                                    </ListItem>
                                    <Divider/>
                                </Fragment>
                            ))}
                        </ul>
                    </li>
                </List>
            </Grid>
        </Grid>
    )
}
