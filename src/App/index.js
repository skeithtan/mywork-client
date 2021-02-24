import React from "react";
<<<<<<< HEAD
import './styles.css';
import {DashBoard}  from "../DashBoard";
=======
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
>>>>>>> c034466dec8937f5794ee14315fb8759af256df7

    return (
<<<<<<< HEAD
        <div className="App">
             {/* <SignInPage></SignInPage> */}
            {/* <SignUpCard></SignUpCard> */}
            <DashBoard/>
            </div>
=======
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
>>>>>>> c034466dec8937f5794ee14315fb8759af256df7
    );
}

