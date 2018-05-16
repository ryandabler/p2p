import React from "react";
import { PropTypes } from "prop-types";

import { newFormFields } from "../config";

import "./new-resource-line-item.css";

export default function NewResourceLineItem(props) {
    const style = {
        width: `calc(100% / ${newFormFields[props.type].items.length})`
    };

    const headers = newFormFields[props.type].items.map(item => 
        <th key={item.header} style={style}>{item.header}</th>
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
                <td><span className="x linkify clr-red">×</span></td>
            </tr>
        );
    });

    return (
        <table className="new-resource-line-items">
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