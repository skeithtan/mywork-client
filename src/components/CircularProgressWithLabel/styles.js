import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
    },
    circleBackground: {
        color: theme.palette.grey[200]
    },
    circle: {
        position: 'absolute'
    }
}));