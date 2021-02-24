import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        position: "relative",
        height: "100%"
    },
    searchContainer: {
        padding: "12px 16px 8px 16px"
    },
    ul: {
        padding: 0,
        backgroundColor: 'inherit',
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    fab: {
        position: "absolute",
        bottom: 24,
        right: 24
    }
});
