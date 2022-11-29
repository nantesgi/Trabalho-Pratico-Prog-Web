import { ProductsRepository } from "../../../repositories/implements/ProductsRepository";
import { ListProductUseCase } from "./ListProductUseCase";
import { ListProductController } from "./ListProductController";

const productsRepository = new ProductsRepository();

const listProductUseCase = new ListProductUseCase(productsRepository);

const listProductController = new ListProductController(listProductUseCase);

export { listProductController };
