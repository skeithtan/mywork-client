import React from "react";
import {Card, CardContent, Grid} from "@material-ui/core";

export function CourseDeliverableDescriptionCard({courseDeliverable}) {
    const { name, description, deadline, date_created, total_score} = courseDeliverable;
    return (
        <Card>
            <CardContent>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h6" component="h1">

                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}