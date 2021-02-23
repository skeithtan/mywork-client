import React from 'react';
import {useStyles} from "./styles";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {Gesture} from "@material-ui/icons";

export function DeliverableDescriptionCard({deliverable}) {
    const {} = useStyles();
    const {name, course, deadline, description} = deliverable;

    return (
        <Grid container direction="row">
            <Grid item xs={8} container direction="column">
                <Grid item xs={8}>
                    <Typography variant="subtitle1">
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="caption">
                        {course}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    {description}
                </Grid>
            </Grid>
            <Grid item xs={4} container direction="column">
                <Grid item>
                    <Typography variant="button">
                    Turn over and Submit >
                    </Typography>
                </Grid>
                <Grid item>
                    {deadline}
                </Grid>
            </Grid>
        </Grid>
    );
}