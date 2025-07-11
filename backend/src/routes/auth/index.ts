import express, { Request, Response } from "express";
import { SignUp } from "../../controllers/auth/SignUp";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Auth api called");
});

router.post("/register", SignUp);

export default router;
