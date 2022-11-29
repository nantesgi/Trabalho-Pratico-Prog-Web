import { Router } from "express";
import { createBookController } from "../modules/products/useCases/create/createBook";

const booksRoutes = Router();

booksRoutes.post("/", (req, res, next) => {
  return createBookController.handle(req, res, next);
});

export { booksRoutes };
