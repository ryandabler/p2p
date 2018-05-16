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

export const newFormFields = {
    vendors: {
        header: [
            {
                id: "vendorName",
                name: "name",
                required: true,
                label: "Name"
            }, {
                id: "vendorAddress",
                name: "address",
                required: true,
                label: "Address"
            }, {
                id: "vendorCity",
                name: "city",
                required: true,
                label: "City"
            }, {
                id: "vendorState",
                name: "state",
                required: true,
                label: "State"
            }, {
                id: "vendorZIP",
                name: "zip",
                required: true,
                label: "ZIP"
            }, {
                id: "vendorCountry",
                name: "country",
                required: true,
                label: "Country"
            }
        ]
    },
    items: {
        header: [
            {
                id: "itemName",
                name: "name",
                required: true,
                label: "Name"
            }
        ]
    },
    contracts: {
        header: [
            {
                id: "contractId",
                name: "contractId",
                required: true,
                label: "Contract Number"
            }, {
                id: "vendorName",
                name: "vendor",
                required: true,
                label: "Vendor"
            }, {
                id: "contractDate",
                name: "date",
                required: true,
                label: "Date"
            }, {
                id: "contractDeposit",
                name: "deposit",
                required: true,
                label: "Deposit"
            }
        ],
        items: [
            {
                name: "product",
                required: true,
                header: "Product"
            }, {
                name: "quantity",
                required: true,
                header: "Quantity"
            }, {
                name: "price",
                required: true,
                header: "Price"
            }
        ]
    },
    invoices: {
        header: [
            {
                id: "invoiceId",
                name: "id",
                required: true,
                label: "Invoice Number"
            }, {
                id: "vendorName",
                name: "vendor",
                required: true,
                label: "Vendor"
            }, {
                id: "invoiceDate",
                name: "invoiceDate",
                required: true,
                label: "Date"
            }, {
                id: "dueDate",
                name: "dueDate",
                required: true,
                label: "Due Date"
            }
        ],
        items: [
            {
                name: "product",
                required: true,
                header: "Product"
            }, {
                name: "refType",
                required: true,
                header: "Ref Type"
            }, {
                name: "refId",
                required: true,
                header: "Ref Id"
            }, {
                name: "quantity",
                required: true,
                header: "Quantity"
            }, {
                name: "price",
                required: true,
                header: "Price"
            }
        ]
    },
    containers: {
        header: [
            {
                id: "containerId",
                name: "container",
                required: true,
                label: "Container #"
            }, {
                id: "sealNum",
                name: "seal",
                required: true,
                label: "Seal #"
            }, {
                id: "weight",
                name: "weight",
                required: true,
                label: "Weight"
            }
        ]
    },
    shipments: {
        header: [
            {
                id: "shipmentDate",
                name: "shipDate",
                required: true,
                label: "Date"
            }, {
                id: "receivedDate",
                name: "receiveDate",
                required: true,
                label: "Received Date"
            }, {
                id: "carrier",
                name: "carrierId",
                required: true,
                label: "Carrier"
            }, {
                id: "billOfLading",
                name: "bol",
                required: true,
                label: "BOL #"
            }
        ],
        items: [
            {
                name: "container",
                required: true,
                header: "Container #"
            }
        ]
    },
};