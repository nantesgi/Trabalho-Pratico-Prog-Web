import { Request, Response } from "express";
import catchAsync from "../../../../../../utils/catchAsync";

import { CreateGameUseCase } from "./CreateGameUseCase";

class CreateGameController {
  constructor(private createGameUseCase: CreateGameUseCase) {}

  handle = catchAsync(async (req: Request, res: Response) => {
    const game = await this.createGameUseCase.execute(req.body);

    return res.status(201).json(game);
  });
}

export { CreateGameController };
