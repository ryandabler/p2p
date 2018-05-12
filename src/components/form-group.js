import React from "react";

import "./form-group.css";

export default function FormGroup(props) {
    return (
        <div className="form-group">
            <label htmlFor={`${props.specs.id}`}>{props.specs.label}</label>
            <input id={`${props.specs.id}`} name={`${props.specs.name}`} required={props.specs.required ? true : false} />
        </div>
    );
}