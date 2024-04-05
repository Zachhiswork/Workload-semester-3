// Import necessary libraries and modules
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const ejs = require('ejs');

// Create an instance of the Express application
const app = express();

// Configure middleware to parse URL-encoded data and set the view engine to EJS
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Middleware for parsing JSON in the request body
app.use(express.json());

// Define a route for the home page rendering a contact form
app.get('/', (request, response) => {
    response.render('contact', { errors: '' });
});

// Define a route for handling form submission and sending emails
app.post('/send',
    [
        // Validation for form fields using express-validator
        check('name').notEmpty().withMessage('Name is required'),
        check('email').isEmail().withMessage('Invalid Email Address'),
        check('subject').notEmpty().withMessage('Subject is required'),
        check('message').notEmpty().withMessage('Message is required')
    ], (request, response) => {

        // Check for validation errors
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            // If there are errors, render the contact form with error messages
            response.render('contact', { errors: errors.mapped() });
        } else {
            // If no errors, create a transporter using nodemailer and send the email
            const transporter = nodemailer.createTransport({
                service: 'outlook',
                auth: {
                    user: 'Zacharia.abdi@outlook.com',
                    pass: 'Nyagawa6598'
                }
            });

            // Define email options using form data
            const mailOption = {
                from: request.body.email,
                to: 'jm6078390@gmail.com',
                subject: request.body.subject,
                text: request.body.message
            };

            // Send the email and redirect to the success page on success
            transporter.sendMail(mailOption, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    response.redirect('/success');
                }
            });
        }
    });

// Define a route for the success page
app.get('/success', (request, response) => {
    response.send('<h1>Your Message was Successfully Sent!</h1>');
});

// Start the server on port 3000 and log a message when the server is running
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
