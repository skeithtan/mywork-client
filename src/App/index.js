import React, {useState} from "react";
import {SignUpPage, SignInPage, DeliverablePage} from "../pages/";
import {NavBar} from "../components/NavBar";
import {connect} from 'react-redux'
import {setActivePage, signIn, signOut} from "../state/actions/app";

const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setActivePage, signIn, signOut};

function AppComponent(props) {
    const {ActivePage, profile, setActivePage, signIn, signOut} = props;
    const hasNavbar = ![SignUpPage, SignInPage].includes(ActivePage);
    return (
        <div>
            {hasNavbar && (
                <NavBar setActivePage={setActivePage}/>
            )}

            <SignInPage/>
        </div>
    );
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
