import express from 'express'
import cors from "cors"
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/todos", (req, res)=>{
    return res.status(200).json("hello world")
})

app.listen(3000, ()=>{
    console.log("API no ar!")
})