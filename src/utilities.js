export function getLastURLSegment(url) {
    const segments = url.split("/");
    return segments[segments.length - 1];
}

export function transformContracts(data) {
    return data.map(contract => {
        return {
            contract: contract.id,
            vendor: contract.vendor,
            amount: contract.items.reduce((accum, item) => accum + item.amount),
            deposit: contract.deposit,
            closed: contract.items.reduce((accum, item) => accum && item.closed)
        };
    });
}

export const transformRules = {
    contracts: transformContracts,
    invoices: (data) => data,
    items: (data) => data,
    vendors: (data) => data,
    containers: (data) => data,
    shipments: (data) => data
};