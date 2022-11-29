import { Game } from "../entities/Game";
import { ICreateOrUpdateProductDTO } from "./IProductsRepository";

interface ICreateOrUpdateGameDTO {
  product: ICreateOrUpdateProductDTO;
  brand: string;
  format: string;
}

interface IGamesRepository {
  create(data: ICreateOrUpdateGameDTO): Promise<Game>;
  update(id: string, data: ICreateOrUpdateGameDTO): Promise<Game>;
}

export { ICreateOrUpdateGameDTO, IGamesRepository };
