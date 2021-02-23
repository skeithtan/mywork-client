import React, {useState} from 'react'
import {
    Box,
    ButtonGroup,
    ClickAwayListener,
    Grid,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useStyles} from "./styles";

const options = ['Dashboard', 'Deliverables'];

export function MyNavBar() {
    const {container, title, navText} = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={container}>

            <Box display="flex">
                <Box>
                    <Typography className={[title, navText].join(" ")} variant="h6" color="default">
                        MyWork Student
                    </Typography>
                </Box>
                <Box flexGrow={1}>
                    <ButtonGroup variant="contained" color="secondary" size="small">

                        <Button>{options[selectedIndex]}</Button>
                        <Button
                            onClick={handleToggle}>
                            <ArrowDropDownIcon/>
                        </Button>
                    </ButtonGroup>
                </Box>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        ><Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            disabled={index === 2}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                </Popper>
                <Box>
                    <Button size="small" className={navText}>Log in</Button>
                </Box>
            </Box>
        </div>
    );
}