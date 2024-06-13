import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


const ConnectDB = async () =>{
    try {
        const connectedDb = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Mongodb Connected Succesfully", connectedDb.connection.host)
    } catch (error) {
        console.log("Mongodb Connection Failed", error)
    }
}

export default ConnectDB