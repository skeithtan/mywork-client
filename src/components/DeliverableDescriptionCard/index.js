import React from 'react';
import {useStyles} from "./styles";
import {Box, Button, Card, CardContent, Grid, Typography} from "@material-ui/core";
import {Gesture} from "@material-ui/icons";
import AlarmIcon from '@material-ui/icons/Alarm';

export function DeliverableDescriptionCard({deliverable}) {
    const { deliverableCard, alarm, deadlineText} = useStyles();
    const {name, course, deadline, description, score, attachments} = deliverable;

    return (
        <Card varient="outlined" className={deliverableCard}>
            <CardContent>
            <Grid container direction="column" spacing={2}>
                <Grid item container direction="row" justify="space-between" >
                    <Grid  xs={8}>
                            <Typography variant="subtitle1">
                                {name}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {course}
                            </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary"> Turn over and Submit
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={10}>
                    <Grid xs={7} item>
                        <Typography variant="caption">
                            {description}
                        </Typography>
                    </Grid>
                    <Grid xs={5} item container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="body2">Deadline</Typography>
                            <Typography variant="caption" className={deadlineText}>
                                <AlarmIcon className={alarm} alignmentBaseline="auto"/>
                                {deadline}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">Score</Typography>
                            <Typography variant="caption"> {score}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">Attachments</Typography>
                            <Typography variant="caption">{attachments}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
    );
}