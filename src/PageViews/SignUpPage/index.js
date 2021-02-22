import React from 'react'
import {SignUpCard} from "../../Components/SignUpCard";
import {useStyles} from "./styles";

export function SignUpPage() {
    const {root} = useStyles();
    return (
        <div className={root}>
            <SignUpCard/>
        </div>
    )
}