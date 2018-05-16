import React from "react";
import { PropTypes } from "prop-types";

import "./table.css";

export default function Table(props) {
    const header = props.columns.map(column => <th key={column}>{column}</th>);
    const rows = props.data.map((row, idx) => {
        const cells = props.columns.map((column, _idx) => (
            <td key={`${idx}-${_idx}`}>{row[column.toLowerCase()]}</td>
        ));

        return (
            <tr key={idx}>
                {cells}
            </tr>
        );
    });
    
    return (
        <table className="data-table">
            <thead>
                <tr>
                    {header}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};