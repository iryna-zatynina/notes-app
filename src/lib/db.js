let request;
let db;
let version = 1;

export const initDB = () => {
    return new Promise((resolve) => {
        request = indexedDB.open('NotesDB', version);

        request.onupgradeneeded = () => {
            db = request.result;

            if (!db.objectStoreNames.contains('notesStore')) {
                console.log('Creating users store');
                db.createObjectStore('notesStore', { keyPath: 'id' });
            }
        };

        request.onsuccess = (e) => {
            db = request.result;

            version = db.version;
            resolve(request.result);
        };

        request.onerror = (e) => {
            resolve(false);
        };
    });
};

export const addData = (storeName, data)  => {
    return new Promise((resolve) => {
        request = indexedDB.open('NotesDB', version);

        request.onsuccess = () => {
            db = request.result;
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            store.add(data);
            resolve(data);
        };

        request.onerror = () => {
            const error = request.error?.message
            if (error) {
                resolve(error);
            } else {
                resolve('Unknown error');
            }
        };
    });
};


