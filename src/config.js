export const sideBarLinks = [
    "vendors",
    "items",
    "contracts",
    "invoices",
    "containers",
    "shipments"
];

export const kpis = {
    "contracts": [{
        text: "Open Contract"
    }, {
        text: "Pay Deposits"
    }]
};

export const DB_NAME = "P2P";
export const DB_VERSION = 1;
export const DB_STORES = [
    {
        name: "vendors",
        options: { keyPath: "name" }
    }, {
        name: "items",
        options: { keyPath: "name" }
    }, {
        name: "contracts",
        options: { keyPath: "contractId" }
    }, {
        name: "invoices",
        options: { keyPath: [ "vendor", "invoiceId" ] }
    }, {
        name: "containers",
        options: { keyPath: "containerId" }
    }, {
        name: "shipments",
        options: { autoIncrement: true }
    }
];

export const tableColumns = {
    contracts: [
        "Contract",
        "Vendor",
        "Amount",
        "Deposit",
        "Closed"
    ],
    vendors: [
        "Name",
        "Address",
        "Balance"
    ],
    items: [
        "Name",
        "Total Qty",
        "Unit Cost"
    ],
    invoices: [
        "Invoice",
        "Vendor",
        "Date",
        "Amount",
        "Deposit",
        "Paid",
        "Balance"
    ],
    containers: [
        "Container",
        "Weight",
        "Count",
        "Inspected"
    ],
    shipments: [
        "Carrier",
        "BOL",
        "Ship Date",
        "Port Date",
        "Arrive Date"
    ]
};