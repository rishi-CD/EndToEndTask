import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Register } from "./Registermodel";
import { AddFood } from "./Addfoods";

@Entity({ name: "LoginTable" })
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Register, (register) => register.login)
  register: Register;

  @OneToMany(() => AddFood, (addFood) => addFood.login)
  foods: AddFood[];
}