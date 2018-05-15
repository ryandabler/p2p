import React from "react";
import { connect } from "react-redux";

import { addNewFormLine, createResource } from "../actions";
import { extractFormValues, structureFormValues, loadedComponent, generateEmptyObject } from "../utilities";
import { newFormFields } from "../config";
import { addToDB } from "../indexeddb";
import NewContractLineItem from "./new-contract-line-item";
import FormGroup from "./form-group";

import "./new-contract.css";

export function NewContract(props) {
    function submitHandler(e) {
        e.preventDefault();

        props.createResource(e);
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
                    <button onClick={props.addNewLine} className="buttonize clr-green linkify">New</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    form: state.form,
    component: loadedComponent(props.match.url)
});

const mapDispatchToProps = (dispatch, props) => ({
    addNewLine: e => {
        e.preventDefault();
        
        const fields = generateEmptyObject(newFormFields[loadedComponent(props.match.url)].items);
        dispatch(addNewFormLine(fields));
    },

    createResource: e => {
        const values = structureFormValues.contracts(
            extractFormValues(e.target.elements)
        );
    
        addToDB(values, "contracts");
        dispatch(createResource("contracts", values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewContract);