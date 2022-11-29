import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../../../utils/catchAsync";

import { CheckoutProductUseCase } from "./CheckoutProductUseCase";

class CheckoutProductController {
  constructor(private checkoutProductUseCase: CheckoutProductUseCase) {}

  handle = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const purchase = await this.checkoutProductUseCase.execute(
        req.body.products,
        req.params.userId
      );

      return res.status(201).json(purchase);
    }
  );
}

export { CheckoutProductController };
