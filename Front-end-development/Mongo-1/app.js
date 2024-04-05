require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas', err));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const Post = require('./models/Post'); // Import the Post model
// Define a route to retrieve and display posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find(); // Fetch all posts from the database
        res.json(posts); // Send the posts as a JSON response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Example script or function to add a new post
const createPost = async () => {
    const newPost = new Post({
        title: 'My First Blog Post',
        content: 'This is the content of the blog post...'
    });
    try {
        const savedPost = await newPost.save();
        console.log(savedPost);
    } catch (err) {
        console.error('Error creating the post:', err);
    }
};

createPost();



// views folder rendering packages
