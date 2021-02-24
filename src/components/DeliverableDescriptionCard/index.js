import React from 'react';
import {useStyles} from "./styles";
import {Box, Button, Card, CardContent, Grid, Typography} from "@material-ui/core";
import AlarmIcon from '@material-ui/icons/Alarm';
import SendIcon from '@material-ui/icons/Send';

export function DeliverableDescriptionCard({submission}) {
    const {deliverableCard, alarmIcon, sendIcon, deadlineText} = useStyles();
    const {
        name,
        course_name,
        deadline,
        description,
        total_score,
        file_attachments,
        link_attachments
    } = submission.deliverable;

    // TODO: Attachments

    return (
        <Card varient="outlined" className={deliverableCard}>
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
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Turn over and Submit
                                <SendIcon className={sendIcon}/>
                            </Button>
                        </Grid>
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