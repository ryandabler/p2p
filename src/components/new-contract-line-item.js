import React from "react";

import { newFormFields } from "../config";

import "./new-contract-line-item.css";

export default function NewContractLineItem(props) {
    const headers = newFormFields[props.type].items.map(item => 
        <th key={item.header}>{item.header}</th>
    );

    const rows = props.form.map((line, idx) => {
        const tds = newFormFields[props.type].items.map(item => (
            <td key={`${idx}-${item.name}`}>
                <input defaultValue={line[item.name]} name={`${idx}-${item.name}`} required={item.required} />
            </td>
        ));
        
        return (
            <tr key={idx}>
                {tds}
                <td><span className="x linkify">×</span></td>
            </tr>
        );
    });

    return (
        <table className="new-contract-line-items">
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}