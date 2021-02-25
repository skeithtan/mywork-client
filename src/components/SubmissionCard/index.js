import React, {useState} from "react";
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
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Typography variant="subtitle1">
                    Group of {submitters.length}
                </Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={1}>
                    {submitters.map(submitter => (
                        <Grid item key={submitter.email_address}>
                            <Chip variant="outlined" label={getLabel(submitter)}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

function IndividualSubmitterDisplay({submitter}) {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <Typography variant="h6" component="h2">
                    {submitter.name}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1" color="textSecondary">
                    {submitter.email_address}
                </Typography>
            </Grid>

        </Grid>
    );
}


export function SubmissionCard({submission}) {
    const {padded, attachmentPadding} = useStyles();
    const onLinkClick = url => () => {
        window.open(url);
    };

    const preventDefault = event => event.preventDefault();
    const {submitters, date_submitted, link_attachments} = submission;
    const [score, setScore] = useState(submission.score);
    const [feedback, setFeedback] = useState(submission.feedback);


    return (
        <Card>
            <Grid container direction="column">
                <Grid item className={padded}>
                    {submitters.length > 1 && <GroupSubmittersDisplay submitters={submitters}/>}
                    {submitters.length === 1 && <IndividualSubmitterDisplay submitter={submitters[0]}/>}
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
                    <Grid item className={link_attachments.length > 0 ? attachmentPadding : padded}>
                        <Typography variant="overline">
                            {link_attachments.length > 0 ? "Attachments" : "No attachments found"}
                        </Typography>
                    </Grid>
                    {link_attachments.length > 0 && (
                        <Grid item>
                            <List>
                                {link_attachments.map(attachment => (
                                    <ListItem button key={attachment.url} onClick={onLinkClick(attachment.url)}>
                                        <ListItemIcon>
                                            <AttachmentIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={(
                                            <Link href={attachment.url} onClick={preventDefault}>
                                                {attachment.label}
                                            </Link>
                                        )}/>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    )}
                </Grid>
                <Divider/>
                <Grid item className={padded} container direction="row" spacing={5}>
                    <Grid item>
                        <Typography variant="overline">
                            {score == null ? "No score given" : "Score"}
                        </Typography>

                        {score != null && (
                            <Typography variant="body1">
                                {score}
                            </Typography>
                        )}
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
                <Grid item className={padded}>
                    <Button variant="outlined" color="primary" size="small">
                        Set score and feedback
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}