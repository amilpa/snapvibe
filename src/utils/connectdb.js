import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }
  await mongoose.connect(process.env.MONGO_URI);
  await mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
}

export async function disconnectDB() {
  if (!mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.disconnect();
}
