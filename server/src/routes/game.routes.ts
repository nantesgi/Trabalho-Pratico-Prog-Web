import { Router } from "express";
import { createGameController } from "../modules/products/useCases/create/createGame";

const gamesRoutes = Router();

gamesRoutes.post("/", (req, res, next) => {
  return createGameController.handle(req, res, next);
});

export { gamesRoutes };
