import { WashingMachine } from "../../../entities/WashingMachine";
import { IWashingMachinesRepository } from "../../../repositories/IWashingMachinesRepository";
import { IRequest as IRequestProduct } from "../createProduct/CreatProductUseCase";

interface IRequest {
  product: IRequestProduct;
  color: string;
  brand: string;
  voltage: number;
  capacity: string;
}

class CreateWashingMachineUseCase {
  constructor(private washingMachinesRepository: IWashingMachinesRepository) {}

  async execute(data: IRequest): Promise<WashingMachine> {
    return await this.washingMachinesRepository.create(data);
  }
}

export { CreateWashingMachineUseCase };
