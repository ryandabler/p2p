import { DB_NAME, DB_VERSION } from "./config";

// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
const indexedDB = window.indexedDB ||
                  window.mozIndexedDB ||
                  window.webkitIndexedDB ||
                  window.msIndexedDB ||
                  window.shimIndexedDB;

function initializeDB(db) {
    db.createObjectStore("vendors", {keyPath: "name"});
    db.createObjectStore("items", {keyPath: "name"});
    db.createObjectStore("contracts", {keyPath: "id"});
    db.createObjectStore("invoices", {keyPath: [ "vendor", "invoiceId" ]});
    db.createObjectStore("containers", {keyPath: "containerId"});
    db.createObjectStore("shipments", {autoIncrement: true});
    db.createObjectStore("payments", {autoIncrememt: true});
}

function openDB(dbName, version) {
    const open = indexedDB.open(dbName, version);

    open.onupgradeneeded = (event) => {
        const db = event.target.result;

        initializeDB(db);
    }

    return open;
}

function closeDB(db) {
    db.close();
}

function initiateTransaction(db, objectStore, mode) {
    const transaction = db.transaction(objectStore, mode);
    transaction.oncomplete = () => {
        closeDB(db);
    }

    return transaction;
}

export function addToDB(obj, objectStore) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        store.add(obj);
    }
}

export function getFromDB(key, objectStore, callbackFn) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        const get = store.get(key);

        get.onsuccess = () => {
            callbackFn(get.result);
        };
    }
}

export function getAllFromDB(objectStore, callbackFn) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        const get = store.getAll();

        get.onsuccess = () => {
            callbackFn(get.result);
        };
    }
}

export function getFromDBViaIndex(objectStore, idxName, idxValue, callbackFn) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        const idx = store.index(idxName);
        
        const getRequest = idx.getAll(idxValue);
        getRequest.onsuccess = () => {
            callbackFn(getRequest.result);
        }
    }
}

export function updateRecordInDB(obj, objectStore) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        store.put(obj);
    }
}

export function deleteFromDB(key, objectStore) {
    const open = openDB(DB_NAME, DB_VERSION);
    open.onsuccess = () => {
        const db = open.result;
        const transaction = initiateTransaction(db, objectStore, "readwrite");
        const store = transaction.objectStore(objectStore);
        store.delete(key);
    }
}