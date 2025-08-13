import { Request, Response } from "express";
import {getAllLoginsService,getLoginByIdService,updateLoginService,deleteLoginService,loginUserService,} from "../services/Login.service";

export const getAllLogins = async (req: Request, res: Response) => {
  try {
    const users = await getAllLoginsService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};

export const getLoginById = async (req: Request, res: Response) => {
  try {
    const user = await getLoginByIdService(Number(req.params.id));
    if (!user) return res.status(404).json({ error: "Login not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};

export const updateLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const updated = await updateLoginService(Number(req.params.id), email, password);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};


export const deleteLogin = async (req: Request, res: Response) => {
  try {
    await deleteLoginService(Number(req.params.id));
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await loginUserService(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: String(error) });
  }
};
