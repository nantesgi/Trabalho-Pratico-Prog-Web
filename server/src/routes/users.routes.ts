import { Router } from "express";

import { createUserController } from "../modules/accounts/useCases/createUser";

const usersRoutes = Router();

usersRoutes.post("/", (req, res, next) => {
  createUserController.handle(req, res, next);
});

export { usersRoutes };
