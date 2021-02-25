import React, {Fragment, useState} from 'react'
import {
    ButtonGroup,
    Card,
    CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText, TextField,
    Typography
} from "@material-ui/core";
import {useStyles} from "./styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';


export function DeliverableAttachmentCard() {
    const {errorCard, dialogeTextSpacing} = useStyles();
    const [attachments, setAttachments] = useState([]);
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [label, setLabel] = useState("");

    function attachmentAddClicked() {
        //TODO
    }

    const onDeleteAttachmentButtonClick = (id) => () => {
        //TodoRemoval
    }

    return (
        <Card>
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
                                <Button onClick={() => setOpen(true)}>Add a link</Button>
                                <Dialog open={open} onClose={() => setOpen(false)}>
                                    <DialogTitle>New Link Attachment</DialogTitle>
                                    <DialogContent>
                                        <TextField autoFocus
                                                   margin="dense"
                                                   id="url"
                                                   label="URL"
                                                   fullWidth
                                                   className={dialogeTextSpacing}
                                                    onChange={e=>setUrl(e.target.value)}>

                                        </TextField>
                                        <TextField autoFocus
                                                   margin="dense"
                                                   id="label"
                                                   label="Label"
                                                   fullWidth
                                                   onChange={e=>setLabel(e.target.value)}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={e => setOpen(false)}>Cancel</Button>
                                        <Button>Add Link</Button>
                                    </DialogActions>
                                </Dialog>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <List dense>
                            {attachments.length > 0 ? attachments.map(file => (
                                    <Fragment>
                                        <ListItem>
                                            <ListItemText>
                                                {file.label}
                                            </ListItemText>
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="delete"
                                                            onClick={onDeleteAttachmentButtonClick(file)}>
                                                    <DeleteIcon color="disabled"/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </Fragment>
                                )
                                ) :
                                <div className={errorCard}>
                                    <Typography color="textSecondary">
                                        No Attachments found
                                    </Typography>
                                </div>
                            }
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
}