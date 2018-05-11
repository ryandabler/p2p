import React from "react";

import NewContractLineItem from "./new-contract-line-item";

import "./new-contract.css";

export default function NewContract() {
    return (
        <div className="new-contract">
            <form className="new-contract-form">
                <h2>Main Info</h2>
                <label htmlFor="contractId">Contract Number</label>
                <input id="contractId" name="id" required />
                <label htmlFor="vendorName">Vendor</label>
                <input id="vendorName" name="vendor" required />
                <label htmlFor="contractDate">Date</label>
                <input id="contractDate" name="date" required />
                <label htmlFor="contractDeposit">Deposit</label>
                <input id="contractDeposit" name="deposit" required />

                <h2>Item Info</h2>
                <NewContractLineItem />
            </form>
        </div>
    )
}