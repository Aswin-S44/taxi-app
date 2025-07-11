import { Request, Response } from "express";
import { db } from "../../../repository/src/db/config/setup";
import { Users } from "../../../repository/src/schemas/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export const SignUp = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, password, role, languagePreference } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !role ||
      !languagePreference
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email));

    if (existingUser.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.insert(Users).values({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
      languagePreference,
    });

    return res.status(201).json({ message: "User registered successsfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
