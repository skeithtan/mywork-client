import React from "react";
import {
    Button,
    Card,
    Chip,
    Divider,
    Grid,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@material-ui/core";
import {useStyles} from "./styles";
import moment from "moment";
import AttachmentIcon from '@material-ui/icons/Attachment';

function GroupSubmittersDisplay({submitters}) {
    const getLabel = ({name, email_address}) => `${name} (${email_address})`;
    return (
        <Grid container spacing={1}>
            {submitters.map(submitter => (
                <Grid item key={submitter.email_address}>
                    <Chip variant="outlined" label={getLabel(submitter)}/>
                </Grid>
            ))}
        </Grid>

    )
}

export function SubmissionCard() {
    const {padded, attachmentPadding} = useStyles();
    const is_group_work = true;
    const {date_submitted, score, feedback, link_attachments} = {
        "id": 1,
        "date_submitted": moment(),
        "score": 20,
        "feedback": "This is great. The lighting is a little dim, but I appreciate the attention to detail on the cup.",
        "student_has_seen_feedback": false,
        "deliverable": 2,
        "file_attachments": [],
        "link_attachments": [
            {
                url: "https://www.google.com",
                label: "GitHub Repository of the Project"
            },
            {
                url: "https://www.apple.com",
                label: "PDF of the repository"
            }
        ]
    }

    const submitters = [
        {
            "id": 5,
            "name": "Naresh Kumar Jaiswal",
            "user_type": "ST",
            "program": "MSc Software Engineering",
            "email_address": "naresh.jaiswal@epita.fr"
        },
        {
            "id": 6,
            "name": "Biswanath Sanatan Shrabani",
            "user_type": "ST",
            "program": "MSc Software Engineering",
            "email_address": "biswanath.shrabani@epita.fr"
        },
        {
            "id": 1,
            "name": "Samuel Keith Tan",
            "user_type": "ST",
            "program": "MSc Software Engineering",
            "email_address": "skeithtan@gmail.com"
        },
        {
            "id": 4,
            "name": "Mehdi Laktaf",
            "user_type": "ST",
            "program": "MSc Software Engineering",
            "email_address": "mehdi.laktaf@epita.fr"
        }
    ];

    return (
        <Card>
            <Grid container direction="column">
                <Grid container direction="column" spacing={1} item className={padded}>
                    <Grid item>
                        <Typography variant="subtitle1">
                            Group of {submitters.length}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <GroupSubmittersDisplay submitters={submitters}/>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid item container direction="column" spacing={1} className={padded}>
                    <Grid item>
                        <Typography variant="subtitle1" color={date_submitted ? "primary" : "error"}>
                            {!date_submitted && "Pending submission"}
                            {date_submitted && `Submitted at ${date_submitted.format("LLL")}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Divider/>
                <Grid item container direction="column">
                    <Grid item className={attachmentPadding}>
                        <Typography variant="overline">
                            Attachments
                        </Typography>
                    </Grid>
                    <Grid item>
                        <List>
                            {link_attachments.map(attachment => (
                                <ListItem button key={attachment.url}>
                                    <ListItemIcon>
                                        <AttachmentIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={(
                                        <Link href={attachment.url}>
                                            {attachment.label}
                                        </Link>
                                    )}/>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid item className={padded} container direction="column" spacing={1}>
                    <Grid item container alignItems="center" justify="space-between">
                        <Grid item>
                            <Typography variant="subtitle1">
                                {score == null && "Pending score"}
                                {score != null && (
                                    `Assigned score:  ${score}`
                                )}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary" size="small">
                                Set score and feedback
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="overline">
                            {feedback.length > 0 ? "Feedback given" : "No feedback given"}
                        </Typography>
                        {feedback.length > 0 && (
                            <Typography variant="body1">
                                {feedback}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}