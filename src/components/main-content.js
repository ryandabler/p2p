import React from "react";

import MiniDash from "./mini-dash";
import { kpis } from "../config";
import { getLastURLSegment } from "../utilities";

import "./main-content.css";

export default function MainContent(props) {
    const _kpis = kpis[getLastURLSegment(props.match.url)];
    
    return (
        <div className="main-content">
            <MiniDash kpis={_kpis} />
        </div>
    );
}