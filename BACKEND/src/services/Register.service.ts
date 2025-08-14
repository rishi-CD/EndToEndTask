import { AppDataSource } from "../dbconfigs/Database";
import { Login } from "../entities/Loginmodel";
import { Register } from "../entities/Registermodel";

export const getAllRegistersService = async () => {
  return await AppDataSource.getRepository(Register).find({ order: { id: "ASC" } });
};

export const getRegisterByIdService = async (id: number) => {
  return await AppDataSource.getRepository(Register).findOneBy({ id });
};

export const createRegisterService = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  console.log(password, confirmPassword)
  if (password !== confirmPassword) throw new Error("Passwords do not match");

  const loginRepo = AppDataSource.getRepository(Login);
  const registerRepo = AppDataSource.getRepository(Register);

  const existing = await loginRepo.findOneBy({ email });
  if (existing) throw new Error("Email already exists");

  const login = loginRepo.create({ email, password });
  await loginRepo.save(login);

  const register = registerRepo.create({
    id: login.id,
    name,
    email,
    password,
    confirmPassword,
  });
  await registerRepo.save(register);

  return { login, register };
};

export const updateRegisterService = async (
  id: number,
  name?: string,
  email?: string,
  password?: string,
  confirmPassword?: string
) => {
  const registerRepo = AppDataSource.getRepository(Register);
  const loginRepo = AppDataSource.getRepository(Login);

  const register = await registerRepo.findOneBy({ id });
  if (!register) throw new Error("User not found");

  if (password && confirmPassword && password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  register.name = name ?? register.name;
  register.email = email ?? register.email;
  register.password = password ?? register.password;
  register.confirmPassword = confirmPassword ?? register.confirmPassword;
  await registerRepo.save(register);

  const login = await loginRepo.findOneBy({ id });
  if (login) {
    login.email = register.email;
    login.password = register.password;
    await loginRepo.save(login);
  }

  return register;
};

export const deleteRegisterService = async (id: number) => {
  const registerRepo = AppDataSource.getRepository(Register);
  const loginRepo = AppDataSource.getRepository(Login);

  const register = await registerRepo.findOneBy({ id });
  if (!register) throw new Error("User not found");

  await registerRepo.remove(register);

  const login = await loginRepo.findOneBy({ id });
  if (login) await loginRepo.remove(login);

  return true;
};