import { LaptopsRepository } from "../../../repositories/implements/LaptopsRepository";
import { CreateLaptopUseCase } from "./CreateLaptopUseCase";
import { CreateLaptopController } from "./CreateLaptopController";

const laptopsRepository = new LaptopsRepository();

const createLaptopUseCase = new CreateLaptopUseCase(laptopsRepository);

const createLaptopController = new CreateLaptopController(createLaptopUseCase);

export { createLaptopController };
