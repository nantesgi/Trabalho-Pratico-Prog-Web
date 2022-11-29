import { Product } from "../../../entities/Product";
import { IProductsRepository } from "../../../repositories/IProductsRepository";

class ListProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(data?: string, query?: Object): Promise<Product[]> {
    let products = await this.productsRepository.filterProducts(data, query);
    products.forEach((product) => {
      if (!product.photo) product.photo = "generic-image.png";
    });

    return products;
  }
}

export { ListProductUseCase };
