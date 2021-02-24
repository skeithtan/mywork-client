import React from 'react';
import {useStyles} from "./styles";
import {Button, Card, CardContent, Grid, Typography} from "@material-ui/core";
import AlarmIcon from '@material-ui/icons/Alarm';

export function DeliverableDescriptionCard({deliverable, actions}) {
    const {deliverableCard, alarmIcon, sendIcon, deadlineText} = useStyles();
    const {
        name,
        course_name,
        deadline,
        description,
        total_score,
        file_attachments,
        link_attachments
    } = deliverable;

    // TODO: Attachments

    return (
        <Card className={deliverableCard}>
            <CardContent>
                <Grid container direction="column" spacing={2}>
                    <Grid item container direction="row" justify="space-between">
                        <Grid xs={8}>
                            <Typography variant="h6" component="h1">
                                {name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {course_name}
                            </Typography>
                        </Grid>
                        {actions && (
                            <Grid item>
                                {actions}
                            </Grid>
                        )}
                    </Grid>
                    <Grid item container direction="row" spacing={10}>
                        <Grid xs={7} item>
                            <Typography variant="body2">
                                {description}
                            </Typography>
                        </Grid>
                        <Grid xs={5} item container direction="column" spacing={2}>
                            <Grid item>
                                <Typography variant="overline">Deadline</Typography>
                                <Typography variant="body1" className={deadlineText}>
                                    <AlarmIcon className={alarmIcon} alignmentBaseline="auto"/>
                                    {deadline.format("LL")} ({deadline.fromNow()})
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="overline">Score</Typography>
                                <Typography variant="body1">{total_score} points</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}