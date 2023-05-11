import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "kudosware",
    })
    .then((c) => {
      console.log(`DataBase Connected with ${c.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
};