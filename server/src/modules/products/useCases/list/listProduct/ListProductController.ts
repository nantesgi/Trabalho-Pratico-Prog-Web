import { Request, Response } from "express";
import catchAsync from "../../../../../../utils/catchAsync";

import { ListProductUseCase } from "./ListProductUseCase";

class ListProductController {
  constructor(private listProductUseCase: ListProductUseCase) {}

  handle = catchAsync(async (req: Request, res: Response) => {
    const products = await this.listProductUseCase.execute(
      req.params.searchField,
      req.query
    );

    return res.status(200).json(products);
  });
}

export { ListProductController };
