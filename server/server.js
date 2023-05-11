import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cloudinary from "cloudinary";

//Connect DataBase
connectDB();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Listing on port 4000
app.listen(process.env.PORT, () => {
  console.log(
    `Server Working on ${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});
