import { Request, Response } from "express";
import catchAsync from "../../../../../../utils/catchAsync";

import { CreateRefrigeratorUseCase } from "./CreateRefrigeratorUseCase";

class CreateRefrigeratorController {
  constructor(private createRefrigeratorUseCase: CreateRefrigeratorUseCase) {}

  handle = catchAsync(async (req: Request, res: Response) => {
    const refrigerator = await this.createRefrigeratorUseCase.execute(req.body);

    return res.status(201).json(refrigerator);
  });
}

export { CreateRefrigeratorController };
