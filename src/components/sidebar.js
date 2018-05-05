import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

export default function SideBar(props) {
    return (
        <div className="sidebar">
            <Link to={"/vendors"} className="plain-link">Vendors</Link>
            <Link to={"/items"} className="plain-link">Items</Link>
            <Link to={"/contracts"} className="plain-link">Contracts</Link>
            <Link to={"/invoices"} className="plain-link">Invoices</Link>
            <Link to={"/containers"} className="plain-link">Containers</Link>
            <Link to={"/shipments"} className="plain-link">Shipments</Link>
            <Link to={"/payments"} className="plain-link">Payments</Link>
        </div>
    );
}