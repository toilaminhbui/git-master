const { connectDB } = require("./db")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const routerPost = require("./routers/post")
const routerUser = require("./routers/user")
const routerAuth = require("./routers/auth")

connectDB()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Bùi Văn Minh nha bà con" })
})
app.use("/api/post", routerPost)
app.use("/api/user", routerUser)
app.use("/api/auth", routerAuth)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
