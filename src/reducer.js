import {
    LOAD_DATA
} from "./actions";

const initialState = {
    vendors: [],
    items: [],
    contracts: [],
    invoices: [],
    containers: [],
    shipments: []
}

export const reducer = (state = initialState, action) => {
    if (action.type === LOAD_DATA) {
        return Object.assign({}, state, { [action.store]: action.data });
    }
    
    return state;
}