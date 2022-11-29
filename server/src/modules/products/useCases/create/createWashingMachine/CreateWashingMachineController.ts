import { Request, Response } from "express";
import catchAsync from "../../../../../../utils/catchAsync";

import { CreateWashingMachineUseCase } from "./CreateWashingMachineUseCase";

class CreateWashingMachineController {
  constructor(
    private createWashingMachineUseCase: CreateWashingMachineUseCase
  ) {}

  handle = catchAsync(async (req: Request, res: Response) => {
    const washingMachine = await this.createWashingMachineUseCase.execute(
      req.body
    );

    return res.status(201).json(washingMachine);
  });
}

export { CreateWashingMachineController };
