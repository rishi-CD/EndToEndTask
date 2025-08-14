import axios from "axios";

const API_URL = "http://localhost:5000/api"; 

export interface Meal {
  uniquekey: number;         
  date: string;                
  meal_name: string;           
  taken_weight_grams: string;  
  meal_type: string;           
  calories?: number;           

}


export const addMeal = (meal: Meal) => {
  return axios.post(`${API_URL}/addfood`, meal);
};

export const getMealsByUser = (uniquekey: number) => {
  return axios.get(`${API_URL}/addfood/user/${uniquekey}`);
};

export const updateMeal = (id: number, meal: Partial<Meal>) => {
  return axios.put(`${API_URL}/addfood/${id}`, meal);
};


export const deleteMeal = (id: number) => {
  return axios.delete(`${API_URL}/addfood/${id}`);
};
