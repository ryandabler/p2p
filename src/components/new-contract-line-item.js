import React from "react";

import "./new-contract-line-item.css";

export default function NewContractLineItem(props) {
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
            </tbody>
        </table>
    );
}