import express from "express";
import userRoutes from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

//craeting server
export const app = express();

config({
  path: "./data/config.env",
});
//Using Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//Using Routes
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Using Error Middleware
app.use(errorMiddleware);
