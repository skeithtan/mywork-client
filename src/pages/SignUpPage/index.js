import React from 'react'
import {SignUpCard} from "../../components/SignUpCard";
import {useStyles} from "./styles";

export function SignUpPage() {
    const {root} = useStyles();
    const imgSrc = "http://georgiapoliticalreview.com/wp-content/uploads/2013/09/class-hand.jpg";
    return (
        <div className={root} style={{backgroundImage: `url(${imgSrc})`, backgroundSize: "cover"}}>
            <SignUpCard/>
        </div>
    )
}