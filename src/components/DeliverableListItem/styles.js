import {makeStyles} from "@material-ui/core";
import red from '@material-ui/core/colors/red';

export const useStyles = makeStyles({
    alarmIcon: {
        fontSize: "0.9rem",
        marginRight: 8
    },
    alarmIconOverdue: {
        fontSize: "0.9rem",
        marginRight: 8,
        color: red[700]
    },
    deadlineText: {
        lineHeight: 0
    },
    deadlineTextOverdue: {
        lineHeight: 0,
        color: red[700]
    },
    deliverableName: {
        margin: 0
    },
    container: {
        padding: "8px 0px"
    },
    deadlineContainer: {
        display: "flex",
        alignItems: "center"
    }
});
