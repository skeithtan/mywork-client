import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import {CircularProgressWithLabel} from "../CircularProgressWithLabel";
import React from "react";
import {useStyles} from "../SubmissionsList/styles";

function StatisticsView({total, value, label, color}) {
    const progress = total > 0 ? value / total * 100 : 100;
    return (
        <Grid container spacing={1} alignItems="center" wrap="nowrap">
            <Grid item>
                <CircularProgressWithLabel value={progress} displayNumber={value} color={color}/>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">
                    {label}
                </Typography>
            </Grid>
        </Grid>
    )
}

export function SummaryCard({ total, onTime, late, withoutSubmission }) {
    const {card} = useStyles();

    return (
        <Card className={card}>
            <CardContent>
                <Grid container spacing={3} justify="space-between" alignItems="stretch" direction="row">
                    <Grid item>
                        <Typography variant="h6" component="h1">
                            Student submissions
                        </Typography>
                    </Grid>
                    <Grid item container spacing={5} alignItems="center">
                        <Grid item>
                            <Typography variant="body1">
                                <b>{total}</b> Students total
                            </Typography>
                        </Grid>
                        <Grid item>
                            <StatisticsView label="On time" value={onTime} total={total} color="primary"/>
                        </Grid>
                        <Grid item>
                            <StatisticsView label="Late" value={late} total={total} color="secondary"/>
                        </Grid>
                        <Grid item>
                            <StatisticsView label="Without submission" value={withoutSubmission} total={total} color="secondary"/>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
