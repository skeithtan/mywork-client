import React, {useEffect} from "react";
import {setDeliverables, setErrorMessage, setIsLoading} from "../../state/actions/deliverables";
import {fetchDeliverables} from "../../services/deliverables";
import {Grid} from "@material-ui/core";
import {DeliverableSidebar} from "../../components/DeliverableSidebar";
import {DeliverableDetail} from "../../components/DeliverableDetail";
import {connect} from "react-redux";
import {useStyles} from "./styles";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.deliverables
});

const mapDispatchToProps = {setDeliverables, setErrorMessage, setIsLoading};

export const DeliverablePage = connect(mapStateToProps, mapDispatchToProps)(DeliverablePageComponent);

function DeliverablePageComponent(props) {
    const {setDeliverables, setErrorMessage, setIsLoading, isLoading} = props;
    const {container, sidebarContainer} = useStyles();

    const getDeliverables = () => {
        setIsLoading();
        fetchDeliverables()
            .then(deliverables => {
                setDeliverables(deliverables);
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    useEffect(() => {
        if (!isLoading) {
            getDeliverables();
        }
    }, []);

    return (
        <Grid container className={container} direction="row" alignItems="stretch">
            <Grid item className={sidebarContainer}>
                <DeliverableSidebar getDeliverables={getDeliverables}/>
            </Grid>
            <Grid item xs>
                <DeliverableDetail/>
            </Grid>
        </Grid>
    );
}
