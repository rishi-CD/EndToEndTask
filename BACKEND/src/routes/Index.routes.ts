import { Router } from "express";
import loginRoutes from "./Login.routes";
import registerRoutes from "./Register.routes";
import addFoodRoutes from "./Addfood.routes";

const router = Router();

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/addfood", addFoodRoutes);

export default router;
