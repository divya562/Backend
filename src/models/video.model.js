import mongoose from "mongoose";
import { aggregatePaginate } from "mongoose-aggregate-paginate-v2";
-aggregatePaginate
const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // cloudnary url
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        discription: {
            type: String,
            required: true
        },
        duration: {
            type: Number, //cloudnary
            required: true
        },
        views: {
            type:Number,
            defaoult: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
     timestamps: true 
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)