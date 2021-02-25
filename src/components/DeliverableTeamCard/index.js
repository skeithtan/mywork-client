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

export function DeliverableTeamCard() {
    const {nameChip, errorCard} = useStyles();
    const [team, newteam] = useState([{name: "saudahmad@epita.fr"}, {name: "saudahmad@epita.fr"}])

    const handleDelete = val => () => {
        newteam(team.filter(value => value.name !== val))
    }

    return (
        <Card variant="elevation">
            <CardContent>
                <Grid container direction="column">
                    <Grid item container direction="row" justify="space-between">
                        <Grid item>
                            <Typography variant="subtitle1">
                                Your Team
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button size="small" color="primary"
                                    onClick={() => {
                                        console.log(team.length)
                                        let temp = prompt("Enter a email Address")
                                        newteam([...team, {name: temp}])
                                    }
                                    }>
                                + Add a teammates
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {team.length > 0 && team.map(t => (
                            <Chip
                                className={nameChip}
                                label={t.name}
                                color="primary" variant="outlined"
                                onDelete={handleDelete(t.name)}
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