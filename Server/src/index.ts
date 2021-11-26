import express from "express";
import authRoutes from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("DB Connected");
    const app = express();
    app.use(express.json());
    app.use("/auth", authRoutes);

    app.listen(8080, () => {
      console.log(`Now listening to port 8080`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
