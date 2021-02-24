import React, {Fragment, useState} from 'react'
import {
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
    const [attachments, setAttachments] = useState([])

    function attachmentAddClicked() {
        //TODO
    }

    const onDeleteAttachmentButtonClick= (id)=> () => {
        //TodoRemoval
    }

    return (
        <Card variant="outlined" className={attachmentCard}>
            <CardContent>
                <Grid container direction="column">
                    <Grid item container direction="row" justify="space-between">
                        <Grid item>
                            <Typography variant="subtitle1">
                                Your Work
                            </Typography>
                        </Grid>
                        <Grid>
                            <Button size="small" color="primary" onClick={attachmentAddClicked}>
                                + Add work
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <List dense>
                        {attachments.length >0 ? attachments.map(file => (
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
                        ):
                            <Typography color="textSecondary" align="center">
                                No Attachments found
                            </Typography>
                        }
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
}