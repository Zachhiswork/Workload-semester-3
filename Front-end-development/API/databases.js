const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQLite database.');
});
db.run('CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, authorTEXT)', (err) => {
    if (err) {
        // Handle table creation error
    } else {
        // Table created
    }
});
module.exports = db;  // Export the database instance