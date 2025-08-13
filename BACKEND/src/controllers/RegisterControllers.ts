import { Request, Response } from "express";
import { AppDataSource } from "../dbconfigs/database";
import { Register } from "../entities/Register.model";
import {getAllRegistersService,getRegisterByIdService,createRegisterService,updateRegisterService, deleteRegisterService,} from "../services/Register.service";

export const getRegisters = async (req: Request, res: Response) => {
  try {
    const registers = await getAllRegistersService();
    res.json(registers);
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};
export const registerUser = async (req: Request, res: Response) => {
  try {
      const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Error: Passwords do not match" });
    }
    const registerRepo = AppDataSource.getRepository(Register);
    const newUser = registerRepo.create({
      name,
      email,
      password,
      confirmPassword 
    });

    await registerRepo.save(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getRegisterById = async (req: Request, res: Response) => {
  try {
    const register = await getRegisterByIdService(Number(req.params.id));
    if (!register) return res.status(404).json({ error: "Register not found" });
    res.json(register);
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};

export const createRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const result = await createRegisterService(name, email, password, confirmPassword);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};

export const updateRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const updated = await updateRegisterService(
      Number(req.params.id),
      name,
      email,
      password,
      confirmPassword
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};

export const deleteRegister = async (req: Request, res: Response) => {
  try {
    await deleteRegisterService(Number(req.params.id));
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};
