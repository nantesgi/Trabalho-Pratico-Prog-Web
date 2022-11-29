import { WashingMachine } from "../entities/WashingMachine";
import { ICreateOrUpdateProductDTO } from "./IProductsRepository";

interface ICreateOrUpdateWashingMachineDTO {
  product: ICreateOrUpdateProductDTO;
  color: string;
  brand: string;
  voltage: number;
  capacity: string;
}

interface IWashingMachinesRepository {
  create(data: ICreateOrUpdateWashingMachineDTO): Promise<WashingMachine>;
  update(
    id: string,
    data: ICreateOrUpdateWashingMachineDTO
  ): Promise<WashingMachine>;
}

export { ICreateOrUpdateWashingMachineDTO, IWashingMachinesRepository };
