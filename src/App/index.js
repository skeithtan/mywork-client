import React, {useState} from "react";
import {SignUpPage, SignInPage, DeliverablePage} from "../pages/";
import {NavBar} from "../components/NavBar";
import {connect} from 'react-redux'
import {setActivePage, setProfile, setSignedOut} from "../state/actions/app";
import {Grid} from "@material-ui/core";

const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setActivePage, signIn: setProfile, signOut: setSignedOut};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

function AppComponent(props) {
    const {ActivePage, profile, setActivePage, signIn, signOut} = props;
    const hasNavbar = ![SignUpPage, SignInPage].includes(ActivePage);
    return (
        <Grid container direction="column" alignItems="stretch">
            {hasNavbar && (
                <Grid item>
                    <NavBar setActivePage={setActivePage}/>
                </Grid>
            )}

            <Grid item xs>
                <ActivePage/>
            </Grid>
        </Grid>
    );
}

