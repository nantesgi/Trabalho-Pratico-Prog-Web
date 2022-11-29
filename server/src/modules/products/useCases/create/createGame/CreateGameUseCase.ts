import { Game } from "../../../entities/Game";
import { IGamesRepository } from "../../../repositories/IGamesRepository";
import { IRequest as IRequestProduct } from "../createProduct/CreatProductUseCase";

interface IRequest {
  product: IRequestProduct;
  brand: string;
  format: string;
}

class CreateGameUseCase {
  constructor(private gamesRepository: IGamesRepository) {}

  async execute(data: IRequest): Promise<Game> {
    return await this.gamesRepository.create(data);
  }
}

export { CreateGameUseCase };
