let request;
let db;
let version = 1;

export const initDB = () => {
    return new Promise((resolve) => {
        request = indexedDB.open('NotesDB', version);

        request.onupgradeneeded = () => {
            db = request.result;

            if (!db.objectStoreNames.contains('notesStore')) {
                db.createObjectStore('notesStore', {keyPath: 'id'});
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

export const addData = (storeName, data) => {
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

export const getStoreData = (storeName) => {
    return new Promise((resolve) => {
        request = indexedDB.open('NotesDB');

        request.onsuccess = () => {
            db = request.result;
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const res = store.getAll();
            res.onsuccess = () => {
                resolve(res.result.sort((a, b) => a.date > b.date ? -1 : 1));
            };
        };
    });
};

export const updateData = (storeName, key, data) => {
    return new Promise((resolve) => {
        request = indexedDB.open('NotesDB', version);

        request.onsuccess = (e) => {
                db = request.result;
                const tx = db.transaction(storeName, 'readwrite');
                const store = tx.objectStore(storeName);
                const res = store.get(key);
                res.onsuccess = () => {
                    const newData = {...res.result, ...data};
                    store.put(newData);
                    resolve(newData);
                };
                res.onerror = () => {
                    resolve(null);
                }

        };
    });
};

export const deleteData = (storeName, key) => {
    return new Promise((resolve) => {
        request = indexedDB.open('NotesDB', version);

        request.onsuccess = () => {
            db = request.result;
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            const res = store.delete(key);
            res.onsuccess = () => {
                resolve(true);
            };
            res.onerror = () => {
                resolve(false);
            }
        };
    });
};