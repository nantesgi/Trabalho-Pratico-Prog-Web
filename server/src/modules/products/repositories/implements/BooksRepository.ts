import { Prisma } from "@prisma/client";
import { GenericsRepository } from "./GenericsRepository";
import { Book } from "../../entities/Book";
import { ProductsRepository } from "./ProductsRepository";
import { IBooksRepository, ICreateOrUpdateBookDTO } from "../IBooksRepository";

class BooksRepository implements IBooksRepository {
  private repository: GenericsRepository<Book>;
  private productsRepository: ProductsRepository;

  constructor() {
    this.repository = new GenericsRepository();
    this.repository.setModel(this.repository.prisma.book);
    this.productsRepository = new ProductsRepository();
  }

  async create(data: ICreateOrUpdateBookDTO): Promise<Book> {
    const { product, author, genre, language } = data;

    const createBook = await this.repository.create<Prisma.BookCreateArgs>({
      data: {
        product: this.productsRepository.createOrUpdate(product),
        author,
        genre,
        language,
      },
      include: this.productsRepository.includeForChildren(),
    });
    return createBook;
  }

  update(id: string, data: ICreateOrUpdateBookDTO): Promise<Book> {
    const { product, author, genre, language } = data;

    const updateBook = this.repository.update<
      Prisma.BookUpdateInput,
      Prisma.BookInclude
    >(
      id,
      {
        product: this.productsRepository.createOrUpdate(product),
        author,
        genre,
        language,
      },
      { ...this.productsRepository.includeForChildren() }
    );
    return updateBook;
  }
}

export { BooksRepository };
