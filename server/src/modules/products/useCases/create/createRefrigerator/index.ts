import { RefrigeratorsRepository } from "../../../repositories/implements/RefrigeratorsRepository";
import { CreateRefrigeratorUseCase } from "./CreateRefrigeratorUseCase";
import { CreateRefrigeratorController } from "./CreateRefrigeratorController";

const refrigeratorsRepository = new RefrigeratorsRepository();

const createRefrigeratorUseCase = new CreateRefrigeratorUseCase(
  refrigeratorsRepository
);

const createRefrigeratorController = new CreateRefrigeratorController(
  createRefrigeratorUseCase
);

export { createRefrigeratorController };
