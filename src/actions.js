export const LOAD_DATA = "LOAD_DATA";
export const loadData = (data, store) => ({
    type: LOAD_DATA,
    data,
    store
});