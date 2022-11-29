import { Router } from "express";

import { authenticateUserController } from "../modules/accounts/useCases/authenticateUser";

const authenticateRoutes = Router();

authenticateRoutes.post("/sessions", (req, res, next) => {
  authenticateUserController.handle(req, res, next);
});

export { authenticateRoutes };
