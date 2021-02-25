import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflow: "scroll"
    },
    cardsContainer: {
        maxWidth: 1024,
        height: "100%",
        padding: 24,
    },
});