import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Login } from "./Login.model";

export type MealType = "snack" | "lunch" | "breakfast" | "dinner";

@Entity({ name: "AddFood" })
export class AddFood {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uniquekey: number; 

  @Column({ type: "date" })
  date: string;

  @Column()
  meal_name: string;

  @Column({ type: "float" })
  taken_weight_grams: number;

  @Column({ type: "enum", enum: ["snack", "lunch", "breakfast", "dinner"] })
  meal_type: MealType;

  @ManyToOne(() => Login, (login) => login.foods, { onDelete: "CASCADE" })
  @JoinColumn({ name: "uniquekey" })
  login: Login;
}
