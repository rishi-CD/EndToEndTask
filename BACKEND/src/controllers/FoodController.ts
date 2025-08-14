import { Request, Response } from "express";
import {getAllFoodsService,getFoodsByUserService, createFoodService, updateFoodService, deleteFoodService,} from "../services/Food.service";

export const getAllFoods = async (req: Request, res: Response) => {
  try {
    const foods = await getAllFoodsService();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};

export const getFoodsByUser = async (req: Request, res: Response) => {
  try {
    const foods = await getFoodsByUserService(Number(req.params.uniquekey));
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};

export const createFood = async (req: Request, res: Response) => {
  try {
    const { uniquekey, date, meal_name, taken_weight_grams, meal_type } = req.body;
    const food = await createFoodService(uniquekey, date, meal_name, taken_weight_grams, meal_type);
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const { date, meal_name, taken_weight_grams, meal_type } = req.body;
    const updated = await updateFoodService(
      Number(req.params.id),
      date,
      meal_name,
      taken_weight_grams,
      meal_type
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    await deleteFoodService(Number(req.params.id));
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
};