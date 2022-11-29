import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../../../utils/catchAsync";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle = catchAsync(
    async (
      request: Request,
      response: Response,
      next: NextFunction
    ): Promise<Response> => {
      const { name, cpf, email, password, payment } = request.body;

      const user = await this.createUserUseCase.execute({
        name,
        cpf,
        email,
        password,
        payment,
      });

      return response.status(201).json(user);
    }
  );
}

export { CreateUserController };
