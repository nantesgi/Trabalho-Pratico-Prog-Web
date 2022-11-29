import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByCPFOrEmail(email: string, cpf?: string): Promise<User | null>;
}

export { IUsersRepository };
