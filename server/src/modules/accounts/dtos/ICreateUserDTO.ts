import { ICreatePaymentMethodDTO } from "./ICreatePaymentMethodDTO";

interface ICreateUserDTO {
  name: string;
  cpf: string;
  email: string;
  password: string;
  payment: ICreatePaymentMethodDTO;
}

export { ICreateUserDTO };
