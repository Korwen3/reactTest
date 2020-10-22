import Dexie from 'dexie';

const db = new Dexie('PostDB');
db.version(1).stores({
    db: '++id, content, comment'
});
export default db;