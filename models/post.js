const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = Schema(
  {
    title: { type: String },
    description: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "users" }
  },
  { timestamps: true }
)

module.exports = mongoose.model("posts", postSchema)
