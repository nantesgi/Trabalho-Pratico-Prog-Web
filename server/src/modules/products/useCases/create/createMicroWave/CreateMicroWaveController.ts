import { Request, Response } from "express";
import catchAsync from "../../../../../../utils/catchAsync";

import { CreateMicroWaveUseCase } from "./CreateMicroWaveUseCase";

class CreateMicroWaveController {
  constructor(private createMicroWaveUseCase: CreateMicroWaveUseCase) {}

  handle = catchAsync(async (req: Request, res: Response) => {
    const microWave = await this.createMicroWaveUseCase.execute(req.body);

    return res.status(201).json(microWave);
  });
}

export { CreateMicroWaveController };
