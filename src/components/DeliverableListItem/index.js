import React from 'react';
import {Grid, Icon, Paper, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import AlarmIcon from '@material-ui/icons/Alarm';

export function DeliverableListItem({deliverable}) {
    const { root, deliverableName } = useStyles();
    const {name, course, deadline} = deliverable;
    return (
        <div className={root}>
            <Grid container
                  spacing={0.2}
                  direction="column"
                  alignItems="stretch"
            >
                <Grid item>
                    <Typography
                        className={deliverableName}
                        variant="subtitle1"
                        component="p">
                        {name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                    variant="subtitle2"
                    component="p">
                        {course}
                    </Typography>
                </Grid>
                <Grid item container direction="row" spacing={1}>
                    <Grid item>
                        <AlarmIcon/>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="overline"
                            component="p">
                            {deadline}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}