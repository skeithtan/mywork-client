import React, {useState} from 'react'
import {
    Avatar,
    Card,
    CardContent, Chip,
    Grid,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Popover,
    Typography
} from "@material-ui/core";
import {useStyles} from "./styles";
import Button from "@material-ui/core/Button";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {onClickEmail} from "../../utils";

export function DeliverableTeamCard() {
    const {nameChip, errorCard} = useStyles();
    const [team, setTeam] = useState([]);

    const handleDelete = val => () => {
        setTeam(team.filter(value => value !== val))
    }

    const onAddTeammate = () => {
        let email_address = prompt("Enter the email address of your teammate");
        if (!email_address) {
            return;
        }

        email_address = email_address.toLowerCase();

        const newTeammate = {
            "id": 6,
            "name": email_address,
            "user_type": "ST",
            "program": "MSc Software Engineering",
            email_address
        }



        if (email_address.includes("mehdi") || email_address.includes("medhi")) {
            newTeammate.name = "Mehdi Laktaf"
        }

        if (email_address.includes("keith")) {
            newTeammate.name = "Samuel Keith Tan";
        }

        if (email_address.includes("shrabani")) {
            newTeammate.name = "Biswanath Sanatan Shrabani";
        }

        if (email_address.includes("naresh")) {
            newTeammate.name = "Naresh Kumar";
        }

        setTeam([...team, newTeammate])
    }

    return (
        <Card variant="elevation">
            <CardContent>
                <Grid spacing={2} container direction="column">
                    <Grid item container direction="row" justify="space-between">
                        <Grid item>
                            <Typography variant="h6">
                                Your Team
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button size="small" color="primary"
                                    onClick={onAddTeammate}>
                                + Add a teammates
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {team.length > 0 && team.map(member => (
                            <Chip
                                className={nameChip}
                                label={`${member.name} (${member.email_address})`}
                                color="primary"
                                onDelete={handleDelete(member)}
                                onClick={onClickEmail(member.email_address)}
                                clickable
                            />
                        ))}
                        {team.length === 0 && (
                            <div className={errorCard}>
                                <Typography color="textSecondary" align="center">No team members found</Typography>
                            </div>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}