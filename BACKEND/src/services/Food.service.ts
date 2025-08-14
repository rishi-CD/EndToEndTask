import { AppDataSource } from "../dbconfigs/Database";
import { AddFood } from "../entities/Addfoods";
import { Login } from "../entities/Loginmodel";
import { MealType } from "../entities/Addfoods";

export const getAllFoodsService = async () => {
  return await AppDataSource.getRepository(AddFood).find({
    order: { id: "ASC" },
  });
};

export const getFoodsByUserService = async (uniquekey: number) => {
  return await AppDataSource.getRepository(AddFood).find({
    where:{ login: { id: uniquekey } },
     relations: ["login"],
  });
};

export const createFoodService = async (
  uniquekey: number,
  date: string,
  meal_name: string,
  taken_weight_grams: number,
  meal_type: MealType
) => {
  const loginRepo = AppDataSource.getRepository(Login);
  const foodRepo = AppDataSource.getRepository(AddFood);

  const user = await loginRepo.findOneBy({ id: uniquekey });
  if (!user) throw new Error("User does not exist");

  const food = foodRepo.create({
    uniquekey,
    date,
    meal_name,
    taken_weight_grams,
    meal_type,
  });

  return await foodRepo.save(food);
};

export const updateFoodService = async (
  id: number,
  date?: string,
  meal_name?: string,
  taken_weight_grams?: number,
  meal_type?: MealType
) => {
  const foodRepo = AppDataSource.getRepository(AddFood);
  const food = await foodRepo.findOneBy({ id });
  if (!food) throw new Error("Food entry not found");

  food.date = date ?? food.date;
  food.meal_name = meal_name ?? food.meal_name;
  food.taken_weight_grams = taken_weight_grams ?? food.taken_weight_grams;
  food.meal_type = meal_type ?? food.meal_type;

  return await foodRepo.save(food);
};

export const deleteFoodService = async (id: number) => {
  const foodRepo = AppDataSource.getRepository(AddFood);
  const food = await foodRepo.findOneBy({ id });
  if (!food) throw new Error("Food entry not found");

  await foodRepo.remove(food);
  return true;
};