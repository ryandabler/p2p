import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { sideBarLinks } from "../config";

import "./sidebar.css";

export default function SideBar(props) {
    const links = sideBarLinks.map(linkTxt => {
        const match = props.match.params.component === linkTxt ? true : false;
        return (
            <Link key={linkTxt} to={`/${linkTxt}`} className={match ? "plain-link link-match" : "plain-link"}>
                {linkTxt}
            </Link>
        );
    });

    return (
        <div className="sidebar">
            {links}
        </div>
    );
}

SideBar.propTypes = {
    match: PropTypes.object
}