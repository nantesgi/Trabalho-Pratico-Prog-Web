import { Product } from "../entities/Product";
import { ICreateOrUpdateDepartmentDTO } from "./IDepartmentsRepository";

interface ICreateOrUpdateProductDTO {
  photo?: string;
  name: string;
  department?: ICreateOrUpdateDepartmentDTO;
  description: string;
  stock: number;
  unitPrice: number;
}

interface IProductsRepository {
  filterProducts(data?: string, query?: Object): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  delete(id: string): Promise<void>;
}

export { ICreateOrUpdateProductDTO, IProductsRepository };
