import express, { Request, Response } from "express";
import cors from "cors";
require("dotenv").config();
import session from "express-session";
import RiderRouter from "./routes/riders/index";
import DriverRouter from "./routes/drivers/index";
import AuthRouter from "./routes/auth/index";

const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);

// Routes configuration
app.use("/api/v1/rider", RiderRouter);
app.use("/api/v1/driver", DriverRouter);
app.use("/api/v1/auth", AuthRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Node app is running....");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
