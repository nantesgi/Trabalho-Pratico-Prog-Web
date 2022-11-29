import { Router } from "express";
import { createRefrigeratorController } from "../modules/products/useCases/create/createRefrigerator";

const refrigeratorsRoutes = Router();

refrigeratorsRoutes.post("/", (req, res, next) => {
  return createRefrigeratorController.handle(req, res, next);
});

export { refrigeratorsRoutes };
