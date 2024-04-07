import mongoose from "mongoose";

export function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }
  mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  mongoose.connection.on("error", (err) => {
    console.log("MongoDB error", err);
  });
}

export function disconnectDB() {
  if (!mongoose.connections[0].readyState) {
    return;
  }
  mongoose.disconnect();
}
