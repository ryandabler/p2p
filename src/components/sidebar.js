import React from "react";

import "./sidebar.css";

export default function SideBar(props) {
    return (
        <div className="sidebar">
            <div>Vendors</div>
            <div>Items</div>
            <div>Contracts</div>
            <div>Invoices</div>
            <div>Containers</div>
            <div>Shipments</div>
            <div>Payments</div>
        </div>
    );
}