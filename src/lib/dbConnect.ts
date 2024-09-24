import mongoose, { connection } from "mongoose";

type ConnectionObject = {
    isConnected ?: Number
 }

const Connection: ConnectionObject = {}

async function dbConnect() : Promise<void>{
    if(Connection.isConnected)
    {
        console.log("Database is Already Connected");
        return;
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URL || "", {});
        Connection.isConnected = db.connections[0].readyState;
        console.log("Database Connected Successfully")

    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}
export default dbConnect;