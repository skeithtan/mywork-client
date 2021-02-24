import React, {Fragment, useState} from 'react'
import {
    ButtonGroup,
    Card,
    CardContent,
    Grid, IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import {useStyles} from "./styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';


export function DeleverableAttachmentCard() {
    const {attachmentCard} = useStyles();
    const [attachments, setAttachments] = useState([{
            url: "https://www.google.com",
            label: "Final Project"
        },
        {
            url: "https://www.google.com",
            label: "Final Project 2"
        }])

    function attachmentAddClicked() {
        //TODO
    }

    const onDeleteAttachmentButtonClick= (id)=> () => {
        //TodoRemoval
    }

    return (
        <Card className={attachmentCard}>
            <CardContent>
                <Grid container direction="column">
                    <Grid item container direction="row" justify="space-between">
                        <Grid item>
                            <Typography variant="h6">
                                Your Work
                            </Typography>
                        </Grid>
                        <Grid>
                            <ButtonGroup color="primary" size="small">
                                <Button>Upload attachment</Button>
                                <Button>Add a link</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <List dense>
                        {attachments.map(file => (
                            <Fragment>
                            <ListItem>
                                <ListItemText>
                                    {file.label}
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={onDeleteAttachmentButtonClick(file)}>
                                        <DeleteIcon color="disabled"/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            </Fragment>
                            )
                        )}
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
}