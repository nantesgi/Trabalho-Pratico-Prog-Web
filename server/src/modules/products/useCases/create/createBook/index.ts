import { BooksRepository } from "../../../repositories/implements/BooksRepository";
import { CreateBookUseCase } from "./CreateBookUseCase";
import { CreateBookController } from "./CreateBookController";

const booksRepository = new BooksRepository();

const createBookUseCase = new CreateBookUseCase(booksRepository);

const createBookController = new CreateBookController(createBookUseCase);

export { createBookController };
