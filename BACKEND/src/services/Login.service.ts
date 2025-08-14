import { AppDataSource } from "../dbconfigs/Database";
import { Login } from "../entities/Loginmodel";

export const getAllLoginsService = async () => {
  return await AppDataSource.getRepository(Login).find({ order: { id: "ASC" } });
};

export const getLoginByIdService = async (id: number) => {
  return await AppDataSource.getRepository(Login).findOneBy({ id });
};

export const updateLoginService = async (id: number, email?: string, password?: string) => {
  const repo = AppDataSource.getRepository(Login);
  const user = await repo.findOneBy({ id });
  if (!user) throw new Error("User not found");

  if (email) user.email = email;
  if (password) user.password = password;

  return await repo.save(user);
};

export const deleteLoginService = async (id: number) => {
  const repo = AppDataSource.getRepository(Login);
  const user = await repo.findOneBy({ id });
  if (!user) throw new Error("User not found");

  await repo.remove(user);
  return true;
};

export const loginUserService = async (email: string, password: string) => {
  const repo = AppDataSource.getRepository(Login);
  const user = await repo.findOneBy({ email });
  if (!user) throw new Error("Email not found");
  if (user.password !== password) throw new Error("Invalid password");

  return { id: user.id, email: user.email };
};