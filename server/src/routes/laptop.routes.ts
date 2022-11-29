import { Router } from "express";
import { createLaptopController } from "../modules/products/useCases/create/createLaptop";

const laptopsRoutes = Router();

laptopsRoutes.post("/", (req, res, next) => {
  return createLaptopController.handle(req, res, next);
});

export { laptopsRoutes };
