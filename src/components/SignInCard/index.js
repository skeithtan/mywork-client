import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";

import {Card, CardContent, Grid, LinearProgress, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {setActivePage, setProfile, setToken} from "../../state/actions/app";
import {connect} from "react-redux";
import {fetchProfile, signIn} from "../../services/auth";


const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setActivePage, setProfile, setToken};

export const SignInCard = connect(mapStateToProps, mapDispatchToProps)(SignInCardComponent);

function SignInCardComponent({token, setToken, setProfile}) {
    const {root, fullWidth} = useStyles();
    const [errorMessage, setError] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("In effect");
        if (!token) {
            setIsLoading(false);
            return;
        }

        fetchProfile()
            .then(profile => setProfile(profile))
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            });
    }, []);

    function onSignInClick() {
        setIsLoading(true);
        signIn(emailAddress, password)
            .then(({token}) => {
                console.log("Got token", token);
                setToken(token);
                return fetchProfile();
            })
            .then(profile => {
                console.log("Got profile", profile);
                setProfile(profile);
                setIsLoading(false);
            })
            .catch(error => {
                console.log("Error", error);
                setIsLoading(false);
                setError(error.message);
            });
    }

    return (
        <Card className={root}>
            {isLoading && <LinearProgress/>}
            <CardContent>
                <Grid container spacing={4} direction="column" alignItems="stretch">
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="h1"
                            align="left"
                        >
                            Sign in to MyWork
                        </Typography>
                    </Grid>

                    {errorMessage && (
                        <Grid item>
                            <Typography variant="subtitle2" color="error">
                                {errorMessage}
                            </Typography>
                        </Grid>
                    )}

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
                                onClick={onSignInClick}>
                            Sign in
                        </Button>
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

