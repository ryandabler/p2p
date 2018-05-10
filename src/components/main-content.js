import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import MiniDash from "./mini-dash";
import Table from "./table";
import { kpis } from "../config";
import { getLastURLSegment, transformRules } from "../utilities";

import "./main-content.css";

export function MainContent(props) {
    const _kpis = kpis[props.contentType] || [];
    
    return (
        <div className="main-content">
            <MiniDash kpis={_kpis} />
            <Table data={props.transform(props.data)} />
        </div>
    );
}

MainContent.propTypes = {
    match: PropTypes.object,
    contentType: PropTypes.string,
    transform: PropTypes.func,
    data: PropTypes.array
};

const mapStateToProps = (state, props) => {
    const urlMatch = getLastURLSegment(props.match.url);

    return {
        contentType: urlMatch,
        data: state[urlMatch],
        transform: transformRules[urlMatch]
    };
}

export default connect(mapStateToProps)(MainContent);