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

