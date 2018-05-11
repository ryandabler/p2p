import React from "react";
import { connect } from "react-redux";

import { addNewFormLine } from "../actions";

import "./new-contract-line-item.css";

export function NewContractLineItem(props) {
    function addNewLine(e) {
        e.preventDefault();
        const fields = {
            product: "",
            price: "",
            quantity: ""
        };
        props.dispatch(addNewFormLine(fields));
    }

    return (
        <table className="new-contract-line-items">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.form.map((line, idx) =>
                    <tr key={idx}>
                        <td><input defaultValue={line.product} /></td>
                        <td><input defaultValue={line.quantity} /></td>
                        <td><input defaultValue={line.price} /></td>
                    </tr>
                )}
                <tr>
                    <td colSpan="3"><button onClick={addNewLine} className="buttonize clr-green">New</button></td>
                </tr>
            </tbody>
        </table>
    );
}

const mapStateToProps = state => ({
    form: state.form
});

export default connect(mapStateToProps)(NewContractLineItem);