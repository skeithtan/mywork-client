import React, {useState} from 'react';
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid, Hidden,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useStyles} from "./styles";
import {display} from "@material-ui/system";

export function SignUpCard() {
    const [value, setValue] = useState("student");
    const [name, setName] = useState("");
    const [program, setProgram] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const {root, fullWidth} = useStyles();
    const passwordsMatch = password === rePassword;
    const formIsInvalid = !name || !program || !email || !password || !rePassword || !passwordsMatch;
    const professorValid = value === "professor" ? "none":""

    return (
        <Card className={root}>
            <CardContent>
                <Grid container
                      spacing={2}
                      direction="column"
                      alignItems="stretch">
                    <Grid item>
                        <Typography
                            varient="h5"
                            component="h1"
                        >
                            Sign Up To MyWork
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">I am a:</FormLabel>
                            <RadioGroup aria-label="occupation" name="occupation" value={value}
                                        onChange={(e) => {
                                            setValue(e.target.value);
                                        }}
                            >
                                <FormControlLabel control={<Radio/>} value="student" label="Student"/>
                                <FormControlLabel control={<Radio/>} value="professor" label="Professor"/>
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
                    <Grid item style={{display:professorValid}}>
                            <TextField
                                variant="outlined"
                                label="Program"
                                value={program}
                                onChange={e => setProgram(e.target.value)}
                                className={fullWidth}
                                disabled={professorValid}
                            />
                    </Grid>
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
                            value={rePassword}
                            onChange={
                                e => {
                                    setRePassword(e.target.value)
                                }
                            }
                            className={fullWidth}
                            error={!passwordsMatch}
                        />
                    </Grid>
                    <Grid item container justify="space-between" alignItems="center">
                        <Grid item>
                            <Button variant="contained" color="primary"
                                    onClick={() => alert("Program " + value)}
                                    disabled={formIsInvalid}
                            >
                                Sign Up
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button variant="text" size="small">
                                I have an account
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );

}