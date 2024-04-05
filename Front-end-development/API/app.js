const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Create SQLite database instance
const db = new sqlite3.Database('books.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create 'books' table if not exists
        db.run('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title TEXT, author TEXT)', (err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }
});

app.use(express.json());
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/books', (req, res) => {
    const { title, author } = req.body;

    db.run(`INSERT INTO books (title, author) VALUES (?, ?)`, [title, author], function (err) {
        if (err) {
            return console.log(err.message);
        }

        res.send(`A book has been added with ID ${this.lastID}`);
    });
});

app.get('/books', (req, res) => {
    db.all(`SELECT * FROM books`, [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.json(rows);
    });
});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;

    db.run(`DELETE FROM books WHERE id = ?`, id, function (err) {
        if (err) {
            return console.error(err.message);
        }

        res.send(`Book deleted with ID: ${id}`);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});