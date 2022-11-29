import { MicroWave } from "../entities/MicroWave";
import { ICreateOrUpdateProductDTO } from "./IProductsRepository";

interface ICreateOrUpdateMicroWaveDTO {
  product: ICreateOrUpdateProductDTO;
  color: string;
  brand: string;
  voltage: number;
  capacity: string;
}

interface IMicroWavesRepository {
  create(data: ICreateOrUpdateMicroWaveDTO): Promise<MicroWave>;
  update(id: string, data: ICreateOrUpdateMicroWaveDTO): Promise<MicroWave>;
}

export { ICreateOrUpdateMicroWaveDTO, IMicroWavesRepository };
