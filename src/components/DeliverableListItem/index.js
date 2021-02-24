import React from 'react';
import {Grid, ListItemText, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import AlarmIcon from '@material-ui/icons/Alarm';
import moment from "moment";

export function DeliverableListItem(props) {
    const {
        alarmIcon,
        deadlineText,
        deadlineTextOverdue,
        deliverableName,
        container,
        deadlineContainer,
        alarmIconOverdue
    } = useStyles();

    let deliverable, date_submitted, isOverdue;

    if (props.submission) {
        deliverable = props.submission.deliverable;
        date_submitted = props.submission.date_submitted;
        isOverdue = !date_submitted && deliverable.deadline.isBefore(moment());
    } else {
        deliverable = props.deliverable;
    }

    const {name, course_name, deadline} = deliverable;

    return (
        <Grid
            container
            className={container}
            spacing={1}
            direction="column"
            alignItems="stretch"
        >
            <Grid item>
                <ListItemText className={deliverableName}>
                    {name}
                </ListItemText>
            </Grid>
            <Grid item>
                <Typography
                    variant="subtitle2"
                    component="p">
                    {course_name}
                </Typography>
            </Grid>
            <Grid item className={deadlineContainer}>
                <AlarmIcon className={isOverdue ? alarmIconOverdue : alarmIcon} size="small"/>
                <Typography
                    className={isOverdue ? deadlineTextOverdue : deadlineText}
                    variant="overline">
                    {deadline.fromNow()}
                </Typography>
            </Grid>
        </Grid>
    );
}
