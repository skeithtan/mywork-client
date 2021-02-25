import React from 'react';
import {useStyles} from "./styles";
import {Button, Card, CardContent, Grid, Typography} from "@material-ui/core";
import AlarmIcon from '@material-ui/icons/Alarm';

function DescriptionItem({title, children}) {
    return (
        <>
            <Typography variant="overline">{title}</Typography>
            <Typography variant="body1">
                {children}
            </Typography>
        </>
    )
}

export function DeliverableDescriptionCard({deliverable, actions}) {
    const {deliverableCard, alarmIcon, deadlineText} = useStyles();
    const {
        name,
        course_name,
        deadline,
        description,
        total_score,
        is_group_work,
        file_attachments,
        link_attachments,
    } = deliverable;

    // TODO: Attachments

    return (
        <Card>
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
                                <DescriptionItem title="Deadline">
                                    <div className={deadlineText}>
                                        <AlarmIcon className={alarmIcon} alignmentBaseline="auto"/>
                                        {deadline.format("LL")} ({deadline.fromNow()})
                                    </div>
                                </DescriptionItem>
                            </Grid>
                            <Grid item>
                                <DescriptionItem title="Score">
                                    {total_score} points
                                </DescriptionItem>
                            </Grid>
                            <Grid item>
                                <DescriptionItem title="Type">
                                    {is_group_work ? "Group work" : "Individual work"}
                                </DescriptionItem>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}