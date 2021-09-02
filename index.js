const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get("/", (req, res) => {
  res.json({ status: "success", message: "hello world" })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
