import { Router } from "express";
import { createWashingMachineController } from "../modules/products/useCases/create/createWashingMachine";

const washingMachinesRoutes = Router();

washingMachinesRoutes.post("/", (req, res, next) => {
  return createWashingMachineController.handle(req, res, next);
});

export { washingMachinesRoutes };
