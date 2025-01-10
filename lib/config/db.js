import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://bhoomibhoomi596:bhoomi%402005@cluster0.zl2fu.mongodb.net/blog-app',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 10000, // Wait for 10 seconds to connect
            }
        );
        console.log("DB connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

