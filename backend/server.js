import http from "http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Working"));
app.use("/users", userRoutes);

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
