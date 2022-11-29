import { Department } from "./Department";

export class Product {
  id: string;
  photo?: string;
  name: string;
  department?: Department;
  description: string;
  stock: number;
  unitPrice: number;
}
