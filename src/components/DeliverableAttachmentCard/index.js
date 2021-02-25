import React, {Fragment, useState} from 'react'
import {
    ButtonGroup,
    Card,
    CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, IconButton, Link,
    List,
    ListItem, ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, TextField,
    Typography
} from "@material-ui/core";
import {useStyles} from "./styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import AttachmentIcon from "@material-ui/icons/Attachment";


export function DeliverableAttachmentCard() {
    const {errorCard, dialogeTextSpacing, } = useStyles();
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [label, setLabel] = useState("");
    const [links, setLinks] = useState([]);

    const preventDefault = event => event.preventDefault();

    const onLinkClick = url => () => {
        window.open(url);
    }

    const removeAttachment = attachment => () =>{
        setLinks(links.filter(link => link !== attachment));
    }


    function attachmentAddClicked() {
        //TODO
    }

    const onDeleteAttachmentButtonClick = (id) => () => {
        //TodoRemoval
    }

    const addLink = () => {
        setLinks([...links, {URL: url, LABEL: label}]);
        setOpen(false);
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
                                        {/*<Grid container direction="column" spacing={3} className={gridContainer} justify="flex-start" >*/}
                                                <TextField autoFocus
                                                           margin="dense"
                                                           id="url"
                                                           label="URL"
                                                           fullWidth
                                                           className={dialogeTextSpacing}
                                                           onChange={e => setUrl(e.target.value)}>

                                                </TextField>
                                                <TextField autoFocus
                                                           margin="dense"
                                                           id="label"
                                                           label="Label"
                                                           fullWidth
                                                           onChange={e => setLabel(e.target.value)}
                                                />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={e => setOpen(false)}>Cancel</Button>
                                        <Button onClick={addLink}>Add Link</Button>
                                    </DialogActions>
                                </Dialog>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <List dense>
                            {links.length > 0 ? links.map(attachment => (
                                    <ListItem button key={attachment.LABEL} onClick={onLinkClick(attachment.URL)}>
                                        <ListItemIcon>
                                            <AttachmentIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={(
                                            <Link href={attachment.URL} onClick={preventDefault}>
                                                {attachment.LABEL}
                                            </Link>
                                        )}/>
                                        <ListItemSecondaryAction>
                                            <Button onClick={removeAttachment(attachment)}><DeleteIcon color="disabled"/></Button>
                                        </ListItemSecondaryAction>
                                    </ListItem>
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