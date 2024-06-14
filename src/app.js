import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json({limit: "16kb"})) // accept the data in json format set limit also
app.use(express.urlencoded({extended: true, limit: "16kb"})) // url data encode
app.use(express.static("public"))

app.use(cookieParser())

import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users", userRouter)


export {app}