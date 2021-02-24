import React from "react";
import {DeliverableDescriptionCard} from "../DeliverableDescriptionCard";
import {DeleverableAttachmentCard} from "../DeliverableAttachmentCard"
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.deliverables
});

export const DeliverableDetail = connect(mapStateToProps, null)(DeliverableDetailComponent);

export function DeliverableDetailComponent({activeDeliverableSubmission}) {
    const {cardsContainer, container} = useStyles();
    return (
        <div className={container}>
            {activeDeliverableSubmission && (
                <Grid container direction="column" className={cardsContainer} justify="flex-start" wrap="nowrap">
                    <Grid item>
                        <DeliverableDescriptionCard submission={activeDeliverableSubmission}/>
                    </Grid>
                    <Grid item>
                        <DeleverableAttachmentCard/>
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
