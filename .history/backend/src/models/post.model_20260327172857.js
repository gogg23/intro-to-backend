import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        name: {
    },

    {
        timestamps: true,
    }

)

export default mongoose.model('Post', postSchema);