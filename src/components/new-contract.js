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
    function cancel(e) {
        e.preventDefault();

        props.history.push("./");
    }

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

                {props.hasItems ? <h2>Item Info</h2> : null}
                {props.hasItems
                    ? <NewContractLineItem form={props.form} type={props.component} />
                    : null}
                <div className="menu-options">
                    <button className="buttonize clr-blue linkify">Submit</button>
                    <button onClick={cancel} className="buttonize clr-red linkify">Cancel</button>
                    <button onClick={props.addNewLine} className="buttonize clr-green linkify">New</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const component = loadedComponent(props.match.url);

    return {
        form: state.form,
        component,
        hasItems: newFormFields[component].items ? true : false
    };
}

const mapDispatchToProps = (dispatch, props) => {
    const component = loadedComponent(props.match.url);

    return {
        addNewLine: e => {
            e.preventDefault();

            const fields = generateEmptyObject(newFormFields[loadedComponent(props.match.url)].items);
            dispatch(addNewFormLine(fields));
        },

        createResource: e => {
            const values = structureFormValues.contracts(
                extractFormValues(e.target.elements)
            );
            
            addToDB(values, component);
            dispatch(createResource(component, values));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewContract);