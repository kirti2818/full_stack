require("dotenv").config()

const express = require("express")
const app = express()
const connect = require("./config/db")
const PORT = process.env.PORT;
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
app.use(express.json())
app.use("/users",userRoutes)
app.use(cors())
app.get("/", async(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,async()=>{
    await connect()
    console.log(`http://localhost:${PORT}`)
})