import { MongoClient } from "mongodb";

let client = null;
const uri = process.env.MONGODB_URI
const db = process.env.MONGODB_DB

export const getConn = async () => {
    const uri = process.env.MONGODB_URI;
    if(!client) client = await new MongoClient(uri).connect();
    
    return client;
}

export const getDb = async () => {
    const conn = await getConn();
    return conn.db(db);
}