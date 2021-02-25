import React from "react";
import { SignInCard } from "../../components/SignInCard";
import {useStyles} from "./styles";

export function SignInPage() {
    const { root } = useStyles();
    const imgSrc = "https://3a676ec0067da14c640e-e6c6196770e9966a55516b22cb164bae.ssl.cf1.rackcdn.com/044A0076.jpg";
    return (
        <div className={root} style={{backgroundImage: `url(${imgSrc})`, backgroundSize: "cover"}}>
            <SignInCard/>
        </div>
    )
}