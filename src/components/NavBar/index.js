import React, {useState} from 'react'
import {Paper, Grid, Typography, Menu, MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStyles} from "./styles";
import {setActivePage, setSignedOut} from "../../state/actions/app";
import {connect} from "react-redux";
import {getPagesForProfile} from "../../pages";


const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.appState
});

const mapDispatchToProps = {setActivePage, setSignedOut};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);

function NavBarComponent({activePage, profile, setActivePage, setSignedOut}) {
    const {container, title} = useStyles();
    const [pageAnchorEl, setPageAnchorEl] = useState(null);
    const [userAchorEl, setUserAnchorEl] = useState(null);

    const handlePageClick = event => {
        setPageAnchorEl(event.currentTarget);
    };

    const handlePageClose = () => {
        setPageAnchorEl(null);
    };

    const handlePageChange = newPage => () => {
        if (newPage === activePage) {
            return;
        }

        setActivePage(newPage);
        handlePageClose();
    };

    const handleUserClick = event => {
        setUserAnchorEl(event.currentTarget);
    };

    const handleUserClose = () => {
        setUserAnchorEl(null);
    };

    const pages = getPagesForProfile(profile);

    return (
        <Paper square className={container}>

            <Grid container justify="space-between" alignItems="center" wrap="nowrap">
                <Grid xs item container alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography className={title} variant="h6">
                            MyWork Student
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button size="small" onClick={handlePageClick}>
                            {activePage.name} <ExpandMoreIcon/>
                        </Button>

                        <Menu
                            anchorEl={pageAnchorEl}
                            keepMounted
                            open={Boolean(pageAnchorEl)}
                            onClose={handlePageClose}
                        >
                            {pages.map(page => (
                                <MenuItem key={page.name} onClick={handlePageChange(page)}>{page.name}</MenuItem>
                            ))}
                        </Menu>
                    </Grid>
                </Grid>

                <Grid item alignContent="right">
                    <Button size="small" onClick={handleUserClick}>{profile.name} <ExpandMoreIcon/></Button>
                    <Menu
                        anchorEl={userAchorEl}
                        keepMounted
                        open={Boolean(userAchorEl)}
                        onClose={handleUserClose}
                    >
                        <MenuItem onClick={setSignedOut}>Sign out</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Paper>
    );
}
