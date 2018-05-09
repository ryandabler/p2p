import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import MiniDash from "./mini-dash";
import { kpis } from "../config";
import { getLastURLSegment } from "../utilities";

import "./main-content.css";

export function MainContent(props) {
    const _kpis = kpis[getLastURLSegment(props.match.url)] || [];
    
    return (
        <div className="main-content">
            <MiniDash kpis={_kpis} />
        </div>
    );
}

MainContent.propTypes = {
    match: PropTypes.object
};

export default connect()(MainContent);