import { Laptop } from "../../../entities/Laptop";
import { ILaptopsRepository } from "../../../repositories/ILaptopsRepository";
import { IRequest as IRequestProduct } from "../createProduct/CreatProductUseCase";

interface IRequest {
  product: IRequestProduct;
  brand: string;
  processor: string;
  operationalSystem: string;
  storageSystem: string;
  storageCapacity: string;
}

class CreateLaptopUseCase {
  constructor(private laptopsRepository: ILaptopsRepository) {}

  async execute(data: IRequest): Promise<Laptop> {
    return await this.laptopsRepository.create(data);
  }
}

export { CreateLaptopUseCase };
