import { Book } from "../../../entities/Book";
import { IBooksRepository } from "../../../repositories/IBooksRepository";
import { IRequest as IRequestProduct } from "../createProduct/CreatProductUseCase";

interface IRequest {
  product: IRequestProduct;
  author: string;
  genre: string;
  language: string;
}

class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(data: IRequest): Promise<Book> {
    return await this.booksRepository.create(data);
  }
}

export { CreateBookUseCase };
