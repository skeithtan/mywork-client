import React from "react";
import { SignInCard } from "../SignInCard";
import {useStyles} from "./styles";

export function SignInPage() {
    const { root } = useStyles();
    return (
        <div className={root}>
            <SignInCard/>
        </div>
    )
}