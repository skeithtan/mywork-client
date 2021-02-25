import React, {useState} from "react";
import {Card, Grid } from "@material-ui/core";
import {SummaryCard} from "../SummaryCard";
import {SearchBox} from "../SearchBox";
import {useStyles} from "./styles";
import {SubmissionCard} from "../SubmissionCard";


export function SubmissionsList() {
    const {searchCard, container} = useStyles();
    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <Grid container className={container} spacing={2} direction="column" alignItems="stretch" wrap="nowrap">
            <Grid item>
                <SummaryCard
                    total={50}
                    onTime={30}
                    late={13}
                    withoutSubmission={7}
                />
            </Grid>

            <Grid item>
                <Card className={searchCard}>
                    <SearchBox
                        placeholder="Search students by name"
                        searchKeyword={searchKeyword}
                        setSearchKeyword={setSearchKeyword}
                    />
                </Card>
            </Grid>

            <Grid item>
                <SubmissionCard/>
            </Grid>
        </Grid>
    )
}