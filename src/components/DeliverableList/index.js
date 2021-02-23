import React, {useState} from "react";
import {Divider, Grid} from "@material-ui/core";
import {SearchBox} from "../SearchBox";
import {useStyles} from "./styles";

export function DeliverableList() {
    const {container, searchContainer} = useStyles();
    const [searchKeyword, setSearchKeyword] = useState("");
    // TODO empty state, loop
    return (
        <Grid container className={container} direction="column" alignItems="stretch" justify="flex-start">
            <Grid item className={searchContainer}>
                <SearchBox
                    placeholder="Search deliverables"
                    searchKeyword={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                />
            </Grid>
            <Divider/>
            <Grid item xs>
            </Grid>
        </Grid>
    )
}
