import { hash } from "bcryptjs";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    cpf,
    email,
    password,
    payment,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByCPFOrEmail(
      email,
      cpf
    );

    if (userAlreadyExists) {
      throw new Error("CPF or email already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      cpf,
      email,
      password: passwordHash,
      payment,
    });

    return user;
  }
}

export { CreateUserUseCase };
