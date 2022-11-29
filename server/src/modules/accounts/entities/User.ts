import { Payment } from "./Payment";

export class User {
  id: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  payment: Payment;
}
