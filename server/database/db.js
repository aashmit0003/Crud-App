import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const Connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/my-crud-app", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};

export default Connection;
