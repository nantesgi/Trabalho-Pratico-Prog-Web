import { Request, Response, NextFunction } from "express";

import { CreateBookUseCase } from "./CreateBookUseCase";
import catchAsync from "../../../../../../utils/catchAsync";

class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  handle = catchAsync(async (req: Request, res: Response) => {
    const book = await this.createBookUseCase.execute(req.body);

    return res.status(201).json(book);
  });
}

export { CreateBookController };
