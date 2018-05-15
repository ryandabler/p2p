export function loadedComponent(url) {
    return url.split("/")[1];
}

export function transformContracts(data) {
    return data.map(contract => {
        return {
            contract: contract.id,
            vendor: contract.vendor,
            amount: contract.details.reduce((accum, item) => accum + item.price * item.quantity, 0),
            deposit: contract.deposit,
            closed: contract.details.reduce((accum, item) => accum && item.closed, true)
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

export function extractFormValues(elements, initObj = {}) {
    const newValues = {};
    Object.keys(elements).forEach(key => {
        const name = elements[key].name;
        if (name) newValues[name] = elements[key].value;
    });
    return Object.assign(newValues, initObj);
}

export const structureFormValues = {
    contracts(flatObj) {
        const structuredObj = {};
        const lineItems = [];
        Object.keys(flatObj).forEach(key => {
            const val = flatObj[key];

            if (key.match(/[\d]+-[a-zA-Z]+/)) {
                const [ idx, prop ] = key.split("-");

                const item = lineItems.find(item => item[0] === idx);
                item ? item[1][prop] = val
                    : lineItems.push( [idx, { [prop]: val } ]);
            } else {
                structuredObj[key] = val;
            }
        });

        const flattenedLineItems = lineItems.sort((a, b) => a[0] - b[0])
            .map(item => item[1]);

        return lineItems.length > 0
            ? { ...structuredObj, details: flattenedLineItems }
            : structuredObj;
    }
}

export function generateEmptyObject(objSchema) {
    return objSchema.reduce((emptyObj, property) => {
        emptyObj[property.name] = "";
        return emptyObj;
    }, {});
}