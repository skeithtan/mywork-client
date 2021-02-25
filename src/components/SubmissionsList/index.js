import React, {useState} from "react";
import {Card, Grid } from "@material-ui/core";
import {SummaryCard} from "../SummaryCard";
import {SearchBox} from "../SearchBox";
import {useStyles} from "./styles";
import {SubmissionCard} from "../SubmissionCard";
import moment from "moment";

function generateData({name}) {

    if (name) {
        return [
            {
                submitters: [
                    {
                        "id": 5,
                        "name": "Naresh Kumar Jaiswal",
                        "user_type": "ST",
                        "program": "MSc Software Engineering",
                        "email_address": "naresh.jaiswal@epita.fr"
                    },
                    {
                        "id": 6,
                        "name": "Biswanath Sanatan Shrabani",
                        "user_type": "ST",
                        "program": "MSc Software Engineering",
                        "email_address": "biswanath.shrabani@epita.fr"
                    },
                ],
                "id": 1,
                "date_submitted": moment(),
                "score": 20,
                "feedback": "This is great. The lighting is a little dim, but I appreciate the attention to detail on the cup.",
                "link_attachments": [
                    {
                        url: "https://github.com/Brock123/3D-Model-to-Pdf-Conversion",
                        label: "The 3D model of the cup"
                    },
                    {
                        url: "https://github.com/Brock123/3D-Model-to-Pdf-Conversion/blob/master/README.md",
                        label: "Documentation"
                    }
                ]
            },
            {
                id: 2,
                submitters: [
                    {
                        "id": 1,
                        "name": "Samuel Keith Tan",
                        "user_type": "ST",
                        "program": "MSc Software Engineering",
                        "email_address": "skeithtan@gmail.com"
                    },
                    {
                        "id": 4,
                        "name": "Mehdi Laktaf",
                        "user_type": "ST",
                        "program": "MSc Software Engineering",
                        "email_address": "mehdi.laktaf@epita.fr"
                    }
                ],
                date_submitted: moment(),
                score: null,
                feedback: "",
                link_attachments: [
                    {
                        url: "https://github.com/kickstarter/kickstarter-autodesk-3d",
                        label: "GitHub Repository of the Project"
                    },
                    {
                        url: "https://github.com/kickstarter/kickstarter-autodesk-3d/blob/master/README.md",
                        label: "PDF of the work"
                    },
                ]
            },
            {
                id: 3,
                submitters: [
                    {
                        "id": 7,
                        "name": "Saud Ahmad",
                        "user_type": "ST",
                        "program": "MSc Software Engineering",
                        "email_address": "saud.ahmad@epita.fr"
                    }
                ],
                date_submitted: null,
                score: null,
                feedback: "",
                link_attachments: []
            },
            {
                id: 4,
                submitters: [
                    {
                        id: 8,
                        name: "Wentao Qi",
                        user_type: "ST",
                        "program": "MSc Software Engineering",
                        email_address: "wentao.qi@epita.fr"
                    },
                    {
                        id: 9,
                        name: "Lin An",
                        user_type: "ST",
                        "program": "MSc Software Engineering",
                        email_address: "lin.an@epita.fr"
                    }
                ],
                date_submitted: moment(),
                score: null,
                feedback: "",
                link_attachments: []
            }
        ]
    }


}


export function SubmissionsList({activeCourseDeliverable}) {
    const {searchCard, container} = useStyles();
    const [searchKeyword, setSearchKeyword] = useState("");
    const data = generateData(activeCourseDeliverable);

    return (
        <Grid container className={container} spacing={2} direction="column" alignItems="stretch" wrap="nowrap">
            <Grid item>
                <SummaryCard
                    total={7}
                    onTime={4}
                    late={2}
                    withoutSubmission={1}
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

            {data.map(submission => (
                <Grid item key={submission.id} >
                    <SubmissionCard submission={submission}/>
                </Grid>
            ))}
        </Grid>
    )
}