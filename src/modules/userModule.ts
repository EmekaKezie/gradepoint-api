import { Request, Response } from "express";
import { AppDataSource } from "../datasource";
import { gradepoint_user } from "../entities/gradepoint_user";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const userRepository = AppDataSource.getRepository(gradepoint_user);
      const users = await userRepository.find();
      res.status(200).json(users); // Ensure `res` is correctly typed
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const userRepository = AppDataSource.getRepository(gradepoint_user);

  const newUser = userRepository.create({ name, email });
  await userRepository.save(newUser);

  res.status(201).json(newUser);
};
