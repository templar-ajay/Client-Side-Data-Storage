let db;
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const form = document.querySelector('form');

window.onload = () => {
    let request = window.indexedDB.open('contacts', 1);

    request.onerror = function() {
        console.log('Database failed to open');
    }

    request.onsuccess = function() {
        console.log('Database opened successfully');
        
        db = request.result;
    }

    request.onupgradeneeded = function(e) {
        let db = e.target.result;

        let objectStore = db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true});

        objectStore.createIndex('firstName', 'firstName', { unique: false});
        objectStore.createIndex('lastName', 'lastName', { unique: false});

        console.log('Database setup complete');
        
    }

    form.onsubmit = addData;

    function addData(e) {
        e.preventDefault();

        let newItem = { firstName: firstNameInput.value, lastName: lastNameInput.value};

        let transaction = db.transaction(['contacts'], 'readwrite');

        let objectStore = transaction.objectStore('contacts');

        let request = objectStore.add(newItem);

        request.onsuccess = () => {
            firstNameInput.value = '';
            lastNameInput.value = '';
        };

        transaction.oncomplete = () => {
            console.log('Transaction completed on the database');   
        }

        transaction.onerror = () => {
            console.log('Transaction not completed, error!!!');
        }
    }
}