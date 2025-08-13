import { Request, Response } from "express";
import {getAllRegistersService,getRegisterByIdService,createRegisterService,updateRegisterService, deleteRegisterService,} from "../services/Register.service";

export const getRegisters = async (req: Request, res: Response) => {
  try {
    const registers = await getAllRegistersService();
    res.json(registers);
  } catch (error) {
    res.status(500).json({ error: String(error) });
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
    const { name, email, password, confirm_password } = req.body;
    const result = await createRegisterService(name, email, password, confirm_password);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};

export const updateRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirm_password } = req.body;
    const updated = await updateRegisterService(
      Number(req.params.id),
      name,
      email,
      password,
      confirm_password
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
