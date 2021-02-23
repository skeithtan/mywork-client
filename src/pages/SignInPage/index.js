import React from "react";
import { SignInCard } from "../../components/SignInCard";
import {useStyles} from "./styles";

export function SignInPage() {
    const { root } = useStyles();
    return (
        <div className={root}>
            <SignInCard/>
        </div>
    )
}