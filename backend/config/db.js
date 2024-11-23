import mongoose from "mongoose";

const connectDB=async()=>
{
    try
    {
        const conn=await mongoose.connect(process.env.MONGO_URI,
        {
            // useNewUrlParser: true,      deprecated
            // useUnifiedTopology: true,    deprecated
            // useCreateIndex: true,    deprecated
            // useFindAndModify: false  deprecated
        });
        console.log(`\nMongoDB Connected : ${conn.connection.host}\n`.cyan.underline);
    }
    catch(error)
    {
        console.error(`\nError connecting to MongoDB", ${error.message}\n`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB;