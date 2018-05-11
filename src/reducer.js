import {
    LOAD_DATA, ADD_NEW_FORM_LINE
} from "./actions";

const initialState = {
    vendors: [],
    items: [],
    contracts: [],
    invoices: [],
    containers: [],
    shipments: [],
    form: []
}

export const reducer = (state = initialState, action) => {
    if (action.type === LOAD_DATA) {
        return Object.assign({}, state, { [action.store]: action.data });
    } else if (action.type === ADD_NEW_FORM_LINE) {
        const newLine = {
            ...action.fields
        };

        return Object.assign({}, state, { form: [ ...state.form, newLine ] });
    }
    
    return state;
}