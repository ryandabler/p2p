export const sideBarLinks = [
    "vendors",
    "items",
    "contracts",
    "invoices",
    "containers",
    "shipments",
    "payments"
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
        options: { keyPath: "id" }
    }, {
        name: "invoices",
        options: { keyPath: [ "vendor", "invoiceId" ] }
    }, {
        name: "containers",
        options: { keyPath: "containerId" }
    }, {
        name: "shipments",
        options: { autoIncrement: true }
    }, {
        name: "payments",
        options: { autoIncrement: true }
    }, 
];