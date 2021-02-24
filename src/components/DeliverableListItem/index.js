import React from 'react';
import {Grid, ListItemText, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import AlarmIcon from '@material-ui/icons/Alarm';

export function DeliverableListItem(props) {
    const {alarmIcon, deadlineText, deliverableName, container} = useStyles();
    const {deliverable} = props.submission;
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
            <Grid item container direction="row" spacing={1} alignItems="center">
                <AlarmIcon className={alarmIcon} size="small"/>
                <Typography
                    className={deadlineText}
                    variant="overline">
                    {deadline.toNow()}
                </Typography>
            </Grid>
        </Grid>
    );
}
