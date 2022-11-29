import { WashingMachinesRepository } from "../../../repositories/implements/WashingMachinesRepository";
import { CreateWashingMachineUseCase } from "./CreateWashingMachineUseCase";
import { CreateWashingMachineController } from "./CreateWashingMachineController";

const washingMachinesRepository = new WashingMachinesRepository();

const createWashingMachineUseCase = new CreateWashingMachineUseCase(
  washingMachinesRepository
);

const createWashingMachineController = new CreateWashingMachineController(
  createWashingMachineUseCase
);

export { createWashingMachineController };
