import dotenv from "dotenv"
import ConnectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

ConnectDB()

.then(() => {
    app.listen(process.env.PORT || 3000 , () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Database Connection Failed" , error);
})