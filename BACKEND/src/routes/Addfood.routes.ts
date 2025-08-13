import { Router } from "express";
import {getAllFoods,getFoodsByUser,createFood,updateFood, deleteFood} from "../controllers/foodController";

const router = Router();

router.get("/", getAllFoods);
router.get("/user/:uniquekey", getFoodsByUser);
router.post("/", createFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
