import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        na
    },

    {
        timestamps: true,
    }

)

export default mongoose.model('Post', postSchema);