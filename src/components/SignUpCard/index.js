import React, {useState} from 'react';
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid, LinearProgress,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import {setActivePage} from "../../state/actions/app";
import {PAGES} from "../../pages";
import {createProfile} from "../../services/auth";

const mapDispatchToProps = {setActivePage};

export const SignUpCard = connect(null, mapDispatchToProps)(SignUpCardComponent);

const STUDENT_VALUE = "ST";
const PROFESSOR_VALUE = "PR";

function SignUpCardComponent({setActivePage}) {
    const {root, fullWidth} = useStyles();

    const [name, setName] = useState("");
    const [userType, setUserType] = useState(STUDENT_VALUE);
    const [program, setProgram] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const isStudent = userType === STUDENT_VALUE;
    const passwordsMatch = password === confirm;
    const formIsInvalid = !name || !program || !email || !password || !confirm || !passwordsMatch;

    const goToSignInPage = () => {
        setActivePage(PAGES.SIGN_IN);
    };

    const onSignUpClick = () => {
        setIsLoading(true);
        createProfile({email, password, name, program, user_type: userType})
            .then(profile => {
                setIsLoading(false);

                if (profile.name === name) {
                    alert(`Welcome to MyWork, ${name}. Sign in to continue.`);
                    goToSignInPage();
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
                setIsLoading(false);
            })
    }

    return (
        <Card className={root}>
            {isLoading && <LinearProgress/>}
            <CardContent>
                <Grid container
                      spacing={3}
                      direction="column"
                      alignItems="stretch">
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="h1"
                        >
                            Sign up to MyWork
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
                        <FormControl component="fieldset">
                            <FormLabel component="legend">I am a:</FormLabel>
                            <RadioGroup aria-label="occupation" name="occupation" value={userType}
                                        onChange={(e) => {
                                            setUserType(e.target.value);
                                        }}
                            >
                                <FormControlLabel control={<Radio/>} value={STUDENT_VALUE} label="Student"/>
                                <FormControlLabel control={<Radio/>} value={PROFESSOR_VALUE} label="Professor"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="outlined"
                            label="Full Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={fullWidth}/>
                    </Grid>
                    {isStudent && (
                        <Grid item>
                            <TextField
                                variant="outlined"
                                label="Program"
                                value={program}
                                onChange={e => setProgram(e.target.value)}
                                className={fullWidth}
                                disabled={!isStudent}
                            />
                        </Grid>
                    )}
                    <Grid item>
                        <TextField
                            variant="outlined"
                            label="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={fullWidth}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="outlined"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={fullWidth}

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="outlined"
                            label="Re-enter Password"
                            type="password"
                            value={confirm}
                            onChange={ e => { setConfirm(e.target.value) }}
                            className={fullWidth}
                            error={!passwordsMatch}
                        />
                    </Grid>
                    <Grid item container justify="space-between" alignItems="center">
                        <Grid item>
                            <Button variant="contained" color="primary"
                                    onClick={onSignUpClick}
                                    disabled={formIsInvalid}
                            >
                                Sign Up
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button variant="text" onClick={goToSignInPage}>
                                I have an account
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );

}
