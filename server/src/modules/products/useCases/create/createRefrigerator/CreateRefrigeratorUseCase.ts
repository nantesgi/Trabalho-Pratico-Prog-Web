import { Refrigerator } from "../../../entities/Refrigerator";
import { IRefrigeratorsRepository } from "../../../repositories/IRefrigeratorsRepository";
import { IRequest as IRequestProduct } from "../createProduct/CreatProductUseCase";

interface IRequest {
  product: IRequestProduct;
  color: string;
  doorType: string;
  snowBreakType: string;
  brand: string;
  voltage: number;
  capacity: string;
}

class CreateRefrigeratorUseCase {
  constructor(private refrigeratorsRepository: IRefrigeratorsRepository) {}

  async execute(data: IRequest): Promise<Refrigerator> {
    return await this.refrigeratorsRepository.create(data);
  }
}

export { CreateRefrigeratorUseCase };
