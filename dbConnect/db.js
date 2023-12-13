import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

export default dbConnect;
