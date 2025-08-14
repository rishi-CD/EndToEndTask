import "reflect-metadata";
import { DataSource } from "typeorm";
import { Login } from "../entities/Loginmodel";
import { Register } from "../entities/Registermodel";
import { AddFood } from "../entities/Addfoods";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, 
  logging: false,
  entities: [Login, Register, AddFood],
});