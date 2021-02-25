import React, {useState} from "react";
import {DeliverableDescriptionCard} from "../DeliverableDescriptionCard";
import {DeliverableAttachmentCard} from "../DeliverableAttachmentCard"
import {Button, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import SendIcon from "@material-ui/icons/Send";
import {DeliverableTeamCard} from "../DeliverableTeamCard";
import DoneAllIcon from '@material-ui/icons/DoneAll';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.deliverables
});

export const DeliverableDetail = connect(mapStateToProps, null)(DeliverableDetailComponent);

function DescriptionAction({submitState, sendIcon, setSubmitState}) {
    return (
        <>
            {!submitState && (
                <Button variant="outlined" color="primary" onClick={() => setSubmitState(true)}>
                    Turn Over And Submit
                    <SendIcon className={sendIcon}/>
                </Button>
            )}

            {submitState && (
                <Grid container direction="row" alignItems="center" spacing={1}>
                    <Grid item >
                        <Typography variant="overline" color="primary">Submitted</Typography>
                    </Grid>
                    <Grid item>
                        <DoneAllIcon fontSize="small" color="primary"/>
                    </Grid>
                </Grid>

            )}
        </>
    )
}


export function DeliverableDetailComponent({activeDeliverableSubmission}) {
    const {cardsContainer, container, sendIcon} = useStyles();
    const [submitState, setSubmitState] = useState(false);

    // setSubmitState(false);

    // const submitButtonText =!submitState? "Turn Over and Submit": "Submitted"
    // const submitButtonIcon =!submitState? <SendIcon className={sendIcon}/>:""
    return (
        <div className={container}>
            {activeDeliverableSubmission && (
                <Grid container direction="column" spacing={2} className={cardsContainer} justify="flex-start"
                      wrap="nowrap">
                    <Grid item>
                        <DeliverableDescriptionCard
                            user="student"
                            deliverable={activeDeliverableSubmission.deliverable}
                            actions={(
                                <DescriptionAction
                                    sendIcon={sendIcon}
                                    submitState={submitState}
                                    setSubmitState={setSubmitState}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <DeliverableTeamCard/>
                    </Grid>
                    <Grid item>
                        <DeliverableAttachmentCard/>
                    </Grid>
                </Grid>
            )}

            {!activeDeliverableSubmission && (
                <Typography variant="h5" component="h1" color="textSecondary">
                    Select a deliverable to view its details
                </Typography>
            )}
        </div>
    );
}
