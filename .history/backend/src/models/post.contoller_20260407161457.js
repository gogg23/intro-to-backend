import {post} from '../models/post.model.js'; 

// Create a post

const createPost = async (req, res) => {
    try {
        const {name, description, age} = req.body; 

        if(name && description && age) {
            const newPost = await post.create({
                name,
                description,
                age
            });
    }
    catch (error) {

    }