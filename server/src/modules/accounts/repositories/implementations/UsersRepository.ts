import { PrismaClient } from "@prisma/client";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = new PrismaClient();
  }

  async create({
    name,
    cpf,
    email,
    password,
    payment,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.repository.user.create({
      data: {
        name,
        cpf,
        email,
        password,
        payment: {
          create: {
            name: payment.name,
            card_number: payment.card_number,
            cpf: payment.cpf,
            expiresAt: payment.expiresAt,
            cvv: payment.cvv,
          },
        },
      },
      include: {
        payment: true,
      },
    });

    return user;
  }

  async findByCPFOrEmail(email: string, cpf?: string): Promise<User | null> {
    const user = await this.repository.user.findFirst({
      where: {
        OR: [{ cpf }, { email }],
      },
      include: {
        payment: true,
      },
    });

    return user;
  }
}

export { UsersRepository };
