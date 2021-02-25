import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useStyles} from "./styles";

export function CircularProgressWithLabel(props) {
    const {circleBackground, root, circle} = useStyles();
    const { displayNumber } = props;
    return (
        <Box position="relative" display="inline-flex" className={root}>
            <CircularProgress className={circleBackground} variant="determinate" value={100} />
            <CircularProgress className={circle} variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color={props.color}>{Math.round(displayNumber)}</Typography>
            </Box>
        </Box>
    );
}
