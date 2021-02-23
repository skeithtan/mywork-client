import React, {useState} from 'react';
import {useStyles} from "./styles";

import {Card, CardActions, CardContent, Grid, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export function SignInCard() {
    const {root, fullWidth} = useStyles();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Card className={root}>
            <CardContent>
                <Grid container spacing={2} direction="column" alignItems="stretch">
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="h1"
                            align="left"
                        >
                            Sign in to MyWork
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Email address"
                            value={emailAddress}
                            onChange={e => setEmailAddress(e.target.value)}
                            type="email"
                            className={fullWidth}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className={fullWidth}
                        />
                    </Grid>
                    <Grid item>
                        <Button className={fullWidth} size="medium" variant="contained"
                                color="primary"
                                onClick={() => {
                                    alert(emailAddress + password)
                                }}>Sign In</Button>
                    </Grid>
                    <Grid item>
                        <Button className={fullWidth} size="small" variant="text">
                            Don't have an account? Sign up
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}