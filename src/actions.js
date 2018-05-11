export const LOAD_DATA = "LOAD_DATA";
export const loadData = (data, store) => ({
    type: LOAD_DATA,
    data,
    store
});

export const ADD_NEW_FORM_LINE = "ADD_NEW_FORM_LINE";
export const addNewFormLine = fields => ({
    type: ADD_NEW_FORM_LINE,
    fields
});