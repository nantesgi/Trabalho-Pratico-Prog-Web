import { CheckoutProductUseCase } from "./CheckoutProductUseCase";
import { CheckoutProductController } from "./CheckoutProductController";
import { GenericsRepository } from "../../repositories/implements/GenericsRepository";
import { Product } from "../../entities/Product";

const genericRepository = new GenericsRepository<Product>();

const checkoutProductUseCase = new CheckoutProductUseCase(genericRepository);

const checkoutProductController = new CheckoutProductController(
  checkoutProductUseCase
);

export { checkoutProductController };
