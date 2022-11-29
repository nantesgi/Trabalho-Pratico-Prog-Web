import { Refrigerator } from "../entities/Refrigerator";
import { ICreateOrUpdateProductDTO } from "./IProductsRepository";

interface ICreateOrUpdateRefrigeratorDTO {
  product: ICreateOrUpdateProductDTO;
  color: string;
  doorType: string;
  snowBreakType: string;
  brand: string;
  voltage: number;
  capacity: string;
}

interface IRefrigeratorsRepository {
  create(data: ICreateOrUpdateRefrigeratorDTO): Promise<Refrigerator>;
  update(
    id: string,
    data: ICreateOrUpdateRefrigeratorDTO
  ): Promise<Refrigerator>;
}

export { ICreateOrUpdateRefrigeratorDTO, IRefrigeratorsRepository };
