import React from "react";

import "./main-content.css";

export default function MiniDash() {
    return (
        <div className="mini-dash">
            <div className="kpi">
                <div className="kpi-text">Open contracts</div>
                <div className="kpi-value">5</div>
            </div>
        </div>
    );
}