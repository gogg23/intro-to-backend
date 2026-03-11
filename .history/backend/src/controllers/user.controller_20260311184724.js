import {User} from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {

        const{username, email, password} = req.body; 

        // basic validation

        if(!username || !email || !password){
            return 
        }

    } catch (error) {

    }
} 

