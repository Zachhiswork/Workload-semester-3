# Book Collection Website

This project is a simple website for managing your book collection. It's built using Node.js, SQLite3 as the database, and Postman for API testing.

## Features

- Add new books to your collection
- View a list of all books in your collection
- Update book details
- Delete books from your collection

## Technologies Used

- Node.js: Server-side JavaScript runtime
- SQLite3: Embedded relational database management system
- Postman: API development and testing tool

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone 
   ```
2.  **Navigate to the Project Directory:**

   ```bash
   cd your_repository
   ```
3.  **Install Node.js Modules:**

   ```bash
   npm install
   ```
4.  **Create Database:**

   ```bash
   node databases.js
   ```
5. **Start the Server:**
   ```bash
   npm start
   ```

The server will run at http://localhost:3000.

Open Postman and Test Endpoints:

Import the Postman collection (BookCollection.postman_collection.json) to test the API endpoints.

API Endpoints
GET /books: Get a list of all books in the collection.
GET /books/:id: Get details of a specific book by ID.
POST /books: Add a new book to the collection.
PUT /books/:id: Update details of a specific book by ID.
DELETE /books/:id: Delete a book from the collection by ID.
Usage
Open your web browser and visit http://localhost:3000 to access the Book Collection Website.

Use Postman to interact with the API endpoints for managing your book collection.

