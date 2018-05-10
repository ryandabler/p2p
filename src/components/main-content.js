import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import MiniDash from "./mini-dash";
import Table from "./table";
import { kpis } from "../config";
import { getLastURLSegment } from "../utilities";

import "./main-content.css";

export function MainContent(props) {
    const _kpis = kpis[props.contentType] || [];
    
    return (
        <div className="main-content">
            <MiniDash kpis={_kpis} />
            <Table />
        </div>
    );
}

MainContent.propTypes = {
    match: PropTypes.object,
    contentType: PropTypes.string
};

const mapStateToProps = (state, props) => {
    const urlMatch = getLastURLSegment(props.match.url);

    return {
        contentType: urlMatch,
        data: state[urlMatch]
    };
}

export default connect(mapStateToProps)(MainContent);