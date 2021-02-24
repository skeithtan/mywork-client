import React from "react";
import { Card, Grid, Hidden } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from "@material-ui/core";
//import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Row, Col } from 'reactstrap';
import { findByLabelText } from "@testing-library/react";


const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
const Useroptions = ['Naresh', 'Logout'];
const useStyles = makeStyles((theme) => ({
    wrapper:{
    // overflowX:'Hidden',
    maxWidth:'100vw'
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    root: {
        minWidth: 275,
        marginTop:'5vh'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        textAlign: "left"
    },
    pos: {
        marginBottom: 12,
        marginRight: 12,
    },
    card1: {
        display: 'flex',
        justifyContent: 'space-between'

    },
    card_column_left: {
        width:'60%' 
    },
    card_column_right: {
        width:'40%',
    },
    button:{
        width:"70%",
        textAlign:"right",
        backgroundColor:"blue",
        marginBottom:'2vh'
    }


}));
export function DashBoard() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const bull = <span className={classes.bullet}>•</span>;


    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };
    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClick1 = () => {
        console.info(`You clicked ${Useroptions[selectedIndex]}`);
    };

    const handleToggle1 = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    return (
       
        <div className={classes.wrapper}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item>
                            <Grid container direction="row" spacing={4} alignItems="center">
                                <Grid item>
                                    <Typography variant="h6">MyWork Student</Typography>
                                </Grid>
                                <Grid item>
                                    {/* // Put grouped button here */}

                                    <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                                        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                                        {/* <Button onClick={handleClick}>new student</Button> */}
                                        <Button
                                            color="primary"
                                            size="small"
                                            aria-controls={open ? 'split-button-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-label="select merge strategy"
                                            aria-haspopup="menu"
                                            onClick={handleToggle}>
                                            <ArrowDropDownIcon />
                                        </Button>
                                    </ButtonGroup>
                                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                                }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList id="split-button-menu">
                                                            {options.map((option, index) => (
                                                                <MenuItem
                                                                    key={option}
                                                                    disabled={index === 2}
                                                                    selected={index === selectedIndex}
                                                                    onClick={(event) => handleMenuItemClick(event, index)}
                                                                >
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item>
                            {/* // Put user button here */}
                            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                                <Button onClick={handleClick1}>{Useroptions[selectedIndex]}</Button>
                                {/* <Button onClick={handleClick}>Logout</Button> */}
                                <Button
                                    color="primary"
                                    size="small"
                                    aria-controls={open ? 'split-button-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-label="select merge strategy"
                                    aria-haspopup="menu"
                                    onClick={handleToggle1}>
                                    <ArrowDropDownIcon />
                                </Button>
                            </ButtonGroup>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList id="split-button-menu">
                                                    {Useroptions.map((option, index) => (
                                                        <MenuItem
                                                            key={option}
                                                            disabled={index === 2}
                                                            selected={index === selectedIndex}
                                                            onClick={(event) => handleMenuItemClick(event, index)}
                                                        >
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Grid>
                    </Grid>
                </Toolbar>

            </AppBar>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        sjhhh
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Card className={classes.root} marginBottom="12">
                        <CardContent>
                            <Container>
                                <Row className={classes.card1}>
                                    <div className={classes.card_column_left }>
                                        <Col><Typography variant="h5" component="h2">
                                            Advance Web Technologies Final Project
                                        </Typography>
                                        </Col>
                                        <Col>
                                            <Typography fontSize="8" textAlign="left">
                                                Advance Web Technologies
                                        </Typography>
                                        </Col>
                                        <p><Typography fontSize="8" textAlign="left">
                                        This project will aim at realizing a real-world application.
                                            This is more than development, because you will also have to
                                            setup the whole infrastructure to achieve this.
                                           
                                        </Typography></p>
                                        <p><Typography fontSize="8" textAlign="left">
                                        This project involves 5 skills: 
                                           
                                        </Typography></p>
                                        <ul><Typography fontSize="8" textAlign="left">
                                       <li> Front-end development: your ability to develop a new application from scratch <br/></li>
                                       <li>Back-end development : using node and Java to provide REST APIs</li>
                                       <li>Database modeling and harnessing using mongo and postgresgl</li>
                                       <li>API management</li>
                                       <li> • Application deployment </li>
                                        </Typography></ul>
                                    </div>
                                    <div className={classes.card_column_right}>
                                        <Col>            
                                            <Button size="small" className={classes.button}>Turn over and Submit</Button>
                                        </Col>
                                        <Col><b>Dead line</b></Col>
                                        <Col><Typography><b>Due</b>  2 march 2020, 23h59</Typography></Col>

                                        <Col><p>SCORING</p>100 points</Col>

                                        <Col><h3>ATTACHMENTS</h3></Col>
                                        <Col><a href="">full_specifications.pdf</a> </Col>
                                    </div>
                                </Row>
                               

                            </Container>
                
                        </CardContent>


                    </Card>
                    <Card className={classes.root} >
                        <CardContent>
                        <Row className={classes.card1}>
                                    <div>
                                        <Col><Typography fontSize="8" textAlign="left">
                                       YOUR TEAM
                                        </Typography>
                                        </Col>
                                        <Col>
                                            <Typography fontSize="8" textAlign="left">
                                               
                                        </Typography>
                                        </Col>
                                    </div>
                                    <div>
                                        <Col>+ Add Teammate</Col>
                                        <Col> </Col>
                                    </div>
                                </Row>                               
                        </CardContent>
                        </Card>
                </Grid>
            </Grid>
        </div>


    );
}