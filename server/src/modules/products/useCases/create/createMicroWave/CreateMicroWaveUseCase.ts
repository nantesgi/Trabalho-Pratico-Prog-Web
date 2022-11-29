import { MicroWave } from "../../../entities/MicroWave";
import { IMicroWavesRepository } from "../../../repositories/IMicroWavesRepository";
import { IRequest as IRequestProduct } from "../createProduct/CreatProductUseCase";

interface IRequest {
  product: IRequestProduct;
  color: string;
  brand: string;
  voltage: number;
  capacity: string;
}

class CreateMicroWaveUseCase {
  constructor(private microWavesRepository: IMicroWavesRepository) {}

  async execute(data: IRequest): Promise<MicroWave> {
    return await this.microWavesRepository.create(data);
  }
}

export { CreateMicroWaveUseCase };
