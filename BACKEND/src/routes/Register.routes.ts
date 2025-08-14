import { Router } from "express";
import {
  getRegisters,
  getRegisterById,
  createRegister,
  updateRegister,
  deleteRegister
} from "../controllers/Registercontrollers";

const router = Router();

router.get("/", getRegisters);
router.get("/:id", getRegisterById);
router.post("/", createRegister);
router.put("/:id", updateRegister);
router.delete("/:id", deleteRegister);

export default router;