import React from "react";
import {DeliverableDescriptionCard} from "../DeliverableDescriptionCard";
import {DeliverableAttachmentCard} from "../DeliverableAttachmentCard"
import {Button, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import {DeliverableTeamCard} from "../DeliverableTeamCard";
import SendIcon from "@material-ui/icons/Send";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.deliverables
});

export const DeliverableDetail = connect(mapStateToProps, null)(DeliverableDetailComponent);

export function DeliverableDetailComponent({activeDeliverableSubmission}) {
    const {cardsContainer, container, sendIcon} = useStyles();
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
                                <Button variant="outlined" color="primary">
                                    Turn over and Submit
                                    <SendIcon className={sendIcon}/>
                                </Button>
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
