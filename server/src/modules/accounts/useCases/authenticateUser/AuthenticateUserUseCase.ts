import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuario exite
    const user = await this.usersRepository.findByCPFOrEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    // Senha está correta
    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({}, "1b55f8b8c91c5b3a5775d256f0e9a963", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
