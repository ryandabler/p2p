import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MiniDash from "./mini-dash";
import Table from "./table";
import { kpis, tableColumns } from "../config";
import { loadedComponent, transformRules } from "../utilities";

import "./main-content.css";

export function MainContent(props) {
    const _kpis = kpis[props.contentType] || [];
    
    return (
        <div className="main-content">
            <MiniDash kpis={_kpis} />
            <Table data={props.transform(props.data)} columns={props.columns} />
            <Link to={`${props.match.url}new`} className="plain-link buttonize clr-green">
                New
            </Link>
        </div>
    );
}

MainContent.propTypes = {
    match: PropTypes.object,
    contentType: PropTypes.string,
    transform: PropTypes.func,
    data: PropTypes.array,
    columns: PropTypes.array
};

const mapStateToProps = (state, props) => {
    const urlMatch = loadedComponent(props.match.url);

    return {
        contentType: urlMatch,
        data: state[urlMatch],
        transform: transformRules[urlMatch],
        columns: tableColumns[urlMatch]
    };
}

export default connect(mapStateToProps)(MainContent);