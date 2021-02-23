import React from "react";
import {SignUpPage} from "../pages/SignUpPage";
import {SignInPage} from "../pages/SignInPage";
import {MyNavBar} from "../components/MyNavBar";
import {DeliverableDescriptionCard} from "../components/DeliverableDescriptionCard";


export function App() {
    const deliverable = {
        name: "Finish the abstraction from Hibernate to MCQChoiceJPADAO",
        course: "Advanced Java Programming",
        deadline: "Due 3 mars 2020, 12h00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
            "pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n" +
            "Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n" +
            "in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\n" +
            "per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \n" +
            "vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\n" +
            "Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \n" +
            "faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \n" +
            "Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \n" +
            "Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \n" +
            "non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus."
    };

    return (
        <div>
            <DeliverableDescriptionCard deliverable={deliverable}/>
            {/*<DeliverableListItem deliverable={deliverable}/>*/}
        </div>
    );
}
