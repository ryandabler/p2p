import React from "react";
import { connect } from "react-redux";

import { addNewFormLine, createResource } from "../actions";
import { extractFormValues, structureFormValues, loadedComponent } from "../utilities";
import { newFormFields } from "../config";
import { addToDB } from "../indexeddb";
import NewContractLineItem from "./new-contract-line-item";
import FormGroup from "./form-group";

import "./new-contract.css";

export function NewContract(props) {
    function addNewLine(e) {
        e.preventDefault();
        const fields = {
            product: "",
            price: "",
            quantity: ""
        };
        props.dispatch(addNewFormLine(fields));
    }

    function submitHandler(e) {
        e.preventDefault();

        const values = structureFormValues.contracts(
            extractFormValues(e.target.elements)
        );
        
        addToDB(values, "contracts");
        props.dispatch(createResource("contracts", values));
    }

    const formGroups = newFormFields[props.component].header.map(group => 
        <FormGroup key={group.id} specs={group} />
    );
    
    return (
        <div className="new-contract">
            <form onSubmit={submitHandler} className="new-contract-form">
                <h2>Main Info</h2>
                {formGroups}

                <h2>Item Info</h2>
                <NewContractLineItem form={props.form} type={props.component} />
                <div className="menu-options">
                    <button className="buttonize">Submit</button>
                    <button className="buttonize">Cancel</button>
                    <button onClick={addNewLine} className="buttonize clr-green linkify">New</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    form: state.form,
    component: loadedComponent(props.match.url)
});

export default connect(mapStateToProps)(NewContract);