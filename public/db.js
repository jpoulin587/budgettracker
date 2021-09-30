let db;

const request = window.indexedDB.open("BudgetStore");

request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objective = db.createObjectStore("BudgetStore", {
        autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.result;

    if (navigator.onLine) {
        checkDatabase();      
    }
};

request.onerror = function (event) {
    console.log(event.target.errorCode)
};

function saveRecord (record) {
    const transaction = db.transaction(["BudgetStore"], "readwrite");
    const store = transaction.objectStore("BudgetStore");
    store.add (record);
};

function checkDatabase() {
    const transaction = db.transaction(["BudgetStore"], "readwrite");
    const store = transaction.objectStore("BudgetStore");
    const getAll = store.getAll

    
}