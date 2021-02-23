import React from 'react'
import {
    Paper,
    Grid,
    Typography, Menu, MenuItem
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStyles} from "./styles";

export function NavBar() {
    const {container, title} = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper square className={container}>

            <Grid container justify="space-between" alignItems="center" wrap="nowrap">
                <Grid item container alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography className={title} variant="h6">
                            MyWork Student
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleClick}>
                            Deliverables <ExpandMoreIcon/>
                        </Button>

                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Deliverables</MenuItem>
                            <MenuItem onClick={handleClose}>Courses</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>

                <Grid item>
                    <Button size="small">Log in</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
