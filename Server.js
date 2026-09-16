import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import chatbotroutes from "./routes/chatbotroutes.js";

dotenv.config();

console.log("EMAIL USER:", process.env.EMAIL_USER ? "Loaded" : "Missing");
console.log("EMAIL PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.use("/api", contactRoutes);
app.use("/api", chatbotroutes);

export default app;