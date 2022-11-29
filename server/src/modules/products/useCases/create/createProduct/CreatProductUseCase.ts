import { IRequest as IRequestDepartment } from "../../create/createDepartment/CreateDepartmentUseCase";

interface IRequest {
  photo?: string;
  name: string;
  department?: IRequestDepartment;
  description: string;
  stock: number;
  unitPrice: number;
}

export { IRequest };
