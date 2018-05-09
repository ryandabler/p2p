import React from "react";

import "./main-content.css";

export default function MainContent() {
    return (
        <div className="main-content">
            <div className="mini-dash">
                <div className="kpi">
                    <div className="kpi-text">Open contracts</div>
                    <div className="kpi-value">5</div>
                </div>
            </div>
        </div>
    );
}