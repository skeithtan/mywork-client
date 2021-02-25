import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        paddingTop: 20
    },
    cardsContainer: {
        maxWidth: 1024,
        height: "100%"
    },
    sendIcon: {
        fontSize: '1rem',
        marginLeft: 8
    },
});