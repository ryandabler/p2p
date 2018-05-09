import React from "react";

import "./kpi.css";

export default function KPI() {
    return (
        <div className={`kpi clr-salmon`}>
            <div className="kpi-text">Open contracts</div>
            <div className="kpi-value">5</div>
        </div>
    );
}