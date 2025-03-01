import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";
import kycRouter from "./routes/kyc.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(
    "mongodb+srv://setgraminc:setgram@cluster0.mn91q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("error seen");
  });

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/auth", authRouter);
app.use("/api/kyc", kycRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
