import { Prisma } from "@prisma/client";
import { GenericsRepository } from "./GenericsRepository";
import { Game } from "../../entities/Game";
import { ProductsRepository } from "./ProductsRepository";
import { ICreateOrUpdateGameDTO, IGamesRepository } from "../IGamesRepository";

class GamesRepository implements IGamesRepository {
  private repository: GenericsRepository<Game>;
  private productsRepository: ProductsRepository;

  constructor() {
    this.repository = new GenericsRepository();
    this.repository.setModel(this.repository.prisma.game);
    this.productsRepository = new ProductsRepository();
  }

  async create(
    data: ICreateOrUpdateGameDTO,
    file?: Express.Multer.File
  ): Promise<Game> {
    const { product, brand, format } = data;

    const createGame = await this.repository.create<Prisma.GameCreateArgs>({
      data: {
        product: this.productsRepository.createOrUpdate(product),
        brand,
        format,
      },
      include: this.productsRepository.includeForChildren(),
    });
    return createGame;
  }

  update(
    id: string,
    data: ICreateOrUpdateGameDTO,
    file?: Express.Multer.File
  ): Promise<Game> {
    const { product, brand, format } = data;

    const updateGame = this.repository.update<
      Prisma.GameUpdateInput,
      Prisma.GameInclude
    >(
      id,
      {
        product: this.productsRepository.createOrUpdate(product),
        brand,
        format,
      },
      { ...this.productsRepository.includeForChildren() }
    );
    return updateGame;
  }
}

export { GamesRepository };
