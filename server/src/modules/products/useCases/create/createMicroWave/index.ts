import { MicroWavesRepository } from "../../../repositories/implements/MicroWavesRepository";
import { CreateMicroWaveUseCase } from "./CreateMicroWaveUseCase";
import { CreateMicroWaveController } from "./CreateMicroWaveController";

const microWavesRepository = new MicroWavesRepository();

const createMicroWaveUseCase = new CreateMicroWaveUseCase(microWavesRepository);

const createMicroWaveController = new CreateMicroWaveController(
  createMicroWaveUseCase
);

export { createMicroWaveController };
