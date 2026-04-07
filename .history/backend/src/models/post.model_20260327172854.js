import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        n
    },

    {
        timestamps: true,
    }

)

export default mongoose.model('Post', postSchema);