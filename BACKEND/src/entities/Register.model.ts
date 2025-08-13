import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Login } from "./Login.model";

@Entity({ name: "RegisterTable" })
export class Register {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  confirm_password: string;

  @OneToOne(() => Login, (login) => login.register, { onDelete: "CASCADE" })
  @JoinColumn({ name: "id" })
  login: Login;
}
