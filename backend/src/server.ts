import express, { Request, Response } from "express";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Node app is running....");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
