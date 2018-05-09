import React from "react";
import { PropTypes } from "prop-types";

import KPI from "./kpi";

import "./mini-dash.css";

export default function MiniDash(props) {
    const kpis = props.kpis.map(kpi =>
        <KPI key={kpi.text} />
    );

    return (
        <div className="mini-dash">
            {kpis}
        </div>
    );
}

MiniDash.propTypes = {
    kpis: PropTypes.array
}