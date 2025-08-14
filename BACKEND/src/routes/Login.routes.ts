import { Router } from "express";
import {
  getAllLogins,
  getLoginById,
  updateLogin,
  deleteLogin,
  loginUser
} from "../controllers/Logincontroller";

const router = Router();

router.get("/", getAllLogins);
router.get("/:id", getLoginById);
router.put("/:id", updateLogin);
router.delete("/:id", deleteLogin);
router.post("/action/login", loginUser);
router.post("/", loginUser);

export default router;