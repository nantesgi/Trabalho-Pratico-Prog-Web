import { Book } from "../entities/Book";
import { ICreateOrUpdateProductDTO } from "./IProductsRepository";

interface ICreateOrUpdateBookDTO {
  product: ICreateOrUpdateProductDTO;
  author: string;
  genre: string;
  language: string;
}

interface IBooksRepository {
  create(data: ICreateOrUpdateBookDTO): Promise<Book>;
  update(id: string, data: ICreateOrUpdateBookDTO): Promise<Book>;
}

export { ICreateOrUpdateBookDTO, IBooksRepository };
