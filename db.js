const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI ||
        "mongodb+srv://admin-db:rFOo35aljQqsc7db@cluster0.f3ryp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true
      }
    )
    console.log("👌 mongoose is connected")
  } catch (err) {
    console.log("🚫", err)
    // process.exit(1)
  }
}
module.exports = { connectDB }
