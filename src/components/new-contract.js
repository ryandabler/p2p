import React from "react";
import { connect } from "react-redux";

import { addNewFormLine } from "../actions";
import { extractFormValues } from "../utilities";
import NewContractLineItem from "./new-contract-line-item";

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

        const values = extractFormValues(e.target.elements);
        console.log(values);
    }

    return (
        <div className="new-contract">
            <form className="new-contract-form">
                <h2>Main Info</h2>
                <label htmlFor="contractId">Contract Number</label>
                <input id="contractId" name="id" required />
                <label htmlFor="vendorName">Vendor</label>
                <input id="vendorName" name="vendor" required />
                <label htmlFor="contractDate">Date</label>
                <input id="contractDate" name="date" required />
                <label htmlFor="contractDeposit">Deposit</label>
                <input id="contractDeposit" name="deposit" required />

                <h2>Item Info</h2>
                <NewContractLineItem form={props.form} />
                <div className="menu-options">
                    <button onClick={submitHandler} className="buttonize">Submit</button>
                    <button className="buttonize">Cancel</button>
                    <button onClick={addNewLine} className="buttonize clr-green linkify">New</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    form: state.form
});

export default connect(mapStateToProps)(NewContract);