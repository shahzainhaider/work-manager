import mongoose from "mongoose"

export const connectDb = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URL,{
            dbName:'work_manager'
        });
        console.log('Database connected')

    } catch (error) {
        console.log('failed to connect with db')
    }
}