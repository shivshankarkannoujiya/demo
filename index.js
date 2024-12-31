import express from "express"
import dotenv from "dotenv"
const app = express();

dotenv.config({
    path: "./.env"
})


app.get("/getUsers", (_, res) => {
    return res
        .status(200)
        .json({
            username: "Abhishek",
            email: "xyz@gmail.com",
            age: 21
        })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is listening at port:${PORT}` )
})




