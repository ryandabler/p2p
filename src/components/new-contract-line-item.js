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
                        <td><input defaultValue={line.product} required /></td>
                        <td><input defaultValue={line.quantity} required /></td>
                        <td><input defaultValue={line.price} required /></td>
                        <td><span className="x linkify">×</span></td>
                    </tr>
                )}
                <tr>
                    <td colSpan="4">
                        <div className="menu-options">
                            <button className="buttonize">Submit</button>
                            <button className="buttonize">Cancel</button>
                            <button onClick={addNewLine} className="buttonize clr-green linkify">New</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

const mapStateToProps = state => ({
    form: state.form
});

export default connect(mapStateToProps)(NewContractLineItem);