import React, {Fragment, useState} from "react";
import {
    Dialog,
    DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Divider,
    Fab, FormControlLabel,
    Grid,
    List,
    ListItem,
    ListSubheader, Switch, TextField
} from "@material-ui/core";
import {SearchBox} from "../SearchBox";
import {useStyles} from "./styles";
import {setActiveCourseDeliverable} from "../../state/actions/courseDeliverables";
import {connect} from "react-redux";
import {isSearchMatch} from "../../utils";
import moment from "moment";
import {DeliverableListItem} from "../DeliverableListItem";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

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

function AddCourseDeliverableDialog({open, setOpen}) {
    const [groupWorkChecker, setGroupWorkChecker] = useState("");
    const handleCheckerchange= () => {
        setGroupWorkChecker( !groupWorkChecker)
    }
    return (
        <div>
            <Dialog
                fullWidth
                onClose={() => setOpen(false)}
                open={open}>
                <DialogTitle>New Deliverable</DialogTitle>
                <DialogContent
                >
                    <DialogContentText>
                        <TextField
                            label="Title"
                            fullWidth
                        ></TextField>
                    </DialogContentText>
                    <DialogContentText>
                        <FormControlLabel label="This is a group work"
                                          control={<Switch
                                              onChange={handleCheckerchange}
                                              checked={groupWorkChecker}
                                              Name/>}/>
                    </DialogContentText>
                    <DialogContentText>
                        <TextField
                            fullWidth
                            label="Description"
                            multiline
                            rows={4}
                            variant="filled"
                        />
                    </DialogContentText>
                    <DialogContentText
                        align="center">
                        <TextField
                            fullWidth
                            id="datetime-local"
                            label="Deadline"
                            type="datetime-local"
                            defaultValue="2021-02-25T10:30"
                            InputLabelProps={{
                                shrink: true,
                            }}/>
                    </DialogContentText>
                    <DialogContentText>
                        <TextField
                            fullWidth
                            label="Total Score"
                        />
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button color="primary">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export function CourseDeliverablesListComponent({
                                                    courseDeliverables,
                                                    setActiveCourseDeliverable,
                                                    activeCourseDeliverable
                                                }) {
    const {container, searchContainer, listSection, ul, fab} = useStyles();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);

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
                <Fab color="primary" className={fab} onClick={() => setDialogOpen(true)}>
                    <AddIcon/>
                </Fab>
            )}
            {dialogOpen &&
            <AddCourseDeliverableDialog open={dialogOpen} setOpen={setDialogOpen}/>
            }
        </Grid>
    )
}