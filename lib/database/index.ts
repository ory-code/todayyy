import mongoose from 'mongoose';

const MONGO_DB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || {conn: null, promise: null};

export const connectDB = async () => {
    if  (cached.conn) return cached.conn;

    if (!MONGO_DB_URI) throw new Error("MONGODB_URI missing !")

    cached.promised = cached.promised || mongoose.connect(MONGO_DB_URI, {
        dbName: 'todayyy',
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn
}