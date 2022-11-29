import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../../../utils/catchAsync";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  handle = catchAsync(
    async (
      request: Request,
      response: Response,
      next: NextFunction
    ): Promise<Response> => {
      const { password, email } = request.body;

      const token = await this.authenticateUserUseCase.execute({
        password,
        email,
      });

      return response.json(token);
    }
  );
}

export { AuthenticateUserController };
