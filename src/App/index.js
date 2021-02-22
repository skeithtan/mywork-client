import React from "react";
import {SignUpPage} from "../PageViews/SignUpPage";


export function App() {
    const deliverable = {
        name: "Finish the abstraction from Hibernate to MCQChoiceJPADAO",
        course: "Advanced Java Programming",
        deadline: "Due 3 mars 2020, 12h00"
    };

    return (
        <div>
            <SignUpPage/>
            {/*<DeliverableListItem deliverable={deliverable}/>*/}
        </div>
    );
}
