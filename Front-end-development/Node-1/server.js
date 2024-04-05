// Import the 'express' library and create an instance of the Express application
const express = require('express');
const app = express();

// Define a route for the home page that sends a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Start the server on port 3000 and log a message when the server is running
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Define routes for 'about' and 'contact' pages, sending HTML files in response
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Import the 'nodemailer' library for sending emails
var nodemailer = require('nodemailer');

// Create a transporter using Outlook service and authentication credentials
var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'zacharia.abdi@outlook.com',
        pass: 'Superhero12'
    }
});

// Define email options, including sender, recipient, subject, and text content
var mailOptions = {
    from: 'Zacharia.abdi@outlook.com',
    to: 'owen.sevriens@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Showing you that I can code!!! :DDDDDD!'
};

// Send the email using the defined transporter and options
transporter.sendMail(mailOptions, function (error, info) {
    // Check for errors during email sending and log the result
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
