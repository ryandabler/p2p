import React from "react";

import "./new-contract.css";

export default function NewContract() {
    return (
        <div className="new-contract">
            <form className="new-contract-form">
                <label htmlFor="contractId">Contract</label>
                <input id="contractId" name="id" />
                <label htmlFor="vendorName">Vendor</label>
                <input id="vendorName" name="vendor" />
                <label htmlFor="contractDate">Date</label>
                <input id="contractDate" name="date" />
                <label htmlFor="contractDeposit">Deposit</label>
                <input id="contractDeposit" name="deposit" />
            </form>
        </div>
    )
}