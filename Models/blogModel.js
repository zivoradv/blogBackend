const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a title"]
        },
        author: {
            type: String,
            required: [true, "Please enter a author"]
        },
        body: {
            type: String,
            required: [true, "Please add a body"]
        },
        likes: {
            type: Number,
            required: false,
            default: 0
        }
    }
) 

const Blog = mongoose.model("blog", blogSchema)

module.exports = Blog;