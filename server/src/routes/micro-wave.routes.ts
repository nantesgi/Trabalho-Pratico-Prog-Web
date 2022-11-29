import { Router } from "express";
import { createMicroWaveController } from "../modules/products/useCases/create/createMicroWave";

const microWavesRoutes = Router();

microWavesRoutes.post("/", (req, res, next) => {
  return createMicroWaveController.handle(req, res, next);
});

export { microWavesRoutes };
