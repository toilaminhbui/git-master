const { connectDB } = require("./db")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const routerPost = require("./routers/post")
const routerUser = require("./routers/user")
const routerAuth = require("./routers/auth")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Bùi Văn Minh nha bà con" })
})
app.get("/api/post", (req, res) => {
  res.send("hello")
})
app.use("/api/user", routerUser)
app.use("/api/auth", routerAuth)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
