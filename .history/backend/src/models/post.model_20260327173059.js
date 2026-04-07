import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
    },
         description: {
            type: String,
            required: true, 
    {
        timestamps: true,
    }

)

export default mongoose.model('Post', postSchema);