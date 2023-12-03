import express from "express";
import cors from "cors";
import "dotenv/config.js";

import contactRoutes from "./routes/contacts.js";
import usersRoutes from "./routes/users.js";
import { authenticateToken } from "./middleware/authenticateToken.js";

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:5000/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.use("/contacts", authenticateToken, contactRoutes);
app.use("/auth", usersRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () =>
  console.log("Server berhasil dirunning di port:" + PORT)
);
