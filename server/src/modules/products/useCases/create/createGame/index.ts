import { GamesRepository } from "../../../repositories/implements/GamesRepository";
import { CreateGameUseCase } from "./CreateGameUseCase";
import { CreateGameController } from "./CreateGameController";

const gamesRepository = new GamesRepository();

const createGameUseCase = new CreateGameUseCase(gamesRepository);

const createGameController = new CreateGameController(createGameUseCase);

export { createGameController };
