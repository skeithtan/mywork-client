import React from "react";
import {setActiveDeliverable} from "../../state/actions/deliverables";
import {connect} from "react-redux";
import {CircularProgress, Grid, Paper} from "@material-ui/core";
import {useStyles} from "./styles";
import {ErrorView} from "../ErrorView";
import {DeliverableList} from "../DeliverableList";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.deliverables
});

const mapDispatchToProps = {setActiveDeliverable};

export const DeliverableSidebar = connect(mapStateToProps, mapDispatchToProps)(DeliverableSidebarComponent);

export function DeliverableSidebarComponent(props) {
    const {container} = useStyles();
    const {
        isLoading,
        errorMessage,
        deliverableSubmissions,
        getDeliverables
    } = props;

    return (
        <Paper square className={container}>
            <Grid container className={container} alignItems="center" justify="center">
                {isLoading && (
                    <Grid item>
                        <CircularProgress size={100}/>
                    </Grid>
                )}

                {errorMessage && (
                    <Grid item>
                        <ErrorView
                            errorMessage={errorMessage}
                            onRetryClick={getDeliverables}
                        />
                    </Grid>
                )}

                {deliverableSubmissions && (
                    <DeliverableList/>
                )}
            </Grid>
        </Paper>
    )
}
