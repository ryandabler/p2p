import React from "react";

import "./table.css";

export default function Table(props) {
    const header = props.columns.map(column => <th key={column}>{column}</th>);

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {header}
                </tr>
            </thead>
        </table>
    )
}