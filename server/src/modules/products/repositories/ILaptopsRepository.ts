import { Laptop } from "../entities/Laptop";
import { ICreateOrUpdateProductDTO } from "./IProductsRepository";

interface ICreateOrUpdateLaptopDTO {
  product: ICreateOrUpdateProductDTO;
  brand: string;
  processor: string;
  operationalSystem: string;
  storageSystem: string;
  storageCapacity: string;
}

interface ILaptopsRepository {
  create(data: ICreateOrUpdateLaptopDTO): Promise<Laptop>;
  update(id: string, data: ICreateOrUpdateLaptopDTO): Promise<Laptop>;
}

export { ICreateOrUpdateLaptopDTO, ILaptopsRepository };
