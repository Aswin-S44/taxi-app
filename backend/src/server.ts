import express, { Request, Response } from "express";
import cors from "cors";
require("dotenv").config();

import RiderRouter from "./routes/riders/index";
import DriverRouter from "./routes/drivers/index";

const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes configuration
app.use("/api/v1/rider", RiderRouter);
app.use("/api/v1/driver", DriverRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Node app is running....");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
