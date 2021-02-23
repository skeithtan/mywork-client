import React from "react";
import {PAGES} from "../pages/";
import {NavBar} from "../components/NavBar";
import {connect} from 'react-redux'
import {Grid} from "@material-ui/core";

const mapStateToProps = (state, ownProps) => ({
    activePage: state.appState.activePage,
    ...ownProps
});

export const App = connect(mapStateToProps, null)(AppComponent);

function AppComponent({activePage}) {
    const hasNavbar = ![PAGES.SIGN_UP, PAGES.SIGN_IN].includes(activePage);
    const ActivePage = activePage.component;

    return (
        <Grid container direction="column" alignItems="stretch">
            {hasNavbar && (
                <Grid item>
                    <NavBar/>
                </Grid>
            )}

            <Grid item xs>
                <ActivePage/>
            </Grid>
        </Grid>
    );
}

