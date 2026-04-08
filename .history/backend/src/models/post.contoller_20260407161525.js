import {post} from '../models/post.model.js'; 

// Create a post

const createPost = async (req, res) => {
    try {
        const {name, description, age} = req.body; 

        if(name || description || age) {
            const newPost = new post({name, description, age});
            await newPost.save();
            res.status(201).json({message: 'Post created', post: newPost});
        } else {
            res.status(400).json({message: 'All fields are required'});
        }
    }
    catch (error) {

    }