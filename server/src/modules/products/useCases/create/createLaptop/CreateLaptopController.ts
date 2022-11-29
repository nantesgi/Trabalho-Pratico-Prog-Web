import { Request, Response } from "express";
import catchAsync from "../../../../../../utils/catchAsync";

import { CreateLaptopUseCase } from "./CreateLaptopUseCase";

class CreateLaptopController {
  constructor(private createLaptopUseCase: CreateLaptopUseCase) {}

  handle = catchAsync(async (req: Request, res: Response) => {
    const laptop = await this.createLaptopUseCase.execute(req.body);

    return res.status(201).json(laptop);
  });
}

export { CreateLaptopController };
