import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
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
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
