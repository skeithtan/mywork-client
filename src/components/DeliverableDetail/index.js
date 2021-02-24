import React from "react";
import {DeliverableDescriptionCard} from "../DeliverableDescriptionCard";
import {DeleverableAttachmentCard} from "../DeliverableAttachmentCard"
import {Grid} from "@material-ui/core";

export function DeliverableDetail() {
    const deliverable=[]
    // TODO
    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <DeliverableDescriptionCard deliverable={deliverable}/>
                </Grid>
                <Grid item>
                    <DeleverableAttachmentCard/>
                </Grid>
            </Grid>
        </div>
    );
}
