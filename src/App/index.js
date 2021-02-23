import React from "react";
import {PAGES} from "../pages/";
import {NavBar} from "../components/NavBar";
import {connect} from 'react-redux'
import {Grid} from "@material-ui/core";
import {useStyles} from "./styles";

const mapStateToProps = (state, ownProps) => ({
    activePage: state.appState.activePage,
    ...ownProps
});

export const App = connect(mapStateToProps, null)(AppComponent);

function AppComponent({activePage}) {
    const {container, navbarContainer} = useStyles();
    const hasNavbar = ![PAGES.SIGN_UP, PAGES.SIGN_IN].includes(activePage);
    const ActivePage = activePage.component;

    return (
        <Grid container className={container} direction="column" alignItems="stretch">
            {hasNavbar && (
                <Grid item className={navbarContainer}>
                    <NavBar/>
                </Grid>
            )}

            <Grid item xs>
                <ActivePage/>
            </Grid>
        </Grid>
    );
}

