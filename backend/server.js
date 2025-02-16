import http from "http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => res.send("Working"));

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
